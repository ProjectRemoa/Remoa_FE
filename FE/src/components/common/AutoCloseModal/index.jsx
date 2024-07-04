import React, { useEffect } from "react";
import { S } from "./AutoCloseModal.styles";
const AutoCloseModal = ({ onClose, children, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <S.ModalWrap>
      <S.Modal>{children}</S.Modal>
    </S.ModalWrap>
  );
};

export default AutoCloseModal;
