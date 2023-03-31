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

const Category = styled.div`
  width: 15.65%;
  height: 43px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  display: inline-block;

  margin: 0 0.4% 0 0.4%; // 크기에 따라 margin 조절되게 설정
  vertical-align: middle;
  font-size: 80%;
  cursor: pointer;
`;

function ManageFeedbackContainer(){
    const [작품, 작품변경] = useState([]);
    const [page, setPage] = useState(1);
    const [categoryName, onChangeCategory] = useState("idea");
    const [allPage, setAllPage] = useState([]);

    const [postId, setPostId] = useState(0);
    const [modalVisibleId, setModalVisibleId] = useState("");

    const topValue = 26;

    const Navigete = useNavigate();

    useEffect(()=>{
        console.log(page + "page")
        axios.get(`/BE/user/feedback?page=${page}&category=${categoryName}`)
        .then((res)=>{
            console.log(res.data)
            작품변경(res.data.data.post)
            setAllPage(Array.from({length: res.data.data.totalPages}))
        })
        .catch((res)=>{
            console.log("error")
        })
    },[page, categoryName])

    const onClickModal = (postId) => {
        setPostId(postId)
        setModalVisibleId(postId);
    };

    const FeedBackPage = 작품.map((data, i)=>{
        console.log(i);
        return(
            <div key ={i} style={{display:"flex",marginLeft: "5%" ,marginLeft: "5%", margin: "2%", top:`${(i+1) * topValue}%`, width: "90%", height:"250px"}}>
                
                <div style={{display:"flex", flexDirection: "column", width: "30%", maxHeight:"100%"}}>
                    <img src={data.thumbnail} style={{ margin: "2%", maxWidth: "100%", minHeight: "70%", maxHeight: "80%"}}/>
                    <div style={{background: "#FADASE", background: "#FADA5E", color: "#464646", border: "1px solid #B0B0B0", borderRadius: "10px", margin: "1%", marginLeft: "2%", width: "95%", height: "10%"}}
                    onClick = {()=>{
                        onClickModal(data.postId)
                    }}> 작업물 뷰어 보기 </div>
                    <div style={{background: "#FADASE", background: "#FADA5E", color: "#464646", border: "1px solid #B0B0B0", borderRadius: "10px", margin: "1%", marginLeft: "2%", width: "95%", height: "10%"}}
                    onClick = {()=>{
                        onClickModal(data.postId)
                    }}> 상세 피드백  </div>
                </div>
                
                <div style={{width: "70%", display:"flex", flexDirection: "column", maxHeight:"100%"}}>
                    <div style={{display:"flex", flexDirection: "column", width: "100%", height: "100%", border: "1px solid #FADA5E", borderRadius: "10px"}}>
                        <div style={{width: "90%", height: "15%", marginLeft: "5%", marginTop: "2%", marginBottom: "1%"}}>
                            <div style={{textAlign:"left", fontSize:"18px", fontWeight: "normal"}}>
                                <span style={{fontWeight: "bold", fontSize:"24px"}}>{data.title}</span> 에 달린 코멘트 입니다.
                            </div>
                        </div>
                        <div style={{width: "90%", height: "60%", display:"flex", marginLeft: "5%", marginBottom: "1%"}}>
                            <img src={data.commentInfo.comment_1.member.profileImage} style={{marginTop: "2%", maxWidth: "20%", maxHeight: "60%", borderRadius: "40px"}}/>
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
                <span style={{marginRight: "2px" , color: "#FADA5E"}}
                onClick = {()=>{
                    if (page > 1){
                        setPage(prev => prev - 1)
                    }
                }}>
                    &lt;
                </span>
                {Paging}
                <span style={{marginLeft: "2px" , color: "#FADA5E"}}
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
            <div style={{height: "10%", marginTop:"2%"}}/>
            <div
        align="center"
        style={{
          paddingBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Category
          state="all"
          onClick={() => onChangeCategory("all")}
          style={{
            backgroundColor: categoryName === "all" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "all"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "all" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            전체
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("idea")}
          style={{
            backgroundColor: categoryName === "idea" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "idea"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "idea" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            기획/아이디어
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("marketing")}
          style={{
            backgroundColor:
              categoryName === "marketing" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "marketing"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "marketing" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            광고/마케팅
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("video")}
          style={{
            backgroundColor: categoryName === "video" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "video"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "video" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            영상
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("design")}
          style={{
            backgroundColor: categoryName === "design" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "design"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "design" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            디자인/사진
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("etc")}
          style={{
            backgroundColor: categoryName === "etc" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "etc"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "etc" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            기타 아이디어
          </span>
        </Category>
      </div>
            <div style={{margin:"3%",textAlign:"left", fontSize:"24px", fontFamily: "NotoSansKR-700"}}>작품 별 코멘트 목록</div>

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