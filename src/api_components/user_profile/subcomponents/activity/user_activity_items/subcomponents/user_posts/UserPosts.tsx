import React, {useState} from "react";
import "../../UserActivityItems.css"
import parse from 'html-react-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FetchPostId} from "../../../../../../../services/fetch_post_id";
import {useActions} from "../../../../../../../store/hooks/useActions";
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";

const UserPosts:React.FC<Structure> = ({items}) => {
    const {setAnswerPostId} = useActions()
    const [icon, setIcon] = useState<IconDefinition>(faCaretUp);

    const body_display = () => {
        const newIcon = icon === faCaretUp ? faCaretDown : faCaretUp;
        setIcon(newIcon)
    }

    const post_id = (event: React.MouseEvent<HTMLElement>) => {
        setAnswerPostId((event.target as Element).id);
        setTimeout(() => {
            FetchPostId();
        }, 0);
    }

    if (items.length === 0) {
        return (
            <div className='items_empty'>NO POSTS</div>
        )
    }

    return (
        <div>
            <div>{items.map((element, index) =>
                <div key={index} className='items_box'>
                    <div>
                        <div>{element.post_type}</div>
                        <div>
                            <FontAwesomeIcon  onClick={body_display} className='show-user-comments_icon' icon={faCaretUp}></FontAwesomeIcon>
                        </div>
                        <div onClick={post_id} id={(element.post_id).toString()}>{element.title}</div>
                    </div>
                    <div className={icon === faCaretUp ? 'closed' : 'opened'}>{parse(element.body)}</div>
                </div>
            )}</div>
        </div>
    )
}

export default UserPosts;