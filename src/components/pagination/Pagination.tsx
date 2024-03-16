import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {pages_range} from "../../services/pages_range";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {useActions} from "../../store/hooks/useActions";

const Pagination = () => {
    const {setPageNumber} = useActions()
    const {total_pages, page, limit, siblings, page_in_line} = useTypedSelector(state => state.pages)

    console.log('total_pages',total_pages)
    console.log('limit',limit)
    console.log('siblings',siblings)
    console.log('page_in_line',page_in_line)

    let array = pages_range(total_pages, page, limit, siblings, page_in_line);

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
        <div>
            <ul className='pagination pagination-md justify-content-end margin_page'>
                <li className="page-item"><span className='page-link' onClick={() => pageNumber('&laquo;')}>&laquo;</span></li>
                <li className="page-item"><span className='page-link' onClick={() => pageNumber('&lsaquo;')}>&lsaquo;</span></li>
                {array.map((value: string | number, index: number) => {
                    if (value === page) {
                        return (
                            <li key={index} className="page-item active" onClick={() => pageNumber(value)}><span className='page-link'>{value}</span></li>
                        )
                    } else {
                        return (
                            <li key={index} className="page-item" onClick={() => pageNumber(value)}><span className='page-link'>{value}</span></li>
                        )}
                })}
                <li className="page-item"><span className='page-link' onClick={() => pageNumber('&rsaquo;')}>&rsaquo;</span></li>
                <li className="page-item"><span className='page-link' onClick={() => pageNumber('&raquo;')}>&raquo;</span></li>
            </ul>

        </div>
    )
}
export default Pagination;