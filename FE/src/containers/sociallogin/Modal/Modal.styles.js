import styled from "styled-components"
import { createTheme } from "@mui/material";
import "./Modal.module.css"

const Theme = createTheme({
  palette: {
    primary: {
      main: "#FADA5E", // 노란색으로 커스텀
    },
  },
});

const Wrapper = styled.div`
  font-family: Pretendard-Medium;
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
  height: 624px;
  background: #ffffff;
  border-radius: 12px;
  text-align: left;
  z-index: 4;
  /* 중앙 배치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  height: 485px;
  overflow-y: scroll;
  padding: 28px;
  ::-webkit-scrollbar{
    display:none;
  }
`;

const AgreeText = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const AgreeLastText = styled.div`
font-weight: 500;
  font-size: 15px;
  padding-left: 3px;
  margin-top: 9px;
  margin-bottom:  26px;
  color : #727272;
`;

const AgreeAllBox = styled.div`
  background-color:#FEF5D2;
  width:404px;
  height: 114px;
  display: flex;
  border-radius: 12px;
  margin-bottom: 14px;
`;

const AgreeAllCheckBox = styled.div`
  margin-left: -15px;//-16px;
  margin-right: 4px;
  margin-top: 11px;//-6px;
  padding-right: 5px;
`

const AgreeAllTextBox = styled.div`
display: flex;
justify-content: center;
align-items:center; 
flex-direction:column;
  
`

const AgreeAllText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 12px;
`;

const AgreeAllSubText = styled.span`
  font-size: 14px;
  font-weight:500;
  color : #464646;
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
  font-size: 14px;
  font-weight:500;
  color: #464646;
  margin-left: 5px;
  padding-top: 5px;
`;

const DetailButton = styled.div`
  width: ${(props) => (props.state ? "60px" : "80px")};
  height: 26px;
  border: 1px solid #e1e2e5;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => (props.state ? "#727272" : "black")};
`;

const DetailChildBox = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Button = styled.button`
  width: 404px;
  height: 54px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 12px;
  color: ${(props) => (props.state ? "#1E1E1E" : "#6c6c6c")};
  font-size: 16px;
  font-weight: 600;
  box-shadow: none;
  border: none;
  cursor: ${(props) => (props.state ? "pointer" : "default")};
  background: ${(props) => (props.state ? "#FADA5E" : "#EDEDED")};
`;

const S = {
  Theme,
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
  ButtonBox,
  Button,
};

export default S; 