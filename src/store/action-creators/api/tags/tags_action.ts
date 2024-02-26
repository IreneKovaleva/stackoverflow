import { Dispatch } from "redux";
import {TagsApiActionTypes, TagsApiAction } from "../../../types/api/tags/tags_type";


export const fetchTagsApiEndpoint = (page: string, order: string, sort: string)  => {
    return async (dispatch: Dispatch<TagsApiAction>) => {
        try {
            dispatch({ type: TagsApiActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/tags?page=${page}&order=${order}&sort=${sort}&site=stackoverflow`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response TAGS:', result);

            dispatch({
                type: TagsApiActionTypes.FETCH_API_SUCCESS,
                payload: result.items
            });


        } catch (e) {
            dispatch({
                type: TagsApiActionTypes.FETCH_API_ERROR,
                payload: `Caused error when downloading tags`,
            });
            console.log(e)
        }
    };
};

export function setTagsOrder(order: string): TagsApiAction {
    return {type: TagsApiActionTypes.SET_API_ORDER, payload: order}
}

export function setTagsSorting(sort: string): TagsApiAction {
    return {type: TagsApiActionTypes.SET_API_SORT, payload: sort}
}

export function setTagsPage(page: string): TagsApiAction {
    return {type: TagsApiActionTypes.SET_API_PAGE, payload: page}
}
