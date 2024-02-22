import React from "react";
import UserAnswers from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_answers/UserAnswers";
import UserQuestions
    from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_questions/UserQuestions";
import UserComments
    from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_comments/UserComments";
import UserPrivileges
    from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_privileges/UserPrivileges";
import UserBadges from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_badges/UserBadges";
import UserTags from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_tags/UserTags";
import UserPosts from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_posts/UserPosts";
import UserReputation
    from "../api_components/user_profile/subcomponents/activity/user_activity_items/subcomponents/user_reputation/UserReputation";

export const userActivityType = (type: string): React.FC<any> | null=> {
    switch (type) {
        case 'answers':
            return UserAnswers;
        case 'questions':
            return UserQuestions;
        case 'comments':
            return UserComments;
        case 'privileges':
            return UserPrivileges;
        case 'badges':
            return UserBadges;
        case 'tags':
            return UserTags;
        case 'posts':
            return UserPosts;
        case 'reputation':
            return UserReputation;
        default:
            return null;
    }
}
