import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import {creationDate} from "../../services/date_format";
import {useActions} from "../../store/hooks/useActions";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {faCaretDown, faCaretUp, faCheck, faCircleDown, faCircleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {setFontAwesomeIconAnswers} from "../../store/action-creators/api/answers/font_awesome_icon_answers";
import {setViewAnswers} from "../../store/action-creators/api/answers/view_style_answers_action";
import {
    AnswersActionScoreAdd, AnswersActionScoreDeduct,
    fetchAnswersApiEndpoint,
    setItemIdAnswers
} from "../../store/action-creators/api/answers/answers_action";
import Comments from "../comments/Comments"
import "./Answers.css"

interface AnswersProps {
    answer_id: string;
}

const Answers: React.FC<AnswersProps> = ({ answer_id }) =>{
    const {items, loading, error, page, order, sort, item_id, item_comments, score} = useTypedSelector(state => state.answers_api_reducer)
    const {value} = useTypedSelector(state => state.view_reducer_user_question_answers)
    const {icon} = useTypedSelector(state => state.font_awesome_icons_answers)
    const {fetchAnswersApiEndpoint, setItemIdAnswers, AnswersActionScoreAdd, AnswersActionScoreDeduct} = useActions()


    useEffect(() => {
        setItemIdAnswers(answer_id)
        if (page && sort && order && item_id && item_id !== "no answers") {
            fetchAnswersApiEndpoint(page, order, sort, item_id || '');
        }
        console.log('answer_id', item_id)
        console.log('sort', sort)
        console.log('order', order)

    }, [page, sort, order, item_id])
    console.log('After Fetch answers:', items)

    const showComments = () => {
        const newView = value === 'block' ? 'none' : 'block';
        const newIcon = value === 'block' ? faCaretUp : faCaretDown;

        setViewAnswers(newView)
        setFontAwesomeIconAnswers(newIcon)
    };

    const voteUp = (add_score:number) => {
        AnswersActionScoreAdd(add_score)
    }

    const voteDown = (deduct_score:number) => {
        AnswersActionScoreDeduct(deduct_score)
    }

    useEffect(() => {}, [score])

    const accepted = (el:boolean) => {
        if (el) {
            return (
                <div>
                    <FontAwesomeIcon className='answers_icon' icon={faCheck}></FontAwesomeIcon>
                </div>
            )
        }
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    if (answer_id === "no answers") {
        return (
            <div className='no_answers position'>
                <div>
                    <div>No answers</div>
                </div>
            </div>
        )
    }

    const item_comment_elements = (comment: number[] | string[] | null) => {
        if (comment !== null) {
            return(
                <div className='answers_comment_block'>{item_comments.map((element, index) =>
                    <div key={index}>
                        <Comments comment_id={element.toString()}/>
                    </div>
                )}</div>
            )
        }
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className='answers_content'>
            <div className='answers_details'>{items.map((element,index) =>
                <div className='answers_details' key={index}>
                    <div className='answers_top_description'>
                        <img className='answers_profile_image' alt='Profile image' src={element.owner.profile_image}/>
                        <div>
                            <div className='answers_body_owner'>
                                <div className='owner_margin'><span>{parse(element.owner.display_name)}</span></div>
                                <div className='owner_margin'>reputation: <span>{element.owner.reputation}</span></div>
                            </div>
                            <div className='answers_creation_date'>{creationDate(element.creation_date)}</div>
                        </div>
                    </div>
                    <div className='answers_description'>
                        <div className='answers_score'>
                            <div>
                                <div  className='questions_content_votes_answers'> //check class
                                    <FontAwesomeIcon className='arrowIcon_answers icon_up_answers' icon={faCircleUp} onClick={() => voteUp(1)}></FontAwesomeIcon>
                                    <div>{score}</div>
                                    <FontAwesomeIcon className='arrowIcon_answers icon_down_answers' icon={faCircleDown} onClick={() => voteDown(1)}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div>{accepted(element.is_accepted)}</div>
                        </div>
                        <div className='answers_body'>{parse(element.body)}</div>
                    </div>
                    <div className='comments_answers_user_page'>
                        <div className='show_comments_answers general_comments_answers'>
                            <div className='show-comments_comments_answers'>Comments</div>
                            <FontAwesomeIcon onClick={showComments} className='show-comments_icon_answers' icon={icon}></FontAwesomeIcon>
                        </div>
                        {/*<div>{item_comment_elements(item_comments)}</div>*/}
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default Answers;