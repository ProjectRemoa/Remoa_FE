import React, {  useState , useEffect} from "react";
import S from "./ManageFeedbackContainer.styles"
import Dropdown from "../../../components/common/Dropdown";
import { filterOptions } from "../../reference/constants";
import { useNavigate } from "react-router";
import axios from "axios";
import Category_ from "../../../components/common/Category_";

function ManageFeedbackContainer() {
  const [checkIdx, setCheckIdx] = useState([1, 0, 0, 0, 0, 0]);
  const [categoryName, setCategoryName] = useState("all");
  const [filter, setFilter] = useState(filterOptions[0].value); // 필터 값 (한글)
  const [sortOption, setSortOption] = useState(filterOptions[0].key); // 필터 값 (영어)
  const [toar, setTOAR] = useState(0); // 전체 레퍼런스 수

  const navigate = useNavigate();

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx([1, 0, 0, 0, 0, 0]);
    if (category === "idea") setCheckIdx([0, 1, 0, 0, 0, 0]);
    if (category === "marketing") setCheckIdx([0, 0, 1, 0, 0, 0]);
    if (category === "video") setCheckIdx([0, 0, 0, 1, 0, 0]);
    if (category === "design") setCheckIdx([0, 0, 0, 0, 1, 0]);
    if (category === "etc") setCheckIdx([0, 0, 0, 0, 0, 1]);
  };

  const onClickContents = () => {
    navigate("/");
  };

  useEffect(() => {
    let endpoint;
    endpoint = `/BE/user/activity?comment=${2}&scrap=${1}`;
    getComment(endpoint);
  }, []);

  const getComment = (endpoint) => {
    console.log(endpoint);
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        console.log(response);
        /*
        const {
          data: {
            data: {
              references,
              totalOfAllReferences,
              totalOfPageElements,
              totalPages,
            },
          },
        } = response;
        */
        console.log(response);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    fetchData();
  };

  return (
    <S.ManageListContainer>
      <div style={{marginTop: "64px"}}>
        <Category_ onClickCategory={onChangeCategory} checkedArr={checkIdx} />
      </div>  
      <S.Line />
      <>
        <S.ManageListBox>
          {!toar ? (
            <S.ManageListNo>
              <S.NoManageText>아직 받은 코멘트가 없어요</S.NoManageText>
              <S.NoManageSubText>
                다른 작품에 코멘트를 달면서 기다려볼까요?
              </S.NoManageSubText>
              <S.ButtonRegister onClick={onClickContents}>
                작품 목록 가기
              </S.ButtonRegister>
            </S.ManageListNo>
          ) : (
            <>
              {/* 선택 글 삭제 */}
              <S.SelectBox>총 {toar}개</S.SelectBox>
              {/* 정렬순 */}
              <S.SortBox>
                <Dropdown
                  setFilter={setFilter}
                  filter={filter}
                  setSortOption={setSortOption}
                  filterOptions={filterOptions}
                />
              </S.SortBox>
              <S.Line style={{ border: "1px solid white" }} />
            </>
          )}
        </S.ManageListBox>
        {/*} )*/}
      </>
    </S.ManageListContainer>
  );
}

export default ManageFeedbackContainer;