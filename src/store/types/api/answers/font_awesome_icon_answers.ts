import { IconDefinition } from '@fortawesome/fontawesome-common-types';


export interface FontAwesomeIconStateAnswers {
    font_awesome_icon_answers: IconDefinition;
}
export enum FontAwesomeIconActionTypesAnswers {
    SET_VALUE_ICON_ANSWERS = 'SET_VALUE_ICON_ANSWERS',
}

export type FontAwesomeIconActionAnswers = {
    type: FontAwesomeIconActionTypesAnswers.SET_VALUE_ICON_ANSWERS;
    payload: IconDefinition;
};

