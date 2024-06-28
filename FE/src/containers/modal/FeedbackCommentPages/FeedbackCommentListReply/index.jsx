import React from "react";
import { S } from "./FeedbackCommentListReply.styles";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";

const again = [
  {
    againImg:
      "https://cdn.pixabay.com/photo/2022/04/06/12/49/countryside-7115530_960_720.jpg",
    againWriter: "공모전짱대박유잼",
    thumbs: 5,
    againContent: "덕분에",
  }
];

export default function DetaileFeedbackCommentAgain() {
  return (
    <S.AgainWrapper>
      {again &&
        again.map((a, index) => (
          <S.AgainTable key={index}>
            <tbody>
              <tr>
                <td>
                  <BiCommentAdd />
                </td>
                <td>
                  <S.ProfileSize src={a.againImg} />
                </td>
                <td style={{ width: "100px" }}>{a.againWriter}</td>
                <td>
                  <S.HeaderButton>
                    <BsFillHandThumbsUpFill />
                    <S.ThumbCount>{a.thumbs}</S.ThumbCount>
                  </S.HeaderButton>
                </td>
                <td>
                  <S.HeaderButton>수정</S.HeaderButton>
                </td>
                <td>
                  <S.HeaderButton>삭제</S.HeaderButton>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td colSpan="4" style={{ width: "225px", textAlign: "left" }}>
                  {a.againContent}
                </td>
              </tr>
            </tbody>
          </S.AgainTable>
        ))}
    </S.AgainWrapper>
  );
}
