
export interface TagsApiState {
    tags: any[];
    loading: boolean;
    error: null | string;
    page: string;
    order: string;
    sort: string;
}

export enum TagsApiActionTypes {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    SET_API_PAGE = 'SET_API_PAGE',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
}

interface TagsFetchApiAction{
    type: TagsApiActionTypes.FETCH_API
}
interface TagsFetchApiSuccessAction{
    type: TagsApiActionTypes.FETCH_API_SUCCESS;
    payload: any[];
}
interface TagsFetchApiErrorAction{
    type: TagsApiActionTypes.FETCH_API_ERROR;
    payload: null | string;
}
interface TagsSetApiPage{
    type: TagsApiActionTypes.SET_API_PAGE;
    payload: string;
}
interface TagsSetApiOrder{
    type: TagsApiActionTypes.SET_API_ORDER;
    payload: string;
}
interface TagsSetApiSort{
    type: TagsApiActionTypes.SET_API_SORT;
    payload: string;
}

export type TagsApiAction = TagsFetchApiAction | TagsFetchApiSuccessAction | TagsFetchApiErrorAction | TagsSetApiPage
    | TagsSetApiOrder | TagsSetApiSort