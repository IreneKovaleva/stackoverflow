import * as QuestionsApiActionCreator from "./api/questions/questions_action"
import * as UserQuestionActionCreator from "./user_question/user_question_action"
import * as UserAnswersActionCreator from "./api/answers/answers_action"
import * as UsersApiActionCreator from "./api/users/users_action"
import * as UserProfileApiActionCreator from "./api/user_profile/user_profile_action"


export default {
    ...QuestionsApiActionCreator,
    ...UserQuestionActionCreator,
    ...UserAnswersActionCreator,
    ...UsersApiActionCreator,
    ...UserProfileApiActionCreator
}