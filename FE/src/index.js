import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SocialLoginPage from './page/sociallogin/SocialLoginPage';
import UnknownPage from './page/UnknownPage';

import RefPage from './page/reference/RefPage';

import ManageList from './page/manage/ManageList';
import ManageShare from './page/manage/ManageShare';
import ManageFeedback from './page/manage/ManageFeedback';

import MyPage from './page/mypage/MyPage';
import MyPageFAQNew from './containers/mypage/MyPageFAQNew';
import MyPageFAQDetail from './containers/mypage/MyPageFAQDetail';

import SignUpPage from './page/SignUpPage';
import EmailFind from './page/findinfo/EmailFind';
import PasswordFind from './page/findinfo/PasswordFind';
import KakaoLogin from './containers/sociallogin/KakaoLogin/index.jsx';

import theme from './layout/theme';

import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import RefModal from './containers/modal/RefModalPages/RefModal';

import Auth from './Auth';
import AuthLayout from './layout/AuthLayout';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollToTop from './components/common/ScrollToTop/index.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100%;
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
              <ScrollToTop />
              <Routes>
                <Route path="/login" element={<SocialLoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/sociallogin" element={<SocialLoginPage />} />
                <Route path="/login/kakao" element={<KakaoLogin />} />

                {/* 레퍼런스 페이지 */}
                <Route path="/" element={<RefPage />}>
                  {/*<Route path=":id" element={<RefModal />} />*/}
                </Route>
                <Route path="/ref/:category" element={<RefPage />}>
                  {/*<Route path=":id" element={<RefModal />} />*/}
                </Route>
                <Route path="/ref/search/:search" element={<RefPage />} />

                <Route
                  path="/user/list/:id"
                  element={<ManageList state={false} />}
                />
                {/* 다른 사람의 작업물 목록도 보여야 함*/}

                <Route element={<AuthLayout />}>
                  <Route
                    path="/manage/list"
                    element={<ManageList state={true} />}
                  />
                  <Route path="/manage/share" element={<ManageShare />} />
                  <Route path="/manage/put/:id" element={<ManageShare />} />
                  <Route path="/manage/feedback" element={<ManageFeedback />} />

                  {/* 레퍼런스 수정 */}

                  {/* 마이페이지 */}
                  <Route path="/mypage/:id" element={<MyPage />}>
                    <Route path=":category/new" element={<MyPageFAQNew />} />
                    <Route
                      path=":category/:detailId"
                      element={<MyPageFAQDetail />}
                    />
                  </Route>
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
