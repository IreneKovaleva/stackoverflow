import React from "react";
import './Activity.css';
import {Route, Routes} from "react-router-dom";
import UserAnswers from "./subcomponents/user_answers/UserAnswers";

const UserActivity = () => {

    // const question_id = (val) => {
    //     props.q_id(val);
    // }
    // const post_id = (el) => {
    //     props.post(el)
    // }

    return (
        <div className='activity_page'>
            <div className='activity_page_elements'>
                <ul className='list_of_elements'>
                    <a href="/profile/activity/" className='element_list'>
                        <li>Answers</li>
                    </a>
                    <a href="/profile/activity/questions" className='element_list'>
                        <li>Questions</li>
                    </a>
                    <a href="/profile/activity/comments" className='element_list'>
                        <li>Comments</li>
                    </a>
                    <a href="/profile/activity/privileges" className='element_list'>
                        <li>Privileges</li>
                    </a>
                    <a href="/profile/activity/badges" className='element_list'>
                        <li>Badges</li>
                    </a>
                    <a href="/profile/activity/tags" className='element_list'>
                        <li>Tags</li>
                    </a>
                    <a href="/profile/activity/posts" className='element_list'>
                        <li>Posts</li>
                    </a>
                    <a href="/profile/activity/reputation" className='element_list'>
                        <li>Reputation</li>
                    </a>
                </ul>
            </div>
            <div className='sub_elements'>
                <Routes>
                    <Route path="/" element={<UserAnswers />}></Route>
                    {/*<Route path="/questions" element={<Questions id={props.id}/>}></Route>*/}
                    {/*<Route path="/comments" element={<Comment id={props.id}/>}></Route>*/}
                    {/*<Route path="/posts" element={<Posts id={props.id} q_id={question_id} post={post_id}/>}></Route>*/}
                    {/*<Route path="/privileges" element={<Privileges id={props.id}/>}></Route>*/}
                    {/*<Route path="/badges" element={<Badges id={props.id}/>}></Route>*/}
                    {/*<Route path="/tags" element={<User_tags id={props.id}/>}></Route>*/}
                    {/*<Route path="/reputation" element={<Reputation id={props.id}/>}></Route>*/}
                </Routes>
            </div>
        </div>
    )
}
export default UserActivity;