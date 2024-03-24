import React, {useEffect} from "react";
import {creationDate} from "../../services/date_format";
import "./SearchResults.css"
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useActions} from "../../store/hooks/useActions";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import parse from 'html-react-parser';
import Pagination from "../../components/pagination/Pagination";


const SearchResults = () => {
    const navigate:NavigateFunction = useNavigate();
    const {fetchSearchResultsApiEndpoint, setTotalPages} = useActions()
    const {search_items, render, loading, error, order, sort, accepted, title, tagged, body, views, value, total, page_size} = useTypedSelector(state => state.search_reducer);
    const {page} = useTypedSelector(state => state.pages)
    const {UserQuestionActionCreatorQuestionId} = useActions()

    const redirect = async (questionsId: number) => {
        await UserQuestionActionCreatorQuestionId(questionsId.toString());
        navigate('/user_question')
    }

    useEffect(() => {
        if (render) {
            fetchSearchResultsApiEndpoint(page, order, sort, value, accepted, body, tagged, title, views)
        }
        if (search_items.length > 0) {
            const totalPageNumber = Math.ceil(Number(total) / Number(page_size));
            if (totalPageNumber < 25) {
                setTotalPages(totalPageNumber);
            }
        }
    }, [page, order, sort, value, accepted, body, tagged, title, views, render]);

    if (search_items.length === 0) {
        return (
            <div className='items_empty'>Any result was found</div>
        )
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return(
        <div>
            <div>{search_items.map((element, index) =>
                <div key={element.creation_date + "search"} className="search_result_block">
                        <div className="search_result_date">{creationDate(element.creation_date)}</div>
                        <div className="search_result_flex_block">{element.tags.map((tag: string) =>
                            <div className="search_result_tags_block">
                                <div className="search_result_tags">{" #" + tag}</div>
                            </div>
                        )}</div>
                    <div className="search_result_title" onClick={() => redirect(element.question_id)}>{parse(element.title)}</div>
                </div>
            )}</div>
            <div>{total && total > 1 && <Pagination />}</div>
        </div>
    )
}
export default SearchResults;