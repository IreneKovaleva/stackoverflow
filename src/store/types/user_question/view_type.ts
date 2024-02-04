export interface ViewState {
    value: string,
}

export enum ViewActionTypes {
    SET_VALUE = 'SET_VALUE',
}

export type ViewAction = {
    type: ViewActionTypes.SET_VALUE;
    payload: string;
};