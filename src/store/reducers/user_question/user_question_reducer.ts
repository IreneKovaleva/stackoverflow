import {UserQuestionAction, UserQuestionState, QuestionActionTypes} from "../../types/user_question/user_question_api_endpoint_type";

const initialState: UserQuestionState = {
    question_id: '',
    question_items: [],
    tags: [],
    owner: null,
    answer_count: 0,
    creation_date: 0,
    title: "title",
    body: "body",
    score: 0,
    loading: false,
    error: null
}

export const userQuestionReducer = (state: UserQuestionState = initialState, action: UserQuestionAction): UserQuestionState => {
    switch (action.type) {
        case QuestionActionTypes.SET_USER_QUESTION_ID:
            return { ...state, loading: false, question_id: action.payload };
        case QuestionActionTypes.FETCH_USER_API:
            return { ...state, loading: true};
        case QuestionActionTypes.FETCH_USER_API_ERROR:
            return { ...state, loading: false, error: action.payload };
        case QuestionActionTypes.FETCH_USER_API_SUCCESS:
            return { ...state, loading: false, question_items: action.payload };
        case QuestionActionTypes.SET_USER_TAGS:
            return { ...state, loading: false, tags: action.payload };
        case QuestionActionTypes.SET_USER_OWNER:
            return { ...state, loading: false, owner: action.payload };
        case QuestionActionTypes.SET_USER_ANSWER_COUNT:
            return { ...state, loading: false, answer_count: action.payload };
        case QuestionActionTypes.SET_USER_CREATION_DATE:
            return { ...state, loading: false, creation_date: action.payload };
        case QuestionActionTypes.SET_USER_TITLE:
            return { ...state, loading: false, title: action.payload };
        case QuestionActionTypes.SET_USER_BODY:
            return { ...state, loading: false, body: action.payload };
        case QuestionActionTypes.SET_USER_SCORE:
            return { ...state, loading: false, score: action.payload };
        default:
            return state;
    }
};