import {UserQuestionAction, QuestionState, QuestionActionTypes} from "../../types/user_question/question_object";

const initialState: QuestionState = {
    tags: null,
    comments: null,
    answers: null,
    owner: null,
    down_vote_count: null,
    up_vote_count: null,
    answer_count: 0,
    score: 0,
    creation_date: 0,
    title: "title",
    body: "body",
    loading: false
}
// export const userQuestionReducer = (state: QuestionState = initialState, action: UserQuestionAction): QuestionState => {
//     switch (action.type) {
//         case QuestionActionTypes.SET_TAGS:
//             return { ...state, tags: action.payload };
//         case QuestionActionTypes.SET_COMMENTS:
//             return { ...state, comments: action.payload };
//         case QuestionActionTypes.SET_ANSWERS:
//             return { ...state, answers: action.payload };
//         case QuestionActionTypes.SET_OWNER:
//             return { ...state, owner: action.payload ? [action.payload] : null };
//         case QuestionActionTypes.SET_DOWN_VOTE_COUNT:
//             return { ...state, down_vote_count: action.payload };
//         case QuestionActionTypes.SET_UP_VOTE_COUNT:
//             return { ...state, up_vote_count: action.payload };
//         case QuestionActionTypes.SET_ANSWER_COUNT:
//             return { ...state, answer_count: action.payload };
//         case QuestionActionTypes.SET_SCORE:
//             return { ...state, score: action.payload };
//         case QuestionActionTypes.SET_CREATION_DATE:
//             return { ...state, creation_date: action.payload };
//         case QuestionActionTypes.SET_TITLE:
//             return { ...state, title: action.payload };
//         case QuestionActionTypes.SET_BODY:
//             return { ...state, body: action.payload };
//         default:
//             return state;
//     }
// };


export const userQuestionReducer = (state:QuestionState = initialState, action: UserQuestionAction): QuestionState  => {
    const mappedUserQuestionAction = actionMap.get(action.type);
    return mappedUserQuestionAction ? mappedUserQuestionAction(state, "payload" in action ? action.payload as any : null) : state;
};



const actionMap = new Map<QuestionActionTypes, (state: QuestionState, payload: any) => QuestionState>([

    [QuestionActionTypes.SET_OBJECT, (state, payload) => ({
        ...state,
        loading: true
    })],

    [QuestionActionTypes.SET_TAGS, (state, payload) => ({
        ...state,
        loading: false,
        tags: payload
    })],

    [QuestionActionTypes.SET_COMMENTS, (state, payload) => ({
        ...state,
        loading: false,
        comments: payload
    })],

    [QuestionActionTypes.SET_ANSWERS, (state, payload) => ({
        ...state,
        loading: false,
        answers: payload
    })],

    [QuestionActionTypes.SET_OWNER, (state, payload) => ({
        ...state,
        loading: false,
        owner: payload
    })],

    [QuestionActionTypes.SET_DOWN_VOTE_COUNT, (state, payload) => ({
        ...state,
        loading: false,
        down_vote_count: payload
    })],

    [QuestionActionTypes.SET_UP_VOTE_COUNT, (state, payload) => ({
        ...state,
        loading: false,
        up_vote_count: payload
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

    [QuestionActionTypes.ADD_SCORE, (state, payload) => ({
        ...state,
        loading: false,
        score: state.score + payload
    })],

    [QuestionActionTypes.DEDUCT_SCORE, (state, payload) => ({
        ...state,
        loading: false,
        score: state.score - payload
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