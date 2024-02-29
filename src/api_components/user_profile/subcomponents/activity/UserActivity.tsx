import React, {useState} from "react";
import "./UserActivity.css"
import {Route, Routes, NavLink} from "react-router-dom";
import UserActivityItems from "./user_activity_items/UserActivityItems";


const UserActivity = () => {
    const [settings, setSettings] = useState<{type: string; filter: string, name: string, sort_parameters: string[], sort_state: string}>({type: 'answers', filter: 'filter=!3uW-Cfyr2M5A*vzE6', name: 'Answers', sort_parameters: ['&sort=activity', '&sort=creation', '&sort=votes'], sort_state: 'activity'});

    const activities:any[] = [
        {name: 'Answers', type: 'answers', path: '/profile/activity/', filter: 'filter=!3uW-Cfyr2M5A*vzE6', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'votes'},
        {name: 'Questions', type: 'questions', path: '/profile/activity/questions', filter: 'filter=!nNPvSNVZJS', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'activity'},
        {name: 'Comments', type: 'comments', path: '/profile/activity/comments', filter: 'filter=!6WPIompiwYr4d', sort_parameters: ['creation', 'votes'], sort_state: 'votes'},
        {name: 'Privileges', type: 'privileges', path: '/profile/activity/privileges', filter: 'filter=!nOedRLhSc)', sort_parameters: ['']},
        {name: 'Badges', type: 'badges', path: '/profile/activity/badges', filter: 'filter=!3ykawH(Z8iKDPwSL7', sort_parameters: ['rank', 'name', 'type', 'awarded'], sort_state: 'awarded'},
        {name: 'Tags', type: 'tags', path: '/profile/activity/tags', filter: 'filter=!nOedRLhSc)', sort_parameters: ['']},
        {name: 'Posts', type: 'posts', path: '/profile/activity/posts', filter: 'filter=!3x.9_KPY3LYFSEAQG', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'votes'},
        {name: 'Reputation', type: 'reputation', path: '/profile/activity/reputation', filter: 'filter=!nOedRLhSVU', sort_parameters: ['']},
    ]

    const activityElement = (type:string, filter:string, name:string, sort_parameters: string[], sort_state: string) => {
        setSettings({
            type: type,
            filter: filter,
            name: name,
            sort_parameters: sort_parameters,
            sort_state: sort_state
        })
    }

    return (
        <div className='activity_page'>
            <div className='activity_page_elements'>
                <ul className='list_of_elements'>{activities.map((activity, index) => (
                    <NavLink key={index} to={activity.path} className='element_list' onClick={() => activityElement(activity.type, activity.filter, activity.name, activity.sort_parameters, activity.sort_state)}>
                        <li>{activity.name}</li>
                    </NavLink>
                ))}</ul>
            </div>
            <div className='sub_elements'>
                <Routes>
                    <Route path={settings.type !== "answers" ? `/${settings.type}`: "/"} element={<UserActivityItems  {...settings}/>}></Route>
                </Routes>
            </div>
        </div>
    )
}
export default UserActivity;