import { Dispatch } from "redux";
import { ApiAction, ApiActionTypes, ApiState } from "../../../types/api/comments/api_endpoint_type";


export const fetchCommentsApiEndpoint = (page: string, order: string, sort: string, item_id: string)  => {
    return async (dispatch: Dispatch<ApiAction>) => {
        try {
            dispatch({ type: ApiActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/comments?page=${page}/${item_id}?order=${order}&sort=${sort}&site=stackoverflow&filter=!nOedRLmSmS`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response:', result);

            dispatch({
                type: ApiActionTypes.FETCH_API_SUCCESS,
                payload: result.items
            });

        } catch (e) {
            dispatch({
                type: ApiActionTypes.FETCH_API_ERROR,
                payload: `Caused error when downloading comments`,
            });
            console.log(e)
        }
    };
};

export function setOrder(order: string): ApiAction {
    return {type: ApiActionTypes.SET_API_ORDER, payload: order}
}

export function setSorting(sort: string): ApiAction {
    return {type: ApiActionTypes.SET_API_SORT, payload: sort}
}

export function setPage(page: string): ApiAction {
    return {type: ApiActionTypes.SET_API_PAGE, payload: page}
}

export function setItemId(item_id: string): ApiAction {
    return {type: ApiActionTypes.SET_API_ITEM_ID, payload: item_id}
}