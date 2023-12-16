import axios from 'axios'
import { S } from './ui';
import { useState } from 'react';

export default function ModalCommentWriteAgain({id, openWriteAgain, setOpenWriteAgain}) {

  const onCloseHandler = () => {
  	setOpenWriteAgain("")
  }
  return (
    <div style={{display: openWriteAgain === id ? "block" : "none"}}>
      <S.Differentiate />
      <div onClick={onCloseHandler}>x</div>
      j
      <S.Differentiate />
    </div>
  )
}