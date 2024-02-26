import React from "react";
import "../../UserActivityItems.css";
import {numberFormat} from "../../../../../../../services/number_format";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserTags:React.FC<Structure> = ({items}) => {

    return (
        <div>
            <div className='profile_block'>{items.map((element, index) =>
                <div key={index} className='profile_elements'>
                    <div className='profile_tags'>
                        <div className='profile_top_tags_name'>{element.tag_name}</div>
                    </div>
                    <div className='profile_top_tags_score'>
                        <div className='profile_top_tag'><span className='text_tag'>{numberFormat(element.answer_score)}</span> score</div>
                        <div className='profile_top_tag'><span className='text_tag'>{numberFormat(element.answer_count)}</span> posts</div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserTags;