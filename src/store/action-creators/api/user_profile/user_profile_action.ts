import { Dispatch } from "redux";
import { UserItemsApiAction, UserApiActionTypes } from "../../../types/api/user_profile/user_profile";


export const fetchUserProfileApiEndpoint = (user_id: string)  => {
    return async (dispatch: Dispatch<UserItemsApiAction>) => {
        try {
            dispatch({ type: UserApiActionTypes.FETCH_API_USER_ITEMS });

            const apiUrl = `https://api.stackexchange.com/2.3/users/${user_id}?order=desc&sort=reputation&site=stackoverflow&filter=!--C8jGId(..Y`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            // console.log('API Response User Profile:', result);

            let user_items = result.items;

            dispatch({
                type: UserApiActionTypes.FETCH_API_SUCCESS_USER_ITEMS,
                payload: user_items
            });

            dispatch({
                type: UserApiActionTypes.SET_API_ABOUT_USER,
                payload: user_items[0].about_me
            });



        } catch (e) {
            dispatch({
                type: UserApiActionTypes.FETCH_API_ERROR_USER_ITEMS,
                payload: `Caused error when downloading user profile`,
            });
        }
    };
};

export function setUserId(user_id: string): UserItemsApiAction {
    return {type: UserApiActionTypes.SET_API_USER_ID, payload: user_id}
}

