import React, {useState} from "react";
import "./UserActivity.css"
import {Route, Routes, NavLink, useParams} from "react-router-dom";
import UserActivityItems from "./user_activity_items/UserActivityItems";
import {useActions} from "../../../../store/hooks/useActions";


const UserActivity = () => {
    const {id} = useParams()
    const{setUpdateStatus} = useActions();
    const [settings, setSettings] = useState<{type: string; filter: string, name: string, sort_parameters: string[], sort_state: string, order: string}>({type: 'answers', filter: 'filter=!3uW-Cfyr2M5A*vzE6', name: 'Answers', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'activity', order:'desc'});

    const activities:any[] = [
        {name: 'Answers', type: 'answers', path: `/profile/${id}/activity/`, filter: 'filter=!3uW-Cfyr2M5A*vzE6', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'votes', order: 'desc'},
        {name: 'Questions', type: 'questions', path: `/profile/${id}/activity/questions`, filter: 'filter=!nNPvSNVZJS', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'activity', order: 'desc'},
        {name: 'Comments', type: 'comments', path: `/profile/${id}/activity/comments`, filter: 'filter=!6WPIompAT2Hvd', sort_parameters: ['creation', 'votes'], sort_state: 'votes', order: 'desc'},
        {name: 'Privileges', type: 'privileges', path: `/profile/${id}/activity/privileges`, filter: 'filter=!nOedRLhSc)', sort_parameters: [], sort_state: 'votes', order: ''},
        {name: 'Badges', type: 'badges', path: `/profile/${id}/activity/badges`, filter: 'filter=!3ykawH(Z8iKDPwSL7', sort_parameters: ['rank', 'name', 'type', 'awarded'], sort_state: 'awarded', order: 'desc'},
        {name: 'Tags', type: 'top-tags', path: `/profile/${id}/activity/tags`, filter: 'filter=!nOedRLhSc)', sort_parameters: [], sort_state: 'votes', order: ''},
        {name: 'Posts', type: 'posts', path: `/profile/${id}/activity/posts`, filter: 'filter=!3x.9_KPY3LYFSEAQG', sort_parameters: ['activity', 'creation', 'votes'], sort_state: 'votes', order: 'desc'},
        {name: 'Reputation', type: 'reputation-history', path: `/profile/${id}/activity/reputation`, filter: 'filter=!nOedRLhSVU', sort_parameters: [], sort_state: 'votes', order: ''},
    ]

    const activityElement = (type:string, filter:string, name:string, sort_parameters: string[], sort_state: string, order: string) => {
        setUpdateStatus(true)
        setSettings({
            type: type,
            filter: filter,
            name: name,
            sort_parameters: sort_parameters,
            sort_state: sort_state,
            order: order
        })
    }

    return (
        <div className='activity_page'>
            <div className='activity_page_elements'>
                <div className='list_of_elements'>{activities.map((activity, index) => (
                    <NavLink key={index} to={activity.path} className='nav_element' onClick={() => activityElement(activity.type, activity.filter, activity.name, activity.sort_parameters, activity.sort_state, activity.order)}>
                        <div className='element_list'>{activity.name}</div>
                    </NavLink>
                ))}</div>
            </div>
            <div className='sub_elements'>
                <Routes>
                    <Route path={settings.type !== "answers" ? `/${(settings.name).toLowerCase()}`: "/"} element={<UserActivityItems  {...settings}/>}></Route>
                </Routes>
            </div>

        </div>
    )
}
export default UserActivity;