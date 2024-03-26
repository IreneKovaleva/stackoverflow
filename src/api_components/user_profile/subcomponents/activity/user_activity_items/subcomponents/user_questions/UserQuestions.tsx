import React from "react";
import "../../UserActivityItems.css";
import {creationDate} from "../../../../../../../services/date_format";
import {numberFormat} from "../../../../../../../services/number_format";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useActions} from "../../../../../../../store/hooks/useActions";


const UserQuestions: React.FC<Structure> = ({items}) => {
    const navigate:NavigateFunction = useNavigate();
    const {UserQuestionActionCreatorQuestionId} = useActions()

    const redirect = async (questionsId: number) => {
        await UserQuestionActionCreatorQuestionId(questionsId.toString());
        navigate('/user_question')
    }

    const answered = (el:string, num: number) => {
        if (el) {
            return (
                <div className='accepted'>{num} answers</div>
            )
        }else {
            return (
                <div className='not_accepted'>{num} answers</div>
            )
        }
    }


    if (items.length === 0) {
        return (
            <div className='items_empty'>NO QUESTIONS</div>
        )
    }

    return(
        <div>
            <div>{items.map((element, index) =>
                <div key={element.question_id} className='items_box'>
                    <div className='block-1'>
                        <div>{element.score} <span>votes</span></div>
                        <div>{answered(element.is_answered, element.answer_count)}</div>
                        <div>{numberFormat(element.view_count)} <span>views</span></div>
                    </div>
                    <div className='block-2' onClick={() => redirect(element.question_id)}>{element.title}</div>
                    <div className='low-box'>
                        <div className='block-3'>{element.tags.map((el: string ,index: number) =>
                            <div key={index}>
                                <div className='tags_block tags_user_activity'>{el}</div>
                            </div>
                        )}
                        </div>
                        <div className='item_date'>{creationDate(element.creation_date)}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}
export default UserQuestions;