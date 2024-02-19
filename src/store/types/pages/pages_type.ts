export interface PagesState {
    total_pages: number;
    page: number;
    limit: number;
    siblings: number;
    page_in_line:number;
}

export enum PagesActionTypes {
    SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
    SET_PAGE = 'SET_PAGE',
    SET_LIMIT = 'SET_LIMIT',
    SET_SIBLINGS = 'SET_SIBLINGS',
    SET_PAGE_IN_LINE = 'SET_PAGE_IN_LINE'
}

interface TotalPagesAction {
    type: PagesActionTypes.SET_TOTAL_PAGES;
    payload: number;
};
interface PagesAction {
    type: PagesActionTypes.SET_PAGE;
    payload: number;
};
interface LimitAction {
    type: PagesActionTypes.SET_LIMIT;
    payload: number;
};
interface SiblingsAction {
    type: PagesActionTypes.SET_SIBLINGS;
    payload: number;
};
interface PageInLineAction {
    type: PagesActionTypes.SET_PAGE_IN_LINE;
    payload: number;
};

export type PagesActions = TotalPagesAction | PagesAction | LimitAction | SiblingsAction | PageInLineAction