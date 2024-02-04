import React, {useEffect} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import "./Questions.css"
import {fetchQuestionsApiEndpoint} from "../../store/action-creators/api/questions/questions_action";
import { faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {creationDate} from "../../services/date_format";
import {
    UserQuestionActionCreationDate, UserQuestionActionCreatorAnswerCount,
    UserQuestionActionCreatorAnswers, UserQuestionActionCreatorBody,
    UserQuestionActionCreatorComments, UserQuestionActionCreatorScore,
    UserQuestionActionCreatorTags, UserQuestionActionCreatorTitle
} from "../../store/action-creators/user_question/user_question_action";




const Questions: React.FC = () => {
    const navigate:NavigateFunction = useNavigate();
    const {questions, loading, error, page, order, sort, tags} = useTypedSelector(state => state.api_questions)
    const {fetchQuestionsApiEndpoint, UserQuestionActionCreatorTags,UserQuestionActionCreatorComments,UserQuestionActionCreatorAnswers,UserQuestionActionCreatorTitle,UserQuestionActionCreatorBody} = useActions()


    useEffect(() => {
        if (page && sort && order) {
            fetchQuestionsApiEndpoint(page, order, sort, tags || '');
        }
        console.log('sort', sort)
        console.log('order', order)

    }, [page, sort, order, tags])
    console.log('After Fetch:', questions)

    const isAnswered = (answered: boolean | undefined) => {
        return answered ? faCheck : faXmark;
    };

    const decode = (str: string) => {
        let txt = new DOMParser().parseFromString(str, "text/html");
        return txt.documentElement.textContent;
    }
    const rounding = (reputation: number) => {
        return Math.round(reputation / 1000) + 'k'
    };
    const transfer = (question:any) => {
        if (question.hasOwnProperty('comments')) {
            let comments: number[] = []
            question.comments.map((element: {comment_id: number}) => {
                comments.push(element.comment_id)
            })
            comments.sort(function (a, b) {
                return a - b;
            })
            UserQuestionActionCreatorComments(comments)
        }else {
            let comments: string[] = ['no comments']
            UserQuestionActionCreatorComments(comments)
        }
        if (question.hasOwnProperty('answers')) {
            let answers: number[] = []
            question.answers.map((element: {answer_id: number}) => {
                answers.push(element.answer_id)
            })
            answers.sort(function (a, b) {
                return a - b;
            })
            UserQuestionActionCreatorAnswers(answers)
        }else {
            let answers: string[] = ['no answers']
            UserQuestionActionCreatorAnswers(answers)
        }
        UserQuestionActionCreatorTags(question.tags)
        console.log('question.tags', question.tags)
        UserQuestionActionCreatorTitle(question.title)
        console.log('question.title', question.title)
        UserQuestionActionCreatorBody(question.body)
        console.log('question.body', question.body)
        UserQuestionActionCreatorScore(question.score)
        console.log('question.body', question.score)
        UserQuestionActionCreationDate(question.creation_date)
        console.log('question.body', question.creation_date)
        UserQuestionActionCreatorAnswerCount(question.answer_count)
        console.log('question.body', question.answer_count)
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='questions_sections'>{questions.map((element, index) =>
            <div className='questions_block' key={index}>
                <div className='questions_content'>
                    <div className='block_a'>
                        <div className='answered'>
                            <FontAwesomeIcon icon={isAnswered(element.is_answered)}/>
                        </div>
                        <div className='rates'>
                            <div className='rate'><span className='bold'>Votes: </span> {element.score}
                            </div>
                            <div className='rate'><span className='bold'>Views:</span> {element.view_count}
                            </div>
                            <div className='rate'><span
                                className='bold'>Answers:</span>{element.answer_count}</div>
                        </div>
                        <div className='titles margins' onClick={() => {transfer(element); navigate('/user_question');} }>{decode(element.title)}</div>
                        <div className='margins'>{(element.tags as string[]).map((element, index) =>
                            <div className='tags' key={index}>
                                <a>{element}</a>
                            </div>
                        )}</div>
                    </div>
                    <div className='block_b'>
                        <div className='owner'>
                            <div className='owner_element'>{rounding(element.owner.reputation)}</div>
                            <div className='owner_element'>{element.owner.display_name}</div>
                            <img alt='Profile image' src={element.owner.profile_image} className='image'></img>
                        </div>

                        <div className='dates'>
                            <div className='owner_element'>{creationDate(element.creation_date)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )


}

export default Questions;