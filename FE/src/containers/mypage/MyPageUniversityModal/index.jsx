import axios from "axios";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import styledComponent from "./MyPageUniversityModal.styles";
import SearchBar from "../../../components/common/SearchBar";
const {
  FullLayer,
  ContentWrapper,
  Title,
  DetailContent,
  SelectBtnWrapper,
  SelectBtn,
  TableWrapper,
  Table,
  Thead,
  TheadValue,
  Tbody,
  TbodyValue,
  Trow,
} = styledComponent;

const API_KEY = process.env.REACT_APP_UNIVERSITY_KEY;
const UNIVERSITY_URL = `/cnet/openapi/getOpenApi?apiKey=${API_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list&thisPage=1&perPage=500`;

const MyPageUniversityModal = ({ changeUniversity, close }) => {
  const [input, setInput] = useState("");
  const [universityData, setUniversityData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    getUniversityData();
  }, []);

  const getUniversityData = async () => {
    try {
      const response = await axios.get(UNIVERSITY_URL);
      setUniversityData(response.data.dataSearch.content);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUniversitySearch = (input) => {
    const inputData = input.toUpperCase().trim();
    if (!inputData) return;
    setSchoolData(
      universityData.filter((university) =>
        university.schoolName.includes(inputData)
      )
    );
  };

  return (
    <FullLayer>
      <ContentWrapper>
        <Title>내 학교 찾기</Title>
        <FaXmark style={{ cursor: "pointer" }} onClick={close} />
      </ContentWrapper>
      <DetailContent>
        학교명을 검색해보세요. 키워드형으로 입력하면 쉽게 찾을 수 있어요. (ex.
        한국, 한국대)
      </DetailContent>

      <SearchBar
        placeholder="학교명을 검색해보세요"
        handleInput={(input) => {
          input ? setInput(input) : setClickedIndex(null);
        }}
        handleClick={() => handleUniversitySearch(input)}
      />

      <TableWrapper>
        <Table>
          <Thead>
            <Trow>
              <TheadValue>소재지</TheadValue>
              <TheadValue>대학명</TheadValue>
            </Trow>
          </Thead>
          <Tbody>
            {schoolData.map((data, i) => (
              <Trow
                key={i}
                onClick={() => setClickedIndex(i)}
                clicked={clickedIndex === i}
              >
                <TbodyValue>{data.region}</TbodyValue>
                <TbodyValue>{data.schoolName}</TbodyValue>
              </Trow>
            ))}
          </Tbody>
        </Table>
      </TableWrapper>

      <SelectBtnWrapper>
        <SelectBtn
          type="button"
          onClick={() => {
            if (!schoolData[clickedIndex]) {
              return alert("학교를 선택해주세요");
            }
            changeUniversity(schoolData[clickedIndex]?.schoolName);
            close();
          }}
          clicked={clickedIndex !== null}
        >
          선택
        </SelectBtn>
      </SelectBtnWrapper>
    </FullLayer>
  );
};

export default MyPageUniversityModal;
