import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './page/login/LoginPage';
import SocialLoginPage from './page/sociallogin/SocialLoginPage';
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

import EmailFind from './page/findinfo/EmailFind';
import PasswordFind from './page/findinfo/PasswordFind';

import theme from './layout/theme';

import { ThemeProvider } from 'styled-components';

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
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Style.Wrapper>
      <Routes>
          <Route path="/login" element={ <LoginPage />} />
          <Route path='/sociallogin' element={<SocialLoginPage/>}/>
          <Route path="/emailfind" element={<EmailFind />} />
          <Route path="/passwordfind" element={<PasswordFind />} />

          <Route path='/' element={ <RefIdeaPage />} />
            
          <Route path='/ref/marketing' element={ <RefMarketingPage />} />
          <Route path='/ref/video' element={ <RefVideoPage />} />
          <Route path='/ref/design' element={ <RefDesignPage />} />
          <Route path='/ref/etc' element={ <RefEtcPage />} />

          <Route path='/manage/list' element={ <ManageList />} />
          <Route path='/manage/share' element={ <ManageShare />} />
          <Route path='/manage/feedback' element={ <ManageFeedback />} />

          <Route path='/mypage/profile' element={ <PageProfile />} />
          <Route path='/mypage/following' element={ <PageFollowing />} />
          <Route path='/mypage/scrap' element={ <PageScrap />} />
          <Route path='/mypage/myfeedback' element={ <PageMyFeedback />} />
          <Route path='/mypage/faq' element={ <PageFAQ />} />

          <Route path='*' element={<UnknownPage />} />
      </Routes>
      </Style.Wrapper>
    </BrowserRouter>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
