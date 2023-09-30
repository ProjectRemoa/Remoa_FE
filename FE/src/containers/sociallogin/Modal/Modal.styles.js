import styled from "styled-components"
import "./Modal.module.css"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  width: 460px;
  background: #ffffff;
  border: 0.5px solid #b0b0b0;
  border-radius: 10px;
  text-align: left;
  z-index: 4;
  /* 중앙 배치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  height: 461px;
  overflow-y: scroll;
  padding: 25px;
  ::-webkit-scrollbar{
    display:none;
  }
`;

const AgreeText = styled.div`
  font-family: NotoSansKR-700;
  font-size: 30px;
`;

const AgreeLastText = styled.div`
  font-family: NotoSansKR-400;
  font-size: 16px;
  padding-left: 3px;
  margin-top: 9px;
  margin-bottom: 15px;
`;

const AgreeAllBox = styled.div`
  background-color: rgba(250, 218, 94, 0.5);
  display: flex;
  min-width: 410px;
  padding:5px 0px;
  margin-bottom: 20px;
`;

const AgreeAllCheckBox = styled.div`
  margin-left:-16px;
  margin-right: 4px;
  margin-top: -6px;
`

const AgreeAllTextBox = styled.div`
  
`

const AgreeAllText = styled.div`
  font-family: NotoSansKR-500;
  font-size: 20px;
`

const AgreeAllSubText = styled.span`
  font-family: NotoSansKR-400;
  font-size: 13px;
`

const AgreeBox =styled.div`
  margin: 5px 8px;
  font-family: NotoSansKR-400;
  font-size: 16px;
  width: 100%;
  justify-content: space-between;
  display: flex;
`

const AgreeCheckBox =styled.div`
  margin-left: -16px;
`

const AgreeDetailBox = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AgreeSubText = styled.span`
  font-family: NotoSansKR-400;
  font-size: 16px;
  margin-left: 5px;
  padding-top: 5px;
`

const DetailButton = styled.div`
  width:85px; 
  height:27px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #fada5e;
  border-radius: 10px;
  font-family: NotoSansKR-500;
  font-size:13px;
`

const DetailChildBox = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  box-shadow: none;
  color: black;
  font-size: 20px;
  font-family:NotoSansKR-400;

  cursor: ${(props) => (props.state ? "pointer" : "default")};
  background: ${(props) => (props.state ? "#FADA5E" : "#D9D9D9")};
  border: 1px solid ${(props) => (props.state ? "#FADA5E" : "#D9D9D9")};
`;

const S = {
  Wrapper,
  Container,
  Box,
  AgreeText,
  AgreeLastText,
  AgreeSubText,
  AgreeAllBox,
  AgreeAllCheckBox,
  AgreeAllTextBox,
  AgreeAllText,
  AgreeAllSubText,
  AgreeBox,
  AgreeCheckBox,
  AgreeDetailBox,
  DetailButton,
  DetailChildBox,
  Button,
}

export default S; 