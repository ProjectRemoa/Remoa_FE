import styled from "styled-components";

export const S = {
  ModalWrapper: styled.div`
    cursor: move;
    position: absolute;
    top: 80px;
    right: 0px;
    width: 484px;
    height: 829px;
    border-radius: 8px;
    border: 1px solid var(--line, #d5d5d5);
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(63, 63, 63, 0.18);
  `,
  FeedbackSelect: styled.select`
    width: 55px;
    height: 32px;
    border-radius: 2px;
    position: relative;
    bottom: 6px;
    border: 1px solid var(--line, #e1e2e5);
  `,
  ModalHeader: styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e1e2e5;
  `,
  HeaderText: styled.span`
    color: var(--black, #1e1e1e);
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.4px;
  `,
  FeedbackText: styled.span`
    color: var(--black, #1e1e1e);
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.36px;
  `,
  FeedbackTextNum: styled.span`
    color: #464646;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.32px;
    margin-left: 21px;
  `,
  ModalWriteFeed: styled.div`
    height: 230px;
    width: 100%;
    border-top: 1px solid #e1e2e5;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
  `,
  RegTop: styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    box-sizing: border-box;
    padding: 12px 28px;
  `,
  RegExplain: styled.span`
    line-height: 24px;
  `,
  RegBottom: styled.div`
    width: 100%;
    height: auto;
  `,
  WriteInput: styled.textarea`
    width: 428px;
    height: 139px;
    border-radius: 10px;
    background: var(--light-gray, #f0f0f0);
    font-family: "Inter";
    resize: none;
    border: none;
    padding: 17px;
    box-sizing: border-box;
    ::placeholder {
      color: var(--gray, #a7a7a7);
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.32px;
    }
  `,
  FeedbackSend: styled.button`
    display: inline-flex;
    position: absolute;
    right: 24px;
    width: 72px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(--gray, #a7a7a7);
    background: #fff;
    color: var(--black, #1e1e1e);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
  `,
  Feedback: styled.div`
    width: 484px;
    height: 520px;
    position: absolute;
    top: 80px;
    overflow: scroll;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb:end {
      border-radius: 20px;
      background: var(--disabled-gray, #b0b0b0);
    }

    &::-webkit-scrollbar-track {
    }
  `,
};
