import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import styles from "./ManageFeedbackContainer.module.css";
import imgCommentPagTest from "../../images/imgCommentPageTest.png";
import imgMyProfile from "../../images/imgMyProfile.png";
import axios from "axios";
import styled from "styled-components";
import { width } from "@mui/system";
import { useNavigate } from "react-router-dom";

const style = {

}

function ManageFeedbackContainer(){
    const [작품, 작품변경] = useState([]);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState([]);
    const topValue = 26;

    const Navigete = useNavigate();

    useEffect(()=>{
        console.log(page + "page")
        axios.get(`/BE/user/feedback?page=${page}`)
        .then((res)=>{
            console.log(res.data)
            작품변경(res.data.data.post)
            setAllPage(Array.from({length: res.data.data.totalPages}))
        })
        .catch((res)=>{
            console.log("error")
        })
    },[page])

    const FeedBackPage = 작품.map((data, i)=>{
        console.log(i);
        return(
            // <div key = 'i' style={{padding:"20px",top:`${(i+1) * topValue}%`}}>
            //     <img src={imgCommentPagTest} className={styles.image} style={{top:`${(i+1) * topValue}%`}}/>
            //     <button className={styles.button} style={{top:`${((i+1) * topValue)+17}%`}}>작품물 뷰어 보기</button>
            //     <div className={styles.FeedBackBox} style={{top:`${(i+1) * topValue}%`}}/>
            //     <div className={styles.titleFeedBack} style={{top:`${((i+1) * topValue)+1}%`}}>
            //         <b>KB증권 디지털 아이디어 콘테스트 출품작</b>
            //         에 달린 코멘토에요.
            //     </div>
            //     <div className={styles.imgMyProFile} style={{top:`${((i+1) * topValue)+5}%`}}/>
            //     <div className={styles.workTitle} style={{top:`${((i+1) * topValue)+5}%`}}>
            //         이름입니다.
            //         <span onClick={()=>{
            //             let copy = [...내좋아요];
            //             copy[i] = copy[i] + 1;
            //             내좋아요변경(copy);
            //         }} >👍
            //             {내좋아요[i]}
            //         </span>
            //         <span style={{paddingLeft:"20px", }}>
            //             <Link to={"/"}>답글</Link>
            //         </span>
            //     </div>
            //     <div className={styles.feedBackExplan} style={{top:`${((i+1) * topValue)+8}%`}}>안녕하세요. 설명입니다</div>
            //     <div className={styles.imgAnotherProfile} style={{top:`${((i+1) * topValue)+12}%`}}/>
            //     <div className={styles.workTitle} style={{left:"36%",top:`${((i+1) * topValue)+12}%`}}>
            //         이름입니다.
            //         <span onClick={()=>{
            //             let copy = [...남좋아요];
            //             copy[i] = copy[i] + 1;
            //             남좋아요변경(copy);
            //         }} >👍
            //             {남좋아요[i]}
            //         </span>
            //     </div>
            //     <div className={styles.allowTop} style={{top:`${((i+1) * topValue)+13}%`}}/>
            //     <div className={styles.allowBottom} style={{top:`${((i+1) * topValue)+14}%`}}/>
            //     <div className={styles.feedBackExplan} style={{left:"36%",top:`${((i+1) * topValue)+15}%`}}>안녕하세요. 설명입니다</div>
            //     <div className={styles.seeMore} style={{left:"38%",top:`${((i+1) * topValue)+19}%`}}>
            //         더보기
            //     </div>
            // </div>
            <div key ={i} style={{display:"flex", margin: "2%", top:`${(i+1) * topValue}%`, width: "100%", height:"25%"}}>
                
                <div style={{display:"flex", flexDirection: "column", width: "30%", maxHeight:"100%"}}>
                    <img src={imgCommentPagTest} style={{filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", margin: "2%", maxWidth: "100%", maxHeight: "80%"}}/>
                    <button style={{background: "#FADASE", border: "1px solid #B0B0B0", borderRadius: "10px", margin: "1%", marginLeft: "2%", width: "95%", height: "10%"}}
                    onClick = {()=>{
                        Navigete("/")
                    }}> 작업물 뷰어 보기 </button>
                    <button style={{background: "#FADASE", border: "1px solid #B0B0B0", borderRadius: "10px", margin: "1%", marginLeft: "2%", width: "95%", height: "10%"}}
                    onClick = {()=>{
                        Navigete("/")
                    }}> 상세 피드백  </button>
                </div>
                
                <div style={{width: "70%", display:"flex", flexDirection: "column", maxHeight:"100%"}}>
                    <div style={{textAlign:"left", fontSize:"1.4em", width: "100%", height: "15%", margin: "1%"}}> {data.title} </div>
                    <div style={{display:"flex", flexDirection: "column", width: "100%", height: "83%", border: "1px solid #FADA5E", borderRadius: "10px"}}>
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
            <div style={{margin:"3%",textAlign:"left", fontSize:"24px"}}>작품 별 코멘트 목록</div>

            {allPage.length == 0 ? <NullData/> : FeedBackPage}
            {allPage.length == 0 ? null : <Page/>}

            
        </div>
    )
}

export default ManageFeedbackContainer;