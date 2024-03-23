import { Dispatch } from "redux";
import { QuestionsApiAction, QuestionsApiActionTypes } from "../../../types/api/questions/questions_type";

export const fetchQuestionsApiEndpoint = (page: number, order: string, sort: string, tag: string)  => {
    return async (dispatch: Dispatch<QuestionsApiAction>) => {
        try {
            dispatch({ type: QuestionsApiActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/questions?page=${page}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZFk`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            let filteredData = result.items;
            let questionTotalPages = result.total

            console.log("Data", filteredData)

            if (tag !== '') {
                filteredData = result.items.filter((element: { tags: string[] })  => element.tags.includes(tag));
                questionTotalPages = filteredData.length;
                console.log("filteredData", filteredData)
            }

            dispatch({
                type: QuestionsApiActionTypes.FETCH_API_SUCCESS,
                payload: filteredData
            });

            dispatch({
                type: QuestionsApiActionTypes.SET_API_QUESTIONS_TOTAL,
                payload: questionTotalPages
            });
            dispatch({
                type: QuestionsApiActionTypes.SET_API_QUESTIONS_PAGE_SIZE,
                payload: result.page_size
            });


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

export function setQuestionsTag(tag: string): QuestionsApiAction {
    return {type: QuestionsApiActionTypes.SET_API_TAG, payload: tag}
}
