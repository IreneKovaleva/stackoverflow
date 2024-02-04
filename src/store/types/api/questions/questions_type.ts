
export interface QuestionsApiState {
    questions: any[];
    loading: boolean;
    error: null | string;
    page?: string;
    order?: string;
    sort?: string;
    tags: string;
}

export enum QuestionsApiActionTypes {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    SET_API_PAGE = 'SET_API_PAGE',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_TAGS = 'SET_API_TAGS'
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
interface QuestionsSetApiPage{
    type: QuestionsApiActionTypes.SET_API_PAGE;
    payload: string;
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
export type QuestionsApiAction = QuestionsFetchApiAction | QuestionsFetchApiSuccessAction | QuestionsFetchApiErrorAction | QuestionsSetApiPage | QuestionsSetApiOrder | QuestionsSetApiSort | QuestionsSetApiTags