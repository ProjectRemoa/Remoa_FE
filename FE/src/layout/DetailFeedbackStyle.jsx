import styled from "styled-components";

export const DF = {
  ModalWrapper:styled.div`
    position:absolute;
    top:40vh;
    right:5px;
    width:490px;
    height:50%;
    background-color:white;
    z-index:6;
    box-shadow: 0 0 0 5px #FADA5E inset;
  `,
  ModalHeader:styled.div`
    height:50px;
    background-color:#FADA5E;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  `,
  ModalWriteFeed:styled.div`
    height:180px;
    width:100%;
    box-shadow: 0 0 0 5px #FADA5E inset;
    background: #F5F5F5;
    position:absolute;
    bottom:0px;
  `,
  ModalFeedReg:styled.div`
    width:100%-54px;
    height:148px;
    margin: 16px 27px 21px 27px;
  `,
  RegTop:styled.div`
    width:100%;
    height:36px;
    display:flex;
    margin-bottom:12px;
  `,
  RegExplain:styled.span`
    line-height:24px;
  `,
  RegBottom:styled.div`
    width:100%;
    height:112px;
  `,
  WriteInput:styled.textarea`
    width:98%;
    height:112px;
    font-family: 'Inter';
    resize: none;
  `,
  FeedbackSend:styled.button`
    width:80px;
    height:24px;
    border-radius: 10px;
    right:0px;
  `
}