import styled from "styled-components";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../temporary/university";

const Style = {
  FullLayer: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 300;
    /* transform: translate(-50%, -50%); */
  `,
  CommonAlert: styled.div`
    text-align: left;
    background-color: #ffffff;
    border: 2px solid #cdcdcd;
    color: black;
    border-radius: 10px;
    padding: 40px;
    margin: auto;
    box-sizing: border-box;
    font-size: 16px;
  `,
  ContentWrap: styled.div`
    width: 100%;
    align-text: left;
    display: flex;
    flex-direction: row;
  `,
  Title: styled.div`
    color: #464646;
    font-size: 25px;
    flex: 1;
  `,
  DetailContent: styled.div`
    color: #464646;
    font-size: 18px;
    margin-bottom: 15px;
  `,
  SearchWrap: styled.div`
    height: 43px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
  `,
  SearchBtnWrap: styled.div`
    background-color: #fada5e;
    padding: 0px 20px 8px 20px;
    border-radius: 25px 0px 0px 25px;
  `,
  SearchBtn: styled.button`
    border: none;
    background-color: transparent;
    outline: none;
    box-shadow: none;
  `,
  InputWrap: styled.div`
    border: 2px solid #cdcdcd;
    border-radius: 0px 25px 25px 0px;
    height: 43px;
    flex: 1;
  `,
  Input: styled.input`
    width: 90%;
    height: 90%;
    text-align: center;
    font-size: 20px;
    border: none;
    line-height: 43px;
    outline: none;
  `,
  UniversityTable: styled.table``,
  SelectBtnWrap: styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
  `,
  SelectBtn: styled.button`
    width: 235px;
    height: 49px;
    text-align: center;
    line-height: 49px;
    color: #010101;
    margin: auto;
  `,
  TableWrap: styled.div`
    height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
  `,
  Table: styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    text-align: left;
  `,
  Thead: styled.thead`
    height: 56px;
    background-color: #e1e1e1;
    font-weigth: bold;
  `,
  TheadValue: styled.th`
    text-align: left;
    background-color: #e1e1e1;
    padding-left: 10%;
  `,
  Tbody: styled.tbody`
    background-color: #ffffff;
  `,
  TbodyValue: styled.td`
    height: 56px;
    padding-left: 10%;
  `,
  Trow: styled.tr`
    height: 56px;
    background-color: #ffffff;
  `,
};

const MyPageProfilePopupContent = (props) => {
  const [input, setInput] = useState("한국대학교");
  const { changeUniversity, close } = props;
  const [info, setInfo] = useState([
    <Style.Trow key={"1"}>
      <Style.TbodyValue>{""}</Style.TbodyValue>
      <Style.TbodyValue>{""}</Style.TbodyValue>
    </Style.Trow>,
    <Style.Trow key={"2"}>
      <Style.TbodyValue>{""}</Style.TbodyValue>
      <Style.TbodyValue>{""}</Style.TbodyValue>
    </Style.Trow>,
    <Style.Trow key={"3"}>
      <Style.TbodyValue>{""}</Style.TbodyValue>
      <Style.TbodyValue>{""}</Style.TbodyValue>
    </Style.Trow>,
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
          <Style.Trow
            className="Tr"
            id={i.toString()}
            key={i.toString()}
            onClick={() => clickTableEvent(i.toString())}
          >
            <Style.TbodyValue>{data[i]["address"]}</Style.TbodyValue>
            <Style.TbodyValue id={i.toString() + "universityName"}>
              {data[i]["name"]}
            </Style.TbodyValue>
          </Style.Trow>
        );
        newInfo.push(universityValue);
      }
    }
    setInfo(newInfo);
  };

  return (
    <Style.FullLayer>
      <Style.CommonAlert>
        <Style.ContentWrap>
          <Style.Title>내 학교 찾기</Style.Title>
          <a onClick={close}>
            <FontAwesomeIcon icon={faXmark} color="#FADA5E" size="2x" />
          </a>
        </Style.ContentWrap>
        <Style.DetailContent>
          학교 명을 검색해보세요. 키워드 형으로 입력하면 쉽게 찾을 수 있어요.
          (ex. 한국, 한국대)
        </Style.DetailContent>

        <Style.SearchWrap>
          <Style.SearchBtnWrap>
            <Style.SearchBtn
              type="button"
              onClick={() => searchUniversity(input)}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color="white"
                size="2x"
              />
            </Style.SearchBtn>
          </Style.SearchBtnWrap>
          <Style.InputWrap>
            <Style.Input onChange={(e) => inputHandler(e)}></Style.Input>
          </Style.InputWrap>
        </Style.SearchWrap>

        <Style.TableWrap>
          <Style.Table>
            <Style.Thead>
              <Style.Trow>
                <Style.TheadValue scope="col">소재지</Style.TheadValue>
                <Style.TheadValue scope="col">대학명</Style.TheadValue>
              </Style.Trow>
            </Style.Thead>
            <Style.Tbody>{info ? info : null}</Style.Tbody>
          </Style.Table>
        </Style.TableWrap>

        <Style.SelectBtnWrap>
          <Style.SelectBtn type="button" onClick={close}>
            선택
          </Style.SelectBtn>
        </Style.SelectBtnWrap>
      </Style.CommonAlert>
    </Style.FullLayer>
  );
};

export default MyPageProfilePopupContent;
