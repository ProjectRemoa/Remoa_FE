import styled from "styled-components";

const Pre = styled.pre`
    color: ${({ Feed }) => (Feed ? '#727272' : '#464646')};
    font-size: 15px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.32px;
    font-style: normal;
    font-family: Pretendard;
    word-break: break-all;
    white-space: pre-wrap; 
`;

export default Pre