import styled from 'styled-components';

const UnderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 512px;
  height: 51px;
  margin: 43px auto 0;
  padding: 4px;
  border-radius: 20px;
  background-color: #f7f6f5;

  // reset.css
  box-sizing: border-box;
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
};

export default S;
