import React, { useState, useEffect } from 'react';
// import "../../../Profile.css";
import {faAward} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";

const Badges = () => {
    const { user_id } = useTypedSelector(state => state.api_user_profile);

    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [badgesType, setTypes] = useState<{gold: number; silver: number; bronze: number;}>({gold: 0, silver: 0, bronze: 0});
    const [silverBadge, setSilver] = useState<any[]>([]);
    const [bronzeBadge, setBronze] = useState<any[]>([]);
    const [goldBadge, setGold] = useState<any[]>([]);



    useEffect( () => {
        const stackExchangeApiUrl = "https://api.stackexchange.com";
        // let endpoint = `${stackExchangeApiUrl}/2.3/users/${user_id}/badges?order=desc&sort=awarded&site=stackoverflow&filter=!)qCoq7Jla4CyV3(bezUB`;
        let endpoint = `${stackExchangeApiUrl}/2.3/users/22656/badges?order=desc&sort=awarded&site=stackoverflow&filter=!)qCoq7Jla4CyV3(bezUB`;

        let bronze:any[] = [];
        let silver: any[] = [];
        let gold: any[] = [];

        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.items && result.items.length > 0) {
                        setTypes(result.items[1].user.badge_counts);

                        result.items.map((element: {rank: string}) => {
                            if (element.rank === 'silver') {
                                silver.push(element)
                            }
                            if (element.rank === 'gold') {
                                gold.push(element)
                            }
                            if (element.rank === 'bronze') {
                                bronze.push(element)
                            }
                            setBronze(bronze);
                            setSilver(silver);
                            setGold(gold);
                            return null
                        })
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error.message);
                }
            )
    }, [user_id]);

    const goldBlock = () => {
        return goldBadge.map((element: {name: string}, index: number) => {
            if (index <= 2) {
                return (
                    <div key={index}>
                        <div className='badges_name'>
                            <div className='circle color_gold'></div>
                            <div>{element.name}</div>
                        </div>
                    </div>
                )
            }
            return null;
        })
    }

    const silverBlock = () => {
        return silverBadge.map((element: {name: string}, index: number) => {
            if (index <= 2) {
                return (
                    <div key={index}>
                        <div className='badges_name'>
                            <div className='circle color_silver'></div>
                            <div>{element.name}</div>
                        </div>
                    </div>
                )
            }
            return null;
        })
    }

    const bronzeBlock = () => {
        return bronzeBadge.map((element: { name: string }, index: number) => {
            if (index <= 2) {
                return (
                    <div key={index}>
                        <div className='badges_name'>
                            <div className='circle color_bronze'></div>
                            <div>{element.name}</div>
                        </div>
                    </div>
                );
            }
            return null;
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
            <div className="badges_block">
                <div className="badges_block_awards">
                    <FontAwesomeIcon icon={faAward} className='gold_award'></FontAwesomeIcon>
                    <div className='counts_award'>{badgesType.gold}</div>
                </div>
                <div>{goldBlock()}</div>
            </div>
            <div className="badges_block">
                <div className="badges_block_awards">
                    <FontAwesomeIcon icon={faAward} className='silver_award'></FontAwesomeIcon>
                    <div className='counts_award'>{badgesType.silver}</div>
                </div>
                <div>{silverBlock()}</div>
            </div>
            <div className="badges_block">
                <div className="badges_block_awards">
                    <FontAwesomeIcon icon={faAward} className='bronze_award'></FontAwesomeIcon>
                    <div className='counts_award'>{badgesType.bronze}</div>
                </div>
                <div>{bronzeBlock()}</div>
            </div>
        </div>
    )}

export default Badges