import { Dispatch } from "redux";
import { QuestionsApiAction, QuestionsApiActionTypes, QuestionsApiState } from "../../../types/api/questions/questions_type";


export const fetchQuestionsApiEndpoint = (page: number, order: string, sort: string, tags: string)  => {
    return async (dispatch: Dispatch<QuestionsApiAction>) => {
        try {
            dispatch({ type: QuestionsApiActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/questions?page=${page}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZFk`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            let filteredData = result.items;

            if (tags !== '') {
                filteredData = result.items.filter((element:QuestionsApiState)  => element.tags.includes(tags));
            }

            setTimeout(() => {
                dispatch({
                    type: QuestionsApiActionTypes.FETCH_API_SUCCESS,
                    payload: filteredData
                });
            },500)

        } catch (e) {
            dispatch({
                type: QuestionsApiActionTypes.FETCH_API_ERROR,
                payload: `Caused error when downloading questions`,
            });
        }
    };
};

export function setOrder(order: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_ORDER, payload: order}
}

export function setSorting(sort: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_SORT, payload: sort}
}

export function setQuestionsTag(tags: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_TAGS, payload: tags}
}
