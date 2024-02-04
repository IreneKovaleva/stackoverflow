import {FontAwesomeIconActionAnswers, FontAwesomeIconActionTypesAnswers} from "../../../types/api/answers/font_awesome_icon_answers";
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export const setFontAwesomeIconAnswers = (newIcon: IconDefinition): FontAwesomeIconActionAnswers => ({
    type: FontAwesomeIconActionTypesAnswers.SET_VALUE,
    payload: newIcon,
});