import {UserQuestionAction, QuestionState, QuestionActionTypes} from "../../types/user_question/user_question_api_endpoint_type";

const initialState: QuestionState = {
    question_id: '',
    question_items: [],
    tags: [],
    owner: null,
    answer_count: 0,
    score: 0,
    creation_date: 0,
    title: "title",
    body: "body",
    loading: false,
    error: null,
}

export const userQuestionReducer = (state:QuestionState = initialState, action: UserQuestionAction): QuestionState  => {
    const mappedUserQuestionAction = actionMap.get(action.type);
    return mappedUserQuestionAction ? mappedUserQuestionAction(state, "payload" in action ? action.payload as any : null) : state;
};

const actionMap = new Map<QuestionActionTypes, (state: QuestionState, payload: any) => QuestionState>([

    [QuestionActionTypes.FETCH_API, (state) => ({
        ...state,
        loading: true
    })],

    [QuestionActionTypes.SET_QUESTION_ID, (state, payload) => ({
        ...state,
        loading: false,
        question_id: payload
    })],

    [QuestionActionTypes.FETCH_API_ERROR, (state, payload) => ({
        ...state,
        loading: false,
        error: payload
    })],

    [QuestionActionTypes.FETCH_API_SUCCESS, (state, payload) => ({
        ...state,
        loading: false,
        question_items: payload
    })],

    [QuestionActionTypes.SET_TAGS, (state, payload) => ({
        ...state,
        loading: false,
        tags: payload
    })],

    [QuestionActionTypes.SET_OWNER, (state, payload) => ({
        ...state,
        loading: false,
        owner: payload
    })],

    [QuestionActionTypes.SCORE_ADD, (state, payload) => ({
        ...state,
        loading: false,
        score: state.score + payload
    })],

    [QuestionActionTypes.SCORE_DEDUCT, (state, payload) => ({
        ...state,
        loading: false,
        score: state.score - payload
    })],

    [QuestionActionTypes.SET_ANSWER_COUNT, (state, payload) => ({
        ...state,
        loading: false,
        answer_count: payload
    })],

    [QuestionActionTypes.SET_SCORE, (state, payload) => ({
        ...state,
        loading: false,
        score: payload
    })],

    [QuestionActionTypes.SET_CREATION_DATE, (state, payload) => ({
        ...state,
        loading: false,
        creation_date: payload
    })],

    [QuestionActionTypes.SET_TITLE, (state, payload) => ({
        ...state,
        loading: false,
        title: payload
    })],

    [QuestionActionTypes.SET_BODY, (state, payload) => ({
        ...state,
        loading: false,
        body: payload
    })],

]);