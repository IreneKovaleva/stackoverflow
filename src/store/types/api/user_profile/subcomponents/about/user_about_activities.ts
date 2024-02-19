
export interface UserAboutApiState {
    content: string;
    filter: string;
    order: string;
    sort: string;
    comments_order: string;
}

export enum UserAboutApiActionTypes {
    SET_API_CONTENT = 'SET_API_CONTENT',
    SET_API_FILTER = 'SET_API_FILTER',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_COMMENTS_ORDER = 'SET_API_COMMENTS_ORDER'
}

interface SetContentUserAboutAction{
    type: UserAboutApiActionTypes.SET_API_CONTENT;
    payload: string;
}
interface SetFilterUserAboutAction{
    type: UserAboutApiActionTypes.SET_API_FILTER;
    payload: string;
}
interface SetOrderUserAboutAction{
    type: UserAboutApiActionTypes.SET_API_ORDER;
    payload: string;
}
interface SetSortUserAboutAction{
    type: UserAboutApiActionTypes.SET_API_SORT;
    payload: string;
}
interface SetCommentsOrderUserAboutAction{
    type: UserAboutApiActionTypes.SET_API_COMMENTS_ORDER;
    payload: string;
}

export type UserAboutAction = SetContentUserAboutAction | SetFilterUserAboutAction | SetOrderUserAboutAction |
    SetSortUserAboutAction | SetCommentsOrderUserAboutAction