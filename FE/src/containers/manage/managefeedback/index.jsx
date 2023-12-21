import React, {  useState , useEffect} from "react";
import {S} from "./ManageFeedbackContainer.styles"
import Dropdown from "../../../components/common/Dropdown";
import { filterOptions } from "../../reference/constants";
import { useNavigate } from "react-router";
import axios from "axios";
import Category_ from "../../../components/common/Category_";
import CommentContainerComponent from "../../../components/common/CommentContainerComponent"

function ManageFeedbackContainer() {
  const [checkIdx, setCheckIdx] = useState(0);
  const [categoryName, setCategoryName] = useState("all");
  const [filter, setFilter] = useState(filterOptions[0].value); // 필터 값 (한글)
  const [sortOption, setSortOption] = useState(filterOptions[0].key); // 필터 값 (영어)

  const [page, setPage] = useState(1);
  const [tp, setTP] = useState(1);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx(0);
    if (category === "idea") setCheckIdx(1);
    if (category === "marketing") setCheckIdx(2);
    if (category === "video") setCheckIdx(3);
    if (category === "design") setCheckIdx(4);
    if (category === "it") setCheckIdx(5);
    if (category === "etc") setCheckIdx(6);
  };

  const onClickContents = () => {
    navigate("/");
  };

  useEffect(() => {
    let endpoint;
    endpoint = `/BE/user/activity?comment=${2}&scrap=${1}`; // api 수정 필요
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
        const {
          data: {
            data: { content, posts },
          },
        } = response;
        console.log(response);

        console.log("content", content);
        console.log("posts", posts);

        let contents = []; // 배열로 만들어준 다음 data에 넣어야함 (map 때문에)
        contents.push(content);
        setData(contents);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    fetchData();
  };

  return (
    <S.ManageListContainer>
      <div style={{ marginTop: "64px" }}>
        <Category_ onClickCategory={onChangeCategory} checked={checkIdx} />
      </div>
      <S.Line />
      <>
        <S.ManageListBox>
          {!data ? (
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
              <S.SelectBox>총 {data.length}개</S.SelectBox>
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
                <CommentContainerComponent data={data} setPage={setPage} totalPages={tp} isFromManage={true} />
            </>
          )}
        </S.ManageListBox>
      </>
    </S.ManageListContainer>
  );
}

export default ManageFeedbackContainer;