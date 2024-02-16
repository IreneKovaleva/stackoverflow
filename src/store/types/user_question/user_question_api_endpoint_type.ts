
export interface UserQuestionState {
    question_id: string;
    question_items: any[];
    tags: string[] | null;
    owner: Owner[] | null;
    answer_count: number;
    creation_date: number;
    title: string;
    body: string;
    score: number;
    loading: boolean;
    error: null | string;
}


interface Owner {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
}

export enum QuestionActionTypes {
    SET_USER_QUESTION_ID = 'SET_USER_QUESTION_ID',
    FETCH_USER_API = 'FETCH_USER_API',
    FETCH_USER_API_ERROR = 'FETCH_USER_API_ERROR',
    FETCH_USER_API_SUCCESS = 'FETCH_USER_API_SUCCESS',
    SET_USER_TAGS = 'SET_USER_TAGS',
    SET_USER_OWNER = 'SET_USER_OWNER',
    SET_USER_ANSWER_COUNT = 'SET_USER_ANSWER_COUNT',
    SET_USER_CREATION_DATE = 'SET_USER_CREATION_DATE',
    SET_USER_TITLE = 'SET_USER_TITLE',
    SET_USER_BODY = 'SET_USER_BODY',
    SET_USER_SCORE = 'SET_USER_SCORE',
}


interface QuestionSetQuestionId {
    type: QuestionActionTypes.SET_USER_QUESTION_ID,
    payload: string
}

interface QuestionFetchApi {
    type: QuestionActionTypes.FETCH_USER_API;
}

interface QuestionFetchApiError {
    type: QuestionActionTypes.FETCH_USER_API_ERROR,
    payload: null | string;
}

interface QuestionFetchApiSuccess {
    type: QuestionActionTypes.FETCH_USER_API_SUCCESS;
    payload: any[];
}

interface QuestionActionTags {
    type: QuestionActionTypes.SET_USER_TAGS;
    payload: string[] | null;
}

interface QuestionActionOwner {
    type: QuestionActionTypes.SET_USER_OWNER;
    payload: Owner[] | null;
}

interface QuestionActionAnswerCount {
    type: QuestionActionTypes.SET_USER_ANSWER_COUNT;
    payload: number;
}

interface QuestionActionCreationDate {
    type: QuestionActionTypes.SET_USER_CREATION_DATE;
    payload: number;
}

interface QuestionActionTitle {
    type: QuestionActionTypes.SET_USER_TITLE;
    payload: string;
}

interface QuestionActionBody {
    type: QuestionActionTypes.SET_USER_BODY;
    payload: string;
}
interface UserQuestionActionScore {
    type: QuestionActionTypes.SET_USER_SCORE;
    payload: number;
}
export type UserQuestionAction = QuestionSetQuestionId | QuestionFetchApi | QuestionFetchApiError |
    QuestionFetchApiSuccess | QuestionActionTags | QuestionActionOwner | QuestionActionAnswerCount |
    QuestionActionCreationDate | QuestionActionTitle | QuestionActionBody | UserQuestionActionScore
