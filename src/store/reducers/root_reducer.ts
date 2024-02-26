import {combineReducers} from "@reduxjs/toolkit";
import {valueReducer} from "./navigation/value_reducer";
import {apiQuestionsReducer} from "./api/questions/questions_reducer";
import {userQuestionReducer} from "./user_question/user_question_reducer";
import {viewReducerUserQuestion} from "./user_question/view_reducer";
import {fontAwesomeIconReducer} from "./user_question/font_awesome_icon_reducer";
import {fontAwesomeIconReducerAnswers} from "./api/answers/font_awesome_icon_reducer_answers";
import {viewReducerUserQuestionAnswers} from "./api/answers/view_reducer_answers";
import {iconReducer} from "./navigation/icon_reducer";
import {apiUsersReducer} from "./api/users/users_reducer";
import {apiUserProfileReducer} from "./api/user_profile/user_profile";
import {userAboutReducer} from "./api/user_profile/about/user_about_activities";
import {pagesReducer} from "./pages/pages_reducer";
import {apiTagsReducer} from "./api/tags/tags_reducer";




export const rootReducer = combineReducers({
    navigation_value: valueReducer,
    navigation_icon: iconReducer,
    api_questions: apiQuestionsReducer,
    user_question: userQuestionReducer,
    view_reducer_user_question: viewReducerUserQuestion,
    font_awesome_icons: fontAwesomeIconReducer,
    font_awesome_icons_answers: fontAwesomeIconReducerAnswers,
    view_reducer_user_question_answers: viewReducerUserQuestionAnswers,
    api_users: apiUsersReducer,
    api_user_profile: apiUserProfileReducer,
    user_about: userAboutReducer,
    pages: pagesReducer,
    api_tags: apiTagsReducer
})

export type RootState = ReturnType<typeof rootReducer>