import React, {useState, useEffect} from "react";
import "./UserAnswers.css"
import Pagination from "../../../../../components/pagination/Pagination";
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {numberFormat} from "../../../../../services/number_format";
import {userActivityType} from "../../../../../services/user_activity_type";

interface settings {
    type: string;
    filter: string;
    name: string;
    sort_parameters: string[];
}

const UserActivityItems:React.FC<settings> = ({type,filter, name, sort_parameters}) => {
    const {user_id} = useTypedSelector(state => state.api_user_profile);
    const {setTotalPages, setPageInLine} = useActions()
    const {page} = useTypedSelector(state => state.pages)
    const ComponentToRender = userActivityType(type);

    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState<any[]>([]);
    const [sort, setSorting] = useState<string>('creation');
    const [totalItems, setTotalItems] = useState<number>(0)
    const stackExchangeApiUrl = "https://api.stackexchange.com";


    useEffect( () => {
        if (!user_id || !page) return;
        let endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/${type}}?page=${page}&order=desc&sort=${sort}&site=stackoverflow&${filter}}`;
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

    const structure = {
        items: items
    }

    const sorting = (event: React.MouseEvent<HTMLElement>) => {
        setSorting((event.target as Element).id);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div>
            <div className='head_box'>
                <div className='total'>{numberFormat(totalItems)} {name}</div>
                <div className='filters'>{sort_parameters.map(parameter =>
                    <div id='parameter' onClick={sorting} className='button text_position'>{parameter.toUpperCase()}</div>
                )}
                </div>
            </div>
            <div>{ComponentToRender && <ComponentToRender {...structure}/>}</div>
            <Pagination/>
        </div>
    )
}

export default UserActivityItems;