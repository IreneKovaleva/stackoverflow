import React, {useState} from 'react';
import {useActions} from "../../store/hooks/useActions";
import SearchResults from "../../api_components/searchResults/SearchResults";

const SearchResultsPage = () => {
    const {setSearchApiOrder, setSearchApiSort} = useActions();
    const [activeSort, setActiveSort] = useState('votes');
    const [activeOrder, setActiveOrder] = useState('desc');

    const new_order = (event: React.MouseEvent<HTMLElement>) => {
        setSearchApiOrder((event.target as Element).id);
        setActiveOrder((event.target as Element).id);
    }

    const new_sorting = (event: React.MouseEvent<HTMLElement>) => {
        setSearchApiSort((event.target as Element).id);
        setActiveSort((event.target as Element).id);
    }

    return (
        <div className="first_block">
            <div className="name">
                <div className="header">Search Results</div>
            </div>
            <div className="buttons_block">
                <div id='general' className='buttons margin'>
                    <button className={activeSort === 'creation' ? 'button active' : 'button not_active'} id="creation" onClick={new_sorting}>CREATION</button>
                    <button className={activeSort === 'activity' ? 'button active' : 'button not_active'} id="activity" onClick={new_sorting}>ACTIVITY</button>
                    <button className={activeSort === 'votes' ? 'button active' : 'button not_active'} id="votes" onClick={new_sorting}>VOTES</button>
                    <button className={activeSort === 'relevance' ? 'button active' : 'button not_active'} id="relevance" onClick={new_sorting}>RELEVANCE</button>
                </div>
                <div id= 'order' className='order margin'>
                    <button className={activeOrder === 'desc' ? 'button active' : 'button not_active'} id="desc" onClick={new_order}>DESC</button>
                    <button className={activeOrder === 'asc' ? 'button active' : 'button not_active'} id="asc" onClick={new_order}>ASC</button>
                </div>
            </div>
            <div className="rows">
                <SearchResults />
            </div>
        </div>
    )
}

export default SearchResultsPage