import React from 'react';
import './Navigation.css';
import { faHouse, faUser, faTags} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='sections'>
            <NavLink to="/" className="section_opened">
                <span className='icon'>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </span>
                <div className="active_navigation line" >Main page</div>
            </NavLink>
            <NavLink to="/users" className="section_opened">
                <span className='icon'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
                <div className="active_navigation line">Users page</div>
            </NavLink>
            <NavLink to="/tags" className="section_opened">
                <span className='icon'>
                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </span>
                <div className="active_navigation line">Tags page</div>
            </NavLink>
        </div>
    );
}

export default Navigation