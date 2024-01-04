import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../../../layout/Layout';
import Cateogry from '../../../components/common/Category';
import RefSearch from '../../../containers/reference/RefSearchBar';
import RefListWrapper from '../../../containers/reference/RefListWrapper';
import FirstModal from '../../../containers/modal/FirstModal';

import { pageLinks } from '../../../containers/reference/constants';

function RefPage() {
  const { pathname } = useLocation();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [checkIdx, setCheckIdx] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('new') === 'true') {
      setModalOpen(true);
    }
  }, []);

  useEffect(() => {
    Object.keys(pageLinks).forEach((key) => {
      if (pageLinks[key].path === pathname) {
        setCheckIdx(key);
      }
    });
  }, [checkIdx]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const onChangeCategory = (category) => {
    Object.keys(pageLinks).forEach((key) => {
      if (pageLinks[key].keyword === category) {
        setCheckIdx(key);
      }
    });
  };

  return (
    <Layout>
      <div style={{ flexDirection: 'column' }}>
        {/* 검색창 */}
        <RefSearch onSearch={handleSearch} />

        {/* 카테고리 */}
        <Cateogry
          main={true}
          onClickCategory={onChangeCategory}
          checkIdx={checkIdx}
        />

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
