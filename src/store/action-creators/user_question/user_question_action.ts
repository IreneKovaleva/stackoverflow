import {UserQuestionAction, QuestionActionTypes} from "../../types/user_question/user_question_api_endpoint_type";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {FontAwesomeIconAction, FontAwesomeIconActionTypes} from "../../types/user_question/font_awesome_icon_type";
import {ViewAction, ViewActionTypes} from "../../types/user_question/view_type";
import { Dispatch } from "redux";



export const fetchUserQuestionApiEndpoint = ( question_id: string)  => {
    return async (dispatch: Dispatch<UserQuestionAction>) => {
        try {
            dispatch({ type: QuestionActionTypes.FETCH_USER_API });

            const apiUrl = `https://api.stackexchange.com/2.3/questions/${question_id}?order=desc&sort=activity&site=stackoverflow&filter=!4)7wd.G6sgmI5NUgv`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            const questions = result.items[0]


            dispatch({
                type: QuestionActionTypes.FETCH_USER_API_SUCCESS,
                payload: questions
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_TAGS,
                payload: questions.tags
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_TITLE,
                payload: questions.title
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_BODY,
                payload: questions.body
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_CREATION_DATE,
                payload: questions.creation_date
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_ANSWER_COUNT,
                payload: questions.answer_count
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_OWNER,
                payload: questions.owner
            });

            dispatch({
                type: QuestionActionTypes.SET_USER_SCORE,
                payload: questions.score
            });

        } catch (e) {
            dispatch({
                type: QuestionActionTypes.FETCH_USER_API_ERROR,
                payload: `Caused error when downloading comments`,
            });
            console.log(e)
        }
    };
};

export const UserQuestionActionCreatorQuestionId = (newValue: string): UserQuestionAction => ({
    type: QuestionActionTypes.SET_USER_QUESTION_ID,
    payload: newValue,
});

export const setFontAwesomeIcon = (newIcon: IconDefinition): FontAwesomeIconAction => ({
    type: FontAwesomeIconActionTypes.SET_VALUE_ICON,
    payload: newIcon,
});

export const setView = (newValue: string): ViewAction => ({
    type: ViewActionTypes.SET_VALUE,
    payload: newValue,
});

export const setUserQuestionScore = (score: number): UserQuestionAction => ({
    type: QuestionActionTypes.SET_USER_SCORE,
    payload: score,
});
