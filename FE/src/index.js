import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./page/login/LoginPage";
import SocialLoginPage from "./page/sociallogin/SocialLoginPage";
import UnknownPage from "./page/UnknownPage";

import RefPage from "./page/reference/RefPage";

import ManageList from "./page/manage/ManageList";
import ManageShare from "./page/manage/ManageShare";
import ManageFeedback from "./page/manage/ManageFeedback";

import MyPageProfilePage from "./page/mypage/MyPageProfilePage";
import MyPageFollowingPage from "./page/mypage/MyPageFollowingPage";
import MyPageWorkPage from "./page/mypage/MyPageWorkPage";
import MyPageScrapPage from "./page/mypage/MyPageScrapPage";
import MyPageFeedbackPage from "./page/mypage/MyPageFeedbackPage";
import MyPageFAQPage from "./page/mypage/MyPageFAQPage";

import SignUpPage from "./page/SignUpPage";
import EmailFind from "./page/findinfo/EmailFind";
import PasswordFind from "./page/findinfo/PasswordFind";
import KakaoLogin from "./containers/sociallogin/KakaoLogin/index.jsx";

import theme from "./layout/theme";

import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import RefModal from "./containers/modal/RefModalPages/RefModal";

import Auth from "./Auth";
import AuthLayout from "./layout/AuthLayout";
import OtherManageList from "./page/manage/OtherManageList";

import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
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
                <Route path="/" element={<RefPage />}>
                  <Route path=":id" element={<RefModal />} />
                </Route>
                <Route path="/ref/:category" element={<RefPage />}>
                  <Route path=":id" element={<RefModal />} />
                </Route>
                <Route path="/ref/search/:search" element={<RefPage />} />

                <Route path="/user/list/:id" element={<OtherManageList />} />
                {/* 다른 사람의 작업물 목록도 보여야 함*/}

                <Route path="/manage/list" element={<ManageList />} />
                <Route path="/manage/list/total" element={<ManageList />} />
                <Route path="/manage/share" element={<ManageShare />} />
                <Route path="/manage/put/:id" element={<ManageShare />} />
                <Route path="/manage/feedback" element={<ManageFeedback />} />
                <Route element={<AuthLayout />}>
                  {/* 레퍼런스 수정 */}
                  <Route
                    path="/mypage/profile"
                    element={<MyPageProfilePage />}
                  />
                  <Route
                    path="/mypage/following"
                    element={<MyPageFollowingPage />}
                  />
                  <Route path="/mypage/work" element={<MyPageWorkPage />} />
                  <Route
                    path="/mypage/myfeedback"
                    element={<MyPageFeedbackPage />}
                  />
                  <Route path="/mypage/scrap" element={<MyPageScrapPage />} />
                  <Route path="/mypage/faq" element={<MyPageFAQPage />} />
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
