import React from 'react';
import { S } from './ui'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { BiCommentAdd } from 'react-icons/bi'

const again = [
  {
    againImg:
      'https://cdn.pixabay.com/photo/2022/04/06/12/49/countryside-7115530_960_720.jpg',
    againWriter: '공모전짱대박유잼',
    thumbs: 5,
    againContent: '덕분에',
  },
  {
    againImg:
      'https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png',
    againWriter: '공모',
    thumbs: 1,
    againContent:
      '목숨이 우리 천하를 인간에 이상을 어디 부패를 그리하였는가? 대고, 없는 천자만홍이 찾아다녀도, 용감하고 가치를 수 이것이다.',
  },
];

export default function DetaileSeedbackCommentAgain() {
  return (
    <S.AgainWrapper>
      {again &&
        again.map((a, index) => (
          <S.AgainTable key={index}>
            <tr>
              <td>
                <BiCommentAdd />
              </td>
              <td>
                <S.ProfileSize src={a.againImg} />
              </td>
              <td style={{ width: '100px' }}>{a.againWriter}</td>
              <td>
                <S.HeaderButton>
                  <BsFillHandThumbsUpFill />
                  <S.ThumbCount>{a.thumbs}</S.ThumbCount>
                </S.HeaderButton>
              </td>
              <td>
                <S.HeaderButton
                  style={{ top: '-3px', position: 'relative', color: 'black' }}
                >
                  수정
                </S.HeaderButton>
              </td>
              <td>
                <S.HeaderButton
                  style={{ top: '-3px', position: 'relative', color: 'black' }}
                >
                  삭제
                </S.HeaderButton>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td colSpan='4' style={{ width: '225px', textAlign: 'left' }}>
                {a.againContent}
              </td>
            </tr>
          </S.AgainTable>
        ))}
    </S.AgainWrapper>
  );
}
