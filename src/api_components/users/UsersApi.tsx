import React, { useEffect } from 'react';
import "./UsersApi.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMedal, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../store/hooks/useActions";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {numberFormat} from "../../services/number_format";
import {NavigateFunction, useNavigate} from "react-router-dom";

const Users_api = () => {
    const navigate:NavigateFunction = useNavigate();
    const { fetchUsersApiEndpoint, setUserId } = useActions()
    const { users, loading, error, page, order, sort} = useTypedSelector(state => state.api_users)


    useEffect(() => {
        fetchUsersApiEndpoint( page, order, sort )
    }, [order, sort, page])

    const user_tags = (element: {"collectives": any[]}) => {

        let allTags: string[] = [];

        if (element.hasOwnProperty('collectives')) {
            element.collectives.forEach(collective => {
                if (collective.collective.hasOwnProperty('tags')) {
                    console.log('collective.collective',collective.collective.tags.slice(0,5))
                    allTags = collective.collective.tags.slice(0, 5)
                }
            });
        }

        if (allTags.length === 0) {
            allTags = ['No favorite tags'];
        }

        return (
            <div>
                {allTags.map(tag => (
                    <a className='user_content_tags'>  {tag}  </a>
                ))}
            </div>
        )
    }

    const transfer = (user_id: number) => {
        setUserId((user_id).toString())
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div className='users_api'>{users.map((element,index) =>
                <div key={index} className='users_description'>
                    <div className='portfolio'>
                        <a onClick={() => transfer(element.user_id)} className='portfolio_default_img'>
                            <img alt="Profile image" className='portfolio_image' src={element.profile_image}></img>
                        </a>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} className='portfolio_reputation_icon'></FontAwesomeIcon>
                            <span className='portfolio_reputation'> {numberFormat(element.reputation)}</span>
                        </div>
                    </div>
                    <div className='user_content'>
                        <a onClick={() => {transfer(element.user_id); navigate('/profile');}}  className='user_content_href'>
                            <span className='user_content_name'>{element.display_name}</span>
                        </a>
                        <div>{user_tags(element)}</div>

                        <div className='user_badges'>
                            <div className="user_badges_element">
                                <FontAwesomeIcon icon={faMedal} className='user_badges_element_medal bronze'/>
                                <div>{element.badge_counts.bronze}</div>
                            </div>
                            <div className="user_badges_element">
                                <FontAwesomeIcon icon={faMedal} className='user_badges_element_medal silver'/>
                                <div>{element.badge_counts.silver}</div>
                            </div>
                            <div className="user_badges_element">
                                <FontAwesomeIcon icon={faMedal} className='user_badges_element_medal gold'/>
                                <div>{element.badge_counts.gold}</div>
                            </div>
                        </div>
                    </div>
                    <div className='user_location'>
                        <span>{element.location}</span>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Users_api
