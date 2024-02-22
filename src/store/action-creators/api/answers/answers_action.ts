import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {
    FontAwesomeIconActionAnswers,
    FontAwesomeIconActionTypesAnswers
} from "../../../types/api/answers/font_awesome_icon_answers";
import {ActionQuestionAnswers, ViewActionTypesAnswers} from "../../../types/api/answers/view_style_answers";



export const setFontAwesomeIconAnswers = (newIcon: IconDefinition): FontAwesomeIconActionAnswers => ({
    type: FontAwesomeIconActionTypesAnswers.SET_VALUE_ICON_ANSWERS,
    payload: newIcon,
});

export const setViewAnswers = (newValue: string): ActionQuestionAnswers => ({
    type: ViewActionTypesAnswers.SET_VALUE,
    payload: newValue,
});

export const setAnswerPostId = (newValue: string): ActionQuestionAnswers => ({
    type: ViewActionTypesAnswers.SET_POST_ID,
    payload: newValue,
});