import styled from 'styled-components'

const UnderHeader = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;
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
  `
const Sort = styled.div`
  font-family: NotoSansKR-400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #464646;
  cursor: pointer;
`;
const PageStyle = styled.div`
  color: #fada5e;
  font-family: NotoSansKR-700;
`

const S = {
  UnderHeader,
  Sort,
  PageStyle,
}

export default S;