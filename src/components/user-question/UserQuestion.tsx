import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleDown, faCircleUp} from "@fortawesome/free-solid-svg-icons";
import "./UserQuestion.css"
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {creationDate} from "../../services/creationDate";
import {useActions} from "../../store/hooks/useActions";
import Comments from "../../api_components/comments/Comments"
import Answers from "../../api_components/answers/Answers";
import parse from "html-react-parser";
import {numberFormat} from "../../services/numberFormat";


const UserQuestions: React.FC = () => {
    const {fetchUserQuestionApiEndpoint, setUserQuestionScore} = useActions()
    const {question_id, tags, title, body, creation_date, answer_count, loading, error, score} = useTypedSelector(state => state.user_question)


    useEffect(() => {
        if (question_id) {
            fetchUserQuestionApiEndpoint(question_id);
        }
    }, [question_id])

    const voteUp = (add_score:number) => {
        setUserQuestionScore(score + add_score)
    }

    const voteDown = (deduct_score:number) => {
        setUserQuestionScore(score - deduct_score)
    }

    const tags_elements = (tag:string[] | null) => {
        if (tag !== null && tag !== undefined) {
            return(
                <div className='user_question_tags'>{tag.map((element, index) =>
                    <div className='tags' key={index}>
                        <div>{" #" + element}</div>
                    </div>
                )}</div>
            )
        }
    }

    const item_comment_elements = () => {
        const endpoint = `/2.3/questions/${question_id}/comments?order=desc&sort=creation&site=stackoverflow&filter=!bEvCQhrKga-zTC`;
        return(
            <Comments endpoint={endpoint}/>
        )
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="first_block_user_question">
            <div className='questions_description_title'>{parse(title)}</div>
            <div className='questions_description_score'>
                <div className='score margin'>Score <span className='span_user_question'>{numberFormat(score)}</span></div>
                <div className='date margin'>Date  <span className='span_user_question'>{creationDate(creation_date)}</span></div>
            </div>
            <div className='questions_content'>
                <div className='questions_content_body'>
                    <div  className='questions_content_votes'>
                        <FontAwesomeIcon className='arrowIcon iconUp' icon={faCircleUp} onClick={() => voteUp(1)}></FontAwesomeIcon>
                        <div>{score}</div>
                        <FontAwesomeIcon className='arrowIcon iconDown' icon={faCircleDown} onClick={() => voteDown(1)}></FontAwesomeIcon>
                    </div>
                    <div className='questions_body'>
                        <div>{parse(body)}</div>
                    </div>
                </div>
                <div className='questions_tags'>
                    <div className='score margin' >Quantity of answers: <span className='span_user_question'>{answer_count}</span></div>
                    <div>{tags_elements(tags)}</div>
                </div>
                <div className='comment_block'>{item_comment_elements()}</div>
                <div className="answers_block">
                    <Answers />
                </div>
            </div>
        </div>
    )
}

export default UserQuestions;