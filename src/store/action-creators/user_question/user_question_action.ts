import {UserQuestionAction, QuestionActionTypes} from "../../types/user_question/user_question_api_endpoint_type";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {FontAwesomeIconAction, FontAwesomeIconActionTypes} from "../../types/user_question/font_awesome_icon_type";
import {ViewAction, ViewActionTypes} from "../../types/user_question/view_type";
import { Dispatch } from "redux";
import {QuestionsApiActionTypes} from "../../types/api/questions/questions_type";



export const fetchUserQuestionApiEndpoint = ( question_id: string)  => {
    return async (dispatch: Dispatch<UserQuestionAction>) => {
        try {
            dispatch({ type: QuestionActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/questions/${question_id}?order=desc&sort=activity&site=stackoverflow&filter=!4)7wd.G6sgmI5NUgv`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            const questions = result.items[0]
            console.log('API Response Questions', questions);
            setTimeout(() => {
                dispatch({
                    type: QuestionActionTypes.FETCH_API_SUCCESS,
                    payload: questions
                });
            },500)

            dispatch({
                type: QuestionActionTypes.SET_TAGS,
                payload: questions.tags
            });

            dispatch({
                type: QuestionActionTypes.SET_TITLE,
                payload: questions.title
            });

            dispatch({
                type: QuestionActionTypes.SET_BODY,
                payload: questions.body
            });

            dispatch({
                type: QuestionActionTypes.SET_SCORE,
                payload: questions.score
            });

            dispatch({
                type: QuestionActionTypes.SET_CREATION_DATE,
                payload: questions.creation_date
            });

            dispatch({
                type: QuestionActionTypes.SET_ANSWER_COUNT,
                payload: questions.answer_count
            });

            dispatch({
                type: QuestionActionTypes.SET_OWNER,
                payload: questions.owner
            });

        } catch (e) {
            dispatch({
                type: QuestionActionTypes.FETCH_API_ERROR,
                payload: `Caused error when downloading comments`,
            });
            console.log(e)
        }
    };
};

export const UserQuestionActionCreatorQuestionId = (newValue: string): UserQuestionAction => ({
    type: QuestionActionTypes.SET_QUESTION_ID,
    payload: newValue,
});

export const UserQuestionActionCreatorScoreAdd= (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SCORE_ADD,
    payload: newValue,
});

export const UserQuestionActionCreatorScoreDeduct = (newValue: any): UserQuestionAction => ({
    type: QuestionActionTypes.SCORE_DEDUCT,
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
