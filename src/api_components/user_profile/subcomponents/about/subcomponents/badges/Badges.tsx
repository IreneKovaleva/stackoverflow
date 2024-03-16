import React, { useState, useEffect } from 'react';
import "./Badges.css"
import "../../../../UserProfile.css"
import {faAward} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import {BudgedObj} from "../../../../../../store/types/api/user_profile/subcomponents/about/subcomponents/budges/budges"


const Badges = () => {
    const { user_id } = useTypedSelector(state => state.api_user_profile);

    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [badgesType, setTypes] = useState<{gold: number; silver: number; bronze: number;}>({gold: 0, silver: 0, bronze: 0});
    const [userBadges, setUserBadges] = useState<BudgedObj>({bronze: [], silver: [], gold: []});
    const stackExchangeApiUrl = `https://api.stackexchange.com`;


    useEffect( () => {
        let endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/badges?order=desc&sort=awarded&site=stackoverflow&filter=!)qCoq7Jla4CyV3(bezUB`;
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setTypes(result.items[1].user.badge_counts);

                        let badges: BudgedObj = { bronze: [], silver: [], gold: [] };

                        console.log(result.items)

                        result.items.forEach((element: {rank: string; name: string;}) => {
                            if (element.rank === 'bronze' && badges.bronze.length < 4) {
                                badges.bronze.push(element.name)
                            }
                            if (element.rank === 'silver' && badges.silver.length < 4) {
                                badges.silver.push(element.name)
                            }
                            if (element.rank === 'gold' && badges.gold.length < 4) {
                                badges.gold.push(element.name)
                            }
                        })
                        setUserBadges(badges)

                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [user_id]);


    const badgesBlock = () => {
        return (Object.keys(userBadges) as (keyof typeof userBadges)[]).flatMap(key => {
            return userBadges[key].map((element, index) => (
                <div key={index}>
                    <div className="badges_block_awards">
                        <FontAwesomeIcon icon={faAward} className={`${key}_award`} />
                        <div className='counts_award'>{badgesType[key]}</div>
                    </div>
                    <div className='badges_name'>
                        <div className={`circle color_${key}`}></div>
                        <div>{element}</div>
                    </div>
                </div>
            ));
        });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!isLoaded) {
        return <div>loading...</div>;
    }

    return (
        <div className="badges">
            <div className="badges_block ">{badgesBlock()}</div>
        </div>
    )}

export default Badges