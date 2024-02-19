import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import "./UserTopComments.css"
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import {creationDate} from "../../../../../../services/date_format";


const UserTopComments = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [topItems, setItems] = useState<any[]>([]);
    const { user_id } = useTypedSelector(state => state.api_user_profile);
    const {comments_order} = useTypedSelector(state => state.user_about)

    const stackExchangeApiUrl = "https://api.stackexchange.com";

    useEffect( () => {
        let comments =`${stackExchangeApiUrl}/2.3/users/${user_id}/comments?order=${comments_order}&sort=creation&site=stackoverflow&filter=!nOedRLmSmS`;
        fetch(comments)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setItems(result.items.slice(0, 5));
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [user_id, comments_order]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }
    return (
        <div className='top_user_comments_block'>{topItems.map((element, index) =>
            <div key={index} className='top_user_comments_elements_top rows_comments'>
                <div className='top_user_comments_elements_score user_comments_size_text'>
                    <div className='txt'>{element.score}</div>
                </div>
                <div className='user_comments_size_text'>{parse(element.body)}</div>
                <div className='profile_elements_date user_comments_size_text'>{creationDate(element.creation_date)}</div>
            </div>
        )}</div>
    )
}
export default UserTopComments