import React, { useState, useEffect } from 'react';
import "./AboutUser.css"
import parse from 'html-react-parser';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import Activities from "./subcomponents/activities/Activities";
import Badges from "./subcomponents/badges/Badges";
import UserTopTags from "./subcomponents/top_tags/UserTopTags";
import UserTopComments from "./subcomponents/top_user_comments/UserTopComments";
import {useActions} from "../../../../store/hooks/useActions";

const AboutUser = () => {
    const { user_id, about_user} = useTypedSelector(state => state.api_user_profile);
    const {content, order, comments_order} = useTypedSelector(state => state.user_about)
    const {setUserAboutContent, setUserAboutFilter, setUserAboutOrder, setUserAboutSorting, setUserAboutCommentsOrder} = useActions();
    const [header, setHeader] = useState('Posts');


    useEffect(() => {

    }, [about_user, order, content, comments_order, user_id])

    const data_type = (event: React.MouseEvent<HTMLElement>) => {
        const filterValue = (event.target as Element).id === 'posts'? '!nOedRLaMkU' : '!6Wfm_gUdxFeTe';
        setUserAboutFilter(filterValue)
        setUserAboutContent((event.target as Element).id)
        setHeader((event.target as Element).id)
    }

    const toggle_order = (order:string) => {
        setUserAboutOrder(order)

    }
    const set_comments_order = (comments_order: string) => {
        setUserAboutCommentsOrder(comments_order)
    }

    const sorting = (event: React.MouseEvent<HTMLElement>) => {
        setUserAboutSorting((event.target as Element).id);
    };

    return (
        <div className='profile_about'>
            <div className='profile_about_left'>
            </div>
            <div className='profile_about_right'>
                <div>
                    <div className='profile_user_head head_width'>About</div>
                    <div className='profile_about_right_text'>{parse(''+ about_user)}</div>
                </div>
                <div className='profile_empty'>
                    <div className='profile_head'>
                        <div className='profile_user_head head_width'>Badges</div>
                        <div className='profile_user_all'>View all badges</div>
                    </div>
                    <Badges/>
                </div>
                <div className='profile_empty'>
                    <div className='profile_head'>
                        <div className='profile_user_head head_width'>Top Tags</div>
                        <div className='profile_user_all'>View all tags</div>
                    </div>
                    <UserTopTags />
                </div>
                <div>
                    <div className="profile_top_elements">
                        <div className='profile_user_head head_width'>Top {header}</div>
                        <div className="profile_top_elements_view">View all <span className='links'>posts</span>, <span className='links'>answers</span>,<span className='links'>questions</span></div>
                        <div className="profile_top_elements_buttons">
                            <div id='content' className='profile_top_elements_elements'>
                                <button id='posts' onClick={data_type} className={`elements_button ${content === 'posts' ? 'active_about_user' : 'inactive_about_user'}`}>Posts</button>
                                <button id='answers' onClick={data_type} className={`elements_button ${content === 'answers' ? 'active_about_user' : 'inactive_about_user'}`}>Answers</button>
                                <button id='questions' onClick={data_type} className={`elements_button ${content === 'questions' ? 'active_about_user' : 'inactive_about_user'}`}>Questions</button>
                            </div>

                            <div id='filter' className='profile_top_elements_filter'>
                                <button onClick={() => toggle_order(order)} className={`elements_button ${content === 'posts' ? 'active_about_user' : 'inactive_about_user'}`}>{(order).toUpperCase()}</button>
                                <button id='activity' onClick={sorting} className={`elements_button ${content === 'activity' ? 'active_about_user' : 'inactive_about_user'}`}>Activity</button>
                                <button id='votes' onClick={sorting} className={`elements_button ${content === 'votes' ? 'active_about_user' : 'inactive_about_user'}`}>Votes</button>
                                <button id='creation' onClick={sorting} className={`elements_button ${content === 'creation' ? 'active_about_user' : 'inactive_about_user'}`}>Creation</button>
                            </div>
                        </div>
                    </div>
                    <Activities />
                </div>
                <div className='profile_empty'>
                    <div className='profile_top_elements'>
                        <div className='profile_user_head head_width'>Comments</div>
                        <div className='profile_top_elements_view'>View all comments</div>
                        <div className="profile_top_elements_buttons filter_margin">
                            <button onClick={() => set_comments_order(comments_order)} className='elements_button'>{(comments_order).toUpperCase()}</button>
                        </div>
                    </div>
                    <UserTopComments  />
                </div>
            </div>

        </div>
    )
}
export default AboutUser;