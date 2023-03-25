import React from 'react'
import { DF } from '../../../layout/DetailFeedbackStyle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { detailC } from '../../../temporary/detailcomment';
let again = [
  {
    againImg:"https://cdn.pixabay.com/photo/2022/04/06/12/49/countryside-7115530_960_720.jpg",
    againWriter:"공모전짱",
    thumbs:21,
    againContent:"덕분에"
  },{
    againImg:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png",
    againWriter:"공모",
    thumbs:1,
    againContent:"ㅋㅋ"
  }
]
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
              
              {/* {d1.again?.map((d2,index)=> {
                <div key={index}>s{d2.againContent}</div>
              })} */}
          </div>
          ))}
          
        </div>
      ))}
  </DF.EachFeedWrapper>
  )
}
