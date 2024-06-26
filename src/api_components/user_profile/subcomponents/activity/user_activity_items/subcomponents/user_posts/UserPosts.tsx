import React, {useEffect, useState} from "react";
import "../../UserActivityItems.css"
import parse from 'html-react-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../../../../../../store/hooks/useActions";
import {Structure} from "../../../../../../../store/types/api/user_profile/subcomponents/activity/activity_items";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {fetchQuestionId} from "../../../../../../../services/fetchQuestionId";


const UserPosts:React.FC<Structure> = ({items}) => {
    const navigate:NavigateFunction = useNavigate();
    const {setAnswerPostId, UserQuestionActionCreatorQuestionId} = useActions()
    const [iconState, setIconState] = useState<string>("active");

    const classChange = (event: React.MouseEvent<HTMLElement>, postId: string) => {
        const bodyElement = document.getElementById(`post_${postId}`);
        if (bodyElement) {
            bodyElement.classList.toggle('opened_post');
            bodyElement.classList.toggle('closed_post');
        }
        setIconState(prevState => prevState === "active" ? "not_active" : "active");
    }

    const redirect = async (postId: number, post_type: string) => {
        if (post_type === "answer") {
            await setAnswerPostId(postId);
            const questionId = await fetchQuestionId(postId);
            if (questionId.length > 0) {
                UserQuestionActionCreatorQuestionId(questionId[0]);
                navigate('/user_question');
            }
        }
        if (post_type === "question") {
            await UserQuestionActionCreatorQuestionId(postId.toString());
            navigate('/user_question');
        }
    };

    if (items.length === 0) {
        return (
            <div className='items_empty'>NO POSTS</div>
        )
    }

    return (
        <div>
            <div>{items.map((element, index) =>
                <div key={index} className='user_items_block'>
                    <div>
                        <div className="post_type">{element.post_type}</div>
                        <div onClick={(e) => classChange(e, element.post_id)} id={element.post_id}>
                            <FontAwesomeIcon
                                className='show-user-comments_icon'
                                id={iconState}
                                icon={iconState === "not_active" ? faCaretUp : faCaretDown}
                            />
                        </div>
                        <div className="post_title" onClick={() => redirect(element.post_id, element.post_type)}>{element.title}</div>
                    </div>
                    <div id={`post_${element.post_id}`}  className='closed_post'>
                        {parse("" + element.body)}
                    </div>
                </div>
            )}</div>
        </div>
    )
}

export default UserPosts;