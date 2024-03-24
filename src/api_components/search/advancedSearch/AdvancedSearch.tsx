import React from 'react';
import './AdvancedSearch.css';
import {useActions} from "../../../store/hooks/useActions";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import {NavigateFunction, useNavigate} from "react-router-dom";


const AdvancedSearch = () => {
    const navigate:NavigateFunction = useNavigate();
    const {accepted, title, tagged, body, views, value} = useTypedSelector(state => state.search_reducer);
    const {setSearchApiAcceptation, setSearchApiBody,
        setSearchApiTagged, setSearchApiTitle, setSearchApiViews, setSearchIsModal, setSearchItemsRender} = useActions();

    const modalWindow = () => {
        setSearchIsModal(false)
    }

    const acceptedValue = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        const newValue = e.currentTarget.value === "true" ? true : e.currentTarget.value === "false" ? false : null;
        setSearchApiAcceptation(newValue)
    }

    const inputValues = async () => {
        const bodyInput = document.getElementById("body") as HTMLInputElement | null;
        const taggedInput = document.getElementById("tagged") as HTMLInputElement | null;
        const titleInput = document.getElementById("title") as HTMLInputElement | null;
        const viewsInput = document.getElementById("views") as HTMLInputElement | null;
        if (bodyInput !== null && taggedInput !== null && titleInput !== null && viewsInput !== null) {
            let body = bodyInput.value;
            let tagged = taggedInput.value;
            let title = titleInput.value;
            let views = Number(viewsInput.value);
            await setSearchApiBody(body);
            await setSearchApiTagged(tagged);
            await setSearchApiTitle(title);
            await setSearchApiViews(views);
            await setSearchItemsRender(true)
            if (window.location.href !== "/search-results") {
                navigate('/search-results')
            }
        }
    }

    return (
        <div className="advanced_search_block">
            <div>
                <h2>Options</h2>
                    <div className="option-search-block">
                        <label className="option_name">Accepted</label>
                        <select className="advanced_search_element" onChange={(e) => acceptedValue(e)}>
                            <option value="">--choose an option--</option>
                            <option value="true" selected={accepted === true}>true</option>
                            <option value="false" selected={accepted === false}>false</option>
                        </select>
                    </div>
                    <div className="option-search-block">
                        <label className="option_name">Body</label>
                        <input id="body" placeholder='--type a body--' value={body} className="advanced_search_element" onChange={(e) => setSearchApiBody(e.currentTarget.value)}></input>
                    </div>
                    <div className="option-search-block">
                        <label className="option_name">Tagged</label>
                        <input id="tagged" placeholder='--type tags with ;--' value={tagged} type="text" className="advanced_search_element" onChange={(e) => setSearchApiTagged(e.currentTarget.value)}></input>
                    </div>
                    <div className="option-search-block">
                        <label className="option_name">Title</label>
                        <input id="title" placeholder='--type a title--' value={title} type="text" className="advanced_search_element" onChange={(e) => setSearchApiTitle(e.currentTarget.value)}></input>
                    </div>
                    <div className="option-search-block">
                        <label className="option_name">Views</label>
                        <input id="views" placeholder='--type a number of views--' value={String(views)} type="number" className="advanced_search_element" onChange={(e) => setSearchApiViews(Number(e.currentTarget.value))}></input>
                    </div>
            </div>
            <button className="advanced_search_button" onClick={() =>{modalWindow(); inputValues()}}>Accept</button>
        </div>

    );
}

export default AdvancedSearch