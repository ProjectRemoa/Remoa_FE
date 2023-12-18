import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
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
  const [data, setData] = useState([]);
  const { category, detailId } = useParams();
  const pageNumber = Math.ceil(detailId / 5);

  const { data: noticeData, isLoading: isNoticeLoading } = useQuery(
    ["noticeData"],
    () => getNotices(pageNumber),
    {
      enabled: category === "notice",
    }
  );

  const { data: inquiryData, isLoading: isInquiryLoading } = useQuery(
    ["inquiryData"],
    () => getInquiries(pageNumber),
    {
      enabled: category === "inquiry",
    }
  );

  useEffect(() => {
    if (isNoticeLoading || isInquiryLoading) return;

    if (category === "notice") {
      setData(noticeData?.notices);
    } else if (category === "inquiry") {
      setData(inquiryData?.inquiries);
    }
  }, [
    isNoticeLoading,
    isInquiryLoading,
    category,
    noticeData?.notices,
    inquiryData?.inquiries,
  ]);

  const detailData = useMemo(
    () => data?.find((data) => data.noticeId === parseInt(detailId)),
    [data, detailId]
  );

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
