import {combineReducers} from "@reduxjs/toolkit";
import {valueReducer} from "./navigation/value_reducer";
import {apiQuestionsReducer} from "./api/questions/questions_reducer";
import {userQuestionReducer} from "./user_question/user_question_reducer";
import {viewReducerUserQuestion} from "./user_question/view_reducer";
import {fontAwesomeIconReducer} from "./user_question/font_awesome_icon_reducer";
import {fontAwesomeIconReducerAnswers} from "./api/answers/font_awesome_icon_reducer_answers";
import {viewReducerUserQuestionAnswers} from "./api/answers/view_reducer_answers";
import {iconReducer} from "./navigation/icon_reducer";
import {commentsApiEndpointReducer} from "./api/comments/comments_api_endpoint_reducer";



export const rootReducer = combineReducers({
    navigation_value: valueReducer,
    navigation_icon: iconReducer,
    api_questions: apiQuestionsReducer,
    user_question: userQuestionReducer,
    question_comments_api: commentsApiEndpointReducer,
    view_reducer_user_question: viewReducerUserQuestion,
    font_awesome_icons: fontAwesomeIconReducer,
    font_awesome_icons_answers: fontAwesomeIconReducerAnswers,
    view_reducer_user_question_answers: viewReducerUserQuestionAnswers
})

export type RootState = ReturnType<typeof rootReducer>