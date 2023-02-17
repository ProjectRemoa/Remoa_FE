import React, { useEffect, useRef, useState } from "react";
import styles from "./ManageFeedbackContainer.module.css";

function ManageFeedbackContainer(){
    const [작품, 작품변경] = useState([1,2,3]);

    const FeedBackPage = () =>{
        return(
            <>
                {/**/} 
            </>
        )
    }
    return(
        <div>
            <h4 style={{textAlign:"left"}}>작품 별 코멘트 목록</h4>
            {
                작품.map((data, i)=>{
                    
                })
            }
        </div>
    )
}

export default ManageFeedbackContainer;