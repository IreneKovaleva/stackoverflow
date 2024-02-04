import {ViewActionTypesAnswers, ViewActionAnswers} from "../../../types/api/answers/view_style_answers";

export const setViewAnswers = (newValue: string): ViewActionAnswers => ({
    type: ViewActionTypesAnswers.SET_VALUE,
    payload: newValue,
});