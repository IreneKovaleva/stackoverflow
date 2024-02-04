
export interface ApiStateAnswerComments {
    items: any[];
    loading: boolean;
    error: null | string;
    page?: string;
    order?: string;
    sort?: string;
    item_id?: string;
    score?: number
}

export enum ApiActionTypesAnswerComments {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    SET_API_PAGE = 'SET_API_PAGE',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_ITEM_ID = 'SET_API_ITEM_ID',
    SET_API_ITEM_COMMENT_ID = 'SET_API_ITEM_COMMENT_ID',
    SET_API_ITEM_SCORE = 'SET_API_ITEM_SCORE'
}

interface FetchApiActionAnswerComments {
    type: ApiActionTypesAnswerComments.FETCH_API
}
interface FetchApiSuccessActionAnswerComments {
    type: ApiActionTypesAnswerComments.FETCH_API_SUCCESS;
    payload: any[];
}
interface FetchApiErrorActionAnswerComments {
    type: ApiActionTypesAnswerComments.FETCH_API_ERROR;
    payload: null | string;
}
interface SetApiPageAnswerComments {
    type: ApiActionTypesAnswerComments.SET_API_PAGE;
    payload: string;
}
interface SetApiOrderAnswerComments {
    type: ApiActionTypesAnswerComments.SET_API_ORDER;
    payload: string;
}
interface SetApiSortAnswerComments {
    type: ApiActionTypesAnswerComments.SET_API_SORT;
    payload: string;
}
interface SetApiItemIdAnswerComments {
    type: ApiActionTypesAnswerComments.SET_API_ITEM_ID;
    payload: string;
}
interface SetApiCommentItemIdAnswerComments {
    type: ApiActionTypesAnswerComments.SET_API_ITEM_COMMENT_ID;
    payload: string[] | number[];
}
interface SetApiItemScoreAnswerComments {
    type: ApiActionTypesAnswerComments.SET_API_ITEM_SCORE;
    payload: number;
}

export type ApiActionAnswerComments = FetchApiActionAnswerComments | FetchApiSuccessActionAnswerComments | FetchApiErrorActionAnswerComments | SetApiPageAnswerComments | SetApiOrderAnswerComments | SetApiSortAnswerComments | SetApiItemIdAnswerComments | SetApiCommentItemIdAnswerComments | SetApiItemScoreAnswerComments