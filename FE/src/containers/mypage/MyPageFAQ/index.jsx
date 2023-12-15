import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useQuery, useQueryClient } from "react-query";
import { getNotices, getInquiries } from "../../../apis/mypage/faq";
import Loading from "../../../styles/Loading";
import TableComponent from "../../../components/common/TableComponent";
import Dropdown from "../../../components/common/Dropdown";
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

  useEffect(() => {
    setSortOption(filterOptions[0].key);
    setFilter(filterOptions[0].value);

    const nextNoticePage = noticePage + 1;
    const nextInquiryPage = inquiryPage + 1;

    queryClient.prefetchQuery(["nextNoticePage", nextNoticePage], () =>
      getNotices(nextNoticePage)
    );
    queryClient.prefetchQuery(["nextInquiryPage", nextInquiryPage], () =>
      getInquiries(nextInquiryPage)
    );
  }, [noticePage, inquiryPage, queryClient]);

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

  const handleInput = (input) => {
    setInput(input);
  };

  const handleClick = () => {};

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
            data={noticeData?.notices}
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
            data={inquiryData?.inquiries}
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
