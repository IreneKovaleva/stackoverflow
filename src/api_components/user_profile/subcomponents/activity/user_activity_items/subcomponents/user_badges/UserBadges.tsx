import React from "react";
import './elements.css';
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserBadges:React.FC<Structure> = ({items}) => {

    return (
        <div>
            <div className='grid_badges'>{items.map((element, index) =>
                <div key={index} >
                    <div className="badges_name b_width">
                        <div className={`circle color_${element.rank}`}></div>
                        <div>{element.name}</div>
                        <div>{element.award_count}</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserBadges;