import React, {useState} from 'react';
import './AdvancedSearch.css';
import {useActions} from "../../../store/hooks/useActions";
import {SearchApiAction, SearchApiActionTypes, SearchApiState} from "../../../store/types/api/search/searchTypes";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";


const AdvancedSearch = () => {
    const {setSearchApiOrder, setSearchApiSort, setSearchApiAcceptation, setSearchApiBody,
        setSearchApiTagged, setSearchApiTitle, setSearchApiViews, setSearchIsModal} = useActions();

    const {is_modal} = useTypedSelector(state => state.search_reducer);

    const ModalWindow = () => {
        setSearchIsModal(false)
    }

    const orderOnClick = (e: React.MouseEvent<HTMLSelectElement>) => {
        const newValue = e.currentTarget.value;
        console.log(newValue)
    }


    return (
        <div className="advanced_search_block">
            <div>
                <h2>Options</h2>
                <table>
                    <tbody>
                    <tr>
                        <td className="option_name">Order</td>
                        <select className="advanced_search_element">
                            <option value="">--choose an option--</option>
                            <option id="desc" value="desc">desc</option>
                            <option value="asc">asc</option>
                        </select>
                    </tr>
                    <tr>
                        <td className="option_name">Sort</td>
                        <select className="advanced_search_element">
                            <option value="">--choose an option--</option>
                            <option value="activity">activity</option>
                            <option value="votes">votes</option>
                            <option value="creation">creation</option>
                            <option value="relevance">relevance</option>
                        </select>
                    </tr>
                    <tr>
                        <td className="option_name">Accepted</td>
                        <select className="advanced_search_element">
                            <option value="">--choose an option--</option>
                            <option value="True">true</option>
                            <option value="False">false</option>
                        </select>
                    </tr>
                    <tr>
                        <td className="option_name">Body</td>
                        <input id="order" placeholder='--type a body--' className="advanced_search_element"></input>
                    </tr>
                    <tr>
                        <td className="option_name">Tagged</td>
                        <input id="tagged" placeholder='--type tags with ;--' type="text" className="advanced_search_element"></input>
                    </tr>
                    <tr>
                        <td className="option_name">Title</td>
                        <input id="title" placeholder='--type a title--' type="text" className="advanced_search_element"></input>
                    </tr>
                    <tr>
                        <td className="option_name">Views</td>
                        <input id="views" placeholder='--type a number of views--' type="number" className="advanced_search_element"></input>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button className="advanced_search_button" onClick={ModalWindow}>HIDE</button>
        </div>

    );
}

export default AdvancedSearch