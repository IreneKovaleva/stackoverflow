import React from "react";
import "../../UserActivityItems.css"
import {creationDate} from "../../../../../../../services/date_format";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserAnswers:React.FC<Structure> = ({items}) => {

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
                <div key={index + "user_answer"} className='user_items_block'>
                    <div className='block-1'>
                        <div>{element.score} <span>votes</span></div>
                        <div>{isAccepted(element.is_accepted)}</div>
                    </div>
                    <div>{element.title}</div>
                    <div className='low-block'>
                        <div className='block-3'>{element.tags.map((el:string,index:number) =>
                            <div key={index + "user_tags"}>
                                <div className='items_tags_position items_tag'>{el}</div>
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