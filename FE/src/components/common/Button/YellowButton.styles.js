import styled from 'styled-components';

const YellowButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 48px;
  padding: 12px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  background: var(--loyal-yellow, #fada5e);

  &:hover {
    background: #dfb71c;
  }

  span {
    color: var(--, #464646);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.32px;
  }
`;

export default YellowButton;