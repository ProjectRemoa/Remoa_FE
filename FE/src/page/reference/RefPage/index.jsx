import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../../../layout/Layout';
import Cateogry from '../../../components/common/Category';
import RefSearch from '../../../containers/reference/RefSearchBar';
import RefListWrapper from '../../../containers/reference/RefListWrapper';
import FirstModal from '../../../containers/modal/FirstModal';
import { getUserProfileImg } from '../../../apis/mypage/user';
import { pageLinks } from '../../../containers/reference/constants';

function RefPage() {
  const { pathname } = useLocation();
  const keywords = pageLinks.map((link) => link.keyword);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [checkIdx, setCheckIdx] = useState();
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const checkProfileAndShowModal = async () => {
      // 로그인 되어있고, 로컬 스토리지에 modalShown 없고, 프로필이 기본 이미지일 때 모달 표시
      const profile = await getUserProfileImg();
      const defaultImg = "https://remoa.s3.ap-northeast-2.amazonaws.com/img/flow_noname_image.png"
      if (sessionStorage.getItem('accessToken') && !sessionStorage.getItem('modalShown') && profile === defaultImg) {
        setModalOpen(true);
        sessionStorage.setItem('modalShown', 'true'); // 모달이 표시되었음을 저장
      }
    };

    checkProfileAndShowModal();
  }, []);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleCategorySelection = (url) => {
    const matchedIndex = keywords.findIndex((keyword) => url.includes(keyword));
    setCheckIdx(matchedIndex !== -1 ? matchedIndex : 0);
  };

  const onChangeCategory = (category) => {
    Object.keys(pageLinks).forEach((key) => {
      if (pageLinks[key].keyword === category) {
        setCheckIdx(key);
      }
    });
  };

  useEffect(() => {
    handleCategorySelection(window.location.href);
  }, [pathname]);

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
