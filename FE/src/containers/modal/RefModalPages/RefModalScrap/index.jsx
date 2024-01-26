import styles from '../../../../layout/Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillCheckCircle } from 'react-icons/ai'
import { S } from './ui';

function ModalScrap({ setScrapModal }) {

  const closeModal = () => {
    setScrapModal(false)
  };

  return (
    <S.Wrapper className={styles.container} style={{ display: 'block'}}>
    <AiOutlineClose 
      className={styles.close} 
      onClick={closeModal}
      style={{marginTop:'18px', marginRight:'18px', width:'24px', height:'24px'}}
    />
    <AiFillCheckCircle style={{ fontSize:'40px', color:'#FADA5E' }} />
      <S.Span>스크랩 되었습니다</S.Span>
      <S.Span style={{ fontSize: '14px', letterSpacing: '-0.28px', fontWeight: '500', color: 'var(--deepgray, #727272)' }}>
        마이페이지의 내 활동 관리에서 확인 가능해요
      </S.Span>
    </S.Wrapper>
  );
}

export default ModalScrap;