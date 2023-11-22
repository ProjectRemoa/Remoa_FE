import styled from 'styled-components';

export const S = {
  ModalWrapper: styled.div`
    cursor: move;
    position:absolute;
    top:-100vh;
    width: 484px;
    height: 743px;
    z-index: 9;
    border-radius: 8px;
    border: 1px solid var(--line, #D5D5D5);
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(63, 63, 63, 0.18);
  `,
  ModalHeader: styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E1E2E5;
  `,
  HeaderText: styled.span`
    color: var(--black, #1E1E1E);
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.4px;
  `,
  FeedbackText: styled.span`
    color: var(--black, #1E1E1E);
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
    border-top: 1px solid #E1E2E5;
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
    background: var(--light-gray, #F0F0F0);
    font-family: 'Inter';
    resize: none;
    border: none;
    padding: 17px;
    box-sizing: border-box;
        ::placeholder {
      color: var(--gray, #A7A7A7);
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
    border: 1px solid var(--gray, #A7A7A7);
    background: #FFF;
    color: var(--black, #1E1E1E);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
  `,
  Feedback: styled.div`
  width: 450px;
  height: 380px;
  position: absolute;
  top: 105px;
  margin-left: 28px;
  overflow-y: scroll;
  box-sizing: border-box;
`,
};