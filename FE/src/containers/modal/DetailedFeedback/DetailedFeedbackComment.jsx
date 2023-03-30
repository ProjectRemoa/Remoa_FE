import React from 'react'
import { DF } from '../../../layout/DetailFeedbackStyle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DetailedFeedbackCommentAgain from './DetailedFeedbackCommentAgain';

export default function DetailedFeedbackComment({feedbacks,link}) {
  return (
    <DF.EachFeedWrapper>
      {feedbacks && feedbacks.map((f, index) => (
        <div key={index} style={{marginBottom:"30px"}}>
          <DF.FeedWrapperHeader>
            <DF.ProfileSize src={f.member.profileImage} />
            <DF.ProfileName>
              {f.member.nickname}
            </DF.ProfileName>
            <DF.ButtonWrapper>
              <DF.HeaderButton>
                <ThumbUpIcon />
                <DF.ThumbCount>{f.likeCount}</DF.ThumbCount>
              </DF.HeaderButton>
              {/* <DF.HeaderButton style={{top:"-5.5px",position:"relative",marginLeft:"3px",color:"black"}}>
                답글
              </DF.HeaderButton> */}
            </DF.ButtonWrapper>          
          </DF.FeedWrapperHeader>

   
            <div>
              <DF.FeedWrapperButton>
                {link ? 
                <DF.WrapperSearch>
                  동영상
                </DF.WrapperSearch>
                 :
                <DF.WrapperSearch href={`#${f.page}`}>
                {f.page}페이지
              </DF.WrapperSearch>
              }
               
              </DF.FeedWrapperButton>
              <p style={{fontSize:"18px",lineHeight:"22px",textAlign:"left"}}>
                {f.feedback}
              </p>
              
              {/* <DetailedFeedbackCommentAgain /> */}
          </div>
          
        </div>
      ))}
  </DF.EachFeedWrapper>
  )
}
