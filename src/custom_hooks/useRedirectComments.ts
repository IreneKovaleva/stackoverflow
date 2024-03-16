import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useActions} from "../store/hooks/useActions";
import {fetchQuestionId} from "../services/fetchQuestionId";

export const useRedirectComments = () => {
    const navigate = useNavigate();
    const { setCommentPostId, UserQuestionActionCreatorQuestionId } = useActions();

    const redirect = async (postId: number, post_type: string, commentId: number) => {
        if (post_type === "answer") {
            await setCommentPostId(commentId);
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

    return redirect;
};


