import React from "react";
import './elements.css';
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserPrivileges:React.FC<Structure> = ({items}) => {

    if (items.length === 0) {
        return (
            <div className='answers_empty'>NO PRIVILEGES</div>
        )
    }
    return (
        <div>
            <div>{items.map((element, index) =>
                <div key={index} className='box'>
                    <div className='privileges'>
                        <div className='privileges_b1'>
                            <div className='privileges_num'>+{element.reputation}</div>
                            <div className='privileges_dsc'>{element.short_description}</div>
                        </div>
                        <div>{element.description}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserPrivileges;