import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  z-index: 3;
  cursor: default;
`;
const ManageDeleteAllContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 4;
  width: 426px;
  height: 260px;
  background-color: white;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancelWrapper = styled.img`
  position:absolute;
  top:28px;
  right: 28px;
  width: 24px;
  cursor: pointer;
`

const Text = styled.div`
  position: absolute;
  top:80px;
  font-size: 22px;
  font-weight: 700;
  color: #1e1e1e;
`;

const SubText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #727272;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom : 26px;
`;

const Button = styled.div`
  color: ${(props) => (props.checked ? "#464646" : "#1e1e1e")};
  background-color: ${(props) => (props.checked ? "#FADA5E" : "white")};
  border-radius: 12px;
  border: ${(props) => (props.checked ? "none" : "1px solid #a7a7a7")};
  width: 180px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
  :last-child {
    margin-right: 0px;
  }

  :hover {
    background-color: ${(props) => (props.checked ? "#DFB71C" : "#F0F0F0")};
  }
`;
const S = {
  ModalWrapper,
  ManageDeleteAllContainer,
  CancelWrapper,
  Text,
  SubText,
  Button,
  ButtonWrapper,
};

export default S;