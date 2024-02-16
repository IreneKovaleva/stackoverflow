import React from 'react';
import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import {useTypedSelector} from "./store/hooks/useTypedSelector";
import { faUserLarge} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search/Search";
import Main from "./components/main_component/Main";
import UserQuestion from "./components/user-question/UserQuestion";
import Users from "./components/users_component/Users";
import Profile from "./components/user_profile/Profile";

function App() {
  // const navigate = useNavigate();


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
              <div className='panel_search'>
                <Search />
              </div>
              <div className='panel_portfolio'>
                <a href="/profile">
                  <FontAwesomeIcon className='panel_portfolio_user' icon={faUserLarge}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="content">
              <div className="routes">
                <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/user_question" element={<UserQuestion/>}></Route>
                  <Route path="/users" element={<Users/>}></Route>
                  <Route path="/profile/*" element={<Profile />}></Route>

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
