import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getNotices, getInquiries } from "../../../apis/mypage/faq";
import TableComponent from "../../../components/common/TableComponent";
import Dropdown from "../../../components/common/Dropdown";
import Loading from "../../../styles/Loading";
import styledComponent from "./MyPageFAQ.styles";
const { Wrapper, MyPaginate, SearchWrapper, SearchInput, SearchIcon } =
  styledComponent;

const filterOptions = [
  {
    key: "title",
    value: "제목",
  },
  {
    key: "author",
    value: "작성자",
  },
  {
    key: "content",
    value: "내용",
  },
];

function MyPageFAQ() {
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");
  const [noticePage, setNoticePage] = useState(1);
  const [inquiryPage, setInquiryPage] = useState(1);
  const [filter, setFilter] = useState(filterOptions[0].value);
  const [sortOption, setSortOption] = useState(filterOptions[0].key);
  const [noticeDatas, setNoticeDatas] = useState([]);
  const [inquiryDatas, setInquiryDatas] = useState([]);

  const { data: noticeData, isLoading: isNoticeLoading } = useQuery(
    ["noticeData", noticePage],
    () => getNotices(noticePage),
    { keepPreviousData: true }
  );
  const { data: inquiryData, isLoading: isInquiryLoading } = useQuery(
    ["inquryData", inquiryPage],
    () => getInquiries(inquiryPage),
    { keepPreviousData: true }
  );

  useEffect(() => {
    setNoticeDatas(noticeData?.notices);
    setInquiryDatas(inquiryData?.inquiries);
    setSortOption(filterOptions[0].key);
    setFilter(filterOptions[0].value);
    if (
      noticePage < noticeData?.totalPages &&
      inquiryPage < inquiryData?.totalPages
    ) {
      const nextNoticePage = noticePage + 1;
      const nextInquiryPage = inquiryPage + 1;

      queryClient.prefetchQuery(["nextNoticePage", nextNoticePage], () =>
        getNotices(nextNoticePage)
      );
      queryClient.prefetchQuery(["nextInquiryPage", nextInquiryPage], () =>
        getInquiries(nextInquiryPage)
      );
    }
  }, [
    noticeData?.notices,
    noticePage,
    noticeData?.totalPages,
    inquiryData?.inquiries,
    inquiryPage,
    inquiryData?.totalPages,
    queryClient,
  ]);

  const handleInput = (input) => {
    setInput(input);
  };

  const handleClick = () => {
    const inputData = input.toUpperCase().trim();
    if (sortOption === "title") {
      setNoticeDatas(
        noticeData.notices.filter((notice) =>
          notice.title.toUpperCase().includes(inputData)
        )
      );
      setInquiryDatas(
        inquiryData.inquiries.filter((inquiry) =>
          inquiry.title.toUpperCase().includes(inputData)
        )
      );
    }
    if (sortOption === "author") {
      setNoticeDatas(
        noticeData.notices.filter((notice) =>
          notice.author.toUpperCase().includes(inputData)
        )
      );
      setInquiryDatas(
        inquiryData.inquiries.filter((inquiry) =>
          inquiry.author.toUpperCase().includes(inputData)
        )
      );
    }
  };

  const onKeyDownSearch = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      {isNoticeLoading || isInquiryLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <TableComponent
            title="공지사항"
            data={noticeDatas}
            category={"notice"}
          />
          <MyPaginate
            pageCount={noticeData?.totalPages}
            previousLabel="<"
            nextLabel=">"
            onPageChange={(e) => setNoticePage(e.selected + 1)}
          />

          <TableComponent
            title="문의사항"
            data={inquiryDatas}
            category={"inquiry"}
          />
          <MyPaginate
            pageCount={inquiryData?.totalPages}
            previousLabel="<"
            nextLabel=">"
            onPageChange={(e) => setInquiryPage(e.selected + 1)}
          />

          <SearchWrapper>
            <Dropdown
              filter={filter}
              setFilter={setFilter}
              setSortOption={setSortOption}
              filterOptions={filterOptions}
            />
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onChange={(e) => handleInput(e.target.value)}
              onKeyDown={(e) => onKeyDownSearch(e)}
            />
            <SearchIcon type="button">
              <FaMagnifyingGlass onClick={handleClick} color="#a7a7a7" />
            </SearchIcon>
          </SearchWrapper>
        </Wrapper>
      )}
    </>
  );
}

export default MyPageFAQ;
