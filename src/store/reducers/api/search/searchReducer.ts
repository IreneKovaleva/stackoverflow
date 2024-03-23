import {SearchApiAction, SearchApiActionTypes, SearchApiState} from "../../../types/api/search/searchTypes";

const initialState: SearchApiState = {
    search_items: [],
    items_in_search: [],
    render: false,
    order: "desc",
    sort: "activity",
    accepted: null,
    body: '',
    tagged: '',
    title: '',
    views: null,
    is_modal: false,
    loading: false,
    error: null,
    total: 0,
    page_size: 0,
    value: ""
}

export const apiSearchReducer = (state = initialState, action: SearchApiAction): SearchApiState => {
    switch (action.type) {
        case SearchApiActionTypes.FETCH_SEARCH_API:
            return { ...state, loading: true};
        case SearchApiActionTypes.FETCH_SEARCH_ERROR:
            return { ...state, loading: false, error: action.payload };
        case SearchApiActionTypes.FETCH_SEARCH_SUCCESS:
            return { ...state, loading: false, search_items: action.payload };
        case SearchApiActionTypes.SET_API_ITEMS_IN_SEARCH:
            return {...state, items_in_search: action.payload};
        case SearchApiActionTypes.SET_API_ITEMS_RENDER:
            return {...state, render: action.payload};
        case SearchApiActionTypes.SET_API_ORDER:
            return {...state, order: action.payload};
        case SearchApiActionTypes.SET_API_SORT:
            return {...state, sort: action.payload};
        case SearchApiActionTypes.SET_API_ACCEPTATION:
            return {...state, accepted: action.payload};
        case SearchApiActionTypes.SET_API_BODY:
            return {...state, body: action.payload};
        case SearchApiActionTypes.SET_API_TAGS:
            return {...state, tagged: action.payload};
        case SearchApiActionTypes.SET_API_TITLE:
            return {...state, title: action.payload};
        case SearchApiActionTypes.SET_API_VIEWS:
            return {...state, views: action.payload};
        case SearchApiActionTypes.SET_IS_MODAL:
            return {...state, is_modal: action.payload};
        case SearchApiActionTypes.SET_API_SEARCH_TOTAL:
            return {...state, total: action.payload};
        case SearchApiActionTypes.SET_API_SEARCH_PAGE_SIZE:
            return {...state, page_size: action.payload}
        case SearchApiActionTypes.SET_API_SEARCH_VALUE:
            return {...state, value: action.payload}
        default:
            return state
    }
}
