import {UsersApiAction, UsersApiActionTypes, UsersApiState} from "../../../types/api/users/users_types";


const initialState: UsersApiState = {
    users: [],
    loading: false,
    error: null,
    page: "1",
    order: "desc",
    sort: "reputation"
}

export const apiUsersReducer = (state:UsersApiState = initialState, action: UsersApiAction): UsersApiState => {
    switch (action.type) {
        case UsersApiActionTypes.FETCH_API_USERS:
            return {...state, loading: true}
        case UsersApiActionTypes.FETCH_API_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case UsersApiActionTypes.FETCH_API_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case UsersApiActionTypes.SET_API_USERS_PAGE:
            return {...state, page: action.payload}
        case UsersApiActionTypes.SET_API_USERS_ORDER:
            return {...state, order: action.payload}
        case UsersApiActionTypes.SET_API_USERS_SORT:
            return {...state, sort: action.payload}
        default:
            return state
    }
}
