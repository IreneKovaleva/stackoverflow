import React, {useState} from 'react';
import "../MenuComponents.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags} from "@fortawesome/free-solid-svg-icons";
import {useActions} from "../../../store/hooks/useActions";
import TagsApi from "../../../api_components/tags/TagsApi";

const Tags = () => {
    const {setTagsOrder, setTagsSorting} = useActions();
    const [activeSort, setActiveSort] = useState('popular');
    const [activeOrder, setActiveOrder] = useState('desc');

    const newTagsOrder = (event: React.MouseEvent<HTMLElement>) => {
        setTagsOrder((event.target as Element).id);
        setActiveOrder((event.target as Element).id);
    }

    const newTagsSorting = (event: React.MouseEvent<HTMLElement>) => {
        setTagsSorting((event.target as Element).id);
        setActiveSort((event.target as Element).id);
    }

    return (
        <div className="first_block">
            <div className="name">
                <div className="header">Tags</div>
                <ul className="link">
                    <li className='breadcrumb-item'>
                        <a href='/tags'>
                            <FontAwesomeIcon icon={faTags} className='house'/>
                        </a>
                    </li>
                    <li>
                        <a href='/tags' className='text'>/  Tags</a>
                    </li>
                </ul>
            </div>
            <div className="btns">
                <div id='general' className='buttons margin'>
                    <button className={activeSort === 'activity' ? 'button active' : 'button not_active'} id="activity" onClick={newTagsSorting}>ACTIVITY</button>
                    <button className={activeSort === 'popular' ? 'button active' : 'button not_active'} id="popular" onClick={newTagsSorting}>POPULARITY</button>
                    <button className={activeSort === 'name' ? 'button active' : 'button not_active'} id="name" onClick={newTagsSorting}>NAME</button>
                </div>
                <div id= 'order' className='order margin'>
                    <button className={activeOrder === 'desc' ? 'button active' : 'button not_active'} id="desc" onClick={newTagsOrder}>DESC</button>
                    <button className={activeOrder === 'asc' ? 'button active' : 'button not_active'} id="asc" onClick={newTagsOrder}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <TagsApi />
            </div>
        </div>
    )
}

export default Tags