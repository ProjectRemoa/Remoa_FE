import React from 'react';
import { S } from './ui';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { MdPriorityHigh } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';

const useStyles = makeStyles({
  check: {
    fontWeight: '700',
  },
});

export default function FirstModal({ setModalOpen }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const onClickChange = () => {
    sessionStorage.removeItem('new');
    setModalOpen(false);
    navigate('/mypage/profile');
  };

  return (
    <>
      <S.ModalWrapper>
        {/*style={{ display: modalOpen === false && 'none' }}>*/}
        <S.Modal>
          <S.Up>
            <S.Welcome>
              <span style={{ color: '#FADA5E' }}>레모아</span>에 오신 것을
              환영합니다
            </S.Welcome>
            <S.Warn>
              <MdPriorityHigh style={{ color: 'red' }} />
              잠깐!
            </S.Warn>
            <S.Guide>
              시작하시기 전에
              <br />
              프로필 정보를 추가해보세요
            </S.Guide>
          </S.Up>

          <S.Line />

          <S.Howtable>
            <tr>
              <td>
                <AiOutlineCheck
                  className={ classes.check }
                  style={{ fontSize: '30px' }}
                />
              </td>
              <S.HowWrapper>
                <S.How style={{ marginLeft: '-35px' }}>
                  기본으로 설정된 프로필 사진을 변경하고
                  <br />한 줄 소개 등 추가 정보를 입력해보세요
                </S.How>
              </S.HowWrapper>
            </tr>
            <tr>
              <td>
                <AiOutlineCheck
                  className={ classes.check }
                  style={{ fontSize: '30px' }}
                />
              </td>
              <S.HowWrapper>
                <S.How>
                  개성 넘치는 프로필로 작품을 등록하고
                  <br />
                  피드백을 달아서 더 많은 팔로워를 모아보세요
                </S.How>
              </S.HowWrapper>
            </tr>
          </S.Howtable>

          <S.ChangeProfile
            style={{ cursor: 'pointer' }}
            onClick={ onClickChange }
          >
            프로필 변경 바로가기
          </S.ChangeProfile>
          <S.Close
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setModalOpen(false);
              sessionStorage.removeItem('new');
            }}
          >
            다음에 변경하기
          </S.Close>
        </S.Modal>
      </S.ModalWrapper>
    </>
  );
}
