import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './page/login/LoginPage';
import SocialLoginPage from './page/sociallogin/SocialLoginPage';
import UnknownPage from './page/UnknownPage';

import RefPage from './page/reference/RefPage';

import ManageList from './page/management/ManageList';
import ManageShare from './page/management/ManageShare';
import ManageFeedback from './page/management/ManageFeedback';

import PageProfile from './page/mypage/PageProfile';
import PageFollowing from './page/mypage/PageFollowing';
import PageScrap from './page/mypage/PageScrap';
import PageMyFeedback from './page/mypage/PageMyFeedback';
import PageFAQ from './page/mypage/PageFAQ';
import SignUpPage from './page/SignUpPage';

import EmailFind from './page/findinfo/EmailFind';
import PasswordFind from './page/findinfo/PasswordFind';
import KakaoLogin from './containers/sociallogin/KakaoLogin';

import theme from './layout/theme';

import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import RefModal from './containers/modal/RefModal';

import Auth from './Auth';
import AuthLayout from './layout/AuthLayout';
import PageWork from './page/mypage/PageWork';
import OtherManageList from './page/management/OtherManageList';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

axios.defaults.withCredentials = true;
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
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <Style.Wrapper>
              <Routes>
                <Route path="/login" element={<SocialLoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/sociallogin" element={<SocialLoginPage />} />
                <Route path="/login/kakao" element={<KakaoLogin />} />

                {/* 레퍼런스 페이지 */}
                <Route path="/" element={<RefPage />} />
                <Route path="/ref/:category" element={<RefPage />}>
                  <Route path=":id" element={<RefModal />} />
                </Route>
                <Route path="/ref/search/:search" element={<RefPage />} />

                <Route path="/user/list/:id" element={<OtherManageList />} />
                {/* 다른 사람의 작업물 목록도 보여야 함*/}
                <Route element={<AuthLayout />}>
                  <Route path="/manage/list" element={<ManageList />} />
                  <Route path="/manage/list/total" element={<ManageList />} />
                  <Route path="/manage/share" element={<ManageShare />} />
                  <Route path="/manage/put/:id" element={<ManageShare />} />
                  {/* 레퍼런스 수정 */}
                  <Route path="/manage/feedback" element={<ManageFeedback />} />
                  <Route path="/mypage/profile" element={<PageProfile />} />
                  <Route path="/mypage/following" element={<PageFollowing />} />
                  <Route path="/mypage/scrap" element={<PageScrap />} />
                  <Route
                    path="/mypage/myfeedback"
                    element={<PageMyFeedback />}
                  />
                  <Route path="/mypage/work" element={<PageWork />} />
                  <Route path="/mypage/faq" element={<PageFAQ />} />
                </Route>
                <Route path="*" element={<UnknownPage />} />
              </Routes>
            </Style.Wrapper>
          </BrowserRouter>
          <App />
        </RecoilRoot>
      </QueryClientProvider>
    </CookiesProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
