import { S } from './ui';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import React, { useState } from 'react';
import axios from 'axios';
import AuthLayout from '../../../../layout/AuthLayout'

export default function ModalCommentList({ comments, postId, setComments }) {

  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState('');

  // 수정할 member id
  const [putMemberId, setPutMemberId] = useState(0);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onPutHandler = (commentId) => {
    const UploadComment = {
      comment: contents,
    };

    axios
      .put(`/BE/reference/comment/${commentId}`, UploadComment)
      .then((response) => {
        console.log(response);
        setComments(response.data.data);
        alert('댓글 수정이 완료되었습니다.');
        setPutMemberId(0);
      })
      .catch((err) => {
        console.log(err);
      });
    //navigate('/');

    //return data;
    // } else {
    //  console.log(isEdit);
    //}
  };
  
  const onDelete = (commentId) => {
    console.log();
    axios
      .delete(`/BE/reference/comment/${commentId}`)
      .then((response) => {
        console.log(response);
        setComments(response.data.data);
        alert('댓글 삭제가 완료되었습니다.');
        // if (response.status === 200) alert(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickThumb = (commentId) => {
      AuthLayout()
      axios
        .post(`/BE/comment/${commentId}/like`)
        .then((res) => {
          console.log(res);
          //setThumb(res.data.data.LikeCount);
          axios
            .get(`/BE/reference/${postId}`)
            .then((res) => {
              console.log(res);
              setComments(res.data.data.comments);
            })
            .catch((err) => {
              console.log(err);
            });
          //alert('댓글을 추천하였습니다.');
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <>
      {comments &&
        comments.map((comments, index) => (
          <S.AgainWrapper key={index}>
            <S.AgainTable>
              <tbody>
                <tr>
                  <td style={{ backgroundColor:'pink', width: '40px' }}>
                    <S.ProfileSize src={comments.member.profileImage} />
                  </td>
                  <td  style={{ backgroundColor:'green' }}>
                    {comments.member.nickname}
                  </td>
                  <td
                    style={{ backgroundColor:'yellow', display: 'flex' }}
                  >
                    <S.HeaderButton
                      onClick={() => onClickThumb(comments.commentId)}
                    >
                      <BsFillHandThumbsUpFill />
                      <S.ThumbCount>{comments.likeCount}</S.ThumbCount>
                    </S.HeaderButton>
                    { // 내가 해당 댓글 작성자여야만 수정 버튼이 보여야 함
                    comments.member.nickname === sessionStorage.getItem('nickname') && (
                      <>
                        <S.HeaderButton
                          style={{
                            top: '-4px',
                            position: 'relative',
                            color: 'black',
                            marginLeft: '22px',
                          }}
                          onClick={() => {
                            //setIsEdit(!isEdit);
                            setPutMemberId(comments.commentId);
                            setContents(comments.comment);
                          }}
                        >
                          수정
                        </S.HeaderButton>
                        <S.HeaderButton
                          style={{
                            top: '-4px',
                            position: 'relative',
                            color: 'black',
                            marginLeft: '22px',
                          }}
                          onClick={() => onDelete(comments.commentId)}
                        >
                          삭제
                        </S.HeaderButton>
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan='2' style={{ backgroundColor:'pink' }}>
                    {putMemberId === comments.commentId ? (
                      <div id={comments.commentId}>
                        <S.WriteInput
                          placeholder='해당 작업물에 대한 의견을 자유롭게 남겨주세요!
                          욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다.'
                          onChange={onChangeContents}
                          defaultValue={comments.comment}
                        />
                        <button
                          onClick={() => {
                            return (
                              onPutHandler(comments.commentId),
                              setIsEdit(!isEdit)
                            );
                          }}
                        >
                          수정 완료하기
                        </button>
                      </div>
                    ) : (
                      comments.comment
                    )}
                  </td>
                </tr>
              </tbody>
            </S.AgainTable>
          </S.AgainWrapper>
        ))}
    </>
  );
}
