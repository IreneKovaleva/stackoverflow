import {ApiActionAnswerComments, ApiActionTypesAnswerComments, ApiStateAnswerComments} from "../../../types/api/answers/answer_comments_api_type";

const initialState: ApiStateAnswerComments = {
    items: [],
    loading: false,
    error: null,
    page: "1",
    order: "desc",
    sort: "creation",
    item_id: ""
}

export const answerCommentsApiReducer = (state = initialState, action: ApiActionAnswerComments): ApiStateAnswerComments => {
    switch (action.type) {
        case ApiActionTypesAnswerComments.FETCH_API:
            return {...state, loading: true}
        case ApiActionTypesAnswerComments.FETCH_API_SUCCESS:
            return {...state, loading: false, items: action.payload}
        case ApiActionTypesAnswerComments.FETCH_API_ERROR:
            return {...state, loading: false, error: action.payload}
        case ApiActionTypesAnswerComments.SET_API_PAGE:
            return {...state, page: action.payload}
        case ApiActionTypesAnswerComments.SET_API_ORDER:
            return {...state, order: action.payload}
        case ApiActionTypesAnswerComments.SET_API_SORT:
            return {...state, sort: action.payload}
        case ApiActionTypesAnswerComments.SET_API_ITEM_ID:
            return {...state, item_id: action.payload}
        default:
            return state
    }
}
