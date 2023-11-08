import styles from '../../../../layout/Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillCheckCircle } from 'react-icons/ai'
import { S } from './ui';

function ModalDelete({ setModalOpenDelete }) {

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
    <AiFillCheckCircle />
      <p>스크랩 되었습니다</p>
      <p>마이페이지의 스크랩한 작업물에서 확인가능해요</p>
    </div>
  );
}

export default ModalDelete;