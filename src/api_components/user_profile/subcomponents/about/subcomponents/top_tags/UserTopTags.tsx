import React, { useState, useEffect } from 'react';
import "./UserTopTags.css"
import {numberFormat} from "../../../../../../services/numberFormat"
import {useRedirectTags} from "../../../../../../custom_hooks/useRedirectTags";
import {useParams} from "react-router-dom";

const TopTags = () => {
    const {id} = useParams();
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [topItems, setItems] = useState<any[]>([]);
    const stackExchangeApiUrl = `https://api.stackexchange.com`;
    const redirect = useRedirectTags()


    useEffect( () => {
        let endpoint = `${stackExchangeApiUrl}/2.3/users/${id}/top-tags?site=stackoverflow&filter=!nOedRLhSc)`;
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        let tags = result.items.slice(0,5)
                        setItems(tags)
                    }

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div className='user_top_tags_block'>{topItems.map((element, index) =>
            <div key={index} className='user_top_tags_elements' onClick={() => redirect(element.tag_name)}>
                <div className='user_top_tags'>
                    <div className='tags'>{" #"+element.tag_name}</div>
                </div>
                <div className='user_top_tags_score'>
                    <div className='user_top_tag'><span className='text_of_tag'>{numberFormat(element.answer_score)}</span> score</div>
                    <div className='user_top_tag'><span className='text_of_tag'>{numberFormat(element.answer_count)}</span> posts</div>
                </div>
            </div>
        )}</div>
    )

}
export default TopTags