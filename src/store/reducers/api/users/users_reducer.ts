import {UsersApiAction, UsersApiActionTypes, UsersApiState} from "../../../types/api/users/users_types";


const initialState: UsersApiState = {
    users: [],
    loading: false,
    error: null,
    order: "desc",
    sort: "reputation",
    total: 0,
    page_size: 0
}

export const apiUsersReducer = (state:UsersApiState = initialState, action: UsersApiAction): UsersApiState => {
    switch (action.type) {
        case UsersApiActionTypes.FETCH_API_USERS:
            return {...state, loading: true}
        case UsersApiActionTypes.FETCH_API_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case UsersApiActionTypes.FETCH_API_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case UsersApiActionTypes.SET_API_USERS_ORDER:
            return {...state, order: action.payload}
        case UsersApiActionTypes.SET_API_USERS_SORT:
            return {...state, sort: action.payload}
        case UsersApiActionTypes.SET_API_USERS_TOTAL_ITEMS:
            return {...state, total: action.payload}
        case UsersApiActionTypes.SET_API_USERS_PAGE_SIZE:
            return {...state, page_size: action.payload}
        default:
            return state
    }
}
