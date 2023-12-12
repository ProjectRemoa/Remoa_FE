import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getInquiries, getNotices } from "../../../apis/mypage/faq";
import Loading from "../../../styles/Loading";
import styledComponent from "./MyPageFAQDetail.styles";
const {
  Wrapper,
  Category,
  TitleContainer,
  Title,
  InfoContainer,
  Author,
  PostingTime,
  View,
  Content,
  ButtonContainer,
  Button,
} = styledComponent;

function MyPageFAQDetail() {
  const navigate = useNavigate();
  const { category, detailId } = useParams();
  const pageNumber = Math.ceil(detailId / 5);

  const { data: noticeData, isLoading: isNoticeLoading } = useQuery(
    ["noticeData"],
    () => getNotices(pageNumber)
  );

  const { data: inquiryData, isLoading: isInquiryLoading } = useQuery(
    ["inquiryData"],
    () => getInquiries(pageNumber)
  );

  let data = [];

  if (category === "notice") {
    data = noticeData?.notices;
  }
  if (category === "inquiry") {
    data = inquiryData?.inquiries;
  }

  const detailData = data?.find((data) => data.noticeId === parseInt(detailId));

  return (
    <>
      {isNoticeLoading || isInquiryLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Category>{category === "notice" ? "공지사항" : "문의하기"}</Category>
          <TitleContainer>
            <Title>{detailData?.title}</Title>
            <InfoContainer>
              <Author>Author</Author>
              <PostingTime>{detailData?.postingTime}</PostingTime>
              <View>{detailData?.view}</View>
            </InfoContainer>
          </TitleContainer>
          <Content>공지사항입니다. 이것은 내용입니다.</Content>
          <ButtonContainer>
            {category === "inquiry" ? <Button>답글</Button> : ""}
            <Button>삭제</Button>
            <Button>수정</Button>
            <Button onClick={() => navigate("/mypage/faq")}>목록</Button>
          </ButtonContainer>
        </Wrapper>
      )}
    </>
  );
}

export default MyPageFAQDetail;
