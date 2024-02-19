import React, { useState, useEffect } from 'react';
import "./UserTopTags.css"
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import {numberFormat} from "../../../../../../services/number_format"

const TopTags = () => {
    const { user_id } = useTypedSelector(state => state.api_user_profile);

    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [topItems, setItems] = useState<any[]>([]);
    const [totalItems, setTotal] = useState<number>(0);
    const stackExchangeApiUrl = `https://api.stackexchange.com`;
    let endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/top-tags?site=stackoverflow&filter=!nOedRLhSc)`;
    // let endpoint = `${stackExchangeApiUrl}/2.3/users/22656/top-tags?site=stackoverflow&filter=!nOedRLhSc)`;


    useEffect( () => {
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        let tags = result.items.slice(0,5)
                        setItems(tags)
                        setTotal(result.total)
                        // console.log("TOPTAGS",tags)
                        // console.log("result.items", result)
                    }

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [user_id]);

    // const percentage = (el:number) => {
    //     let percent = (Math.round(el*100/totalItems)) + '%'
    //     console.log("percent", percent)
    //     return percent
    //
    // }


    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div className='user_top_tags_block'>{topItems.map((element, index) =>
            <div key={index} className='user_top_tags_elements'>
                <div className='user_top_tags'>
                    <div className='user_top_tags_name'>{element.tag_name}</div>
                </div>
                <div className='user_top_tags_score'>
                    <div className='user_top_tag'><span className='text_of_tag'>{numberFormat(element.answer_score)}</span> score</div>
                    <div className='user_top_tag'><span className='text_of_tag'>{numberFormat(element.answer_count)}</span> posts</div>
                    {/*<div className='profile_top_tag'><span className='text_tag'>{percentage(element.answer_count)}</span> posts</div>*/}
                </div>
            </div>
        )}</div>
    )

}
export default TopTags