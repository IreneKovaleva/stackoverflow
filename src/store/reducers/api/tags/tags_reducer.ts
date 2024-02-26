import {TagsApiAction, TagsApiActionTypes, TagsApiState} from "../../../types/api/tags/tags_type";


const initialState: TagsApiState = {
    tags: [],
    loading: false,
    error: null,
    page: "1",
    order: "desc",
    sort: "popular"
}

export const apiTagsReducer = (state = initialState, action: TagsApiAction): TagsApiState => {
    switch (action.type) {
        case TagsApiActionTypes.FETCH_API:
            return {...state, loading: true}
        case TagsApiActionTypes.FETCH_API_SUCCESS:
            return {...state, loading: false, tags: action.payload}
        case TagsApiActionTypes.FETCH_API_ERROR:
            return {...state, loading: false, error: action.payload}
        case TagsApiActionTypes.SET_API_PAGE:
            return {...state, page: action.payload}
        case TagsApiActionTypes.SET_API_ORDER:
            return {...state, order: action.payload}
        case TagsApiActionTypes.SET_API_SORT:
            return {...state, sort: action.payload}
        default:
            return state
    }
}
