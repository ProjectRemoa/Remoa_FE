import styles from '../../../../layout/Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { S } from '../RefModalDelete/ui'
import { FaExclamationCircle } from "react-icons/fa";
function ModalRange({ setPageRange }) {

  const closeModal = () => {
    setPageRange(false);
    window.history.back();
  };

  return (
    <div className={styles.container}>
    <AiOutlineClose 
      className={styles.close} 
      onClick={closeModal}
      style={{marginTop:'18px', marginRight:'18px', width:'24px', height:'24px'}}
    />
    <FaExclamationCircle className={styles.exclamationCircle} />
    <S.LetterWrap>
      <S.AskDelete>존재하지 않는 페이지입니다</S.AskDelete>
      <S.AskHelp>이 문서에는 없는 페이지입니다. 다른 페이지로 이동해보세요</S.AskHelp>
    </S.LetterWrap>
    </div>
  );
}
export default ModalRange;