import React from 'react'
import AddCommentIcon from '@mui/icons-material/AddComment';
import { DF } from '../../../layout/DetailFeedbackStyle'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const again = [
  {
    againImg:"https://cdn.pixabay.com/photo/2022/04/06/12/49/countryside-7115530_960_720.jpg",
    againWriter:"공모전짱대박유잼",
    thumbs:5,
    againContent:"덕분에"
  },{
    againImg:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png",
    againWriter:"공모",
    thumbs:1,
    againContent:"목숨이 우리 천하를 인간에 이상을 어디 부패를 그리하였는가? 대고, 없는 천자만홍이 찾아다녀도, 용감하고 가치를 수 이것이다."
  }
]
export default function DetailedFeedbackCommentAgain() {
  return (
    <DF.AgainWrapper>
      {again.map((a,index) => (    
        <DF.AgainTable key={index}>
        <tr>
          <td>
            <AddCommentIcon />
          </td>
          <td>
            <DF.ProfileSize src={a.againImg} />
          </td>
          <td style={{width:"100px"}}>
            {a.againWriter}
          </td>
          <td>
            <DF.HeaderButton>
              <ThumbUpIcon />
              <DF.ThumbCount>{a.thumbs}</DF.ThumbCount>
            </DF.HeaderButton>
          </td>
          <td>
            <DF.HeaderButton style={{top:"-3px",position:"relative",color:"black"}}>
              수정
            </DF.HeaderButton>
          </td>
          <td>
            <DF.HeaderButton style={{top:"-3px",position:"relative",color:"black"}}>
              삭제
            </DF.HeaderButton>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td colspan="4" style={{width:"225px",textAlign:"left"}}>
            {a.againContent}
          </td>
        </tr>
      </DF.AgainTable>
      ))} 
    </DF.AgainWrapper>
  )
}
