import React from 'react';
import "./Main.css"
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useActions} from "../../store/hooks/useActions";
import Questions from "../../api_components/questions/Questions";


const Main = () => {
    const { setOrder, setSorting} = useActions();

    const new_order = (event: React.MouseEvent<HTMLElement>) => {
        setOrder((event.target as Element).id);
    }

    const new_sorting = (event: React.MouseEvent<HTMLElement>) => {
        setSorting((event.target as Element).id)
    }

    return (
        <div className="first_block">
            <div className="name">
                <div className="header">Home</div>
                <ul className="link">
                    <li className='breadcrumb-item'>
                        <a href='/Questions'>
                            <FontAwesomeIcon icon={faHouse} className='house'/>
                        </a>
                    </li>
                    <li>
                        <a href='/Questions' className='text'>/  Main</a>
                    </li>

                </ul>
            </div>
            <div className="buttons_block">
                <div id='general' className='buttons margin'>
                    <button className='button' id="creation" onClick={new_sorting}>CREATION</button>
                    <button className='button' id="activity" onClick={new_sorting}>ACTIVITY</button>
                    <button className='button' id="votes" onClick={new_sorting}>VOTES</button>
                </div>
                <div id= 'order' className='order margin'>
                    <button className='button' id="desc" onClick={new_order}>DESC</button>
                    <button className='button' id="asc" onClick={new_order}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <Questions />
            </div>

        </div>
    )
}

export default Main