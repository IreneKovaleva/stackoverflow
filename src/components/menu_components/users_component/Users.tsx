import React, {useState} from 'react';
import "../MenuComponents.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../../store/hooks/useActions";
import UsersApi from "../../../api_components/users/UsersApi";
import "../../../App.css"

const Users = () => {
    const {setUsersOrder, setUsersSorting} = useActions();
    const [activeSort, setActiveSort] = useState('reputation');
    const [activeOrder, setActiveOrder] = useState('desc');

    const new_order = (event: React.MouseEvent<HTMLElement>) => {
        setUsersOrder((event.target as Element).id);
        setActiveOrder((event.target as Element).id);
    }

    const new_sorting = (event: React.MouseEvent<HTMLElement>) => {
        setUsersSorting((event.target as Element).id);
        setActiveSort((event.target as Element).id);
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
            <div className="buttons_block">
                <div id='general' className='buttons margin'>
                    <button className={activeSort === 'reputation' ? 'button active' : 'button not_active'} id="reputation" onClick={new_sorting}>REPUTATION</button>
                    <button className={activeSort === 'creation' ? 'button active' : 'button not_active'} id="creation" onClick={new_sorting}>CREATION</button>
                </div>
                <div id='order' className='order margin'>
                    <button className={activeOrder === 'desc' ? 'button active' : 'button not_active'} id="desc" onClick={new_order}>DESC</button>
                    <button className={activeOrder === 'asc' ? 'button active' : 'button not_active'} id="asc" onClick={new_order}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <UsersApi/>
            </div>
        </div>
    )
}

export default Users