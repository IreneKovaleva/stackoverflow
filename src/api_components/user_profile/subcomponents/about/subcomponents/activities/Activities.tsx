import React, { useState, useEffect } from 'react';
import parse from "html-react-parser";
import "./Activities.css"
import {creationDate} from "../../../../../../services/date_format";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";



const Activities:React.FC  = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [topItems, setItems] = useState<any[]>([]);
    const stackExchangeApiUrl = "https://api.stackexchange.com";
    const { user_id } = useTypedSelector(state => state.api_user_profile);
    const {content, filter, order, sort} = useTypedSelector(state => state.user_about)


    useEffect( () => {
        let endpoint
        if (content === 'posts' || 'answers'){
            endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/${content}?order=${order}&sort=${sort}&site=stackoverflow&${filter}`;
        }else {
            endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/${content}?order=${order}&sort=${sort}&site=stackoverflow&`;
        }
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setItems(result.items.slice(0,5))
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [user_id, content, order, sort]);



    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div className='activities_block'>{topItems.map((element, index) =>
            <div key={index} className='activity_elements_top rows_elements'>
                <div className='activity_elements_score size_text'>
                    <div className='txt'>{element.score}</div>
                </div>
                <div className='profile_elements_title size_text'>{parse(element.title)}</div>
                <div className='profile_elements_date size_text'>{creationDate(element.creation_date)}</div>

            </div>
        )}</div>
    )
}

export default Activities