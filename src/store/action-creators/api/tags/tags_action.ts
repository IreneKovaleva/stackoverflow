import { Dispatch } from "redux";
import {TagsApiActionTypes, TagsApiAction, TagsApiState } from "../../../types/api/tags/tags_type";



export const fetchTagsApiEndpoint = (page: number, order: string, sort: string, tag: string)  => {
    return async (dispatch: Dispatch<TagsApiAction>) => {
        try {
            dispatch({ type: TagsApiActionTypes.FETCH_API });

            const apiUrl = `https://api.stackexchange.com/2.3/tags?page=${page}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZFk`;

            const response = await fetch(apiUrl);
            const result = await response.json();
            console.log('API Response TAGS:', result);

            let tagElements = result.items;
            let tagTotalPages = result.items.total
            let tagPageSize = result.items.page_size;

            if (tag !== '') {
                tagElements = result.items.filter((element:{name: string})  => element.name === tag);
                tagTotalPages = 1;
                tagPageSize = 1
            }

            dispatch({
                type: TagsApiActionTypes.FETCH_API_SUCCESS,
                payload: tagElements
            });
            dispatch({
                type: TagsApiActionTypes.SET_API_TOTAL_TAGS,
                payload: tagTotalPages
            });
            dispatch({
                type: TagsApiActionTypes.SET_API_PAGE_SIZE,
                payload: tagPageSize
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

export function setTagApi(tag: string): TagsApiAction {
    return {type: TagsApiActionTypes.SET_API_TAG, payload: tag}
}
