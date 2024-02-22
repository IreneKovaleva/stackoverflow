import React, {useState} from "react";
import './Activity.css';
import {Route, Routes} from "react-router-dom";
import UserActivityItems from "./user_activity_items/UserActivityItems";


const UserActivity = () => {
    const [settings, setSettings] = useState<{type: string; filter: string, name: string, sort_parameters: string[]}>({type: 'answers', filter: 'filter=!3uW-Cfyr2M5A*vzE6', name: 'Answers', sort_parameters: []});

    const activities:any[] = [
        {name: 'Answers', type: 'answers', path: '/profile/activity/user_activities/', filter: 'filter=!3uW-Cfyr2M5A*vzE6', sort_parameters: ['activity', 'creation', 'votes']},
        {name: 'Questions', type: 'questions', path: '/profile/activity/user_activities/questions', filter: 'filter=!nNPvSNVZJS', sort_parameters: ['activity', 'creation', 'votes']},
        {name: 'Comments', type: 'comments', path: '/profile/activity/user_activities/comments', filter: 'filter=!6WPIompiwYr4d', sort_parameters: ['creation', 'votes']},
        {name: 'Privileges', type: 'privileges', path: '/profile/activity/user_activities/privileges', filter: 'filter=!nOedRLhSc)', sort_parameters: ['']},
        {name: 'Badges', type: 'badges', path: '/profile/activity/user_activities/badges', filter: 'filter=!3ykawH(Z8iKDPwSL7', sort_parameters: ['rank', 'name', 'type', 'awarded']},
        {name: 'Tags', type: 'tags', path: '/profile/activity/user_activities/tags', filter: 'filter=!nOedRLhSc)', sort_parameters: ['']},
        {name: 'Posts', type: 'posts', path: '/profile/activity/user_activities/posts', filter: 'filter=!3x.9_KPY3LYFSEAQG', sort_parameters: ['activity', 'creation', 'votes']},
        {name: 'Reputation', type: 'reputation', path: '/profile/activity/user_activities/reputation', filter: 'filter=!nOedRLhSVU', sort_parameters: ['']},
    ]

    const activityElement = (type:string, filter:string, name:string, sort_parameters: string[]) => {
        setSettings({
            type: type,
            filter: filter,
            name: name,
            sort_parameters: sort_parameters
        })
    }

    return (
        <div className='activity_page'>
            <div className='activity_page_elements'>
                <ul className='list_of_elements'>{activities.map((activity, index) => (
                    <a key={index} href={activity.path} className='element_list' onClick={() => activityElement(activity.type, activity.filter, activity.name, activity.sort_parameters)}>
                        <li>{activity.name}</li>
                    </a>
                ))}</ul>
            </div>
            <div className='sub_elements'>
                <Routes>
                    <Route path="/user_activities/*" element={<UserActivityItems  {...settings}/>}></Route>
                </Routes>
            </div>
        </div>
    )
}
export default UserActivity;