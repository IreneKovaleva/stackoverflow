import React, { useEffect } from 'react';
// import "../../../Profile.css";
import { faCakeCandles, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import {date_months} from '../../services/date_months'


const UserProfile = () => {
    const {user_items, user_id, loading, error} = useTypedSelector(state => state.api_user_profile);
    const { fetchUserProfileApiEndpoint } = useActions()


    useEffect( () => {
        fetchUserProfileApiEndpoint(user_id)
    }, [user_id]);


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
                                <div className='profile_user_date_margin'>Member for{date_months(element.creation_date)}</div>
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