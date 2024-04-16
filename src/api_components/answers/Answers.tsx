import React, {useEffect, useState, useRef} from 'react';
import parse from 'html-react-parser';
import {creationDate} from "../../services/creationDate";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {faCaretDown, faCaretUp, faCheck, faCircleDown, faCircleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Answers.css"
import {useActions} from "../../store/hooks/useActions";
import Comments from "../comments/Comments";


const Answers: React.FC = () =>{
    const [error, setError] = useState<string | null>(null);
    const [loading, setIsLoaded] = useState<boolean>(true);
    const [answers, setAnswers] = useState<any[]>([]);
    const [score, setScore] = useState<number>(0);

    const {value, post_id} = useTypedSelector(state => state.view_reducer_user_question_answers)
    const {font_awesome_icon_answers} = useTypedSelector(state => state.font_awesome_icons_answers)
    const {question_id} = useTypedSelector(state => state.user_question)


    const {setViewAnswers, setFontAwesomeIconAnswers} = useActions()
    const elementToScroll = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        if (question_id) {
            const apiUrl = `https://api.stackexchange.com/2.3/questions/${question_id}/answers?order=desc&sort=activity&site=stackoverflow&filter=!)qXWnHAIlQG-pM8u-EAa`;
                fetch(apiUrl)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            let answers = result.items
                            setIsLoaded(false);
                            setAnswers(answers);
                            setScore(answers.score);

                        },
                        (error) => {
                            setIsLoaded(true);
                            setError(error.message);
                        }
                    )
        }
        if (elementToScroll.current) {
            elementToScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [question_id, value, font_awesome_icon_answers, elementToScroll.current])

    // const scrollWithUseRef = () => {
    //
    // };
    const showComments = () => {
        const newView = value === 'block' ? 'none' : 'block';
        const newIcon = value === 'block' ? faCaretUp : faCaretDown;

        setViewAnswers(newView)
        setFontAwesomeIconAnswers(newIcon)
    };

    const voteUp = (add_score:number) => {
        let new_score = score + add_score
        setScore(new_score)
    }

    const voteDown = (deduct_score:number) => {
        let new_score = score - deduct_score
        setScore(new_score)
    }

    const accepted = (el:boolean) => {
        if (el) {
            return (
                <div>
                    <FontAwesomeIcon className='answers_icon' icon={faCheck}></FontAwesomeIcon>
                </div>
            )
        }
    }

    const item_comment_elements = (answer_id: number) => {
        const id = answer_id.toString()
        let endpoint = `/2.3/answers/${id}/comments?order=desc&sort=creation&site=stackoverflow&filter=!bCTzllGnBZgG5C`
        return(
            <div className='answers_comment_block'>
                <Comments endpoint={endpoint}/>
            </div>
        )
    }


    if (answers.length === 0) {
        return (
            <div className='no_answers position'>
                <div>
                    <div>No answers</div>
                </div>
            </div>
        )
    }

    const view = (el: any) => {
        console.log("post_idpost_idpost_id", post_id)
        console.log("element.answer_id", el )
        return null
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
// do not forget to describe class in css for highlighting the answer
    return (
        <div className='answers_content'>
            <div className='answers_details'>{answers.map((element,index) =>
                <div className={post_id === element.answer_id ? 'answers_details answer_highlight' : 'answers_details'} ref={post_id === element.answer_id ? elementToScroll : null} key={index}>
                    <div>{view(element)}</div>
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
                                <div  className='questions_content_votes_answers'>
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
                            <FontAwesomeIcon onClick={showComments} className='show-comments_icon_answers' icon={font_awesome_icon_answers}></FontAwesomeIcon>
                        </div>
                        <div>{item_comment_elements(element.answer_id)}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default Answers;