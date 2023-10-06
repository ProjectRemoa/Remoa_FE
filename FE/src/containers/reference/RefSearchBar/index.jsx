import { useState, useEffect, useRef } from 'react';

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

// TODO : react-hook-form으로 성능 개선 적용, 컴포넌트 재활용을 위해 RefListWrapper로 바로 넘기지 않도록 분리
function RefSearch({ onSearch }) {
  const searchRef = useRef(null);
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');

  // 디버깅용 코드
  // useEffect(() => {
  //   console.log('현재 검색어', searchTerm);
  // }, [searchTerm]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // 검색 핸들러 함수
  const onKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchDiv>
      <Title>공모전 이름이나 종류를 검색해보세요</Title>

      <SearchBar>
        <SearchButton onClick={handleSearch}>
          <SearchIcon className={classes.home} />
        </SearchButton>

        <SearchInput
          type="text"
          ref={searchRef}
          value={searchTerm}
          autocomplete="false"
          spellCheck="false"
          onChange={() => setSearchTerm(searchRef.current.value)}
          onKeyDown={onKeyDownSearch}
        />
      </SearchBar>
    </SearchDiv>
  );
}

export default RefSearch;
