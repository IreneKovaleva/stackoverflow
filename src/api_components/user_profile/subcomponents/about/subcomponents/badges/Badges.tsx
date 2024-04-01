import React, { useState, useEffect } from 'react';
import "./Badges.css"
import "../../../../../users/UsersApi.css"
import "../../../../UserProfile.css"
import {faAward} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useParams} from "react-router-dom";


const Badges = () => {
    const {id} = useParams();
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [badgesType, setTypes] = useState<{bronze: number; silver: number; gold: number;}>({bronze: 0, silver: 0, gold: 0});
    const stackExchangeApiUrl = `https://api.stackexchange.com`;


    useEffect( () => {
        let endpoint = `${stackExchangeApiUrl}/2.3/users/${id}/badges?order=desc&sort=awarded&site=stackoverflow&filter=!)qCoq7Jla4CyV3(bezUB`;
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setTypes(result.items[1].user.badge_counts);
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
        <div className="badges_block"> {Object.keys(badgesType).map((key: string) =>
            <div key={key} className="badges">
                <div className="badges_block_awards">
                    <FontAwesomeIcon icon={faAward} className={`${key}_award icon_award`} />
                    <div className='counts_award'>{badgesType[key as keyof typeof badgesType]}</div>
                </div>
            </div>)}
        </div>
    )
}

export default Badges