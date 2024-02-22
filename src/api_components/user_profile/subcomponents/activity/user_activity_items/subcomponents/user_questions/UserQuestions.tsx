import React from "react";
import './elements.css';
import {creationDate} from "../../../../../../../services/date_format";
import {numberFormat} from "../../../../../../../services/number_format";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";


const UserQuestions: React.FC<Structure> = ({items}) => {

    const answered = (el:string, num: number) => {
        if (el) {
            return (
                <div className='accept'>{num} answers</div>
            )
        }else {
            return (
                <div className='noaccept'>{num} answers</div>
            )
        }
    }


    if (items.length === 0) {
        return (
            <div className='answers_empty'>NO QUESTIONS</div>
        )
    }

    return(
        <div>
            <div>{items.map((element, index) =>
                <div key={index} className='box'>
                    <div className='b-1'>
                        <div>{element.score} <span>votes</span></div>
                        <div>{answered(element.is_answered, element.answer_count)}</div>
                        <div>{numberFormat(element.view_count)} <span>views</span></div>
                    </div>
                    <div className='b-2'>{element.title}</div>
                    <div className='low-box'>
                        <div className='b-3'>{element.tags.map((el: string ,index: number) =>
                            <div key={index}>
                                <div className='Tag_p tg'>{el}</div>
                            </div>
                        )}
                        </div>
                        <div className='ans_d'>{creationDate(element.creation_date)}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}
export default UserQuestions;