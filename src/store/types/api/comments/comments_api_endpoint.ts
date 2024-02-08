
export interface ApiStateComments {
    comments: CommentItem[];
    loading: boolean;
    error: null | string;
}

interface CommentOwner {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate?: number;
    profile_image: string;
    display_name: string;
    link: string;
}

interface CommentReplyToUser {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate?: number;
    profile_image: string;
    display_name: string;
    link: string;
}

interface CommentItem {
    owner: CommentOwner;
    reply_to_user?: CommentReplyToUser;
    score: number;
    creation_date: number;
    post_id: number;
    comment_id: number;
    body: string;
}

export enum ApiActionTypesComments {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
}

interface FetchApiActionComments {
    type: ApiActionTypesComments.FETCH_API
}
interface FetchApiSuccessActionComments {
    type: ApiActionTypesComments.FETCH_API_SUCCESS;
    payload: any[];
}
interface FetchApiErrorActionComments {
    type: ApiActionTypesComments.FETCH_API_ERROR;
    payload: null | string;
}

export type ApiActionComments = FetchApiActionComments | FetchApiSuccessActionComments | FetchApiErrorActionComments