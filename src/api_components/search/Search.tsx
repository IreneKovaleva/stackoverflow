import React, {useState, useEffect} from 'react';
import './Search.css';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import parse from 'html-react-parser';
import {useActions} from "../../store/hooks/useActions";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {setSearchItemsRender} from "../../store/action-creators/api/search/searchActionCreator";

const Search = () => {
    const navigate:NavigateFunction = useNavigate();
    const {setItemsInSearch, fetchSearchResultsApiEndpoint, setSearchItemsRender, setSearchApiValue} = useActions();
    const {page} = useTypedSelector(state => state.pages);
    const {items_in_search,order, sort, accepted, title, tagged, body, views, render} = useTypedSelector(state => state.search_reducer);
    const input = document.getElementById("search") as HTMLInputElement | null;
    let value = input?.value;

    const searchValue = () => {
        setSearchItemsRender(false);
        fetchSearchResultsApiEndpoint(page, order, sort, value, accepted, body, tagged, title, views);
    }

    const redirect = async () => {
        await setSearchItemsRender(true)
        await setItemsInSearch([]);
        if (value) {
            await setSearchApiValue(value)
        }
        navigate('/search-results')
    }

    return (
        <div className="search_block">
            <div className='wrapper'>
                <div className='search'>
                    <input className="search_input search_text" id="search" type='search' placeholder='Type here ...' onChange={searchValue}></input>
                    <div className='sign' onClick={redirect}>
                        <FontAwesomeIcon id='glass' className="m_glass" icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={items_in_search.length > 0 && !render && value?.trim() !== "" ? "search-results" : "search-results_hidden"}>
                    {items_in_search.map((el, index) => (
                        <div key={el.question_id + "result"} className="search_result_text">{parse("" + el.title)}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;
