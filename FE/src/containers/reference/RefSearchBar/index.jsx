import { useState, useEffect, useRef } from 'react';

// 스타일 컴포넌트
import { makeStyles } from '@material-ui/core/styles';
import { BiSearch } from 'react-icons/bi';

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
      <Title>레퍼런스 찾기</Title>

      <SearchBar>
        <SearchInput
          type="text"
          ref={searchRef}
          value={searchTerm}
          placeholder="관심있는 공모전이나 종류를 검색해보세요"
          autocomplete="false"
          spellCheck="false"
          onChange={() => setSearchTerm(searchRef.current.value)}
          onKeyDown={onKeyDownSearch}
        />

        <SearchButton onClick={handleSearch}>
          <BiSearch />
        </SearchButton>
      </SearchBar>
    </SearchDiv>
  );
}

export default RefSearch;
