import { DF } from "../../../layout/DetailFeedbackStyle"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function RMCommentList(props) {
  const comments=props.comments;
  return(
    <>
    {comments && comments.map((comments,index)=>(
      <DF.AgainWrapper key={index}>
        <DF.AgainTable>
          <tbody>
        <tr>
          <td>
            <DF.ProfileSize src={comments.member.profileImage} />
          </td>
          <td style={{width:"100px"}}>
            {comments.member.nickname}
          </td>
          <td style={{float:"left",position:"relative",top:"15px"}}>
            <DF.HeaderButton>
              <ThumbUpIcon />
              <DF.ThumbCount>{comments.likeCount}</DF.ThumbCount>
            </DF.HeaderButton>
            <DF.HeaderButton style={{top:"-4px",position:"relative",color:"black",marginLeft:"22px"}}>
              수정
            </DF.HeaderButton>
            <DF.HeaderButton style={{top:"-4px",position:"relative",color:"black",marginLeft:"22px"}}>
              삭제
            </DF.HeaderButton>
          </td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2" style={{textAlign:"left"}}>
          {comments.comment}
          </td>
        </tr>
        </tbody>
      </DF.AgainTable>
     
    </DF.AgainWrapper>
    ))} 
    </>
  )
}