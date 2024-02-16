import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleDown, faCircleUp} from "@fortawesome/free-solid-svg-icons";
// import parse from 'html-react-parser';
import "./UserQuestion.css"
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {creationDate} from "../../services/date_format";
import {useActions} from "../../store/hooks/useActions";
import Comments from "../../api_components/comments/Comments"
import Answers from "../../api_components/answers/Answers";
import parse from "html-react-parser";


const UserQuestions: React.FC = () => {
    const {fetchUserQuestionApiEndpoint, setUserQuestionScore} = useActions()
    const {question_id, question_items, tags, title, body, creation_date, answer_count, loading, error, score} = useTypedSelector(state => state.user_question)


    useEffect(() => {
        if (question_id) {
            fetchUserQuestionApiEndpoint(question_id);
        }
        if (question_items.length > 0) {
            console.log(question_items)
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
                <div className='questions_ct_tags'>{tag.map((element, index) =>
                    <div className='question_tags margin' key={index}>
                        <div>{element}</div>
                    </div>
                )}</div>
            )
        }
    }

    const item_comment_elements = () => {
        const endpoint = `/2.3/questions/${question_id}/comments?order=desc&sort=creation&site=stackoverflow&filter=!bEvCQhrKga-zTC`;
        return(
            <div className='comment_block'>
                    <Comments endpoint={endpoint}/>
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
        <div className="first_block_user_question">
            <div className="rows_user_question">
                <div className='questions_content'>
                    <div className='questions_description'>
                        <div className='questions_description_title'>{parse(title)}</div>
                        <div className='questions_description_score'>
                            <div className='score margin'>Score <span className='span_user_question'>{score}</span></div>
                            <div className='date margin'>Date  <span className='span_user_question'>{creationDate(creation_date)}</span></div>
                        </div>
                    </div>
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
                    <div>
                        <div className='questions_tags'>
                            <div className='score margin' >Answers <span className='span_user_question'>{answer_count}</span></div>
                            <div>{tags_elements(tags)}</div>
                        </div>
                    </div>
                    <div className='comments_user_question'>
                        <div className='comment_block'>{item_comment_elements()}</div>
                    </div>

                    <div className='answers_user_question'>
                        <h2>Answers</h2>
                        <div className='answers_block'>
                                <Answers />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserQuestions;