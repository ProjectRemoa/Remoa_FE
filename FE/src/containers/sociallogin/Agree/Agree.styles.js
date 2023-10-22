import styled from 'styled-components'

const AgreeBox = styled.div`
  border: 1px solid #e1e2e5;
  color: #727272;
  font-size: 13px;
  margin: 0px 20px;
  width: 100%;
  padding: 10px;
  max-height: 180px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 9px;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b0b0b0;
    border-radius: 30px;
  }
`;
const S = {
  AgreeBox
}

export default S;