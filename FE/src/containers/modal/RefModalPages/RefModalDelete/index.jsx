import styles from '../../../../layout/Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { S } from './ui';

function ModalDelete({ setModalOpenDelete, onDelete }) {

  const closeModal = () => {
    setModalOpenDelete(false);
  };

  return (
    <div className={styles.container}>
    <AiOutlineClose 
      className={styles.close} 
      onClick={closeModal}
      style={{marginTop:'18px', marginRight:'18px', width:'24px', height:'24px'}}
    />
    <S.AskDelete>정말 삭제하시겠습니까?</S.AskDelete>
    <S.AskHelp>누군가에게 도움이 될 작품이에요!</S.AskHelp>
    <S.ButtonWrapper>
      <S.Button onClick={onDelete}>네</S.Button>
      <S.Button 
        onClick={closeModal}
        style={{border: '1px solid var(--gray, #A7A7A7)',
          background: '#FFF',marginLeft: '10px'}}>
        아니오
      </S.Button>
    </S.ButtonWrapper>
    </div>
  );
}
export default ModalDelete;