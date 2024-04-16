import React, {useState} from 'react';
import "../MenuComponents.css"
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useActions} from "../../../store/hooks/useActions";
import Questions from "../../../api_components/questions/Questions";

const Main = () => {
    const {setOrder, setSorting} = useActions();
    const [activeSort, setActiveSort] = useState('votes');
    const [activeOrder, setActiveOrder] = useState('desc');

    const new_order = (event: React.MouseEvent<HTMLElement>) => {
        if (event && event.target) {
            setOrder((event.target as Element).id);
            setActiveOrder((event.target as Element).id);
        }
    }

    const new_sorting = (event: React.MouseEvent<HTMLElement>) => {
        if (event && event.target) {
            setSorting((event.target as Element).id);
            setActiveSort((event.target as Element).id);
        }
    }

    return (
        <div className="first_block">
            <div className="name">
                <div className="header">Home</div>
                <ul className="link">
                    <li className='breadcrumb-item'>
                        <a href='/'>
                            <FontAwesomeIcon icon={faHouse} className='house'/>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='text'>/  Main</a>
                    </li>

                </ul>
            </div>
            <div className="buttons_block">
                <div id='general' className='buttons margin'>
                    <button className={activeSort === 'creation' ? 'button active' : 'button not_active'} id="creation" data-testid="creation-button" onClick={new_sorting}>CREATION</button>
                    <button className={activeSort === 'activity' ? 'button active' : 'button not_active'} id="activity" onClick={new_sorting} data-testid="activity-button">ACTIVITY</button>
                    <button className={activeSort === 'votes' ? 'button active' : 'button not_active'} id="votes" onClick={new_sorting} data-testid="votes-button">VOTES</button>
                </div>
                <div id= 'order' className='order margin'>
                    <button className={activeOrder === 'desc' ? 'button active' : 'button not_active'} id="desc" data-testid="desc-button" onClick={new_order}>DESC</button>
                    <button className={activeOrder === 'asc' ? 'button active' : 'button not_active'} id="asc" data-testid="asc-button" onClick={new_order}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <Questions />
            </div>
        </div>
    )
}

export default Main