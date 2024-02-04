import { Dispatch } from "redux";
import { QuestionsApiAction, QuestionsApiActionTypes, QuestionsApiState } from "../../../types/api/questions/questions_type";


export const fetchQuestionsApiEndpoint = (page: string, order: string, sort: string, tags: string)  => {
    return async (dispatch: Dispatch<QuestionsApiAction>) => {
        try {
            dispatch({ type: QuestionsApiActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/questions?page=${page}&order=${order}&sort=${sort}&site=stackoverflow`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response:', result);

            let filteredData = result.items;

            if (tags !== '') {
                filteredData = result.items.filter((element:QuestionsApiState)  => element.tags.includes(tags));
            }

            dispatch({
                type: QuestionsApiActionTypes.FETCH_API_SUCCESS,
                payload: filteredData
            });

        } catch (e) {
            dispatch({
                type: QuestionsApiActionTypes.FETCH_API_ERROR,
                payload: `Caused error when downloading questions`,
            });
            console.log(e)
        }
    };
};

export function setOrder(order: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_ORDER, payload: order}
}

export function setSorting(sort: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_SORT, payload: sort}
}

export function setPage(page: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_PAGE, payload: page}
}