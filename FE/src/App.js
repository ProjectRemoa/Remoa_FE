import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Meta from './components/common/Meta';
import ScrollToTop from './components/common/ScrollToTop/index.jsx';

// 페이지
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
import KakaoLogin from './containers/sociallogin/KakaoLogin/index.jsx';
import AuthLayout from './layout/AuthLayout';


function App() {
  return (
    <>
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
        <Route path="/user/list/:id" element={<ManageList state={false} />} />
        {/* 다른 사람의 작업물 목록도 보여야 함*/}
        <Route element={<AuthLayout />}>
          <Route path="/manage/list" element={<ManageList state={true} />} />
          <Route path="/manage/share" element={<ManageShare />} />
          <Route path="/manage/put/:id" element={<ManageShare />} />
          <Route path="/manage/feedback" element={<ManageFeedback />} />
          {/* 레퍼런스 수정 */}
          {/* 마이페이지 */}
          <Route path="/mypage/:id" element={<MyPage />}>
            <Route path=":category/new" element={<MyPageFAQNew />} />
            <Route path=":category/:detailId" element={<MyPageFAQDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </>
  );
}

export default App;
