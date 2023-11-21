import axios from 'axios'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S } from './ui';
import { S as SS } from '../ModalCommentList/ui'

export default function ModalCommentWriteAgain() {
  return (
    <>
      <S.Differentiate />
      <table style={{display: 'inherit'}}>
        <tr>
          <td rowspan="2" width={30}>
            <MdOutlineSubdirectoryArrowRight style={{ fontSize: '23px' }} />
          </td>
          <td rowspan="2" width={40}>
            <SS.ProfileSize src='https://images.all-free-download.com/images/graphiclarge/flower_nature_close_up_view_yellow_240308.jpg' style={{position:'relative'}} /> 
          </td>
          <td style={{width: 'auto'}}>b</td>
        </tr>
        <tr>
          <td>c</td>
        </tr>
      </table>
    </>
  )
}