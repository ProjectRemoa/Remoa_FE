import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;

  &.ref {
    margin-top: 86px;
  }

  ul {
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 32px;
    border-radius: 3px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 15px;
      padding: 5px 10px;
      text-decoration: none;
      font-weight: 500;
      color: #727272;
      cursor: pointer;
    }

    &.pageLabelBtn {
      width: fit-content;
      &.disabled {
        a {
          color: #ddd;
          pointer-events: none;
          cursor: default;
        }
      }
    }

    &.active {
      a {
        color: #1e1e1e;
        font-weight: 700;
      }
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
