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
    width:70%;
    text-align: left;
  `,
  HeaderDiv2:styled.div`
    height: auto;
    background-color:red;
    width:30%
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
  CommentWriteWrapper:styled.div`
    margin: 0px 10px 25px 10px;
    justify-content: center;
    height: auto;
  `,
  WriteInput:styled.textarea`
    border-radius: 10px;
    width: 100%;
    min-height: 90px;
    font-family: 'Inter';
    font-size: 15px;
    line-height: 25px;
    border:none;
    ::placeholder {
      color:black
    }
  `
}