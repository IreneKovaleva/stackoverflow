import React from 'react';
import "../MenuComponents.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../../store/hooks/useActions";
import TagsApi from "../../../api_components/tags/TagsApi";


const Tags = () => {
    const {setTagsOrder, setTagsSorting} = useActions();

    const newTagsOrder = (event: React.MouseEvent<HTMLElement>) => {
        setTagsOrder((event.target as Element).id);
    }

    const newTagsSorting = (event: React.MouseEvent<HTMLElement>) => {
        setTagsSorting((event.target as Element).id)
    }
    return (
        <div className="first_block">
            <div className="name">
                <div className="header">Tags</div>
                <ul className="link">
                    <li className='breadcrumb-item'>
                        <a href='/Tags'>
                            <FontAwesomeIcon icon={faTags} className='house'/>
                        </a>
                    </li>
                    <li>
                        <a href='/Tags' className='text'>/  Tags</a>
                    </li>

                </ul>
            </div>
            <div className="btns">
                <div id='general' className='buttons margin'>
                    <button className='button' id="activity" onClick={newTagsSorting}>ACTIVITY</button>
                    <button className='button' id="popularity" onClick={newTagsSorting}>POPULARITY</button>
                    <button className='button' id="name" onClick={newTagsSorting}>NAME</button>
                </div>
                <div id= 'order' className='order margin'>
                    <button className='button' id="desc" onClick={newTagsOrder}>DESC</button>
                    <button className='button' id="asc" onClick={newTagsOrder}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <TagsApi />
            </div>

        </div>
    )
}

export default Tags