import {SearchApiAction, SearchApiActionTypes, SearchApiState} from "../../../types/api/search/searchTypes";
import {Dispatch} from "redux";


export const fetchSearchResultsApiEndpoint = (page: number, order: string, sort: string, value: any, accepted: boolean | null, body: string, tagged: string, title: string, views: number | null)  => {
    return async (dispatch: Dispatch<SearchApiAction>) => {
        try {
            dispatch({ type: SearchApiActionTypes.FETCH_SEARCH_API });
            const apiUrl = `https://api.stackexchange.com/2.3/search/advanced?page=${page}&order=${order}&sort=${sort}&q=${value}&accepted=${accepted}&body=${body}&tagged=${tagged}&title=${title}&views=${views}&site=stackoverflow&filter=!T3AudpgBh7vgf_ei4D`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            const search_items = result.items

            dispatch({
                type: SearchApiActionTypes.FETCH_SEARCH_SUCCESS,
                payload: search_items
            });
            dispatch({
                type: SearchApiActionTypes.SET_API_ITEMS_IN_SEARCH,
                payload: search_items.slice(0,5)
            });
            dispatch({
                type: SearchApiActionTypes.SET_API_SEARCH_TOTAL,
                payload: result.total
            });
            dispatch({
                type: SearchApiActionTypes.SET_API_SEARCH_PAGE_SIZE,
                payload: result.page_size
            });

        } catch (e) {
            dispatch({
                type: SearchApiActionTypes.FETCH_SEARCH_ERROR,
                payload: `Caused error when downloading questions`,
            });
        }
    };
};

export function setItemsInSearch(items_in_search: any[]): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_ITEMS_IN_SEARCH, payload: items_in_search}
}
export function setSearchApiOrder(order: string): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_ORDER, payload: order}
}
export function setSearchApiSort(sort: string): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_SORT, payload: sort}
}
export function setSearchApiAcceptation(accept: boolean | null): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_ACCEPTATION, payload: accept}
}
export function setSearchApiBody(body: string): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_BODY, payload: body}
}
export function setSearchApiTagged(tags: string): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_TAGS, payload: tags}
}
export function setSearchApiTitle(title: string): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_TITLE, payload: title}
}
export function setSearchApiViews(views: number | null): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_VIEWS, payload: views}
}
export function setSearchIsModal(isModal: boolean): SearchApiAction {
    return {type: SearchApiActionTypes.SET_IS_MODAL, payload: isModal}
}
export function setSearchItemsRender(render: boolean): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_ITEMS_RENDER, payload: render}
}
export function setSearchApiValue(value: string): SearchApiAction {
    return {type: SearchApiActionTypes.SET_API_SEARCH_VALUE, payload: value}
}