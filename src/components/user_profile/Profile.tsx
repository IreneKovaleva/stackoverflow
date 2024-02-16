import React, { useState } from 'react';
import {NavLink, Routes, Route} from "react-router-dom";
import UserProfile from "../../api_components/user_profile/UserProfile";
import "./Profile.css";
import AboutUser from "../../api_components/user_profile/subcomponents/about/AboutUser";


const Profile = () => {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className='profile'>
            <UserProfile />
            <div className='profile_categories'>
                <NavLink to="/profile" className={activeTab === 'about' ? 'profile_sections_active' : 'profile_sections_not_active'} onClick={() => handleTabClick('about')}>
                    <div>About</div>
                </NavLink>
                <NavLink to="/profile/activity" className={activeTab === 'activity' ? 'profile_sections_active' : 'profile_sections_not_active'} onClick={() => handleTabClick('activity')}>
                    <div>Activity</div>
                </NavLink>
            </div>
            <Routes>
                <Route path="/about" element={<AboutUser />}></Route>
                {/*<Route path="/activity/*" element={<Activity />}></Route>*/}
            </Routes>
        </div>
    )
}

export default Profile;