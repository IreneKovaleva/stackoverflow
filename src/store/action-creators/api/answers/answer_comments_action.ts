import { Dispatch } from "redux";
import { ApiStateAnswerComments, ApiActionTypesAnswerComments, ApiActionAnswerComments} from "../../../types/api/answers/answer_comments_api_type";


export const fetchAnswerCommentsApiEndpoint = (page: string, order: string, sort: string, item_id: string)  => {
    return async (dispatch: Dispatch<ApiActionAnswerComments>) => {
        try {
            dispatch({ type: ApiActionTypesAnswerComments.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/comments?page=${page}/${item_id}?order=${order}&sort=${sort}&site=stackoverflow&filter=!nOedRLmSmS`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response:', result);

            dispatch({
                type: ApiActionTypesAnswerComments.FETCH_API_SUCCESS,
                payload: result.items
            });

        } catch (e) {
            dispatch({
                type: ApiActionTypesAnswerComments.FETCH_API_ERROR,
                payload: `Caused error when downloading comments`,
            });
            console.log(e)
        }
    };
};

export function setOrderAnswerComments(order: string): ApiActionAnswerComments {
    return {type: ApiActionTypesAnswerComments.SET_API_ORDER, payload: order}
}

export function setSortingAnswerComments(sort: string): ApiActionAnswerComments {
    return {type: ApiActionTypesAnswerComments.SET_API_SORT, payload: sort}
}

export function setPageAnswerComments(page: string): ApiActionAnswerComments {
    return {type: ApiActionTypesAnswerComments.SET_API_PAGE, payload: page}
}

export function setItemIdAnswerComments(item_id: string): ApiActionAnswerComments {
    return {type: ApiActionTypesAnswerComments.SET_API_ITEM_ID, payload: item_id}
}