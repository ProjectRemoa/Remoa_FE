import React from 'react';
import { S } from './ProfileSize.styles';

const CustomProfileImage = ({ src, alt, style }) => (
  <S.ProfileImage src={src} alt={alt} style={style} />
);

export default CustomProfileImage;