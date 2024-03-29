import React from "react";
import "../../UserActivityItems.css"
import {creationDate} from "../../../../../../../services/date_format";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";
import {useActions} from "../../../../../../../store/hooks/useActions";
import {NavigateFunction, useNavigate} from "react-router-dom";

const UserAnswers:React.FC<Structure> = ({items}) => {
    const navigate:NavigateFunction = useNavigate();
    const {setAnswerPostId, UserQuestionActionCreatorQuestionId} = useActions()
    const redirect = async (questionsId: number, answerId: number) => {
            await setAnswerPostId(answerId)
            await UserQuestionActionCreatorQuestionId(questionsId.toString());
            navigate('/user_question')
    }

    const isAccepted = (el:boolean) => {
        if (el) {
            return (
                <div className='accepted'>Accepted</div>
            )
        }
    }

    if (items.length === 0) {
        return (
            <div className='items_empty'>NO ANSWERS</div>
        )
    }

    return (
        <div>
            <div>{items.map((element, index) =>
                <div key={element.answer_id} className='user_items_block'>
                    <div className='block-1'>
                        <div>{element.score} <span>votes</span></div>
                        <div>{isAccepted(element.is_accepted)}</div>
                    </div>
                    <div onClick={() => redirect(element.question_id, element.answer_id)}>{element.title}</div>
                    <div className='low-block'>
                        <div className='block-3'>{element.tags.map((el:string,index:number) =>
                            <div key={index + "user_tags"}>
                                <div className='tags'>{"#" + el}</div>
                            </div>
                        )}
                        </div>
                        <div className='user_items_date'>{creationDate(element.creation_date)}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserAnswers;