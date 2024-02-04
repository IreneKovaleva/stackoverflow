import { Dispatch } from "redux";
import { ApiActionAnswers, ApiActionTypesAnswers, ApiStateAnswers } from "../../../types/api/answers/answers_api_endpoint_type";
import {QuestionActionTypes, UserQuestionAction} from "../../../types/user_question/question_object";


export const fetchAnswersApiEndpoint = (page: string, order: string, sort: string, item_id: string)  => {
    return async (dispatch: Dispatch<ApiActionAnswers>) => {
        try {
            dispatch({ type: ApiActionTypesAnswers.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/answers?page=${page}/${item_id}?order=${order}&sort=${sort}&site=stackoverflow&filter=!LJ-PME0mF2VREzrlW8)7dT`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response:', result);

            dispatch({
                type: ApiActionTypesAnswers.FETCH_API_SUCCESS,
                payload: result.items
            });

            if (result.items.length > 0 && result.items[0].hasOwnProperty('score')) {
                dispatch({
                    type: ApiActionTypesAnswers.SET_API_ITEM_SCORE,
                    payload: result.items.score
                });
            }

            if (result.items[0].hasOwnProperty('comments')) {
                let comments: number[] = []
                result.items[0].comments.map((element: {comment_id: number}) => {
                    comments.push(element.comment_id)
                })
                comments.sort(function (a, b) {
                    return a - b;
                })
                dispatch({
                    type: ApiActionTypesAnswers.SET_API_ITEM_COMMENT_ID,
                    payload: comments
                });
            }else {
                let comments: string[] = ['no comments']
                dispatch({
                    type: ApiActionTypesAnswers.SET_API_ITEM_COMMENT_ID,
                    payload: comments
                });
            }

        } catch (e) {
            dispatch({
                type: ApiActionTypesAnswers.FETCH_API_ERROR,
                payload: `Caused error when downloading comments`,
            });
            console.log(e)
        }
    };
};

export function setOrder(order: string): ApiActionAnswers {
    return {type: ApiActionTypesAnswers.SET_API_ORDER, payload: order}
}

export function setSorting(sort: string): ApiActionAnswers {
    return {type: ApiActionTypesAnswers.SET_API_SORT, payload: sort}
}

export function setPage(page: string): ApiActionAnswers {
    return {type: ApiActionTypesAnswers.SET_API_PAGE, payload: page}
}

export function setItemIdAnswers(item_id: string): ApiActionAnswers {
    return {type: ApiActionTypesAnswers.SET_API_ITEM_ID, payload: item_id}
}

export const AnswersActionCreatorScore = (newValue: any): ApiActionAnswers => ({
    type: ApiActionTypesAnswers.SET_API_ITEM_SCORE,
    payload: newValue,
});

export const AnswersActionScoreAdd = (newValue: any): ApiActionAnswers => ({
    type: ApiActionTypesAnswers.ITEM_ADD_SCORE,
    payload: newValue,
});

export const AnswersActionScoreDeduct = (newValue: any): ApiActionAnswers => ({
    type: ApiActionTypesAnswers.ITEM_DEDUCT_SCORE,
    payload: newValue,
});