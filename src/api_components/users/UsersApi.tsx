import React, { useEffect } from 'react';
import "./UsersApi.css";
import "../../components/menu_components/MenuComponents.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAward, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../store/hooks/useActions";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {numberFormat} from "../../services/numberFormat";
import {NavigateFunction, useNavigate} from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import parse from "html-react-parser";

const UsersApi = () => {
    const navigate:NavigateFunction = useNavigate();
    const { fetchUsersApiEndpoint, setUserId, setTotalPages } = useActions()
    const {users, loading, error, order, sort, total, page_size} = useTypedSelector(state => state.api_users)
    const {page, total_pages} = useTypedSelector(state => state.pages)


    useEffect(() => {
        if (page && sort && order) {
            fetchUsersApiEndpoint( page, order, sort )
        }
        if (users && users.length > 0) {
            const totalPageNumber = Math.ceil(Number(total) / Number(page_size));
            if (totalPageNumber < 25) {
                setTotalPages(totalPageNumber);
            }
        }
    }, [order, sort, page, total, page_size, total_pages])

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
            <div>{users.map((element,index) =>
                <div key={index} className='users_description'>
                    <div className='portfolio'>
                        <div className='portfolio_default_img' onClick={() => {transfer(element.user_id); navigate(`/profile/${element.user_id}`);}}  >
                            <img alt="Profile image" className='portfolio_image' src={element.profile_image}></img>
                        </div>
                        <div className="portfolio_likes">
                            <FontAwesomeIcon icon={faThumbsUp} className='portfolio_reputation_icon'></FontAwesomeIcon>
                            <span className='portfolio_reputation'> {numberFormat(element.reputation)}</span>
                        </div>
                    </div>
                    <div className='user_content'>
                        <div className='user_content_name' onClick={() => {transfer(element.user_id); navigate(`/profile/${element.user_id}`);}} >{element.display_name}</div>
                        <div className="user_content_about">
                            {element.about_me ? (
                                element.about_me.length > 300
                                    ? parse(element.about_me.slice(0, 300) + "...")
                                    : parse(element.about_me)
                            ) : (
                                "No information about the user"
                            )}
                        </div>
                        <div className='user_badges'>
                            <div className="user_badges_element">
                                <FontAwesomeIcon icon={faAward} className='user_badges_element_medal bronze'/>
                                <div className="user_badges_count">{element.badge_counts.bronze}</div>
                            </div>
                            <div className="user_badges_element">
                                <FontAwesomeIcon icon={faAward} className='user_badges_element_medal silver'/>
                                <div className="user_badges_count">{element.badge_counts.silver}</div>
                            </div>
                            <div className="user_badges_element">
                                <FontAwesomeIcon icon={faAward} className='user_badges_element_medal gold'/>
                                <div className="user_badges_count">{element.badge_counts.gold}</div>
                            </div>
                        </div>
                    </div>
                    <div className={element.location === undefined ? 'user_location not_specified' : 'user_location specified'}>
                        <div>{element.location === undefined ? "location is not specified" : parse("" + element.location)}</div>
                    </div>
                </div>
            )}
            </div>
            <div>{total && total > 1 && <Pagination />}</div>
        </div>
    );
}

export default UsersApi

