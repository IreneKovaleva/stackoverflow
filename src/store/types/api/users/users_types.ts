
export interface UsersApiState {
    users: any[];
    loading: boolean;
    error: null | string;
    order: string;
    sort: string;
    total: number;
    page_size: number;
}

export enum UsersApiActionTypes {
    FETCH_API_USERS = 'FETCH_API_USERS',
    FETCH_API_USERS_SUCCESS = 'FETCH_API_USERS_SUCCESS',
    FETCH_API_USERS_ERROR = 'FETCH_API_USERS_ERROR',
    SET_API_USERS_ORDER = 'SET_API_USERS_ORDER',
    SET_API_USERS_SORT = 'SET_API_USERS_SORT',
    SET_API_USERS_TOTAL_ITEMS = 'SET_API_USERS_TOTAL_ITEMS',
    SET_API_USERS_PAGE_SIZE = 'SET_API_USERS_PAGE_SIZE',
}

interface UsersFetchApiAction{
    type: UsersApiActionTypes.FETCH_API_USERS
}
interface UsersFetchApiSuccessAction{
    type: UsersApiActionTypes.FETCH_API_USERS_SUCCESS;
    payload: any[];
}
interface UsersFetchApiErrorAction{
    type: UsersApiActionTypes.FETCH_API_USERS_ERROR;
    payload: null | string;
}
interface UsersSetApiOrder{
    type: UsersApiActionTypes.SET_API_USERS_ORDER;
    payload: string;
}
interface UsersSetApiSort{
    type: UsersApiActionTypes.SET_API_USERS_SORT;
    payload: string;
}
interface UsersSetApiTotalItems{
    type: UsersApiActionTypes.SET_API_USERS_TOTAL_ITEMS;
    payload: number;
}
interface UsersSetApiPageSize{
    type: UsersApiActionTypes.SET_API_USERS_PAGE_SIZE;
    payload: number;
}

export type UsersApiAction = UsersFetchApiAction | UsersFetchApiSuccessAction | UsersFetchApiErrorAction | UsersSetApiOrder
    | UsersSetApiSort | UsersSetApiTotalItems | UsersSetApiPageSize