import styled from 'styled-components';

const RefListWrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 28px auto 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

const RefListHeader = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #e7e7e7;
`;

const RefListHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1260px;

  // TODO : reset.css
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;

  span {
    display: inline-block;
    max-width: 28ch;
    height: 34px;
    line-height: 34px;
    margin-right: 6px;
    background-color: #fada5e;
    border-radius: 8px;
    padding: 0 8px;
    white-space: nowrap;
    font-weight: 700;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media ${(props) => props.theme.desktop} {
    top: -35px;
    justify-content: center;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
  }
`;

const RefListFunctionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  margin-bottom: 15px;
  .count {
    font-size: 15px;
  }
`;

const RefFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 86px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid #000;

  // TODO : reset.css 이후 삭제
  background-color: #fff;
  color: #000;
  box-shadow: none;

  &.active {
    background-color: #fada5e;
  }
`;

const RefList = styled.div`
  display: grid;
  gap: 20px 26px;
  grid-template-columns: repeat(auto-fill, minmax(291px, 1fr));
  margin-top: 20px;
`;

const NoResultWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  button {
    // TODO : reset.css 이후 삭제
    box-shadow: none;
    border: 0;
    outline: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 175px;
    height: 48px;
    background-color: #fada5e;
    border-radius: 50px;
    margin-top: 46px;
    font-size: 16px;
    font-weight: 600;
    color: #010101;

    &:hover {
      background-color: #dfb71c;
    }
  }
`;

const NoResultText = styled.div`
  font-size: 20px;
  font-weight: 400;

  &.emphasis {
    font-size: 30px;
    font-weight: 700;
    margin: 70px 0 30px;
  }
`;

const StyledComponents = {
  RefListWrapper,
  RefListHeader,
  RefListHeading,
  RefListFunctionWrapper,
  RefFilter,
  FilterButton,
  RefList,
  NoResultWrapper,
  NoResultText,
};

export default StyledComponents;
