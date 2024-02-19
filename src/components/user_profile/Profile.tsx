import React, { useState } from 'react';
import {Routes, Route, NavigateFunction, useNavigate} from "react-router-dom";
import UserProfile from "../../api_components/user_profile/UserProfile";
import "./Profile.css";
import AboutUser from "../../api_components/user_profile/subcomponents/about/AboutUser";
import UserActivity from "../../api_components/user_profile/subcomponents/activity/UserActivity";


const Profile = () => {
    const [activeTab, setActiveTab] = useState('about');
    const navigate:NavigateFunction = useNavigate();

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className='profile'>
            <UserProfile />
            <div className='profile_categories'>
                <a href="/profile" className={activeTab === 'about' ? 'profile_sections_active' : 'profile_sections_not_active'} onClick={() => {handleTabClick('about'); navigate('/about')}}>
                    <div>About</div>
                </a>
                <a href="/profile/activity" className={activeTab === 'activity' ? 'profile_sections_active' : 'profile_sections_not_active'} onClick={() => {handleTabClick('activity'); navigate('/activity')}}>
                    <div>Activity</div>
                </a>
            </div>
            <Routes>
                <Route path="/about" element={<AboutUser />}></Route>
                <Route path="/activity/*" element={<UserActivity />}></Route>
            </Routes>
        </div>
    )
}

export default Profile;