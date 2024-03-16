export interface CommentPostIdState {
    post_id: number
}

export enum CommentPostType {
    SET_POST_ID = 'SET_POST_ID'
}

export type PostIdCommentAction = {
    type: CommentPostType.SET_POST_ID;
    payload: number;
};

