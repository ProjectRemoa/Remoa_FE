import styled from "styled-components";

export const S = {
  FeedbackCommentWriteReplyWrapper: styled.div`
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  `,
  WrapperTop: styled.div`
    position: relative;
    justify-content: space-between;
    margin-bottom: 12px;
    height: 40px;
    display: flex;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
  `,
};
