import { useEffect } from 'react';
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {useActions} from "../store/hooks/useActions";

export const FetchPostId = () => {
    const {post_id} = useTypedSelector(state => state.view_reducer_user_question_answers)
    const {UserQuestionActionCreatorQuestionId} = useActions()

    useEffect(() => {
        const link = `https://api.stackexchange.com/2.3/answers/${post_id}/questions?order=desc&sort=activity&site=stackoverflow`;
        fetch(link)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.items && result.items.length > 0) {
                        result.items.map((element: { question_id: string }) => {
                            UserQuestionActionCreatorQuestionId(element.question_id)
                        })
                    }
                },
            )
    },[post_id, UserQuestionActionCreatorQuestionId])
}