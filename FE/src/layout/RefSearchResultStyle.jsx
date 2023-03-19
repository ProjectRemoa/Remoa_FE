import styled from 'styled-components';

 const St = {
  Wrapper: styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 86vw;
    height: 456px;
    top:350px;
  `,
  Intro:styled.div`
    position: absolute;
    width: 86vw;
    height: 24px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    display: flex;
  `,
  Coloring:styled.div`
    color:#FADA5E;
    top: -20px;
  `,
  Line:styled.hr`
    position: absolute;
    width: 86vw;
    border: 1px solid #B0B0B0;
    top:29px;
    margin-bottom: 10px;
  `,
}

export default St