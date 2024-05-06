import React, { useState, useEffect } from 'react';
import parse from "html-react-parser";
import "./Activities.css"
import {creationDate} from "../../../../../../services/creationDate";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import {useParams} from "react-router-dom";



const Activities:React.FC  = () => {
    const {id} = useParams();
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [topItems, setItems] = useState<any[]>([]);
    const stackExchangeApiUrl = "https://api.stackexchange.com";
    const {content, filter, order, sort} = useTypedSelector(state => state.user_about)


    useEffect( () => {
        let endpoint;
        let newOrder = order.toLowerCase()
        if (content === 'answers'){
            endpoint = `${stackExchangeApiUrl}/2.3/users/${id}/${content}?order=${newOrder}&sort=${sort}&site=stackoverflow&${filter}`;
        }else {
            endpoint = `${stackExchangeApiUrl}/2.3/users/${id}/${content}?order=${newOrder}&sort=${sort}&site=stackoverflow`;
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
    }, [id, content, order, sort, filter]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }
    if (!topItems) {
        return <h2>Please connect to the VPN and reload the page. If you are already using it - change the IP</h2>
    }

    return (
        <div className='activities_block'>{topItems.map((element, index) =>
            <div key={index} className='activity_elements_top rows_elements'>
                <div className='activity_elements_score size_text'>
                    <div className='txt'>{element.score}</div>
                </div>
                <div className='profile_elements_title size_text'>{parse("" + element.title)}</div>
                <div className='profile_elements_date size_text'>{creationDate(element.creation_date)}</div>
            </div>
        )}</div>
    )
}

export default Activities