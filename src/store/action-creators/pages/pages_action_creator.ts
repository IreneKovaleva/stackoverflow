import {PagesActionTypes, PagesActions} from "../../types/pages/pages_type"

export function setTotalPages(total: number): PagesActions {
    return {type: PagesActionTypes.SET_TOTAL_PAGES, payload: total}
}
export function setPageNumber(page: number): PagesActions {
    return {type: PagesActionTypes.SET_PAGE, payload: page}
}
export function setPagesLimit(limit: number): PagesActions {
    return {type: PagesActionTypes.SET_LIMIT, payload: limit}
}
export function setPagesSiblings(siblings: number): PagesActions {
    return {type: PagesActionTypes.SET_SIBLINGS, payload: siblings}
}
export function setPageInLine(page_in_line: number): PagesActions {
    return {type: PagesActionTypes.SET_PAGE_IN_LINE, payload: page_in_line}
}




