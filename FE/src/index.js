import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import ToDoPage from './page/ToDoManagement'
import MyPage from './page/MyPage';
import SignUpPage from './page/SignUpPage';
import UnknownPage from './page/UnknownPage';

import RefIdeaPage from './page/reference/RefIdeaPage'
import RefMarketingPage from './page/reference/RefMarketingPage';
import RefVideoPage from './page/reference/RefVideoPage';
import RefDesignPage from './page/reference/RefDesignPage';
import RefEtcPage from './page/reference/RefEtcPage';

import ManageList from './page/management/ManageList.';
import ManageShare from './page/management/ManageShare';
import ManageFeedback from './page/management/ManageFeedback';

import PageProfile from './page/mypage/PageProfile';
import PageFollowing from './page/mypage/PageFollowing'
import PageScrap from './page/mypage/PageScrap';
import PageMyFeedback from './page/mypage/PageMyFeedback';
import PageFAQ from './page/mypage/PageFAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Style = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Style.Wrapper>
      <Routes>
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/todo/*" element={ <ToDoPage />} />
          <Route path="/mypage" element={ <MyPage />} />
          <Route path="/signup" element={<SignUpPage />}/>
      </Routes>
      </Style.Wrapper>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
