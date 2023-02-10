import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import styles from "./ManageShareContainer.module.css";

const Style = {
  Conatiner: styled.div`
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-radius: 30px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-width: 480px;
    max-width: 1440px;
    width: 85%;
    //padding: 0 20%;
  `,
  Button: styled.button`
    width: 60%;
    max-width: 1200px;
    height: 60px;
    background: ${(props) => (props.state ? "#FADA5E" : "#C8D1E0")};
    color: ${(props) => (props.state ? "#010101" : "white")};

    border-radius: 30px;
    border: #fff48c;
    font-family: "NotoSansKR-700";
    font-size: 1rem;
    text-align: center;
    cursor: ${(props) => (props.state ? "pointer" : "default")};
    box-shadow: none;

    margin: 0 auto;
  `,
};

function ManageShareContainer() {
  const [name, setName] = useState("");
  const [comp, setComp] = useState("");
  const [compRes, setCompRes] = useState("");
  const [category, setCategory] = useState("");
  const [uploads, setUploads] = useState([]);

  const [buttonColor, setButtonColor] = useState(false);

  /* 작품명 */
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /* 참가 공모전 */
  const onChangeComp = (e) => {
    setComp(e.target.value);
  };

  /* 수상결과 */
  const onChangeRes = (e) => {
    setCompRes(e.target.value);
  };

  /* 카테고리 */
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  /* 첨부파일 */
  const fileInput = useRef(null);
  const onClickUpload = (e) => {
    fileInput.current.click(); // input과 div 연결
  };

  const handleFileChange = (e) => {
    const UploadList = [...uploads]; // 현재 uploads 복사
    //console.log("현재 받은 파일 : " + e.target.files.length + "개");

    let isAnyBig = false;
    for (let i = 0; i < e.target.files.length; i++) {
      //console.log(e.target.files[i]);
      // 파일 이름 길이 검사
      let isBig = false;
      if (e.target.files[i].name.length > 20) {
        isBig = true;
        isAnyBig = true;
      }
      if (!isBig) {
        let isDuplicate = false;
        for (let j = 0; j < UploadList.length; j++) {
          if (UploadList[j].name === e.target.files[i].name) {
            // 파일 중복이므로 담지 않는다
            alert("파일 중복");
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          // 중복에 걸리지 않았다면
          // 파일 용량 검사
          UploadList.push(e.target.files[i]);
        }
      }
    }
    if (isAnyBig) {
      alert("파일 이름은 최대 20자입니다");
    }
    setUploads(UploadList); // 덮어 씌우기
    //console.log("총 받은 파일 : " + UploadList.length + "개");
    /*for (let i = 0; i < UploadList.length; i++) {
      console.log(UploadList[i]);
    }*/
  };

  const onClickDelete = (name) => {
    //alert("삭제");
    setUploads(uploads.filter((upload) => upload.name !== name));
  };

  /* 검사 */
  useEffect(() => {
    // 하나라도 비어있으면 버튼이 클릭되지 않게
    if (
      name.length > 0 &&
      comp.length > 0 &&
      compRes.length > 0 &&
      category.length > 0 &&
      uploads.length > 0
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [name, comp, compRes, category, uploads]);

  /* 등록하기 */
  const onClickRegister = () => {
    alert("보내거라");
  };

  return (
    <div style={{ width: "100%" }}>
      <Style.Conatiner>
        <table className={styles.table}>
          <tbody>
            {/* 작품명 */}
            <tr>
              <th className={styles.th}>
                <label>작품명</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  type="email"
                  className={styles.input}
                  placeholder="작품명을 입력해주세요."
                  onChange={onChangeName}
                />
              </td>
            </tr>
            {/* 참가 공모전 */}
            <tr>
              <th className={styles.th}>
                <label>참가 공모전</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  className={styles.input}
                  type="text"
                  placeholder="공모전을 검색하거나 등록해보세요"
                  onChange={onChangeComp}
                />
              </td>
            </tr>
            {/* 수상 결과 */}
            <tr>
              <th className={styles.th}>
                <label>수상 결과</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  type="text"
                  className={styles.input}
                  placeholder="수상 결과를 선택해주세요"
                  onChange={onChangeRes}
                />
              </td>
            </tr>
            {/* 카테고리 */}
            <tr>
              <th className={styles.th} style={{ verticalAlign: "top" }}>
                <label>카테고리</label>
              </th>
              <td className={styles.td}>
                <tr>
                  <div
                    className={styles.form_radio_btn}
                    style={{ float: "left" }}
                  >
                    <input
                      id="radio-1"
                      type="radio"
                      name="category"
                      value="ref"
                      onChange={onChangeCategory}
                    />
                    <label htmlFor="radio-1">기획/아이디어</label>
                  </div>
                  <div
                    className={styles.form_radio_btn}
                    style={{ float: "left" }}
                  >
                    <input
                      id="radio-2"
                      type="radio"
                      name="category"
                      value="adv"
                      onChange={onChangeCategory}
                    />
                    <label htmlFor="radio-2">광고/마케팅</label>
                  </div>
                  <div
                    className={styles.form_radio_btn}
                    style={{ width: "30%", float: "left" }}
                  >
                    <input
                      id="radio-3"
                      type="radio"
                      name="category"
                      value="vd"
                      onChange={onChangeCategory}
                    />
                    <label htmlFor="radio-3">영상</label>
                  </div>
                </tr>
                <tr>
                  <div
                    className={styles.form_radio_btn}
                    style={{ width: "30%", float: "left" }}
                  >
                    <input
                      id="radio-4"
                      type="radio"
                      name="category"
                      value="dgn"
                      onChange={onChangeCategory}
                    />
                    <label htmlFor="radio-4">디자인/사진</label>
                  </div>
                  <div
                    className={styles.form_radio_btn}
                    style={{ width: "30%", float: "left" }}
                  >
                    <input
                      id="radio-5"
                      type="radio"
                      name="category"
                      value="etc"
                      onChange={onChangeCategory}
                    />
                    <label htmlFor="radio-5">기타 아이디어</label>
                  </div>
                </tr>
              </td>
            </tr>
            {/* 첨부파일 */}
            <tr>
              <th className={styles.th} style={{ verticalAlign: "top" }}>
                <label>첨부파일</label>
              </th>
              <td className={styles.td}>
                <div
                  style={{
                    width: "60%",
                    height: "100px",
                    fontSize: "70%",
                    border: "1px solid #b0b0b0",
                    background: "#ffffff",
                    borderRadius: "10px",
                    textAlign: "left",
                    color: "#B0B0B0",
                    padding: "3px",
                    cursor: "pointer",
                    overflow: "auto",
                  }}
                  onClick={onClickUpload}
                >
                  {uploads.length === 0 ? (
                    <span>
                      PDF/PPT/JPEG/PNG/MP4/WAV 파일만 뷰어에 업로드 가능합니다.
                      <br />
                      2개 이상 파일의 업로드는 가능하나, 다른 공모전의 자료를 한
                      뷰어에 동시에 올릴 시 삭제 대상이 될 수 있습니다.
                    </span>
                  ) : (
                    <div>
                      {uploads.map((upload) => (
                        <span>
                          {upload.name}&nbsp;
                          <span
                            onClick={(e) => {
                              e.stopPropagation(); // 겹쳐진 영역에서의 이중 클릭 이벤트 방지
                              onClickDelete(upload.name);
                            }}
                          >
                            🗙
                          </span>
                          <br />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInput}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  accept=".pdf, .ppt, .jpeg, .png, .mp4, .wav"
                  multiple="multiple"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Style.Conatiner>
      <Style.Button
        disabled={!buttonColor}
        state={buttonColor}
        onClick={onClickRegister}
        style={{ marginTop: "30px" }}
      >
        등록하기
      </Style.Button>
    </div>
  );
}

export default ManageShareContainer;
