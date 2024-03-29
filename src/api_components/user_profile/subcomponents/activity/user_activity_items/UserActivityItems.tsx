import React, {useState, useEffect} from "react";
import Pagination from "../../../../../components/pagination/Pagination";
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {numberFormat} from "../../../../../services/number_format";
import {userActivityType} from "../../../../../services/user_activity_type";
import "../../../../../App.css"
import {setUpdateStatus} from "../../../../../store/action-creators/api/user_profile/user_profile_action";

interface settings {
    type: string;
    filter: string;
    name: string;
    sort_parameters: string[];
    sort_state: string;
    order: string
}

const UserActivityItems:React.FC<settings> = ({type,filter, name, sort_parameters, sort_state, order}) => {
    const {user_id, update} = useTypedSelector(state => state.api_user_profile);
    const {setTotalPages, setUpdateStatus} = useActions()
    const {page} = useTypedSelector(state => state.pages)
    const ComponentToRender = userActivityType(type);

    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState<any[]>([]);
    const [sort, setSorting] = useState<string>(sort_state !== "" ? `&sort=${sort_state}` : '');
    const [totalItems, setTotalItems] = useState<number>(0)
    const stackExchangeApiUrl = "https://api.stackexchange.com";


    useEffect( () => {
        if (!user_id || !page || !sort_state) return;
        if (update) {
            setSorting(sort_state !== "" ? `&sort=${sort_state}` : '')
        }
        let order_parameter = order !== "" ? `&order=${order}` : '';
        let endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/${type}?page=${page}${order_parameter}${sort}&site=stackoverflow&${filter}`;
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
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                })
    }, [user_id, page, type,filter, filter, sort, sort_state]);

    const structure = {
        items: items
    }

    const sorting = (parameter: string) => {
        let newParameter = `&sort=${parameter}`;
        setUpdateStatus(false)
        setSorting(newParameter);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div>
            <div className={type === "comments"? 'head_box_comments' : 'head_box'}>
                <div className='total'>{numberFormat(totalItems)} {name}</div>
                <div className={sort_parameters.length > 0 ? "filters" : "filters_none"}>{sort_parameters.map(parameter =>
                    <div onClick={() => sorting(parameter)} className={sort && parameter === sort.replace(/&sort=/, '') ?'button text_position active' : 'button text_position not_active'}>{parameter.toUpperCase()}</div>
                )}
                </div>
            </div>
            <div>{ComponentToRender && <ComponentToRender {...structure}/>}</div>
            <Pagination/>
        </div>
    )
}

export default UserActivityItems;