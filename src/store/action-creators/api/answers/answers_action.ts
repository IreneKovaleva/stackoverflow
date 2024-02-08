import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {
    FontAwesomeIconActionAnswers,
    FontAwesomeIconActionTypesAnswers
} from "../../../types/api/answers/font_awesome_icon_answers";
import {ViewActionAnswers, ViewActionTypesAnswers} from "../../../types/api/answers/view_style_answers";



export const setFontAwesomeIconAnswers = (newIcon: IconDefinition): FontAwesomeIconActionAnswers => ({
    type: FontAwesomeIconActionTypesAnswers.SET_VALUE,
    payload: newIcon,
});

export const setViewAnswers = (newValue: string): ViewActionAnswers => ({
    type: ViewActionTypesAnswers.SET_VALUE,
    payload: newValue,
});