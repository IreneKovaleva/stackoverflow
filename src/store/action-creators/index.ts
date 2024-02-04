import * as QuestionsApiActionCreator from "./api/questions/questions_action"
import * as UserQuestionActionCreator from "./user_question/user_question_action"
import * as UserCommentsActionCreator from "./api/comments/comments_action"
import * as UserAnswersActionCreator from "./api/answers/answers_action"



export default {
    ...QuestionsApiActionCreator,
    ...UserQuestionActionCreator,
    ...UserCommentsActionCreator,
    ...UserAnswersActionCreator
}