export interface ValueState {
    value: string,
}

export enum ValueActionTypes {
    SET_VALUE = 'SET_VALUE',
}

export type ValueAction = {
    type: ValueActionTypes.SET_VALUE;
    payload: string;
};