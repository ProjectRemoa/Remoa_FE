import React, { useRef, useState } from "react";
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
    margin: 20px;
    min-width: 480px;
  `,
  Button: styled.button`
    width: 80%;
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
  const [upload, setUpload] = useState([]);

  const [isDragging, setIsDragging] = useState(false);

  const fileId = useRef(0);
  const dragRef = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeComp = (e) => {
    setComp(e.target.value);
  };
  return (
    <div>
      <Style.Conatiner>
        <table>
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
                />
              </td>
            </tr>
            {/* 참가 공모전 */}
            <tr>
              <th className={styles.th}>
                <label>비밀번호</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  className={styles.input}
                  type="text"
                  placeholder="공모전을 검색하거나 등록해보세요"
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
                />
              </td>
            </tr>
            {/* 카테고리 */}
            <tr>
              <th className={styles.th}>
                <label>카테고리</label>
              </th>
              <td className={styles.td}>
                <tr>
                  <td>
                    <div className={styles.form_radio_btn}>
                      <input id="radio-1" type="radio" name="ref" value="ref" />
                      <label htmlFor="radio-1">기획/아이디어</label>
                    </div>
                  </td>
                  <td>
                    <div className={styles.form_radio_btn}>
                      <input id="radio-2" type="radio" name="adv" value="adv" />
                      <label htmlFor="radio-2">광고/마케팅</label>
                    </div>
                  </td>
                  <td>
                    <div className={styles.form_radio_btn}>
                      <input id="radio-3" type="radio" name="vd" value="vd" />
                      <label htmlFor="radio-3">영상</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.form_radio_btn}>
                      <input id="radio-4" type="radio" name="dgn" value="dgn" />
                      <label htmlFor="radio-4">디자인/사진</label>
                    </div>
                  </td>
                  <td>
                    <div className={styles.form_radio_btn}>
                      <input id="radio-5" type="radio" name="etc" value="etc" />
                      <label htmlFor="radio-5">기타 아이디어</label>
                    </div>
                  </td>
                </tr>
              </td>
            </tr>
            {/* 첨부파일 */}
            <tr>
              <th className={styles.th}>
                <label>첨부파일</label>
              </th>
              <td className={styles.td}></td>
            </tr>
          </tbody>
        </table>
      </Style.Conatiner>
      <Style.Button style={{ marginTop: "30px" }}>등록하기</Style.Button>
    </div>
  );
}

export default ManageShareContainer;
