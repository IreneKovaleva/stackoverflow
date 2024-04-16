import React, { useEffect } from 'react';
// import "../../../Profile.css";
import { faCakeCandles, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import {dateMonths} from '../../services/dateMonths'
import {useParams} from "react-router-dom";



const UserProfile = () => {
    const {id} = useParams()
    const {user_items, loading, error, user_id} = useTypedSelector(state => state.api_user_profile);
    const { fetchUserProfileApiEndpoint } = useActions()


    useEffect( () => {
        if (id) {
            fetchUserProfileApiEndpoint(id)
        }else {
            fetchUserProfileApiEndpoint(user_id)
        }

    }, [id, user_id]);


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div>{user_items.map((element, index) =>
                <div key={index} className='profile_user'>
                    <div className='profile_user_details'>
                        <img alt="Profile image" src={element.profile_image} className='profile_user_img'/>
                        <div className='profile_user_name'>
                            <div className='profile_user_name_name'>{element.display_name}</div>
                            <div className='profile_user_date'>
                                <FontAwesomeIcon icon={faCakeCandles}></FontAwesomeIcon>
                                <div className='profile_user_date_margin'>Member for{dateMonths(element.creation_date)}</div>
                            </div>
                        </div>
                        <div className='profile_user_location_block'>
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <div className='profile_user_location'>{element.location}</div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )

}
export default UserProfile