import styled from 'styled-components';

const WhiteButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 48px;
  display: flex; /* 추가: center alignment를 위해 display: flex 사용 */
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid var(--gray, #a7a7a7);
  background: #fff;

  &:hover {
    background: var(--light-gray, #f0f0f0);
  }

  span {
    color: #1e1e1e;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.32px;
  }
`;

export default WhiteButton;