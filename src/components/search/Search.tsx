import React from 'react';
import './Search.css';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {

    return (
        <div className='wrapper'>
            <div className='search'>
                <input type='search' placeholder='Search ...'></input>
            </div>
            <div className='fon'>
                <div className='sign'>
                    <FontAwesomeIcon id='glass' className="m_glass" icon={faMagnifyingGlass}  />
                </div>
            </div>

        </div>

    );
}

export default Search