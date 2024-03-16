import {TagsApiAction, TagsApiActionTypes, TagsApiState} from "../../../types/api/tags/tags_type";

const initialState: TagsApiState = {
    tags: [],
    loading: false,
    error: null,
    order: "desc",
    sort: "popular",
    tag: "",
    total: 0,
    page_size: 0
}

export const apiTagsReducer = (state = initialState, action: TagsApiAction): TagsApiState => {
    switch (action.type) {
        case TagsApiActionTypes.FETCH_API:
            return {...state, loading: true}
        case TagsApiActionTypes.FETCH_API_SUCCESS:
            return {...state, loading: false, tags: action.payload}
        case TagsApiActionTypes.FETCH_API_ERROR:
            return {...state, loading: false, error: action.payload}
        case TagsApiActionTypes.SET_API_ORDER:
            return {...state, order: action.payload}
        case TagsApiActionTypes.SET_API_SORT:
            return {...state, sort: action.payload}
        case TagsApiActionTypes.SET_API_TAG:
            return {...state, tag: action.payload}
        case TagsApiActionTypes.SET_API_TOTAL_TAGS:
            return {...state, total: action.payload}
        case TagsApiActionTypes.SET_API_PAGE_SIZE:
            return {...state, page_size: action.payload}
        default:
            return state
    }
}
