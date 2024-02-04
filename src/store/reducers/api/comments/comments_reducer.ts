import {ApiState, ApiAction, ApiActionTypes} from "../../../types/api/comments/api_endpoint_type";


const initialState: ApiState = {
    items: [],
    loading: false,
    error: null,
    page: "1",
    order: "desc",
    sort: "creation",
    item_id: ""
}

export const commentsApiReducer = (state = initialState, action: ApiAction): ApiState => {
    switch (action.type) {
        case ApiActionTypes.FETCH_API:
            return {...state, loading: true}
        case ApiActionTypes.FETCH_API_SUCCESS:
            return {...state, loading: false, items: action.payload}
        case ApiActionTypes.FETCH_API_ERROR:
            return {...state, loading: false, error: action.payload}
        case ApiActionTypes.SET_API_PAGE:
            return {...state, page: action.payload}
        case ApiActionTypes.SET_API_ORDER:
            return {...state, order: action.payload}
        case ApiActionTypes.SET_API_SORT:
            return {...state, sort: action.payload}
        case ApiActionTypes.SET_API_ITEM_ID:
            return {...state, item_id: action.payload}
        default:
            return state
    }
}
