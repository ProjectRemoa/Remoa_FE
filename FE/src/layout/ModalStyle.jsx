import styled from "styled-components";

export const MS = {
  ModalWrapper:styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: default;
    overflow-y: scroll;
  `,
  MobalBox:styled.div`
    position: absolute;
    background-color: #fff;
    width: 86vw;
    height: auto;
    top: 106px;
    justify-content: center;
    padding: 15px 15px 0px 15px;
    border-radius: 1vw / 1vw;
  `,
  MobalContents:styled.div`
    background-color: pink;
    width: auto;
    height: auto;
    margin: 20px;
  `,
  Line:styled.hr`
    width: auto;
    border: 1px solid #B0B0B0;
    margin: 30px 0 30px 0;
  `,
  MobalHeader:styled.div`
    width: auto;
    height: auto;
    display: flex;
  `,
  HeaderDiv1:styled.div`
    height: auto;
    width:65%;
    text-align: left;
  `,
  HeaderDiv2:styled.div`
    height: auto;
    width:35%
  `,
  DetailTitle:styled.div`
    font-weight: 700;
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 30px;
  `,
  DetailTitleInfo:styled.div`
    font-weight: 400;
    font-size: 20px;
  `,
  SmallModalWrapper:styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 401px;
    height: 128px;
    left: ${props => props.location == 4 ? "-20vw" : "5vw"};
    @media ${(props) => props.theme.desktop} {
      left: ${props => props.location == 3 ? "-40vw" : "5vw"};
      top:5.5vw;
    }
    @media ${(props) => props.theme.mobile} {
      left: ${props => props.location == 2 ? "-50vw" : "5.5vw"};
      top:7vw;
    }
    background: #FFFFFF;
    border: 0.5px solid #B0B0B0;
    border-radius: ${props => (props.location) >= 1 ? "10px 0px 10px 10px" : "0px 10px 10px 10px"};
    z-index: 4;
    top:4vw;
  `,
  ModalProfile:styled.div`
    margin-left: 25px;
    margin-top: 25px;
  `,
  ModalProfilePhoto:styled.img`
    width: 40px; 
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    float: left;  
  `,
  ModalProfileName:styled.div`
    font-size: 20px;
    position: absolute;
    color: black;
    left:75px;
    top:25px;
  `,
  FollowingFollower:styled.div`
    width: 126.5px;
    height: 24px;
    display: absolute;
    float: right;
    margin-top: 7px;
    margin-right: 15px;
    font-weight: 700;
    font-size: 20px;
    color:black;
    line-height: 24px;
  `,
  ModalFollower:styled.span`
    color: #FADA5E;
    float: left;
  `,
  ModalFollowing:styled.span`
    color: #FADA5E;
    float: left;
  `,
  SmallModalButtonWrapper:styled.div`
    width:353px;
    height: 23px;
    position: absolute;
    bottom: 24px;
    left:25px;
  `,
  SmallModalButton:styled.div`
    width: 173px;
    height: 23px;
    background-color: #FADA5E;
    border-radius: 10px;
    font-size: 15px;
    line-height: 23px;
    color: #000000;
    display: inline-block;
    cursor: pointer;
  `,
  CommentWrapper:styled.div`
    background-color:#F5F5F5;
    width: 100%;
    padding: 0px 15px 50px 15px;
    height: auto;
    border-radius: 0px 0px 10px 10px;
    position: relative;
    left:-15px
  `,
  CommentWriteWrapper:styled.form`
    margin: 0px 10px 25px 10px;
    justify-content: center;
    height: auto;
  `,
  CommentButton:styled.button`
    display: inline;
    height: 36px;
    width:90px;
    position: absolute;
    border: 0;
    box-shadow:  none;
    right: 3%;
    top:7%;
  `,
  WriteInput:styled.textarea`
    border-radius: 10px;
    width: 100%;
    min-height: 90px;
    font-family: 'Inter';
    font-size: 15px;
    line-height: 25px;
    resize: none;
    border:none;
    ::placeholder {
      color:black
    }
  `,
  ProfileSize:styled.img`
    width: 35px; 
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
  `,
  HeaderUserInfo:styled.div`
    top:35%;
    width:100%;
    position: relative;
    height: auto;
    display: flex;
  `,
  HeaderUserName:styled.span`
  font-size: 15px;
  line-height: 35px;
  position: absolute;
  margin-left: 40px;
  `,
  HeaderDetail2:styled.div`
    display: inline-block;
    font-size: 15px;
    height: 35px;
    margin-left: 40px;
    display: flex;
    position: absolute;
    align-items: center;
    left:25%;
    width: 50%;
    justify-content: space-between;
  `,
  DetailFeedbackButton:styled.button`
    left: 0%;
    position: relative;
    width: 45%;
    top: 40%;
    height: 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    box-shadow: none;
    border: none;
    margin-right: 10px;
    display: inline;
  `,
  ModalContents:styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background-color: pink;
  `,
  TraceBoxWrapper:styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
  `,
  TraceBox:styled.div`
    border: 2px solid #FADA5E;
    border-radius: 10px;
    width: 123px;
    height: 53px;
    background: #FFFFFF;
    margin-bottom: 31px;
    cursor: pointer;
    line-height: 50px;
  `,
  ContentImg:styled.img`
    width: 100%;
    height: 100%;
  `,
  PdfMannage:styled.div`
    overflow-y: scroll;
    width: 99%;
    overflow-x: auto;

    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color:white;
    padding: 5% 0% 5% 0%;
    margin-left:0.5%;
  `,
  PdfWrapper:styled.div`
    width: 100%;
    background: #FADA5E;
  `,
  PdfSet:styled.div`
    height: 50px;
    line-height: 50px;
    font-weight: 700;
    font-size: 20px;
    color: white;
    display: flex;
    margin-left: 40px;
    align-items: center;
  `,
  PdfPageInput:styled.input`
    width: 95px;
    height: 30px;
    margin-left:10px;
    font-size: 20px;
  `,
  PdfPageButton:styled.a`
    text-decoration-line: none;
    height: 40px;
    width:80px;
    color:#FADA5E;
    font-weight: 700;
    font-size: 20px;
    
  `,
  PdfPageButtonWrapper:styled.button`
    border: none;
    height: 40px;
    width:100px;
    background-color:white;
    margin-left: 10px;
    box-shadow: none;
  `,
  PdfSizeWrapper:styled.div`
    position: absolute;
    right: 70px;
    width: auto;
  `,
  PdfSizeButton:styled.button`
    border:none;
    margin-right: 10px;
    box-shadow: none;
    background-color: white;
    width: 60px;
    height: 40px;
    position: relative;
    top:17.5px;
    display: inline-block;
    justify-content:center;
  `,
  SizeIcon:styled.span`
    color: #FADA5E;
    font-weight: 700;
    font-size: 50px;
    position: relative;
    top:-20px;
  `,
  SizeShow:styled.div`
    width: 60px;
    height: 40px;
    background-color: white;
    color: black;
    line-height: 40px;
    position: absolute;
    right:230px;
    border: 3px solid black;
  `
}