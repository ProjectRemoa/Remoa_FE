import React from 'react';
import { S } from './ProfileSize.styles';

const CustomProfileImage = ({ src, alt, style, onClick }) => (
  <S.ProfileImage src={src} alt={alt} style={style} onClick={onClick ? onClick : undefined} />
);

export default CustomProfileImage;