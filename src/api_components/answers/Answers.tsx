import React, {useEffect, useState, useRef} from 'react';
import parse from 'html-react-parser';
import {creationDate} from "../../services/creationDate";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {faCheck, faCircleDown, faCircleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Answers.css"
import Comments from "../comments/Comments";
import {numberFormat} from "../../services/numberFormat";


const Answers: React.FC = () =>{
    const [error, setError] = useState<string | null>(null);
    const [loading, setIsLoaded] = useState<boolean>(true);
    const [answers, setAnswers] = useState<any[]>([]);
    const [score, setScore] = useState<number[]>([]);

    const {value, post_id} = useTypedSelector(state => state.view_reducer_user_question_answers)
    const {font_awesome_icon_answers} = useTypedSelector(state => state.font_awesome_icons_answers)
    const {question_id} = useTypedSelector(state => state.user_question)
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
                            let answers_score = answers.map((el: {score:number}) => el.score !== null ? el.score : 0);
                            setScore(answers_score)
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

    const voteUp = (add_score:number, score_value:number, index: number) => {
        const newScores = [...score];
        newScores[index] = score_value + add_score;
        setScore(newScores);
    }

    const voteDown = (deduct_score:number, score_value:number, index:number) => {
        const newScores = [...score];
        newScores[index] = score_value - deduct_score;
        setScore(newScores);
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


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <div>
                <h2>Answers</h2>
            </div>

            <div className="answers_scroll">{answers.map((element,index: number) =>
                <div className={post_id === element.answer_id ? 'answers_details element_highlight' : 'answers_details'} ref={post_id === element.answer_id ? elementToScroll : null} key={index}>
                    <div className='answers_top_description'>
                        <img className='answers_profile_image' alt='Profile image' src={element.owner.profile_image}/>
                        <div>
                            <div className='answers_body_owner'>
                                <div className='answer_owner'><span style={{color: "#4680ff"}}>{parse(element.owner.display_name)}</span></div>
                                <div className='answer_owner'>reputation: <span style={{fontWeight: "bold"}}>{numberFormat(element.owner.reputation)}</span></div>
                            </div>
                            <div className='answers_creation_date'>{creationDate(element.creation_date)}</div>
                        </div>
                    </div>

                    <div className='answers_description'>
                        <div className='answers_score'>
                            <div>{accepted(element.is_accepted)}</div>
                            <div  className='questions_content_votes_answers'>
                                <FontAwesomeIcon className='arrowIcon_answers icon_up_answers' icon={faCircleUp} onClick={() => voteUp(1, score[index], index)}></FontAwesomeIcon>
                                <div>{score[index]}</div>
                                <FontAwesomeIcon className='arrowIcon_answers icon_down_answers' icon={faCircleDown} onClick={() => voteDown(1, score[index], index)}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className='answers_body'>{parse(element.body)}</div>
                    </div>

                    <div className='comments_answers_user_page'>
                        <div>{item_comment_elements(element.answer_id)}</div>
                    </div>
                </div>
            )}</div>

        </div>
    )
}

export default Answers;