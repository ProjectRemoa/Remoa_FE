import React, {  useState , useEffect} from "react";
import {S} from "./ManageFeedbackContainer.styles"
import Dropdown from "../../../components/common/Dropdown";
import { filterOptions } from "../../reference/constants";
import { useNavigate } from "react-router";
import axios from "axios";
import Category_ from "../../../components/common/Category_";
import CommentContainer from "./CommentContainer";
import RefModal from "../../modal/RefModalPages/RefModal";

function ManageFeedbackContainer() {
  const [checkIdx, setCheckIdx] = useState(0);
  const [categoryName, setCategoryName] = useState("all");
  const [filter, setFilter] = useState(filterOptions[0].value); // 필터 값 (한글)
  const [sortOption, setSortOption] = useState(filterOptions[0].key); // 필터 값 (영어)
  const [toar, setTOAR] = useState(0); // 전체 레퍼런스 수
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [postId, setPostId] = useState(0);

  const [data, setData] = useState();

  const navigate = useNavigate();

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx(0);
    if (category === "idea") setCheckIdx(1);
    if (category === "marketing") setCheckIdx(2);
    if (category === "video") setCheckIdx(3);
    if (category === "design") setCheckIdx(4);
    if (category === "etc") setCheckIdx(5);
  };

  const onClickContents = () => {
    navigate("/");
  };

  useEffect(() => {
    let endpoint;
    endpoint = `/BE/user/activity?comment=${2}&scrap=${1}`;
    getComment(endpoint);
    console.log(typeof data);
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
        setData(content);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    fetchData();
  };

  const onClickViewer = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  const onClickFeedback = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  }

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
              <S.SelectBox>총 {1}개</S.SelectBox>
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
                <CommentContainer data={data} onClickViewer={onClickViewer} onClickFeedback={onClickFeedback} />
            </>
          )}
        </S.ManageListBox>
      </>
      {modalVisibleId !== "" && (
        <RefModal
          id2={postId}
          modalVisibleId2={modalVisibleId}
          setModalVisibleId2={setModalVisibleId}
        />
      )}
    </S.ManageListContainer>
  );
}

export default ManageFeedbackContainer;