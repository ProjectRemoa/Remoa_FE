import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import FirstModal from "../modal/FirstModal";
import RefSearch from "./RefSearch";
const Style = {
  UnderHeader: styled.div`
    box-sizing: border-box;
    position: absolute;
    border: 1px solid #b0b0b0;
    border-radius: 20px;
    width: 803px;
    height: 59px;
    top: 90px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    @media ${(props) => props.theme.desktop} {
      width: 650px;
    }
    @media ${(props) => props.theme.mobile} {
      width: 450px;
      padding-left: 15px;
      padding-right: 15px;
    }
  `,
  Sort: styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #464646;
    cursor: pointer;
    @media ${(props) => props.theme.mobile} {
      font-size: 15px;
      font-weight: 900;
    }
    a {
      text-decoration: none;
    }
    a:active {
      color: inherit;
    }
  `,
  PageStyle: styled.div`
    color: #fada5e;
  `,
};

function ReferenceContainer() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(typeof sessionStorage.getItem("new"));
    if (sessionStorage.getItem("new") === "true") {
      // type이 string
      setModalOpen(true);
      //console.log("First Modal");
    } else {
    }
  }, []);

  const pageLinks = [
    { path: "/", text: "기획/아이디어" },
    { path: "/ref/marketing", text: "광고/마케팅" },
    { path: "/ref/video", text: "영상" },
    { path: "/ref/design", text: "디자인/사진" },
    { path: "/ref/etc", text: "기타아이디어" },
  ];

  return (
    <>
      <>
        {modalOpen && (
          <FirstModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </>
      <Style.UnderHeader>
        {pageLinks.map((link) => (
          <Style.Sort key={link.path}>
            <Link to={link.path}>
              {location.pathname === link.path ? (
                <Style.PageStyle>{link.text}</Style.PageStyle>
              ) : (
                link.text
              )}
            </Link>
          </Style.Sort>
        ))}
      </Style.UnderHeader>
      <RefSearch />
    </>
  );
}

export default ReferenceContainer;
