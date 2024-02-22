import {ViewStateAnswers, ActionQuestionAnswers, ViewActionTypesAnswers} from "../../../types/api/answers/view_style_answers";

const initialState: ViewStateAnswers = {
    value: 'block',
    post_id: ''
}

export const viewReducerUserQuestionAnswers = (state: ViewStateAnswers = initialState, action: ActionQuestionAnswers): ViewStateAnswers => {
    switch (action.type) {
        case ViewActionTypesAnswers.SET_VALUE:
            return { ...state, value: action.payload };
        case ViewActionTypesAnswers.SET_POST_ID:
            return { ...state, post_id: action.payload };
        default:
            return state;
    }
};