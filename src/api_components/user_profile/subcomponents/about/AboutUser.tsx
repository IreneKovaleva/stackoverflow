import React, { useState, useEffect } from 'react';
import "./AboutUser.css"
import parse from 'html-react-parser';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import Activities from "./subcomponents/activities/Activities";
import Badges from "./subcomponents/badges/Badges";
import UserTopTags from "./subcomponents/top_tags/UserTopTags";
import UserTopComments from "./subcomponents/top_user_comments/UserTopComments";
import {useActions} from "../../../../store/hooks/useActions";
import {useParams} from "react-router-dom";

const AboutUser = () => {
    const {id} = useParams();
    const {about_user} = useTypedSelector(state => state.api_user_profile);
    const {content, order, comments_order} = useTypedSelector(state => state.user_about);
    const {setUserAboutContent, setUserAboutFilter, setUserAboutOrder, setUserAboutSorting, setUserAboutCommentsOrder} = useActions();
    const [header, setHeader] = useState<string>('Answers');
    const [sort, setSort] = useState<string>('activity');


    useEffect(() => {

    }, [about_user, order, content, comments_order, id])

    const data_type = (event: React.MouseEvent<HTMLElement>) => {
        const filterValue = (event.target as Element).id === 'answers'? 'filter=!3uW-Cfyr2M5A*vzE6' : "";
        setUserAboutFilter(filterValue)
        setUserAboutContent(((event.target as Element).id).toLowerCase())
        setHeader((event.target as Element).id)
    }

    const toggle_order = (order:string) => {
        setUserAboutOrder(order)

    }
    const set_comments_order = (comments_order: string) => {
        setUserAboutCommentsOrder(comments_order)
    }

    const sorting = (event: React.MouseEvent<HTMLElement>) => {
        let element = ((event.target as Element).id).toLowerCase()
        setSort(element)
        setUserAboutSorting(element);
    };

    return (
        <div className='profile_about'>
            <div className='profile_about_left'>
                <div>
                    <div className='profile_head'>
                        <div className='profile_user_head badges_head_width'>Badges</div>
                    </div>
                    <Badges/>
                </div>
            </div>
            <div className='profile_about_right'>
                <div>
                    <div className='profile_user_head head_width'>About</div>
                    <div className='profile_about_right_text'>{parse(''+ about_user)}</div>
                </div>
                <div>
                    <div className='profile_head'>
                        <div className='profile_user_head head_width'>Top Tags</div>
                    </div>
                    <UserTopTags />
                </div>
                <div>
                    <div className="profile_top_elements">
                        <div>
                            <div className='profile_user_head head_width'>Top {header}</div>
                        </div>
                        <div className="profile_top_elements_buttons">
                                <button id='answers' onClick={data_type} className={`elements_button ${content === 'answers' ? 'about_user_button active' : 'about_user_button not_active'}`}>Answers</button>
                                <button id='questions' onClick={data_type} className={`elements_button ${content === 'questions' ? 'about_user_button active' : 'about_user_button not_active'}`}>Questions</button>
                                <button onClick={() => toggle_order(order)} className='elements_button about_user_button active'>{order}</button>
                                <button id='activity' onClick={sorting} className={`elements_button ${sort === 'activity' ? 'about_user_button active' : 'about_user_button not_active'}`}>Activity</button>
                                <button id='votes' onClick={sorting} className={`elements_button ${sort === 'votes' ? 'about_user_button active' : 'about_user_button not_active'}`}>Votes</button>
                                <button id='creation' onClick={sorting} className={`elements_button ${sort === 'creation' ? 'about_user_button active' : 'about_user_button not_active'}`}>Creation</button>
                        </div>
                    </div>
                    <Activities />
                </div>
                <div>
                    <div className='profile_top_elements_comments'>
                        <div className='profile_user_head head_width'>Comments</div>
                        <div className="comments_low_block">
                            <button onClick={() => set_comments_order(comments_order)} className='elements_button about_user_button active'>{comments_order}</button>
                        </div>
                    </div>
                    <UserTopComments  />
                </div>
            </div>
        </div>
    )
}
export default AboutUser;