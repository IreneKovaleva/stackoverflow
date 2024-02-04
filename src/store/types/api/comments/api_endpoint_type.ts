
export interface ApiState {
    items: any[];
    loading: boolean;
    error: null | string;
    page?: string;
    order?: string;
    sort?: string;
    item_id?: string;
    score?: number
}

export enum ApiActionTypes {
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

interface FetchApiAction{
    type: ApiActionTypes.FETCH_API
}
interface FetchApiSuccessAction{
    type: ApiActionTypes.FETCH_API_SUCCESS;
    payload: any[];
}
interface FetchApiErrorAction{
    type: ApiActionTypes.FETCH_API_ERROR;
    payload: null | string;
}
interface SetApiPage{
    type: ApiActionTypes.SET_API_PAGE;
    payload: string;
}
interface SetApiOrder{
    type: ApiActionTypes.SET_API_ORDER;
    payload: string;
}
interface SetApiSort{
    type: ApiActionTypes.SET_API_SORT;
    payload: string;
}
interface SetApiItemId{
    type: ApiActionTypes.SET_API_ITEM_ID;
    payload: string;
}
interface SetApiCommentItemId{
    type: ApiActionTypes.SET_API_ITEM_COMMENT_ID;
    payload: string[] | number[];
}
interface SetApiItemScore{
    type: ApiActionTypes.SET_API_ITEM_SCORE;
    payload: number;
}

export type ApiAction = FetchApiAction | FetchApiSuccessAction | FetchApiErrorAction | SetApiPage | SetApiOrder | SetApiSort | SetApiItemId | SetApiCommentItemId | SetApiItemScore