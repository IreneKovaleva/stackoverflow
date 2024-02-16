import React, {useEffect, useState} from 'react';
import './Comments.css';
import parse from 'html-react-parser';
import { creationDate } from '../../services/date_format';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../store/hooks/useActions";

interface apiEndpointLink {
    endpoint: string
}

const Comments: React.FC<apiEndpointLink> = ({endpoint}) => {
    const {setView, setFontAwesomeIcon} = useActions()
    const [error, setError] = useState<string | null>(null);
    const [loading, setIsLoaded] = useState<boolean>(false);
    const [comments, setComments] = useState<any[] | null>(null);

    const { value } = useTypedSelector(state => state.view_reducer_user_question);
    const { font_awesome_icon } = useTypedSelector(state => state.font_awesome_icons)

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
    }, [endpoint, value, font_awesome_icon])

    const reply = (comment: { reply_to_user?: { display_name: string } }) => {
        if (comment.reply_to_user) {
            return (
                <div className="position">
                    replied to: <span>@{comment.reply_to_user.display_name}</span>
                </div>
            );
        }
        return null;
    };

    const showComments = () => {
        if (value === 'block') {
            setView('none');
        } else {
            setView('block');
        }
        if (font_awesome_icon === faCaretDown) {
            setFontAwesomeIcon(faCaretUp);
        } else {
            setFontAwesomeIcon(faCaretDown);
        }


    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (comments === null) {
        return (
            <div style={{ display: value }}>
                <div className="no-comments general">
                    <div>No comments</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='show_user_question general_user_question'>
                <div className='show-comments_comments_user_question'>Comments</div>
                <FontAwesomeIcon onClick={() => showComments()} className='show-comments_icon_user_question' icon={font_awesome_icon}></FontAwesomeIcon>
            </div>
            <div className="comment general_comments" style={{ display: value }}>
                <div>
                    {comments.map((element, index) => (
                        <div key={index}>
                            <div className="comment_content_block">
                                <div className="comment_user">
                                    <img src={element.owner.profile_image} alt="User photo" className="comment_user_img" />
                                    <div className="comment_user_name">{element.owner.display_name}</div>
                                </div>
                                <div className="comment_content_details">
                                    <div className="comment_body">{parse(element.body)}</div>
                                    <div>
                                        <div>{reply(element)}</div>
                                        <div className="position">{creationDate(element.creation_date)}</div>
                                        <div className="position">
                                            score: <span>{element.score}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;
