import React from 'react'
import { DF } from '../../../layout/DetailFeedbackStyle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { detailC } from '../../../temporary/detailcomment';
import DetailedFeedbackCommentAgain from './DetailedFeedbackCommentAgain';
export default function DetailedFeedbackComment() {
  return (
    <DF.EachFeedWrapper>
      {detailC.map((d, index) => (
        <div key={index} style={{marginBottom:"30px"}}>
          <DF.FeedWrapperHeader>
            <DF.ProfileSize src={d.writerImg} />
            <DF.ProfileName>
              {d.writer}
            </DF.ProfileName>
            <DF.ButtonWrapper>
              <DF.HeaderButton>
                <ThumbUpIcon />
                <DF.ThumbCount>{d.thumbs}</DF.ThumbCount>
              </DF.HeaderButton>
              <DF.HeaderButton style={{top:"-5.5px",position:"relative",marginLeft:"3px",color:"black"}}>
                답글
              </DF.HeaderButton>
            </DF.ButtonWrapper>          
          </DF.FeedWrapperHeader>

          {detailC[index].feedback.map((d1, index)=> (
            <div key={index}>
              <DF.FeedWrapperButton>
                <DF.WrapperSearch href={`#${d1.page}`}>
                  {d1.page}페이지
                </DF.WrapperSearch>
              </DF.FeedWrapperButton>
              <p style={{fontSize:"18px",lineHeight:"22px",textAlign:"left"}}>
                {d1.content}
              </p>
              
              <DetailedFeedbackCommentAgain />
          </div>
          ))}
          
        </div>
      ))}
  </DF.EachFeedWrapper>
  )
}
