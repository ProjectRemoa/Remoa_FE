import styled from 'styled-components';

const RefListWrapper = styled.div`
  width: 86vw;
  margin: 94px auto 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 140px;
`;

const RefListHeader = styled.div`
  display: flex;
  align-items: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #b0b0b0;
`;

const RefListHeading = styled.div`
  display: flex;
  width: 86vw;

  // TODO : reset.css
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;

  span {
    max-width: 20ch;
    color: #fada5e;
    white-space: nowrap;
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

const LoadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 178px;
  height: 38px;
  margin: 48px auto 0;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  background-color: #fada5e;
  color: #464646;
  font-weight: 700;
  box-shadow: none;

  svg {
    width: 15px;
    height: 15px;
  }
`;

const NoResultWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 446px;
    height: 68px;
    margin-top: 72px;
    font-size: 20px;
    font-weight: 700;
    color: #010101;
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
  RefFilter,
  FilterButton,
  RefList,
  LoadMoreButton,
  NoResultWrapper,
  NoResultText,
};

export default StyledComponents;
