import { Dispatch } from "redux";
import { UsersApiActionTypes, UsersApiAction } from "../../../types/api/users/users_types";


export const fetchUsersApiEndpoint = (page: string, order: string, sort: string)  => {
    return async (dispatch: Dispatch<UsersApiAction>) => {
        try {
            dispatch({ type: UsersApiActionTypes.FETCH_API_USERS });

            const apiUrl = `https://api.stackexchange.com/2.3/users?order=${order}&sort=${sort}&site=stackoverflow`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response:', result);

            let users = result.items;

            dispatch({
                type: UsersApiActionTypes.FETCH_API_USERS_SUCCESS,
                payload: users
            });


        } catch (e) {
            dispatch({
                type: UsersApiActionTypes.FETCH_API_USERS_ERROR,
                payload: `Caused error when downloading questions`,
            });
            console.log(e)
        }
    };
};

export function setUsersOrder(order: string): UsersApiAction {
    return {type: UsersApiActionTypes.SET_API_USERS_ORDER, payload: order}
}

export function setUsersSorting(sort: string): UsersApiAction {
    return {type: UsersApiActionTypes.SET_API_USERS_SORT, payload: sort}
}

export function setUsersPage(page: string): UsersApiAction {
    return {type: UsersApiActionTypes.SET_API_USERS_PAGE, payload: page}
}