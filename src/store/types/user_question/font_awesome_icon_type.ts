import { IconDefinition } from '@fortawesome/fontawesome-common-types';


export interface FontAwesomeIconState {
    font_awesome_icon: IconDefinition;
}
export enum FontAwesomeIconActionTypes {
    SET_VALUE_ICON = 'SET_VALUE_ICON',
}

export type FontAwesomeIconAction = {
    type: FontAwesomeIconActionTypes.SET_VALUE_ICON;
    payload: IconDefinition;
};

