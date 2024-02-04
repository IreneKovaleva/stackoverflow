import { IconDefinition } from '@fortawesome/fontawesome-common-types';


export interface FontAwesomeIconState {
    icon: IconDefinition;
}
export enum FontAwesomeIconActionTypes {
    SET_VALUE = 'SET_VALUE',
}

export type FontAwesomeIconAction = {
    type: FontAwesomeIconActionTypes.SET_VALUE;
    payload: IconDefinition;
};

