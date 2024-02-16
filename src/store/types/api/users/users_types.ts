
export interface UsersApiState {
    users: any[];
    loading: boolean;
    error: null | string;
    page: string;
    order: string;
    sort: string;
}

export enum UsersApiActionTypes {
    FETCH_API_USERS = 'FETCH_API_USERS',
    FETCH_API_USERS_SUCCESS = 'FETCH_API_USERS_SUCCESS',
    FETCH_API_USERS_ERROR = 'FETCH_API_USERS_ERROR',
    SET_API_USERS_PAGE = 'SET_API_USERS_PAGE',
    SET_API_USERS_ORDER = 'SET_API_USERS_ORDER',
    SET_API_USERS_SORT = 'SET_API_USERS_SORT',
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
interface UsersSetApiPage{
    type: UsersApiActionTypes.SET_API_USERS_PAGE;
    payload: string;
}
interface UsersSetApiOrder{
    type: UsersApiActionTypes.SET_API_USERS_ORDER;
    payload: string;
}
interface UsersSetApiSort{
    type: UsersApiActionTypes.SET_API_USERS_SORT;
    payload: string;
}

export type UsersApiAction = UsersFetchApiAction | UsersFetchApiSuccessAction | UsersFetchApiErrorAction |
    UsersSetApiPage | UsersSetApiOrder | UsersSetApiSort