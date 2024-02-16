import {UserApiActionTypes, UserApiState, UserItemsApiAction} from "../../../types/api/user_profile/user_profile";

const initialState: UserApiState = {
    user_items: [],
    user_id: '',
    loading: false,
    error: '',
    about_user: 'string'
}

export const apiUserProfileReducer = (state:UserApiState = initialState, action: UserItemsApiAction): UserApiState => {
    switch (action.type) {
        case UserApiActionTypes.FETCH_API_USER_ITEMS:
            return {...state, loading: true}
        case UserApiActionTypes.FETCH_API_SUCCESS_USER_ITEMS:
            return {...state, loading: false, user_items: action.payload}
        case UserApiActionTypes.FETCH_API_ERROR_USER_ITEMS:
            return {...state, loading: false, error: action.payload}
        case UserApiActionTypes.SET_API_USER_ID:
            return {...state, user_id: action.payload}
        case UserApiActionTypes.SET_API_ABOUT_USER:
            return {...state, about_user: action.payload}
        default:
            return state
    }
}
