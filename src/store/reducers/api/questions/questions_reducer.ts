import {QuestionsApiState, QuestionsApiAction, QuestionsApiActionTypes} from "../../../types/api/questions/questions_type";


const initialState: QuestionsApiState = {
    questions: [],
    loading: false,
    error: null,
    page: "1",
    order: "desc",
    sort: "votes",
    tags: ""
}

export const apiQuestionsReducer = (state = initialState, action: QuestionsApiAction): QuestionsApiState => {
    switch (action.type) {
        case QuestionsApiActionTypes.FETCH_API:
            return {...state, loading: true}
        case QuestionsApiActionTypes.FETCH_API_SUCCESS:
            return {...state, loading: false, questions: action.payload}
        case QuestionsApiActionTypes.FETCH_API_ERROR:
            return {...state, loading: false, error: action.payload}
        case QuestionsApiActionTypes.SET_API_PAGE:
            return {...state, page: action.payload}
        case QuestionsApiActionTypes.SET_API_ORDER:
            return {...state, order: action.payload}
        case QuestionsApiActionTypes.SET_API_SORT:
            return {...state, sort: action.payload}
        case QuestionsApiActionTypes.SET_API_TAGS:
            return {...state, tags: action.payload}
        default:
            return state
    }
}
