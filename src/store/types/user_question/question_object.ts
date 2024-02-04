export interface QuestionState {
    tags: string[] | null;
    comments: string[] | number[] | null;
    answers: string[] | number[] | null;
    owner: Owner[] | null;
    down_vote_count: number | null;
    up_vote_count: number | null;
    answer_count: number;
    score: number;
    creation_date: number;
    title: string;
    body: string;
    loading: boolean,
}

// export interface Comments {
//     comment_id: number | string
// }

// interface Answers {
//     owner?: Owner;
//     is_accepted?: boolean;
//     score: number;
//     last_activity_date?: number;
//     last_edit_date?: number;
//     creation_date?: number;
//     answer_id?: number;
//     question_id?: number;
//     content_license?: string;
// }

interface Owner {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
}

export enum QuestionActionTypes {
    SET_OBJECT = 'SET_OBJECT',
    SET_TAGS = 'SET_TAGS',
    SET_COMMENTS = 'SET_COMMENTS',
    SET_ANSWERS = 'SET_ANSWERS',
    SET_OWNER = 'SET_OWNER',
    SET_DOWN_VOTE_COUNT = 'SET_DOWN_VOTE_COUNT',
    SET_UP_VOTE_COUNT = 'SET_UP_VOTE_COUNT',
    SET_ANSWER_COUNT = 'SET_ANSWER_COUNT',
    SET_SCORE = 'SET_SCORE',
    ADD_SCORE = 'ADD_SCORE',
    DEDUCT_SCORE = 'DEDUCT_SCORE',
    SET_CREATION_DATE = 'SET_CREATION_DATE',
    SET_TITLE = 'SET_TITLE',
    SET_BODY = 'SET_BODY'
}
interface QuestionActionObject {
    type: QuestionActionTypes.SET_OBJECT;
}

interface QuestionActionTags {
    type: QuestionActionTypes.SET_TAGS;
    payload: string[] | null;
}

interface QuestionActionComments {
    type: QuestionActionTypes.SET_COMMENTS;
    payload: { comment_id: number }[] | null;
}

interface QuestionActionAnswers {
    type: QuestionActionTypes.SET_ANSWERS;
    payload: { answer_id: number }[] | null;
}

interface QuestionActionOwner {
    type: QuestionActionTypes.SET_OWNER;
    payload: Owner | null;
}

interface QuestionActionDownVoteCount {
    type: QuestionActionTypes.SET_DOWN_VOTE_COUNT;
    payload: number | null;
}

interface QuestionActionUpVoteCount {
    type: QuestionActionTypes.SET_UP_VOTE_COUNT;
    payload: number | null;
}

interface QuestionActionAnswerCount {
    type: QuestionActionTypes.SET_ANSWER_COUNT;
    payload: number;
}

interface QuestionActionScore {
    type: QuestionActionTypes.SET_SCORE;
    payload: number;
}

interface QuestionActionScoreAdd {
    type: QuestionActionTypes.ADD_SCORE;
    payload: number;
}

interface QuestionActionScoreDeduct {
    type: QuestionActionTypes.DEDUCT_SCORE;
    payload: number;
}

interface QuestionActionCreationDate {
    type: QuestionActionTypes.SET_CREATION_DATE;
    payload: number;
}

interface QuestionActionTitle {
    type: QuestionActionTypes.SET_TITLE;
    payload: string;
}

interface QuestionActionBody {
    type: QuestionActionTypes.SET_BODY;
    payload: string;
}

export type UserQuestionAction = QuestionActionObject | QuestionActionTags | QuestionActionComments | QuestionActionAnswers |
    QuestionActionOwner | QuestionActionDownVoteCount | QuestionActionUpVoteCount | QuestionActionAnswerCount | QuestionActionScore |
    QuestionActionScoreAdd | QuestionActionScoreDeduct | QuestionActionCreationDate | QuestionActionTitle | QuestionActionBody
