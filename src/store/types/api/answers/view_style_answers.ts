export interface ViewStateAnswers {
    value: string,
    post_id: number
}

export enum ViewActionTypesAnswers {
    SET_VALUE = 'SET_VALUE',
    SET_POST_ID = 'SET_POST_ID'
}

interface ViewActionAnswers {
    type: ViewActionTypesAnswers.SET_VALUE;
    payload: string;
};

interface PostIdAnswersAction {
    type: ViewActionTypesAnswers.SET_POST_ID;
    payload: number;
};

export type ActionQuestionAnswers = ViewActionAnswers | PostIdAnswersAction