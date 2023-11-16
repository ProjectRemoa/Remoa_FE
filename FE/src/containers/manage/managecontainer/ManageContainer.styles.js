import styled from 'styled-components'

const UnderHeader = styled.div`
  box-sizing: border-box;
  position: absolute;
  border-radius: 20px;
  width: 512px;
  height: 51px;
  top: 115px;
  display: flex;
  align-items: center;
  padding: 4px;
  justify-content: space-around;
  background-color: #f7f6f5;
`;
const Sort = styled.div`
  text-align: center;
  cursor: pointer;
  color: #727272;
  font-weight: 500;
  padding: 12px 8px;
`;
const PageStyle = styled.div`
  color: #1e1e1e;
  font-weight: 600;
  font-size: 16px;
`;

const S = {
  UnderHeader,
  Sort,
  PageStyle,
}

export default S;