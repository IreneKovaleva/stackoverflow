import {UserQuestionAction, QuestionActionTypes} from "../../types/user_question/question_object";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {FontAwesomeIconAction, FontAwesomeIconActionTypes} from "../../types/user_question/font_awesome_icon_type";
import {ViewAction, ViewActionTypes} from "../../types/user_question/view_type";


export const UserQuestionActionCreatorTags = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_TAGS,
    payload: newValue,
});

export const UserQuestionActionCreatorComments = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_COMMENTS,
    payload: newValue,
});

export const UserQuestionActionCreatorAnswers = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_ANSWERS,
    payload: newValue,
});

export const UserQuestionActionCreatorOwner = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_OWNER,
    payload: newValue,
});

export const UserQuestionActionCreatorDownVoteCount = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_DOWN_VOTE_COUNT,
    payload: newValue,
});

export const UserQuestionActionCreatorUpVoteCount = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_UP_VOTE_COUNT,
    payload: newValue,
});

export const UserQuestionActionCreatorAnswerCount = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_ANSWER_COUNT,
    payload: newValue,
});

export const UserQuestionActionCreatorScore = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_SCORE,
    payload: newValue,
});

export const QuestionActionScoreAdd = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.ADD_SCORE,
    payload: newValue,
});

export const QuestionActionScoreDeduct = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.ADD_SCORE,
    payload: newValue,
});

export const UserQuestionActionCreationDate = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_CREATION_DATE,
    payload: newValue,
});

export const UserQuestionActionCreatorTitle = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_TITLE,
    payload: newValue,
});

export const UserQuestionActionCreatorBody = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SET_BODY,
    payload: newValue,
});

export const setFontAwesomeIcon = (newIcon: IconDefinition): FontAwesomeIconAction => ({
    type: FontAwesomeIconActionTypes.SET_VALUE,
    payload: newIcon,
});

export const setView = (newValue: string): ViewAction => ({
    type: ViewActionTypes.SET_VALUE,
    payload: newValue,
});
