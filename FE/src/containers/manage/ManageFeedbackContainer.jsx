import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import styles from "./ManageFeedbackContainer.module.css";
import imgCommentPagTest from "../../images/imgCommentPageTest.png";
import imgMyProfile from "../../images/imgMyProfile.png";
import axios from "axios";
import styled from "styled-components";
import { width } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RefModal from "../modal/RefModal";

const Style = {
    UnderHeader: styled.div`
    margin-left: 25%;
    margin-top: 1%;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #b0b0b0;
    border-radius: 20px;
    width: 50%;
    height: 59px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    @media ${(props) => props.theme.desktop} {
        width: 50%;
    }
    @media ${(props) => props.theme.mobile} {
        width: 50%;
      padding-left: 15px;
      padding-right: 15px;
    }
  `,
  Sort: styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #464646;
    cursor: pointer;
    @media ${(props) => props.theme.mobile} {
      font-size: 15px;
      font-weight: 900;
    }
  `,
  PageStyle: styled.div`
    color: #fada5e;
  `,
}

function ManageFeedbackContainer(){
    const [작품, 작품변경] = useState([]);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("idea");
    const [allPage, setAllPage] = useState([]);

    const [postId, setPostId] = useState(0);
    const [modalVisibleId, setModalVisibleId] = useState("");

    const topValue = 26;

    const Navigete = useNavigate();

    useEffect(()=>{
        console.log(page + "page")
        axios.get(`/BE/user/feedback?page=${page}&category=${category}`)
        .then((res)=>{
            console.log(res.data)
            작품변경(res.data.data.post)
            setAllPage(Array.from({length: res.data.data.totalPages}))
        })
        .catch((res)=>{
            console.log("error")
        })
    },[page, category])

    const ideaOnClick = () => {
        setCategory("idea");
    };
    
    const marketingOnClick = () => {
        setCategory("marketing");
    };
    
    const videoOnClick = () => {
        setCategory("video");
    };
    
    const designOnClick = () => {
        setCategory("design");
    };
    
    const etcOnClick = () => {
        setCategory("etc");
    };

    const onClickModal = (postId) => {
        setPostId(postId)
        setModalVisibleId(postId);
    };

    const FeedBackPage = 작품.map((data, i)=>{
        console.log(i);
        return(
            <div key ={i} style={{display:"flex",marginLeft: "5%" ,margin: "2%", top:`${(i+1) * topValue}%`, width: "80%", height:"25%"}}>
                
                <div style={{display:"flex", flexDirection: "column", width: "30%", maxHeight:"100%"}}>
                    <img src={data.thumbnail} style={{filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", margin: "2%", maxWidth: "100%", maxHeight: "85%"}}/>
                    <button style={{background: "#FADASE", border: "1px solid #B0B0B0", borderRadius: "10px", margin: "1%", marginLeft: "2%", width: "95%", height: "15%"}}
                    onClick = {()=>{
                        onClickModal(data.postId)
                    }}> 작업물 뷰어 보기 </button>
                    {/* <button style={{background: "#FADASE", border: "1px solid #B0B0B0", borderRadius: "10px", margin: "1%", marginLeft: "2%", width: "95%", height: "10%"}}
                    onClick = {()=>{
                        onClickModal(data.postId)
                    }}> 상세 피드백  </button> */}
                </div>
                
                <div style={{width: "70%", display:"flex", flexDirection: "column", maxHeight:"100%"}}>
                    <div style={{textAlign:"left", fontSize:"1.4em", width: "100%", height: "15%", margin: "1%"}}> {data.title} </div>
                    <div style={{display:"flex", flexDirection: "column", width: "100%", height: "80%", border: "1px solid #FADA5E", borderRadius: "10px"}}>
                        <div style={{width: "100%", height: "35%", marginLeft: "5%", marginTop: "3%", marginBottom: "2%"}}>
                            <div style={{textAlign:"left", fontSize:"18px"}}>
                                내가 작성한 코맨트
                            </div>
                            <div style={{textAlign:"left", fontSize:"14px"}}>
                                가장 먼저 작성된 코멘트 1개만 보입니다.
                            </div>
                        </div>
                        <div style={{width: "100%", height: "50%", display:"flex", marginLeft: "5%", marginBottom: "5%"}}>
                            <img src={data.commentInfo.comment_1.member.profileImage} style={{marginTop: "2%", maxWidth: "20%", maxHeight: "80%", borderRadius: "40px"}}/>
                            <div style={{width: "80%", height:"100%", marginLeft: "2%", marginTop: "4%", display:"flex", flexDirection: "column", textAlign: "left"}}>
                                <div style={{textAlign: "left", fontSize: "18px"}}>
                                    {data.commentInfo.comment_1.member.nickname}
                                    <span style={{marginLeft: "2%"}}>👍 {data.commentInfo.comment_1.likeCount}</span>
                                </div>
                                <div style={{textAlign: "left", fontSize: "16px", marginTop:"1%"}}>
                                    {data.commentInfo.comment_1.comment}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    })

    const Paging = allPage.map((data, i)=>{
        
        return (
            <span key = {i} style ={{marginLeft: "5px", marginRight: "5px"}}
            onClick = {()=>{
                setPage(i+1)
            }}>
                {i+1}
            </span>
        )
    })

    const Page = () => {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.4em"}}>
                <span style={{marginRight: "2px"}}
                onClick = {()=>{
                    if (page > 1){
                        setPage(prev => prev - 1)
                    }
                }}>
                    &lt;
                </span>
                {Paging}
                <span style={{marginLeft: "2px"}}
                onClick = {()=>{
                    if (page <= allPage){
                        setPage(prev => prev + 1)
                    }
                }}>
                    &gt;
                </span>
            </div>
        )
    }

    const NullData = () => {
        return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.4em"}}>
                공유 자료가 없어요.
            </div>
        )
    }

    return(
        <div style={{display:"flex", flexDirection: "column", width: "90%", height: "100%"}}>
            <div style={{height: "10%"}}/>
            <Style.UnderHeader>
                <Style.Sort onClick={ideaOnClick}>
                {category === "idea" ? (
                <Style.PageStyle>기획/아이디어</Style.PageStyle>
                ) : (
                    "기획/아이디어"
                )}
                </Style.Sort>
                <Style.Sort onClick={marketingOnClick}>
                {category === "marketing" ? (
                    <Style.PageStyle>광고/마케팅</Style.PageStyle>
                ) : (
                    "광고/마케팅"
                )}
                </Style.Sort>
                <Style.Sort onClick={videoOnClick}>
                {category === "video" ? (
                <Style.PageStyle>영상</Style.PageStyle>
                ) : (
                    "영상"
                )}
                </Style.Sort>
                <Style.Sort onClick={designOnClick}>
                {category === "design" ? (
                <Style.PageStyle>디자인</Style.PageStyle>
                ) : (
                    "디자인"
                )}
                </Style.Sort>
                <Style.Sort onClick={etcOnClick}>
                {category === "etc" ? (
                <Style.PageStyle>기타아이디어</Style.PageStyle>
                ) : (
                    "기타아이디어"
                )}
                </Style.Sort>
            </Style.UnderHeader>
            <div style={{margin:"3%",textAlign:"left", fontSize:"24px"}}>작품 별 코멘트 목록</div>

            {allPage.length == 0 ? <NullData/> : FeedBackPage}
            {allPage.length == 0 ? null : <Page/>}

            {modalVisibleId !== "" && (
            <RefModal
                id2={postId}
                modalVisibleId2={modalVisibleId}
                setModalVisibleId2={setModalVisibleId}
            />
            )}
        </div>
    )
}

export default ManageFeedbackContainer;