import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Layout from "../../../layout/Layout";
import Cateogry from "../../../components/common/Category";
import RefSearch from "../../../containers/reference/RefSearchBar";
import RefListWrapper from "../../../containers/reference/RefListWrapper";
import { pageLinks } from "../../../containers/reference/constants";
import FirstModal from "../../../containers/modal/FirstModal";

function RefPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const keywords = pageLinks.map((link) => link.keyword);
  const [modalOpen, setModalOpen] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [checkIdx, setCheckIdx] = useState();

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

  if (sessionStorage.getItem("refreshToken")) {
    const isFirstLogin = sessionStorage.getItem("isFirstLogin");
    if (!isFirstLogin) {
      sessionStorage.setItem("isFirstLogin", "true");
      setModalOpen(true);
    } else {
      navigate("/");
    }
  }
  return (
    <Layout>
      <div style={{ flexDirection: "column" }}>
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
