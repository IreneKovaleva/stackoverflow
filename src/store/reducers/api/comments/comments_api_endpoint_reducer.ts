import {ApiActionComments, ApiActionTypesComments, ApiStateComments} from "../../../types/api/comments/comments_api_endpoint";

const initialState: ApiStateComments = {
    comments: [],
    loading: false,
    error: null
}

export const commentsApiEndpointReducer = (state:ApiStateComments = initialState, action: ApiActionComments): ApiStateComments  => {
    const mappedUserQuestionAction = actionMap.get(action.type);
    return mappedUserQuestionAction ? mappedUserQuestionAction(state, "payload" in action ? action.payload as any : null) : state;
};

const actionMap = new Map<ApiActionTypesComments, (state: ApiStateComments, payload: any) => ApiStateComments>([

    [ApiActionTypesComments.FETCH_API, (state) => ({
        ...state,
        loading: true
    })],

    [ApiActionTypesComments.FETCH_API_ERROR, (state, payload) => ({
        ...state,
        loading: false,
        error: payload
    })],

    [ApiActionTypesComments.FETCH_API_SUCCESS, (state, payload) => ({
        ...state,
        loading: false,
        question_items: payload
    })],

]);