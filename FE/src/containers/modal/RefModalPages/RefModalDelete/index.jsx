import styles from "../../../../layout/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { S } from "./ui";
import btnStyle from "../../../../layout/Button.module.css";

function ModalDelete({ setModalOpenDelete, onDelete }) {
  const closeModal = () => {
    setModalOpenDelete(false);
  };

  return (
    <div className={styles.container}>
      <AiOutlineClose
        className={styles.close}
        onClick={closeModal}
        style={{
          marginTop: "18px",
          marginRight: "18px",
          width: "24px",
          height: "24px",
        }}
      />
      <S.AskDelete>정말 삭제하시겠습니까?</S.AskDelete>
      <S.AskHelp>누군가에게 도움이 될 작품이에요!</S.AskHelp>
      <S.ButtonWrapper>
        <button className={btnStyle.yellow} onClick={onDelete}>
          <span>네</span>
        </button>
        <button
          style={{marginLeft:'10px'}}
          onClick={closeModal}
          className={btnStyle.white}
        >
          <span>아니오</span>
        </button>
      </S.ButtonWrapper>
    </div>
  );
}
export default ModalDelete;
