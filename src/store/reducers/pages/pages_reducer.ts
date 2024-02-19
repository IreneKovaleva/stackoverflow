import {PagesActions, PagesActionTypes, PagesState} from "../../types/pages/pages_type";


const initialState: PagesState = {
    total_pages: 25,
    page: 1,
    limit: 25,
    siblings: 7,
    page_in_line: 7
}

export const pagesReducer = (state:PagesState = initialState, action: PagesActions): PagesState => {
    switch (action.type) {
        case PagesActionTypes.SET_TOTAL_PAGES:
            return {...state, total_pages: action.payload}
        case PagesActionTypes.SET_PAGE:
            return {...state, page: action.payload}
        case PagesActionTypes.SET_LIMIT:
            return {...state, limit: action.payload}
        case PagesActionTypes.SET_SIBLINGS:
            return {...state, siblings: action.payload}
        case PagesActionTypes.SET_PAGE_IN_LINE:
            return {...state, page_in_line: action.payload}
        default:
            return state
    }
}
