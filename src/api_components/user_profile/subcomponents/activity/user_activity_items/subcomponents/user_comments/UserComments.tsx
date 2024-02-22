import React from "react";
import './elements.css';
import {creationDate} from "../../../../../../../services/date_format";
import parse from "html-react-parser";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserComments: React.FC<Structure> = ({items}) => {

    if (items.length === 0) {
        return (
            <div className='answers_empty'>NO COMMENTS</div>
        )
    }

    return (
        <div>
            <div>{items.map((element, index) =>
                <div key={index} className='box'>
                    <div className='b-1'>
                        <div>{element.score} <span>votes</span></div>
                    </div>
                    <div className='b-2'>{parse(element.body)}</div>
                    <div className='low-box'>
                        <div className='b-3'></div>
                        <div className='ans_d'>{creationDate(element.creation_date)}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserComments;