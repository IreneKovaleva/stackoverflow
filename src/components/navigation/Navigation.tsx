import React from 'react';
import './Navigation.css';
import { faHouse, faUser, faTags} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";


const Navigation = () => {
    const icon = useTypedSelector(state => state.navigation_icon)
    const value = useTypedSelector(state => state.navigation_value)

    return (
        <div className='sections'>
            <a href="/" className={icon?.value}>
                <span className='icon'>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </span>
                <div className={value?.value + ' line'} >Main page</div>
                <span className={value?.value + ' start'}>&#062;</span>
            </a>
            <a href="/users" className={icon?.value}>
                <span className='icon'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
                <div className={value?.value + ' line'}>Users page</div>
                <span className={value?.value + ' start'}>&#062;</span>
            </a>
            <a href="/tags" className={icon?.value}>
                <span className='icon'>
                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </span>
                <div className={value?.value + ' line'}>Tags page</div>
                <span className={value?.value + ' start'}>&#062;</span>
            </a>
        </div>
    );
}

export default Navigation