import React, {useEffect, useState} from 'react';
import './Comments.css';
import parse from 'html-react-parser';
import { creationDate } from '../../services/date_format';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';

interface apiEndpointLink {
    endpoint: string
}

const Comments: React.FC<apiEndpointLink> = ({endpoint}) => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setIsLoaded] = useState<boolean>(false);
    const [comments, setComments] = useState<any[]>([]);

    const { value } = useTypedSelector(state => state.view_reducer_user_question);



    useEffect(() => {
        const stackExchangeApiUrl = "https://api.stackexchange.com";
        const apiUrl = stackExchangeApiUrl + endpoint
        console.log('apiUrl', apiUrl)
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
    }, [endpoint])

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

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (comments.length === 0) {
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
