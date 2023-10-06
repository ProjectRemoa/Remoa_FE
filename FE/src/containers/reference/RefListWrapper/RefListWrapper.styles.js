import styled from 'styled-components';

const RefListWrapper = styled.div`
  width: 86vw;
  margin: 94px auto 0;
  display: flex;
  flex-direction: column;
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
  height: 24px;

  // TODO : reset.css
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;

  span {
    color: #fada5e;
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

const StyledComponents = {
  RefListWrapper,
  RefListHeader,
  RefListHeading,
  RefFilter,
  FilterButton,
  RefList,
};

export default StyledComponents;
