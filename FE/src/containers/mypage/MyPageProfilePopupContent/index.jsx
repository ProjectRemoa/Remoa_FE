import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../temporary/university";
import styledComponent from "./MyPageProfilePopupContent.styles";
const {
  FullLayer,
  CommonAlert,
  ContentWrapper,
  Title,
  DetailContent,
  SearchWrapper,
  SearchBtnWrapper,
  SearchBtn,
  InputWrapper,
  Input,
  UniversityTable,
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

const MyPageProfilePopupContent = (props) => {
  const [input, setInput] = useState("한국대학교");
  const { changeUniversity, close } = props;
  const [info, setInfo] = useState([
    <Trow key="1">
      <TbodyValue />
      <TbodyValue />
    </Trow>,
    <Trow key="2">
      <TbodyValue />
      <TbodyValue />
    </Trow>,
    <Trow key="3">
      <TbodyValue />
      <TbodyValue />
    </Trow>,
  ]);

  const clickTableEvent = (target) => {
    let targeting = document.getElementById(target);
    let tableRow = document.getElementsByClassName("Tr");
    let targetName = document.getElementById(target + "universityName");
    if (targeting) {
      for (let i = 0; i < tableRow.length; i++)
        tableRow[i].style.backgroundColor = "#FFFFFF";
      targeting.style.backgroundColor = "#FADA5E";
      changeUniversity(targetName.innerText);
    }
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchUniversity = (input) => {
    setInfo(info.splice(0));
    const newInfo = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]["name"].includes(input)) {
        let universityValue = (
          <Trow
            className="Tr"
            id={i.toString()}
            key={i.toString()}
            onClick={() => clickTableEvent(i.toString())}
          >
            <TbodyValue>{data[i]["address"]}</TbodyValue>
            <TbodyValue id={i.toString() + "universityName"}>
              {data[i]["name"]}
            </TbodyValue>
          </Trow>
        );
        newInfo.push(universityValue);
      }
    }
    setInfo(newInfo);
  };

  return (
    <FullLayer>
      <CommonAlert>
        <ContentWrapper>
          <Title>내 학교 찾기</Title>
          <span onClick={close}>
            <FontAwesomeIcon icon={faXmark} color="#FADA5E" size="2x" />
          </span>
        </ContentWrapper>
        <DetailContent>
          학교 명을 검색해보세요. 키워드 형으로 입력하면 쉽게 찾을 수 있어요.
          (ex. 한국, 한국대)
        </DetailContent>

        <SearchWrapper>
          <SearchBtnWrapper>
            <SearchBtn type="button" onClick={() => searchUniversity(input)}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color="white"
                size="2x"
              />
            </SearchBtn>
          </SearchBtnWrapper>
          <InputWrapper>
            <Input onChange={(e) => inputHandler(e)}></Input>
          </InputWrapper>
        </SearchWrapper>

        <TableWrapper>
          <Table>
            <Thead>
              <Trow>
                <TheadValue scope="col">소재지</TheadValue>
                <TheadValue scope="col">대학명</TheadValue>
              </Trow>
            </Thead>
            <Tbody>{info ? info : null}</Tbody>
          </Table>
        </TableWrapper>

        <SelectBtnWrapper>
          <SelectBtn type="button" onClick={close}>
            선택
          </SelectBtn>
        </SelectBtnWrapper>
      </CommonAlert>
    </FullLayer>
  );
};

export default MyPageProfilePopupContent;
