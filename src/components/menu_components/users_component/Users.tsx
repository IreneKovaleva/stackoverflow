import React from 'react';
import "../MenuComponents.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../../store/hooks/useActions";
import UsersApi from "../../../api_components/users/UsersApi";
import "../../../App.css"

const Users = () => {
    const {setUsersOrder, setUsersSorting} = useActions();

    const new_order = (event: React.MouseEvent<HTMLElement>) => {
        setUsersOrder((event.target as Element).id);
    }

    const new_sorting = (event: React.MouseEvent<HTMLElement>) => {
        setUsersSorting((event.target as Element).id)
    }

    return (
        <div className="first_block">
            <div className="name">
                <div className="header">Users</div>
                <ul className="link">
                    <li className='breadcrumb-item'>
                        <a href='/users'>
                            <FontAwesomeIcon icon={faUser} className='house'/>
                        </a>
                    </li>
                    <li>
                        <a href='/users' className='text'>/ Users</a>
                    </li>

                </ul>
            </div>
            <div className="buttons">
                <div id='general' className='buttons margin'>
                    <button className='button' id="reputation" onClick={new_sorting}>REPUTATION</button>
                    <button className='button' id="creation" onClick={new_sorting}>CREATION</button>
                    <button className='button' id="name" onClick={new_sorting}>NAMES</button>
                </div>
                <div id='order' className='order margin'>
                    <button className='button' id="desc" onClick={new_order}>DESC</button>
                    <button className='button' id="asc" onClick={new_order}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <UsersApi/>
            </div>
        </div>
    )
}

export default Users