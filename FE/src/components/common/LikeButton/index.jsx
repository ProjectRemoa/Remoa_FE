import { S } from "./LikeButton.styles";
import React from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

const CustomLikeButton = ({ onClick, count, style, isLiked }) => (
  <S.LikeButton style={style} onClick={onClick}>
    <BsFillHandThumbsUpFill style={{ color: isLiked ? '#FADA5E' : 'inherit' }} />
    <span>{count}</span>
  </S.LikeButton>
);

export default CustomLikeButton;