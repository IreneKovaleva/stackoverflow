
export interface QuestionsApiState {
    questions: any[];
    loading: boolean;
    error: null | string;
    order: string;
    sort: string;
    tags: string;
    total: number;
    page_size: number;
}

export enum QuestionsApiActionTypes {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_TAGS = 'SET_API_TAGS',
    SET_API_QUESTIONS_TOTAL = 'SET_API_QUESTIONS_TOTAL',
    SET_API_QUESTIONS_PAGE_SIZE = 'SET_API_QUESTIONS_PAGE_SIZE'
}

interface QuestionsFetchApiAction{
    type: QuestionsApiActionTypes.FETCH_API
}
interface QuestionsFetchApiSuccessAction{
    type: QuestionsApiActionTypes.FETCH_API_SUCCESS;
    payload: any[];
}
interface QuestionsFetchApiErrorAction{
    type: QuestionsApiActionTypes.FETCH_API_ERROR;
    payload: null | string;
}
interface QuestionsSetApiOrder{
    type: QuestionsApiActionTypes.SET_API_ORDER;
    payload: string;
}
interface QuestionsSetApiSort{
    type: QuestionsApiActionTypes.SET_API_SORT;
    payload: string;
}
interface QuestionsSetApiTags{
    type: QuestionsApiActionTypes.SET_API_TAGS;
    payload: string;
}
interface QuestionsSetApiQuestionsTotal{
    type: QuestionsApiActionTypes.SET_API_QUESTIONS_TOTAL;
    payload: number;
}
interface QuestionsSetApiQuestionsPageSize{
    type: QuestionsApiActionTypes.SET_API_QUESTIONS_PAGE_SIZE;
    payload: number;
}
export type QuestionsApiAction = QuestionsFetchApiAction | QuestionsFetchApiSuccessAction | QuestionsFetchApiErrorAction
    | QuestionsSetApiOrder | QuestionsSetApiSort | QuestionsSetApiTags | QuestionsSetApiQuestionsTotal | QuestionsSetApiQuestionsPageSize