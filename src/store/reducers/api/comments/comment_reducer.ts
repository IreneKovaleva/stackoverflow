import {CommentPostIdState, CommentPostType, PostIdCommentAction} from "../../../types/api/comments/comment_type";

const initialState: CommentPostIdState = {
    post_id: 0
}

export const commentPostIdReducer = (state: CommentPostIdState = initialState, action: PostIdCommentAction): CommentPostIdState => {
    switch (action.type) {
        case CommentPostType.SET_POST_ID:
            return { ...state, post_id: action.payload };
        default:
            return state;
    }
};