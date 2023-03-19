import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import styles from "./ManageFeedbackContainer.module.css";
import imgCommentPagTest from "../../images/imgCommentPageTest.png";
import imgMyProfile from "../../images/imgMyProfile.png";

function ManageFeedbackContainer(){
    const [작품, 작품변경] = useState([1,2,3,4,5]);
    const [내좋아요,내좋아요변경] = useState([0,0,0,0,0]);
    const [남좋아요,남좋아요변경] = useState([0,0,0,0,0]);
    const topValue = 26;

    const FeedBackPage = 작품.map((data, i)=>{
        console.log(i);
        return(
            <div key = 'i' style={{padding:"20px",top:`${(i+1) * topValue}%`}}>
                <img src={imgCommentPagTest} className={styles.image} style={{top:`${(i+1) * topValue}%`}}/>
                <button className={styles.button} style={{top:`${((i+1) * topValue)+17}%`}}>작품물 뷰어 보기</button>
                <div className={styles.FeedBackBox} style={{top:`${(i+1) * topValue}%`}}/>
                <div className={styles.titleFeedBack} style={{top:`${((i+1) * topValue)+1}%`}}>
                    <b>KB증권 디지털 아이디어 콘테스트 출품작</b>
                    에 달린 코멘토에요.
                </div>
                <div className={styles.imgMyProFile} style={{top:`${((i+1) * topValue)+5}%`}}/>
                <div className={styles.workTitle} style={{top:`${((i+1) * topValue)+5}%`}}>
                    이름입니다.
                    <span onClick={()=>{
                        let copy = [...내좋아요];
                        copy[i] = copy[i] + 1;
                        내좋아요변경(copy);
                    }} >👍
                        {내좋아요[i]}
                    </span>
                    <span style={{paddingLeft:"20px", }}>
                        <Link to={"/"}>답글</Link>
                    </span>
                </div>
                <div className={styles.feedBackExplan} style={{top:`${((i+1) * topValue)+8}%`}}>안녕하세요. 설명입니다</div>
                <div className={styles.imgAnotherProfile} style={{top:`${((i+1) * topValue)+12}%`}}/>
                <div className={styles.workTitle} style={{left:"36%",top:`${((i+1) * topValue)+12}%`}}>
                    이름입니다.
                    <span onClick={()=>{
                        let copy = [...남좋아요];
                        copy[i] = copy[i] + 1;
                        남좋아요변경(copy);
                    }} >👍
                        {남좋아요[i]}
                    </span>
                </div>
                <div className={styles.allowTop} style={{top:`${((i+1) * topValue)+13}%`}}/>
                <div className={styles.allowBottom} style={{top:`${((i+1) * topValue)+14}%`}}/>
                <div className={styles.feedBackExplan} style={{left:"36%",top:`${((i+1) * topValue)+15}%`}}>안녕하세요. 설명입니다</div>
                <div className={styles.seeMore} style={{left:"38%",top:`${((i+1) * topValue)+19}%`}}>
                    더보기
                </div>
            </div>
        )
    })

    return(
        <>
            <div className={styles.commentList}>작품 별 코멘트 목록</div>

            {FeedBackPage}
        </>
    )
}

export default ManageFeedbackContainer;