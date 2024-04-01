import {UserAboutApiState, UserAboutApiActionTypes, UserAboutAction} from "../../../../types/api/user_profile/subcomponents/about/user_about_activities"

const initialState: UserAboutApiState = {
    content: 'answers',
    filter: 'filter=!3uW-Cfyr2M5A*vzE6',
    order: 'Asc',
    sort: 'activity',
    comments_order: 'Asc'
}

export const userAboutReducer = (state: UserAboutApiState = initialState, action: UserAboutAction): UserAboutApiState => {
    switch (action.type) {
        case UserAboutApiActionTypes.SET_API_CONTENT:
            return { ...state, content: action.payload };
        case UserAboutApiActionTypes.SET_API_FILTER:
            return { ...state, filter: action.payload };
        case UserAboutApiActionTypes.SET_API_ORDER:
            return { ...state, order: action.payload };
        case UserAboutApiActionTypes.SET_API_SORT:
            return { ...state, sort: action.payload };
        case UserAboutApiActionTypes.SET_API_COMMENTS_ORDER:
            return { ...state, comments_order: action.payload };
        default:
            return state;
    }
};