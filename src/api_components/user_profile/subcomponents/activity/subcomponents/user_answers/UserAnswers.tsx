import React, {useState, useEffect} from "react";
import "./UserAnswers.css"
import {creationDate} from "../../../../../../services/date_format";
import Pagination from "../../../../../../components/pagination/Pagination"
import {useActions} from "../../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import {numberFormat} from "../../../../../../services/number_format";


const UserAnswers = () => {
    const {user_id} = useTypedSelector(state => state.api_user_profile);
    const {setTotalPages, setPageInLine} = useActions()
    const {page} = useTypedSelector(state => state.pages)

    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState<any[]>([]);
    const [sort, setSorting] = useState<string>('activity');
    const [totalItems, setTotalItems] = useState<number>(0)
    const stackExchangeApiUrl = "https://api.stackexchange.com";


    useEffect( () => {
        if (!user_id || !page) return;
        let endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/answers?page=${page}&order=desc&sort=${sort}&site=stackoverflow&filter=!3uW-Cfyr2M5A*vzE6`;
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setItems(result.items);
                        setTotalItems(result.total)
                        let totalPageNumber = Math.round((Number(result.total)/Number(result.page_size)- 1));
                        if (totalPageNumber < 25) { setTotalPages(totalPageNumber) }
                        if (totalPageNumber < 7) { setPageInLine(totalPageNumber) }
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                })
    }, [user_id, page]);


    const sorting = (event: React.MouseEvent<HTMLElement>) => {
        setSorting((event.target as Element).id);
    };

    const isAccepted = (el:boolean) => {
        if (el) {
            return (
                <div className='accept'>Accepted</div>
            )
        }
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }
    if (items.length === 0) {
        return (
            <div className='answers_empty'>NO ANSWERS</div>
        )
    }

    return (
        <div>
            <div className='head_box'>
                <div className='total'>{numberFormat(totalItems)} Answers</div>
                <div className='filters'>
                    <div id='activity' onClick={sorting} className='button text_position'>ACTIVITY</div>
                    <div id='creation' onClick={sorting} className='button text_position'>CREATION</div>
                    <div id='votes' onClick={sorting} className='button text_position'>VOTES</div>
                </div>
            </div>
            <div>{items.map((element, index) =>
                <div key={index + "user_answer"} className='user_answers_block'>
                    <div className='block-1'>
                        <div>{element.score} <span>votes</span></div>
                        <div>{isAccepted(element.is_accepted)}</div>
                    </div>
                    <div>{element.title}</div>
                    <div className='low-block'>
                        <div className='block-3'>{element.tags.map((el:string,index:number) =>
                            <div key={index + "user_tags"}>
                                <div className='answers_tags_position answers_tag'>{el}</div>
                            </div>
                        )}
                        </div>
                        <div className='user_answer_date'>{creationDate(element.creation_date)}</div>
                    </div>
                </div>
            )}</div>
            <Pagination/>
        </div>
    )
}

export default UserAnswers;