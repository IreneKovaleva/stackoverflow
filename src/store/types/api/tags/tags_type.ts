
export interface TagsApiState {
    tags: any[];
    loading: boolean;
    error: null | string;
    order: string;
    sort: string;
    tag: string;
    total: number;
    page_size: number;
}

export enum TagsApiActionTypes {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_TAG = 'SET_API_TAG',
    SET_API_TOTAL_TAGS = 'SET_API_TOTAL_TAGS',
    SET_API_PAGE_SIZE = 'SET_API_PAGE_SIZE'
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
interface TagsSetApiOrder{
    type: TagsApiActionTypes.SET_API_ORDER;
    payload: string;
}
interface TagsSetApiSort{
    type: TagsApiActionTypes.SET_API_SORT;
    payload: string;
}
interface TagsSetApiTag{
    type: TagsApiActionTypes.SET_API_TAG;
    payload: string;
}
interface TagsSetApiTotalTags{
    type: TagsApiActionTypes.SET_API_TOTAL_TAGS;
    payload: number;
}
interface TagsSetApiPageSize{
    type: TagsApiActionTypes.SET_API_PAGE_SIZE;
    payload: number;
}

export type TagsApiAction = TagsFetchApiAction | TagsFetchApiSuccessAction | TagsFetchApiErrorAction | TagsSetApiOrder |
    TagsSetApiSort | TagsSetApiTag | TagsSetApiTotalTags | TagsSetApiPageSize