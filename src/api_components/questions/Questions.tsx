import React, {useEffect} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";
import "./Questions.css"
import { faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {creationDate} from "../../services/creationDate";
import Pagination from "../../components/pagination/Pagination";
import {numberFormat} from "../../services/numberFormat";


const Questions: React.FC = () => {
    const navigate:NavigateFunction = useNavigate();
    const {questions, loading, error, order, sort, tag, total, page_size} = useTypedSelector(state => state.api_questions)
    const {page, total_pages} = useTypedSelector(state => state.pages)
    const {fetchQuestionsApiEndpoint, UserQuestionActionCreatorQuestionId, setTagApi, setTotalPages} = useActions()

    useEffect(() => {
        if (page && sort && order) {
            fetchQuestionsApiEndpoint(page, order, sort, tag);
        }
        if (questions.length > 0) {
            const totalPageNumber = Math.ceil(Number(total) / Number(page_size));
            if (totalPageNumber < 25) {
                setTotalPages(totalPageNumber);
            }
        }
    }, [page, sort, order, tag, total, page_size, total_pages])

    const redirect = async (tag: string) => {
        await setTagApi(tag)
        navigate('/tags')
    }

    const isAnswered = (answered: boolean | undefined) => {
        return answered ? faCheck : faXmark;
    };

    const decode = (str: string) => {
        let txt = new DOMParser().parseFromString(str, "text/html");
        return txt.documentElement.textContent;
    }
    const transfer = (question: { question_id: number | string }) => {
        UserQuestionActionCreatorQuestionId((question.question_id).toString())
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div>{questions.map((element) =>
                <div key={`question${element.question_id}`}>
                    <div className='question_content'>
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
                            <div className='titles margins' onClick={() => {transfer(element); navigate('/user_question');}} data-testid='transfer-question-id'>{decode(element.title)}</div>
                            <div className='margins'>{(element.tags).map((element: string, index: number) =>
                                <div className='tags tags_for_phone' key={index}>
                                    <div onClick={() => redirect(element)} data-testid="redirect-tag">{" #" + element}</div>
                                </div>
                            )}</div>
                        </div>
                        <div className='block_b'>
                            <div className='owner'>
                                <div className='owner_element'>{numberFormat(element.owner.reputation)}</div>
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
            <div data-testid="pagination">{total && total > 1 && <Pagination />}</div>
        </div>
    )
}

export default Questions;