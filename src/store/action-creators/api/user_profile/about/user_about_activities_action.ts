import {UserAboutAction, UserAboutApiActionTypes} from "../../../../types/api/user_profile/subcomponents/about/user_about_activities";

export function setUserAboutContent(content: string): UserAboutAction {
    return {type: UserAboutApiActionTypes.SET_API_CONTENT, payload: content}
}
export function setUserAboutFilter(filter: string): UserAboutAction {
    return {type: UserAboutApiActionTypes.SET_API_FILTER, payload: filter}
}
export function setUserAboutOrder(order: string): UserAboutAction {
    const newOrder = order === 'Desc' ? 'Asc' : 'Desc';
    return {type: UserAboutApiActionTypes.SET_API_ORDER, payload: newOrder}
}
export function setUserAboutSorting(sort: string): UserAboutAction {
    return {type: UserAboutApiActionTypes.SET_API_SORT, payload: sort}
}
export function setUserAboutCommentsOrder(comments_order: string): UserAboutAction {
    const newOrder = comments_order === 'Desc' ? 'Asc' : 'Desc';
    return {type: UserAboutApiActionTypes.SET_API_COMMENTS_ORDER, payload: newOrder}
}




