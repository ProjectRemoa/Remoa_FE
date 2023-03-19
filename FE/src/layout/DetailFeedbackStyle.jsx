import styled from "styled-components";

export const DF = {
  ModalWrapper:styled.div`
    position:absolute;
    top:35vh;
    right:5px;
    width:490px;
    height:800px;
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
  ModalFeedReg:styled.form`
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
    height:100px;
    font-family: 'Inter';
    resize: none;
  `,
  FeedbackSend:styled.button`
    width:80px;
    height:24px;
    border-radius: 10px;
    position:relative;
    left:120px;
  `,
  Feedback:styled.div`
    width:450px;
    height:520px;
    position:absolute;
    top:75px;
    margin-left:20px;
    overflow-y:scroll;
  `,
  EachFeedWrapper:styled.div`
    width:100%;
    height:auto;
    background-color:skyblue;
  `,
  ProfileSize:styled.img`
    width: 46px; 
    height: 46px;
    object-fit: cover;
    border-radius: 50%;
  `,
  FeedWrapperHeader:styled.div`
    display:flex;
  `,
  HeaderButton:styled.button`
    width:80px;
    height:27px;
    box-shadow:none;
  `,
  ThumbCount:styled.p`
    display:inline;
    color:black;
    line-height:27px;
    text-align:center;
    position:relative;
    top:-5px;
  `,
  ProfileName:styled.div`
    line-height:46px;
    font-size:20px;
  `,
  ButtonWrapper:styled.div`
    position:absolute;
    right:0px;
  `,
  FeedWrapperContent:styled.div`
    margin-top:24px;
  `
}