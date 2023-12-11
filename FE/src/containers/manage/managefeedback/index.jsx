import React, {  useState , useEffect} from "react";
import {S, styledComponent} from "./ManageFeedbackContainer.styles"
import Dropdown from "../../../components/common/Dropdown";
import { filterOptions } from "../../reference/constants";
import { useNavigate } from "react-router";
import axios from "axios";
import Category_ from "../../../components/common/Category_";

const {
  ContentsContainer,
  AsideContainer,
  Img,
  Button_,
  SectionContainer,
  Title,
  HorizonLine,
  Contents,
  CommentsContainer,
  MyCommentTitle,
  OneComment,
  ProfileContainer,
  ProfileImg,
  ProfileContents,
  ProfileNickname,
  MyComment,
  ButtonBox,
} = styledComponent;

function ManageFeedbackContainer() {
  const [checkIdx, setCheckIdx] = useState([1, 0, 0, 0, 0, 0]);
  const [categoryName, setCategoryName] = useState("all");
  const [filter, setFilter] = useState(filterOptions[0].value); // 필터 값 (한글)
  const [sortOption, setSortOption] = useState(filterOptions[0].key); // 필터 값 (영어)
  const [toar, setTOAR] = useState(0); // 전체 레퍼런스 수

  const [data, setData] = useState();

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

  return (
    <S.ManageListContainer>
      <div style={{ marginTop: "64px" }}>
        <Category_ onClickCategory={onChangeCategory} checkedArr={checkIdx} />
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
              <ContentsContainer key={data.postId}>
                <AsideContainer>
                  <Img src={data.thumbnail} alt="thumbnail" />
                  <ButtonBox>
                    <Button_
                      onClick={() => {
                        //onClickModal(data.postId);
                      }}
                    >
                      작업물 뷰어 보기
                    </Button_>
                    <Button_
                      onClick={() => {
                        //onClickModal(data.postId);
                      }}
                    >
                      내 피드백 바로가기
                    </Button_>
                  </ButtonBox>
                </AsideContainer>
                <SectionContainer>
                  <Title>{data.title}</Title>
                  <HorizonLine />
                  <Contents>
                    <CommentsContainer>
                      <MyCommentTitle>내가 받은 코멘트</MyCommentTitle>
                      <OneComment>
                        가장 먼저 작성된 코멘트 1개만 노출됩니다
                      </OneComment>
                    </CommentsContainer>
                    <ProfileContainer>
                      <ProfileImg src={data.member?.profileImage} alt="" />
                      <ProfileContents>
                        <ProfileNickname>
                          {data.member?.nickname}
                        </ProfileNickname>
                        <MyComment>{data.content}</MyComment>
                      </ProfileContents>
                    </ProfileContainer>
                  </Contents>
                </SectionContainer>
              </ContentsContainer>
            </>
          )}
        </S.ManageListBox>
        {/*} )*/}
      </>
    </S.ManageListContainer>
  );
}

export default ManageFeedbackContainer;