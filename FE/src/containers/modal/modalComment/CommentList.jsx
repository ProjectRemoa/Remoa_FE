import { DF } from "../../../layout/DetailFeedbackStyle"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from 'axios'
import { useEffect } from "react";

export default function RMCommentList() {
  const fetchData = async () => {
    // const response = await axios.get(`localhost:8080/reference/${postId}/comment`)
    // setCommentList(response.data)
  }
  useEffect(() => {fetchData()},[]);

  return(
    <>
      <DF.AgainWrapper>
        <DF.AgainTable>
        <tr>
          <td>
            <DF.ProfileSize src={"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"} />
          </td>
          <td style={{width:"100px"}}>
            공모전짱fffffffffffffffffff
          </td>
          <td style={{float:"left",position:"relative",top:"15px"}}>
            <DF.HeaderButton>
              <ThumbUpIcon />
              <DF.ThumbCount>22</DF.ThumbCount>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.
          </td>
        </tr>
      </DF.AgainTable>
     
    </DF.AgainWrapper>
    </>
  )
}