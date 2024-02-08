
export interface QuestionState {
    question_id: string;
    question_items: any[];
    tags: string[] | null;
    owner: Owner[] | null;
    answer_count: number;
    score: number;
    creation_date: number;
    title: string;
    body: string;
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
    SET_QUESTION_ID = 'SET_QUESTION_ID',
    FETCH_API = 'FETCH_API',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    SET_TAGS = 'SET_TAGS',
    SET_OWNER = 'SET_OWNER',
    SET_ANSWER_COUNT = 'SET_ANSWER_COUNT',
    SET_SCORE = 'SET_SCORE',
    SCORE_ADD = 'SCORE_ADD',
    SCORE_DEDUCT = 'SCORE_DEDUCT',
    SET_CREATION_DATE = 'SET_CREATION_DATE',
    SET_TITLE = 'SET_TITLE',
    SET_BODY = 'SET_BODY'
}


interface QuestionSetQuestionId {
    type: QuestionActionTypes.SET_QUESTION_ID,
    payload: string
}

interface QuestionFetchApi {
    type: QuestionActionTypes.FETCH_API;
}

interface QuestionFetchApiError {
    type: QuestionActionTypes.FETCH_API_ERROR,
    payload: null | string;
}

interface QuestionFetchApiSuccess {
    type: QuestionActionTypes.FETCH_API_SUCCESS;
    payload: any[];
}

interface QuestionActionTags {
    type: QuestionActionTypes.SET_TAGS;
    payload: string[] | null;
}

interface QuestionActionOwner {
    type: QuestionActionTypes.SET_OWNER;
    payload: Owner[] | null;
}

interface QuestionActionScoreAdd {
    type: QuestionActionTypes.SCORE_ADD;
    payload: number | null;
}

interface QuestionActionScoreDeduct {
    type: QuestionActionTypes.SCORE_DEDUCT;
    payload: number | null;
}

interface QuestionActionAnswerCount {
    type: QuestionActionTypes.SET_ANSWER_COUNT;
    payload: number;
}

interface QuestionActionScore {
    type: QuestionActionTypes.SET_SCORE;
    payload: number;
}

interface QuestionActionCreationDate {
    type: QuestionActionTypes.SET_CREATION_DATE;
    payload: number;
}

interface QuestionActionTitle {
    type: QuestionActionTypes.SET_TITLE;
    payload: string;
}

interface QuestionActionBody {
    type: QuestionActionTypes.SET_BODY;
    payload: string;
}

export type UserQuestionAction = QuestionSetQuestionId | QuestionFetchApi | QuestionFetchApiError | QuestionFetchApiSuccess | QuestionActionTags | QuestionActionOwner | QuestionActionScoreAdd | QuestionActionScoreDeduct | QuestionActionAnswerCount | QuestionActionScore | QuestionActionCreationDate | QuestionActionTitle | QuestionActionBody
