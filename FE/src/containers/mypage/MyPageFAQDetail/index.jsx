import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getInquiriesDetail, getNoticesDetail } from "../../../apis/mypage/faq";
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

  const { data: noticeData, isLoading: isNoticeLoading } = useQuery(
    ["noticeData"],
    () => getNoticesDetail(detailId),
    {
      enabled: category === "notice",
    }
  );

  const { data: inquiryData, isLoading: isInquiryLoading } = useQuery(
    ["inquiryData"],
    () => getInquiriesDetail(detailId),
    {
      enabled: category === "inquiry",
    }
  );

  useEffect(() => {
    if (isNoticeLoading || isInquiryLoading) return;

    if (category === "notice") {
      setData(noticeData);
    } else if (category === "inquiry") {
      setData(inquiryData);
    }
  }, [isNoticeLoading, isInquiryLoading, category, noticeData, inquiryData]);

  return (
    <>
      {isNoticeLoading || isInquiryLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Category>{category === "notice" ? "공지사항" : "문의하기"}</Category>
          <TitleContainer>
            <Title>{data?.title}</Title>
            <InfoContainer>
              <Author>{data?.author}</Author>
              <PostingTime>{data?.postingTime}</PostingTime>
              <View>{data?.view}</View>
            </InfoContainer>
          </TitleContainer>
          <Content>{data?.content}</Content>
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
