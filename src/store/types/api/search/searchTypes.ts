export interface SearchApiState {
    search_items: any[];
    items_in_search: any[];
    render: boolean;
    order: string;
    sort: string;
    accepted: boolean | null;
    body: string;
    tagged: string;
    title: string;
    views: number | null;
    is_modal: boolean;
    loading: boolean;
    error: null | string;
    total: number;
    page_size: number;
    value: string;
}

export enum SearchApiActionTypes {
    FETCH_SEARCH_API = 'FETCH_SEARCH_API',
    FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR',
    FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS',
    SET_API_ITEMS_IN_SEARCH = 'SET_API_ITEMS_IN_SEARCH',
    SET_API_ITEMS_RENDER = 'SET_API_ITEMS_RENDER',
    SET_API_ORDER = 'SET_API_ORDER',
    SET_API_SORT = 'SET_API_SORT',
    SET_API_ACCEPTATION = 'SET_API_ACCEPTATION',
    SET_API_BODY = 'SET_API_BODY',
    SET_API_TAGS = 'SET_API_TAGS',
    SET_API_TITLE = 'SET_API_TITLE',
    SET_API_VIEWS = 'SET_API_VIEWS',
    SET_IS_MODAL = 'SET_IS_MODAL',
    SET_API_SEARCH_TOTAL = 'SET_API_SEARCH_TOTAL',
    SET_API_SEARCH_PAGE_SIZE = 'SET_API_SEARCH_PAGE_SIZE',
    SET_API_SEARCH_VALUE = 'SET_API_SEARCH_VALUE'
}


interface SearchFetchApi {
    type: SearchApiActionTypes.FETCH_SEARCH_API;
}

interface SearchFetchApiError {
    type: SearchApiActionTypes.FETCH_SEARCH_ERROR,
    payload: null | string;
}

interface SearchFetchApiSuccess {
    type: SearchApiActionTypes.FETCH_SEARCH_SUCCESS;
    payload: any[];
}

interface SetSearchApiItemsInSearch {
    type: SearchApiActionTypes.SET_API_ITEMS_IN_SEARCH;
    payload: any[];
}

interface SetSearchApiItemsRender {
    type: SearchApiActionTypes.SET_API_ITEMS_RENDER;
    payload: boolean;
}

interface SetSearchApiOrder{
    type: SearchApiActionTypes.SET_API_ORDER;
    payload: string;
}
interface SetSearchApiSort{
    type: SearchApiActionTypes.SET_API_SORT;
    payload: string;
}
interface SetSearchApiAcceptation{
    type: SearchApiActionTypes.SET_API_ACCEPTATION;
    payload: boolean | null;
}
interface SetSearchApiBody{
    type: SearchApiActionTypes.SET_API_BODY;
    payload: string;
}
interface SetSearchApiTags{
    type: SearchApiActionTypes.SET_API_TAGS;
    payload: string;
}
interface SetSearchApiTitle{
    type: SearchApiActionTypes.SET_API_TITLE;
    payload: string;
}
interface SetSearchApiViews{
    type: SearchApiActionTypes.SET_API_VIEWS;
    payload: number | null;
}
interface SetSearchIsModal{
    type: SearchApiActionTypes.SET_IS_MODAL;
    payload: boolean;
}
interface SetApiSearchTotal{
    type: SearchApiActionTypes.SET_API_SEARCH_TOTAL;
    payload: number;
}
interface SetApiSearchPageSize{
    type: SearchApiActionTypes.SET_API_SEARCH_PAGE_SIZE;
    payload: number;
}
interface SetApiSearchValue{
    type: SearchApiActionTypes.SET_API_SEARCH_VALUE;
    payload: string;
}

export type SearchApiAction = SearchFetchApi | SearchFetchApiError | SearchFetchApiSuccess | SetSearchApiItemsInSearch
    | SetSearchApiOrder | SetSearchApiItemsRender | SetSearchApiSort | SetSearchApiAcceptation | SetSearchApiBody
    | SetSearchApiTags | SetSearchApiTitle | SetSearchApiViews | SetSearchIsModal | SetApiSearchTotal | SetApiSearchPageSize
    | SetApiSearchValue