import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Pagination.css"
import {pagesRange} from "../../services/pagesRange";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";

const Pagination = () => {
    const {setPageNumber} = useActions()
    const {total_pages, page, limit, siblings, page_in_line} = useTypedSelector(state => state.pages)
    let array = pagesRange(total_pages, page, limit, siblings, page_in_line);

    const pageNumber = (el: string | number) => {
        if (el === '&laquo;' || el === '...') {
            setPageNumber(1)
        }else if (el === '&lsaquo;') {
            if (page !== 1) {
                setPageNumber(page - 1)
            }
        }else if (el === '&rsaquo;') {
            if (page !== total_pages) {
                setPageNumber(page + 1)
            }
        }else if (el === '&raquo;' || el === '....') {
            setPageNumber(total_pages)
        } else {
            setPageNumber(Number(el))
        }
    }

    return (
        <div className="pagination_block">
            <div className='pagination'>
                <div className="pagination_element first_element" onClick={() => pageNumber('&laquo;')}>&laquo;</div>
                <div className="pagination_element" onClick={() => pageNumber('&lsaquo;')}>&lsaquo;</div>
                {array.map((value: string | number) => {
                    if (value === page) {
                        return (
                            <div className="pagination_element active_page_pagination" onClick={() => pageNumber(value)} key={`page${value}`}>{value}</div>
                        )
                    } else {
                        return (
                           <div className="pagination_element not_active_page_pagination" onClick={() => pageNumber(value)} key={`page${value}`}>{value}</div>
                        )}
                })}
                <div className="pagination_element" onClick={() => pageNumber('&rsaquo;')}>&rsaquo;</div>
                <div className="pagination_element last_element" onClick={() => pageNumber('&raquo;')}>&raquo;</div>
            </div>
        </div>
    )
}
export default Pagination;