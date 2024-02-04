export interface IconState {
    value: string,
}

export enum IconActionTypes {
    SET_VALUE = 'SET_VALUE',
}

export type IconAction = {
    type: IconActionTypes.SET_VALUE;
    payload: string;
};