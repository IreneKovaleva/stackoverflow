export interface ViewStateAnswers {
    value: string,
}

export enum ViewActionTypesAnswers {
    SET_VALUE = 'SET_VALUE',
}

export type ViewActionAnswers = {
    type: ViewActionTypesAnswers.SET_VALUE;
    payload: string;
};