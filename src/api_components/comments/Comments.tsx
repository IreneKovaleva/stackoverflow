import React, { useEffect } from 'react';
import './Comments.css';
import parse from 'html-react-parser';
import {creationDate} from "../../services/date_format";
import {fetchCommentsApiEndpoint, setItemId} from "../../store/action-creators/api/comments/comments_action";
import {useActions} from "../../store/hooks/useActions";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";

interface CommentsProps {
    comment_id: string;
}

const Comments: React.FC<CommentsProps> = ({ comment_id }) => {
    const {items, loading, error, page, order, sort, item_id} = useTypedSelector(state => state.comments_api_reducer)
    const {value} = useTypedSelector(state => state.view_reducer_user_question)
    const {fetchCommentsApiEndpoint, setItemId} = useActions()


    useEffect(() => {
        setItemId(comment_id)
        if (page && sort && order && item_id && item_id !== "no comments") {
            fetchCommentsApiEndpoint(page, order, sort, item_id || '');
        }
        console.log('comment_id', item_id)
        console.log('sort', sort)
        console.log('order', order)

    }, [page, sort, order, item_id])
    console.log('After Fetch:', items)


    const reply = (el: { reply_to_user?: { display_name: string }; }) => {
        if (el.reply_to_user) {
            return (
                <div className='position'>replied to: <span>@{el.reply_to_user.display_name}</span></div>
            );
        }
        return null;
    };

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    if (comment_id === "no comments") {
        return (
            <div style={{display: value}}>
                <div className='no-comments general'>
                    <div>No comments</div>
                </div>
            </div>

        )
    }

    return (
        <div>
            <div className='comment general_comments' style={{display: value}}>
                <div>{items.map((element, index) =>
                    <div key={index}>
                        <div className='comment_content_block'>
                            <div className='comment_user'>
                                <img src={element.owner.profile_image} alt='User photo' className='comment_user_img'></img>
                                <div className='comment_user_name'>{element.owner.display_name}</div>
                            </div>
                            <div className='comment_content_details'>
                                <div className='comment_body'>{parse(element.body)}</div>
                                <div>
                                    <div>{reply(element)}</div>
                                    <div className='position'>{creationDate(element.creation_date)}</div>
                                    <div className='position'>score: <span>{element.score}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}</div>
            </div>
        </div>
    )
}

export default Comments;