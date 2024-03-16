import React from 'react';
import './Navigation.css';
import { faHouse, faUser, faTags} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
    return (
        <div className='sections'>
            <a href="/" className="section_opened">
                <span className='icon'>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </span>
                <div className="active_navigation line" >Main page</div>
                <span className="active_navigation start">&#062;</span>
            </a>
            <a href="/users" className="section_opened">
                <span className='icon'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
                <div className="active_navigation line">Users page</div>
                <span className="active_navigation start">&#062;</span>
            </a>
            <a href="/tags" className="section_opened">
                <span className='icon'>
                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </span>
                <div className="active_navigation line">Tags page</div>
                <span className="active_navigation start">&#062;</span>
            </a>
        </div>
    );
}

export default Navigation