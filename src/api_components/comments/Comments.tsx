import React, {useEffect, useRef, useState} from 'react';
import './Comments.css';
import parse from 'html-react-parser';
import { creationDate } from '../../services/creationDate';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {numberFormat} from "../../services/number_format";

interface apiEndpointLink {
    endpoint: string
}

const Comments: React.FC<apiEndpointLink> = ({endpoint}) => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setIsLoaded] = useState<boolean>(false);
    const [comments, setComments] = useState<any[] | null>(null);
    const elementToScroll = useRef<HTMLInputElement | null>(null);
    const [view, setView] = useState<string>("block");
    const { post_id } = useTypedSelector(state => state.comment_post_id)


    useEffect(() => {
        const stackExchangeApiUrl = "https://api.stackexchange.com";
        const apiUrl = stackExchangeApiUrl + endpoint
        if (endpoint) {
                fetch(apiUrl)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            let comments = result.items
                            setIsLoaded(false);
                            setComments(comments);

                        },
                        (error) => {
                            setIsLoaded(true);
                            setError(error.message);
                        }
                    )
        }
        if (elementToScroll.current) {
            elementToScroll.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [endpoint, view, elementToScroll.current])

    const reply = (comment: { reply_to_user?: { display_name: string } }) => {
        if (comment.reply_to_user) {
            return (
                <div className="reply_position position">
                    replied to: <span className="reply">@{comment.reply_to_user.display_name}</span>
                </div>
            );
        }
        return null;
    };

    const showComments = () => {
        if (view === 'block') {
            setView('none');
        } else {
            setView('block');
        }
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (comments === null || comments.length <= 0) {
        return (
            <div>
                <div className='show_user_question general_user_question'>
                    <div className='show-comments_comments_user_question font_size'>Comments</div>
                    <FontAwesomeIcon onClick={() => showComments()} className='show-comments_icon_user_question font_size' icon={view === "none" ? faCaretUp : faCaretDown}></FontAwesomeIcon>
                </div>
                <div style={{ display: view }}>
                    <div className="no-comments general_comments">
                        <div>No comments</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='show_user_question general_user_question'>
                <div className='show-comments_comments_user_question font_size'>Comments</div>
                <FontAwesomeIcon onClick={() => showComments()} className='show-comments_icon_user_question font_size' icon={view === "none" ? faCaretUp : faCaretDown}></FontAwesomeIcon>
            </div>
            <div className="general_comments" style={{ display: view }}>
                {comments.map((element) => (
                    <div key={element.comment_id}>
                        <div className={post_id === element.comment_id ? 'comment_content_block element_highlight' : 'comment_content_block'} ref={post_id === element.comment_id ? elementToScroll : null}>
                            <div className="comment_user">
                                <img src={element.owner.profile_image} alt="User photo" className="comment_user_img" />
                                <div className="comment_user_name">{element.owner.display_name}</div>
                            </div>
                            <div className="comment_content_details">
                                <div className="comment_body">{parse(element.body)}</div>
                                <div className="comment_created_by_data">
                                    <div className="score_position position">score: <span style={{fontWeight: "bold", marginLeft: "10px"}}>{numberFormat(element.score)}</span></div>
                                    <div className="date_position position">{creationDate(element.creation_date)}</div>
                                    <div>{reply(element)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
