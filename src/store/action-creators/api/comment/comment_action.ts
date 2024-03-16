import {CommentPostType, PostIdCommentAction} from "../../../types/api/comments/comment_type";

export const setCommentPostId = (newValue: number): PostIdCommentAction => ({
    type: CommentPostType.SET_POST_ID,
    payload: newValue,
});