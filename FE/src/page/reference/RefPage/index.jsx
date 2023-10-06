import { useEffect, useState } from 'react';

import Layout from '../../../layout/Layout';
import Cateogry from '../../../components/common/Category';
import RefSearch from '../../../containers/reference/RefSearchBar';
import RefListWrapper from '../../../containers/reference/RefListWrapper';
import FirstModal from '../../../containers/modal/FirstModal';

function RefPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(typeof sessionStorage.getItem('new'));
    if (sessionStorage.getItem('new') === 'true') {
      setModalOpen(true);
    } else {
    }
  }, []);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  // 디버깅용 코드
  // useEffect(() => {
  //   console.log('변경된 검색어', searchKeyword);
  // }, [searchKeyword]);

  return (
    <Layout>
      {/* TODO : Layout styled-component로 변경 후 props 추가 설정 */}
      <div style={{ flexDirection: 'column' }}>
        {/* 검색창 */}
        <RefSearch onSearch={handleSearch} />

        {/* 카테고리 */}
        <Cateogry />

        <RefListWrapper search={searchKeyword} />
      </div>

      {/* 첫 로그인 모달 */}
      {modalOpen && (
        <FirstModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </Layout>
  );
}
export default RefPage;
