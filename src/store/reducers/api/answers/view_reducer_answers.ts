import {ViewStateAnswers, ViewActionAnswers, ViewActionTypesAnswers} from "../../../types/api/answers/view_style_answers";

const initialState: ViewStateAnswers = {
    value: 'block'
}

export const viewReducerUserQuestionAnswers = (state: ViewStateAnswers = initialState, action: ViewActionAnswers): ViewStateAnswers => {
    switch (action.type) {
        case ViewActionTypesAnswers.SET_VALUE:
            return { ...state, value: action.payload };
        default:
            return state;
    }
};