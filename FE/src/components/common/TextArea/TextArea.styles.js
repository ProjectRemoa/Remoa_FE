import styled from "styled-components";

const TextArea = styled.textarea`
  font-family: Pretendard;
  border-radius: 8px;
  width: 100%;
  color: var(--, #464646);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.32px;
  line-height: 25px;
  resize: none;
  border: 1px solid var(--gray, #a7a7a7);
  box-sizing: border-box;
  background: #fff;
  padding: 20px;
  ::placeholder {
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
`;

export default TextArea