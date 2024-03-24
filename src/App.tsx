import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Search from "./api_components/search/Search";
import Main from "./components/menu_components/main_component/Main";
import UserQuestion from "./components/user-question/UserQuestion";
import Users from "./components/menu_components/users_component/Users";
import Profile from "./components/user_profile/Profile";
import Tags from "./components/menu_components/tags/Tags";
import AdvancedSearch from "./api_components/search/advancedSearch/AdvancedSearch";
import {useTypedSelector} from "./store/hooks/useTypedSelector";
import {useActions} from "./store/hooks/useActions";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";

function App() {
  const {setSearchIsModal, setSearchItemsRender} = useActions()
  const {is_modal} = useTypedSelector(state => state.search_reducer);

  const ModalWindow = () => {
    setSearchItemsRender(false)
    setSearchIsModal(true)
  }

  return (
      <div>
        <div className='opened'>
          <div className="block">
            <div className='fixed_block'>
              <div className='logo'>PeerToPeer</div>
              <Navigation/>
            </div>
          </div>
          <div className="content_block">
            <div className="panel">
              <Search />
              <button className="" onClick={ModalWindow}>SHOW</button>
              <div>{is_modal && <AdvancedSearch/>}</div>
            </div>
            <div className="content">
              <div className="routes">
                <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/user_question" element={<UserQuestion/>}></Route>
                  <Route path="/users" element={<Users/>}></Route>
                  <Route path="/tags" element={<Tags />}></Route>
                  <Route path="/profile/*" element={<Profile />}></Route>
                  <Route path="/search-results" element={<SearchResultsPage />}></Route>
                </Routes>
              </div>
              <div className="other">

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
