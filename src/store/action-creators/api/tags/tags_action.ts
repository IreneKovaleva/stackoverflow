import { Dispatch } from "redux";
import {TagsApiActionTypes, TagsApiAction, TagsApiState } from "../../../types/api/tags/tags_type";



export const fetchTagsApiEndpoint = (page: number, order: string, sort: string, tag: string)  => {
    return async (dispatch: Dispatch<TagsApiAction>) => {
        try {
            dispatch({ type: TagsApiActionTypes.FETCH_API });

            const apiUrlAllTags =  `https://api.stackexchange.com/2.3/tags?page=${page}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZFk`;
            const apiUrlOneTag = `https://api.stackexchange.com/2.3/tags/${tag}/info?page=${page}&order=${order}&sort=${sort}&site=stackoverflow`;

            const apiUrl = tag !== '' ? apiUrlOneTag : apiUrlAllTags;

            const response = await fetch(apiUrl);
            const result = await response.json();

            let tagElements = result.items;
            let tagTotalPages = result.total
            let tagPageSize = result.page_size;

            if (tag !== '') {
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
