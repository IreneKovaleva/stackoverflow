import {ApiStateAnswers, ApiActionAnswers, ApiActionTypesAnswers} from "../../../types/api/answers/answers_api_endpoint_type";


const initialState: ApiStateAnswers = {
    items: [],
    loading: false,
    error: null,
    page: "1",
    order: "desc",
    sort: "activity",
    item_id: "",
    item_comments: [],
    score: 0
}

export const answersApiReducer = (state = initialState, action: ApiActionAnswers): ApiStateAnswers => {
    switch (action.type) {
        case ApiActionTypesAnswers.FETCH_API:
            return {...state, loading: true}
        case ApiActionTypesAnswers.FETCH_API_SUCCESS:
            return {...state, loading: false, items: action.payload}
        case ApiActionTypesAnswers.FETCH_API_ERROR:
            return {...state, loading: false, error: action.payload}
        case ApiActionTypesAnswers.SET_API_PAGE:
            return {...state, page: action.payload}
        case ApiActionTypesAnswers.SET_API_ORDER:
            return {...state, order: action.payload}
        case ApiActionTypesAnswers.SET_API_SORT:
            return {...state, sort: action.payload}
        case ApiActionTypesAnswers.SET_API_ITEM_ID:
            return {...state, item_id: action.payload}
        case ApiActionTypesAnswers.SET_API_ITEM_COMMENT_ID:
            return {...state, item_comments: action.payload}
        case ApiActionTypesAnswers.SET_API_ITEM_SCORE:
            return {...state, score: action.payload}
        case ApiActionTypesAnswers.ITEM_ADD_SCORE:
            return {...state, score: state.score + action.payload}
        case ApiActionTypesAnswers.ITEM_DEDUCT_SCORE:
            return {...state, score: state.score - action.payload}
        default:
            return state
    }
}
