import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import styled from 'styled-components';
const Style={
  GoToBack: styled.button`
    
  `,
  Text: styled.div`
    
  `
}
function UnknownPage() {
  const Navigate=useNavigate();

  return(
    <Layout>
      <Style.Text>현재는 사용하지 않는 페이지입니다.</Style.Text>
      <Style.GoToBack onClick={() => Navigate(-1)}>뒤로 가기</Style.GoToBack>
    </Layout>
  )
}

export default UnknownPage