import * as QuestionsApiActionCreator from "./api/questions/questions_action"
import * as UserQuestionActionCreator from "./user_question/user_question_action"
import * as UserAnswersActionCreator from "./api/answers/answers_action"
import * as QuestionCommentsApiActionCreator from "./api/comments/comments_api_endpoint_creation"




export default {
    ...QuestionsApiActionCreator,
    ...UserQuestionActionCreator,
    ...UserAnswersActionCreator,
    ...QuestionCommentsApiActionCreator
}