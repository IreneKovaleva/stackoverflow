import React, { useState, useEffect } from 'react';
// import './Activity.css';
import parse from 'html-react-parser';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import Activities from "./subcomponents/activities/Activities"
import Badges from "./subcomponents/badges/Badges"

const AboutUser = () => {
    const { user_id,about_user} = useTypedSelector(state => state.api_user_profile);

    const [userText, setText] = useState('');
    const [header, setHeader] = useState('Posts');
    const [sort, setSorting] = useState('activity');
    const [order, setOrder] = useState('desc');
    const [content, setContent] = useState('posts');
    const [filter, setFilter] = useState('filter=!nOedRLaMkU')
    const [id, setId] = useState('asc');
    const [commentsOrder, setCommmentsOrder] = useState('asc')

    const stackExchangeApiUrl = "https://api.stackexchange.com";
    let activities_link = `${stackExchangeApiUrl}/2.3/users/${user_id}/${content}?order=${order}&sort=${sort}&site=stackoverflow&${filter}`;
    let comments =`${stackExchangeApiUrl}/2.3/users/${user_id}/comments?order=${commentsOrder}&sort=creation&site=stackoverflow&filter=!nOedRLmSmS`;


    useEffect(() => {
        setText(''+ about_user)
    }, [about_user])

    const data_type = (event: React.MouseEvent<HTMLElement>) => {
        const filterValue = (event.target as Element).id === 'posts'? '!nOedRLaMkU' : '!6Wfm_gUdxFeTe';
        setFilter(`filter=${filterValue}`)
        setContent((event.target as Element).id)
        setHeader((event.target as Element).id)
    }

    const toggle_order = (event: React.MouseEvent<HTMLElement>) => {
        let order = (event.target as Element).id === 'desc'? 'desc' : 'asc';
        let id = (event.target as Element).id === 'desc'? 'asc' : 'desc';
        setOrder(order)
        setId(id)
    }
    const comments_order = (event: React.MouseEvent<HTMLElement>) => {
        let order = (event.target as Element).id === 'desc'? 'asc' : 'desc';
        setCommmentsOrder(order)
    }

    const sorting = (event: React.MouseEvent<HTMLElement>) => {
        setSorting((event.target as Element).id);
    };

    return (
        <div className='profile_about'>
            <div className='profile_about_left'>
            </div>
            <div className='profile_about_right'>
                <div>
                    <div className='profile_user_head head_width'>About</div>
                    <div className='profile_about_right_text'>{parse(userText)}</div>
                </div>
                <div className='profile_empt'>
                    <div className='profile_head'>
                        <div className='profile_user_head head_width'>Badges</div>
                        <div className='profile_user_all'>View all badges</div>
                    </div>
                    <Badges/>
                </div>
                <div className='profile_empt'>
                    <div className='profile_head'>
                        <div className='profile_user_head head_width'>Top Tags</div>
                        <div className='profile_user_all'>View all tags</div>
                    </div>
                    {/*<TopTags id={props.id} />*/}
                </div>
                <div>
                    <div className="profile_top_elements">
                        <div className='profile_user_head head_width'>Top {header}</div>
                        <div className="profile_top_elements_view">View all <span className='links'>posts</span>, <span className='links'>answers</span>,<span className='links'>questions</span></div>
                        <div className="profile_top_elements_buttons">
                            <div id='content' className='profile_top_elements_elements'>
                                <button id='posts' onClick={data_type} className={`elements_button ${content === 'posts' ? 'act' : 'inact'}`}>Posts</button>
                                <button id='answers' onClick={data_type} className={`elements_button ${content === 'answers' ? 'act' : 'inact'}`}>Answers</button>
                                <button id='questions' onClick={data_type} className={`elements_button ${content === 'questions' ? 'act' : 'inact'}`}>Questions</button>
                            </div>

                            <div id='filter' className='profile_top_elements_filter'>
                                <button id={id} onClick={toggle_order} className={`elements_button ${content === 'posts' ? 'act' : 'inact'}`}>{(id).toUpperCase()}</button>
                                <button id='activity' onClick={sorting} className={`elements_button ${content === 'posts' ? 'act' : 'inact'}`}>Activity</button>
                                <button id='votes' onClick={sorting} className={`elements_button ${content === 'posts' ? 'act' : 'inact'}`}>Votes</button>
                                <button id='creation' onClick={sorting} className={`elements_button ${content === 'posts' ? 'act' : 'inact'}`}>Creation</button>
                            </div>
                        </div>
                    </div>
                    <Activities link={activities_link} />
                </div>
                <div className='profile_empt'>
                    <div className='profile_top_elements'>
                        <div className='profile_user_head head_width'>Comments</div>
                        <div className='profile_top_elements_view'>View all comments</div>
                        <div className="profile_top_elements_buttons filter_margin">
                            <button id='asc' onClick={comments_order} className='elements_button'>{(commentsOrder).toUpperCase()}</button>
                        </div>
                    </div>
                    {/*<Comments  />*/}
                </div>
            </div>

        </div>
    )
}
export default AboutUser;