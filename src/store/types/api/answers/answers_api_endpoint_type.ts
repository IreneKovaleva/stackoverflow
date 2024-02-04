import {QuestionActionTypes} from "../../user_question/question_object";

export interface ApiStateAnswers {
    items: any[];
    loading: boolean;
    error: null | string;
    page?: string;
    order: string;
    sort: string;
    item_id: string;
    item_comments: string[] | number[];
    score: number
}

export enum ApiActionTypesAnswers {
    FETCH_API = 'FETCH_API',
    FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
    FETCH_API_ERROR = 'FETCH_API_ERROR',
    SET_API_PAGE = 'SET_API_PAGE',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_ITEM_ID = 'SET_API_ITEM_ID',
    SET_API_ITEM_COMMENT_ID = 'SET_API_ITEM_COMMENT_ID',
    SET_API_ITEM_SCORE = 'SET_API_ITEM_SCORE',
    ITEM_ADD_SCORE = 'ITEM_ADD_SCORE',
    ITEM_DEDUCT_SCORE = 'ITEM_DEDUCT_SCORE'
}

interface FetchApiActionAnswers {
    type: ApiActionTypesAnswers.FETCH_API
}
interface FetchApiSuccessActionAnswers {
    type: ApiActionTypesAnswers.FETCH_API_SUCCESS;
    payload: any[];
}
interface FetchApiErrorActionAnswers {
    type: ApiActionTypesAnswers.FETCH_API_ERROR;
    payload: null | string;
}
interface SetApiPageAnswers {
    type: ApiActionTypesAnswers.SET_API_PAGE;
    payload: string;
}
interface SetApiOrderAnswers {
    type: ApiActionTypesAnswers.SET_API_ORDER;
    payload: string;
}
interface SetApiSortAnswers {
    type: ApiActionTypesAnswers.SET_API_SORT;
    payload: string;
}
interface SetApiItemIdAnswers {
    type: ApiActionTypesAnswers.SET_API_ITEM_ID;
    payload: string;
}
interface SetApiCommentItemIdAnswers {
    type: ApiActionTypesAnswers.SET_API_ITEM_COMMENT_ID;
    payload: string[] | number[];
}
interface SetApiItemScoreAnswers {
    type: ApiActionTypesAnswers.SET_API_ITEM_SCORE;
    payload: number;
}

interface AnswersScoreAdd {
    type: ApiActionTypesAnswers.ITEM_ADD_SCORE;
    payload: number;
}

interface AnswersScoreDeduct {
    type: ApiActionTypesAnswers.ITEM_DEDUCT_SCORE;
    payload: number;
}

export type ApiActionAnswers = FetchApiActionAnswers | FetchApiSuccessActionAnswers | FetchApiErrorActionAnswers | SetApiPageAnswers | SetApiOrderAnswers | SetApiSortAnswers | SetApiItemIdAnswers | SetApiCommentItemIdAnswers | SetApiItemScoreAnswers | AnswersScoreAdd | AnswersScoreDeduct