import { Dispatch } from "redux";
import { UsersApiActionTypes, UsersApiAction } from "../../../types/api/users/users_types";


export const fetchUsersApiEndpoint = (page: number, order: string, sort: string)  => {
    return async (dispatch: Dispatch<UsersApiAction>) => {
        try {
            dispatch({ type: UsersApiActionTypes.FETCH_API_USERS });

            const apiUrl = `https://api.stackexchange.com/2.3/users?page=${page}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZFk`;

            const response = await fetch(apiUrl);
            const result = await response.json();

            let users = result.items;

            console.log(users)

            dispatch({
                type: UsersApiActionTypes.FETCH_API_USERS_SUCCESS,
                payload: users
            });
            dispatch({
                type: UsersApiActionTypes.SET_API_USERS_TOTAL_ITEMS,
                payload: users.total
            });
            dispatch({
                type: UsersApiActionTypes.SET_API_USERS_PAGE_SIZE,
                payload: users.page_size
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
