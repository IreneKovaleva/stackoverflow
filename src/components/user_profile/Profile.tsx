import React, { useState } from 'react';
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import UserProfile from "../../api_components/user_profile/UserProfile";
import "./Profile.css";
import AboutUser from "../../api_components/user_profile/subcomponents/about/AboutUser";
import UserActivity from "../../api_components/user_profile/subcomponents/activity/UserActivity";

const Profile = () => {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className='profile'>
            <UserProfile />
            <div className='profile_categories'>
                <NavLink
                    to="/profile/"
                    className={activeTab === 'about' ? 'profile_sections_active active' : 'profile_sections_active not_active'}
                    onClick={() => { handleTabClick('about') }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/profile/activity"
                    className={activeTab === 'activity' ? 'profile_sections_active active' : 'profile_sections_active not_active'}
                    onClick={() => { handleTabClick('activity') }}
                >
                    Activity
                </NavLink>
            </div>
            <Routes>
                <Route path="/" element={<AboutUser />} />
                <Route path="/activity/*" element={<UserActivity />} />
            </Routes>
        </div>
    )
}

export default Profile;
