import React from "react";
import "../../UserActivityItems.css";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserPrivileges:React.FC<Structure> = ({items}) => {

    if (items.length === 0) {
        return (
            <div className='items_empty'>NO PRIVILEGES</div>
        )
    }
    return (
        <div>
            <div>{items.map((element, index) =>
                <div key={index} className='items_box'>
                    <div className='privileges'>
                        <div className='privileges_block'>
                            <div className='privileges_reputation'>+{element.reputation}</div>
                            <div className='privileges_description'>{element.short_description}</div>
                        </div>
                        <div>{element.description}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserPrivileges;