import { Dispatch } from "redux";
import { ApiActionComments, ApiActionTypesComments } from "../../../types/api/comments/comments_api_endpoint";


export const fetchCommentsApiEndpoint = (question_id: string)  => {
    return async (dispatch: Dispatch<ApiActionComments>) => {
        try {
            dispatch({ type: ApiActionTypesComments.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/questions/${question_id}/comments?order=desc&sort=creation&site=stackoverflow&filter=!bEvCQhrKga-zTC`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            // console.log('API Response Comments:', result);

            let comments = result.items;

            console.log('result items comments',comments)
            setTimeout(() => {
                dispatch({
                    type: ApiActionTypesComments.FETCH_API_SUCCESS,
                    payload: comments
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: ApiActionTypesComments.FETCH_API_ERROR,
                payload: `Caused error when downloading questions`,
            });
            console.log(e)
        }
    };
};

