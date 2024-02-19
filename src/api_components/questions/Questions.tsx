import React, {useEffect} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import "./Questions.css"
import { faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {creationDate} from "../../services/date_format";


const Questions: React.FC = () => {
    const navigate:NavigateFunction = useNavigate();
    const {questions, loading, error, page, order, sort, tags} = useTypedSelector(state => state.api_questions)
    const {fetchQuestionsApiEndpoint, UserQuestionActionCreatorQuestionId} = useActions()


    useEffect(() => {
        if (page && sort && order) {
            fetchQuestionsApiEndpoint(page, order, sort, tags || '');
        }
        // console.log('sort', sort)
        // console.log('order', order)

    }, [page, sort, order, tags])
    // console.log('After Fetch:', questions)

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
        UserQuestionActionCreatorQuestionId((question.question_id).toString())
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