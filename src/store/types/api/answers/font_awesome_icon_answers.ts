import { IconDefinition } from '@fortawesome/fontawesome-common-types';


export interface FontAwesomeIconStateAnswers {
    icon: IconDefinition;
}
export enum FontAwesomeIconActionTypesAnswers {
    SET_VALUE = 'SET_VALUE',
}

export type FontAwesomeIconActionAnswers = {
    type: FontAwesomeIconActionTypesAnswers.SET_VALUE;
    payload: IconDefinition;
};

