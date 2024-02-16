
export interface UserApiState {
    user_items: any[];
    user_id: string;
    loading: boolean;
    error: null | string;
    about_user: string;

}

export enum UserApiActionTypes {
    FETCH_API_USER_ITEMS = 'FETCH_API_USER_ITEMS',
    FETCH_API_SUCCESS_USER_ITEMS = 'FETCH_API_SUCCESS_USER_ITEMS',
    FETCH_API_ERROR_USER_ITEMS = 'FETCH_API_ERROR_USER_ITEMS',
    SET_API_USER_ID = 'SET_API_USER_ID',
    SET_API_ABOUT_USER = 'SET_API_ABOUT_USER',
}

interface UserFetchApiAction{
    type: UserApiActionTypes.FETCH_API_USER_ITEMS
}
interface UserFetchApiSuccessAction{
    type: UserApiActionTypes.FETCH_API_SUCCESS_USER_ITEMS;
    payload: any[];
}
interface UserFetchApiErrorAction{
    type: UserApiActionTypes.FETCH_API_ERROR_USER_ITEMS;
    payload: null | string;
}
interface SetUserApiIdAction{
    type: UserApiActionTypes.SET_API_USER_ID;
    payload: string;
}
interface SetUserApiAboutAction{
    type: UserApiActionTypes.SET_API_ABOUT_USER;
    payload: string;
}

export type UserItemsApiAction = UserFetchApiAction | UserFetchApiSuccessAction | UserFetchApiErrorAction |
    SetUserApiIdAction | SetUserApiAboutAction