import React from "react";
import { Link, useLocation } from "react-router-dom";
import S from "./MyPageContainer.styles";
function MyPageContainer() {
  const location = useLocation();

  const myworkPaths = ["/mypage/work", "/mypage/scrap", "/mypage/myfeedback"];

  const pageLinks = [
    { path: "/mypage/profile", text: "프로필 관리" },
    { path: "/mypage/following", text: "팔로잉 관리" },
    {
      path: myworkPaths.includes(location.pathname)
        ? location.pathname
        : "/mypage/work",
      text: "내 활동 관리",
    },
    { path: "/mypage/faq", text: "공지사항 / FAQ" },
  ];

  return (
    <>
      <S.UnderHeader>
        {pageLinks.map((link) => (
          <S.Sort key={link.path}>
            <Link to={link.path}>
              {location.pathname === link.path ? (
                <S.PageStyle>{link.text}</S.PageStyle>
              ) : (
                link.text
              )}
            </Link>
          </S.Sort>
        ))}
      </S.UnderHeader>
    </>
  );
}

export default MyPageContainer;
