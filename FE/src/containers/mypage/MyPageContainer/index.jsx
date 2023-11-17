import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styledComponent from "./MyPageContainer.styles";
const { Wrapper, Sort } = styledComponent;

function MyPageContainer() {
  const location = useLocation();

  const myWorkPaths = ["/mypage/work", "/mypage/myfeedback", "/mypage/scrap"];

  const pageLinks = [
    { path: "/mypage/profile", text: "프로필 관리" },
    { path: "/mypage/following", text: "팔로잉 관리" },
    {
      path: "/mypage/work",
      text: "내 활동 관리",
      active: myWorkPaths.includes(location.pathname),
    },
    {
      path: "/mypage/faq",
      text: "공지사항 및 문의",
    },
  ];

  return (
    <Wrapper>
      {pageLinks.map((link) => (
        <Sort key={link.path}>
          <NavLink to={link.path} className={link.active ? "active" : ""}>
            {link.text}
          </NavLink>
        </Sort>
      ))}
    </Wrapper>
  );
}

export default MyPageContainer;
