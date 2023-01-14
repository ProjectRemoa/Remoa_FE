import Layout from "../../layout/Layout";
import React from "react";
import ReferenceContainer from "../../containers/reference/ReferenceContainer";
import styled from "styled-components";

function RefIdeaPage() {
  const Style = {
    Wrapper: styled.div`
      box-sizing: border-box;
      position: absolute;
      width: 1241px;
      height: 456px;
      top: 430px;
      background: #FFFFFF;
      border: 1px solid #000000;
    `,
  }

  return (
    <Layout>
      <ReferenceContainer />
      <Style.Wrapper>메인 페이지 및 기획/아이디어 페이지</Style.Wrapper>
    </Layout>
  )
}
export default RefIdeaPage;