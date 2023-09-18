import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import RefSearchResult from '../RefSearchResult';
import RefListWrapper from '../RefListWrapper';

// 스타일 컴포넌트
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';

import StyledComponents from './RefSearch.styles';
const { SearchDiv, Title, SearchInput, SearchButton, SearchBar } =
  StyledComponents;

const useStyles = makeStyles({
  home: {
    color: 'white',
    fontSize: '40px',
  },
});

function RefSearch() {
  const searchRef = useRef(null);
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');

  // 디버깅용 코드
  // useEffect(() => {
  //   console.log('현재 검색어', searchTerm);
  // }, [searchTerm]);

  const searchInput = () => {
    const searchKeyword = searchRef.current.value;
    setSearchTerm(searchKeyword);
  };

  // 검색 핸들러 함수
  const handleSearchTerm = () => {
    const searchKeyword = searchRef.current.value;
    setSearchTerm(searchKeyword);
  };

  // TODO : 서버 구동 후 검색어 결과 처리
  return (
    <SearchDiv>
      <Title>공모전 이름이나 종류를 검색해보세요</Title>

      <SearchBar>
        <SearchButton onClick={searchInput}>
          <SearchIcon className={classes.home} />
        </SearchButton>

        <SearchInput
          type="text"
          ref={searchRef}
          value={searchTerm}
          autocomplete="false"
          spellCheck="false"
          onChange={handleSearchTerm}
        />
      </SearchBar>

      <RefListWrapper search={searchTerm} />
    </SearchDiv>
  );
}

export default RefSearch;
