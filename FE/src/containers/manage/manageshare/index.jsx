import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import S from './ManageShareContainer.styles'
import { useRecoilState } from "recoil";
import { editState } from "../../../state/editState";

/* byte 수 세는 알고리즘 */
function getByteLength(s, b, i, c) {
  for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
  return b;
}

function ManageShareContainer() {
  const [name, setName] = useState("");
  const [comp, setComp] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState("idea");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [uploads, setUploads] = useState([]);
  const [checked, setChecked] = useState([1, 0, 0, 0, 0]);
  //const [loading, setLoading] = useState(false);

  const [buttonColor, setButtonColor] = useState(false);
  const [isEdit, setIsEdit] = useRecoilState(editState)

  const navigate = useNavigate();

  /* 작품명 */
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /* 참가 공모전 */
  const onChangeComp = (e) => {
    setComp(e.target.value);
  };

  /* 카테고리 */
  const onChangeCategory = (name) => {
    setCategory(name);
    if (name === "idea") setChecked([1, 0, 0, 0, 0, 0]);    
    if (name === "marketing") setChecked([0, 1, 0, 0, 0, 0]);
    if (name === "video") {
      setChecked([0, 0, 1, 0, 0, 0]);
      setUploads([]); // 초기화
    }
    if (name === "design") setChecked([0, 0, 0, 1, 0, 0]);
    if (name === "digital") setChecked([0, 0, 0, 0, 1, 0]);
    if (name === "etc") setChecked([0, 0, 0, 0, 0, 1]);
  };

  const onChangeYoutubeLink = (e) => {
    setYoutubeLink(e.target.value);
  };

  /* 표지사진 */
  const fileThumbnail = useRef(null);
  const onClickUpload_ = (e) => {
    fileThumbnail.current.click(); // input과 div 연결
  };

  const handleFileChange_ = (e) => {
    if (getByteLength(e.target.files[0].name) > 150) {
      alert("파일의 제목은 150자 미만입니다.");
    } else {
      setThumbnail(e.target.files[0]);
    }
  };

  const onClickDelete_ = () => {
    setThumbnail(null);
  };

  /* 첨부파일 */
  const fileInput = useRef(null);
  const onClickUpload = (e) => {
    fileInput.current.click(); // input과 div 연결
  };

  const [fileSize, setFileSize] = useState(0);
  const handleFileChange = (e) => {
    const UploadList = [...uploads]; // 현재 uploads 복사

    let isPdfOrMp4, isAnyBig, isDuplicate, isSizeError;
    let allisPdfOrMp4 = false,
      allisAnyBig = false,
      allisDuplicate = false,
      allisSizeError = false;
    for (let i = 0; i < e.target.files.length; i++) {
      // 1. 파일 확장자 검사
      isPdfOrMp4 = false;
      const exten = e.target.files[i].name.split(".");

      // 이미 file이 있는데 pdf 또는 mp4를 불러온다면
      if (
        (exten[1] === "pdf" || exten[1] === "mp4") &&
        (uploads.length > 0 || e.target.files.length > 1)
      ) {
        isPdfOrMp4 = true;
        allisPdfOrMp4 = true;
      }
      // 이미 pdf가 있는데 또 pdf나 mp4를 불러온다면
      for (let i = 0; i < uploads.length; i++) {
        let exten = uploads[i].name.split(".");
        if (exten[1] === "pdf" || exten[1] === "mp4") {
          isPdfOrMp4 = true;
          allisPdfOrMp4 = true;
        }
      }

      if (!isPdfOrMp4) {
        // 2. 파일 이름 길이 검사
        isAnyBig = false;
        if (getByteLength(e.target.files[i].name) > 150) {
          isAnyBig = true;
          allisAnyBig = true;
        }
        if (!isAnyBig) {
          // 3. 파일 중복 검사
          isDuplicate = false;
          for (let j = 0; j < UploadList.length; j++) {
            if (UploadList[j].name === e.target.files[i].name) {
              // 파일 중복이므로 담지 않는다
              isDuplicate = true;
              allisDuplicate = true;
              break;
            }
          }

          // 4. 파일 용량 검사
          isSizeError = false;
          if (fileSize + e.target.files[i].size > 1048576 * 20) {
            isSizeError = true;
            allisSizeError = true;
          } else {
            setFileSize(fileSize + e.target.files[i].size);
          }
          if (!isPdfOrMp4 && !isDuplicate && !isPdfOrMp4 && !isSizeError) {
            // 중복에 걸리지 않고 확장자도 잘 지켜졌다면
            UploadList.push(e.target.files[i]);
          }
        }
      }
    }
    if (allisPdfOrMp4) {
      alert("pdf 또는 mp4는 단독으로 1개만 올릴 수 있습니다.");
    } else if (allisAnyBig) {
      alert("파일 이름은 최대 75자입니다.");
    } else if (allisDuplicate) {
      alert("중복된 파일이 있습니다.");
    } else if (allisSizeError) {
      alert("최대 20MB까지 첨부할 수 있습니다.");
    }
    
    setUploads(UploadList); // 덮어 씌우기
  };

  const onClickDelete = (name) => {
    setUploads(uploads.filter((upload) => upload.name !== name));
  };


  /* 검사 */
  useEffect(() => {
    // 하나라도 비어있으면 버튼이 클릭되지 않게
    if (category === "video") {
      // 영상을 클릭했다면 유튜브 링크도 첨부해야함
      if (
        name.length > 0 &&
        comp.length > 0 &&
        category.length > 0 &&
        thumbnail !== null &&
        youtubeLink.length > 0
      ) {
       setButtonColor(true);
      } else {
        setButtonColor(false);
      }
    } else {
      if (
        name.length > 0 &&
        comp.length > 0 &&
        category.length > 0 &&
        thumbnail !== null &&
        uploads.length > 0
      ) {
        setButtonColor(true);
      } else {
        setButtonColor(false);
      }
    }
  }, [name, comp, category, uploads, thumbnail, youtubeLink]);
  
  const onClickRegister = () => {
    const formdata = new FormData();

    // json 파일은 따로 Blob에 담음
    const UploadPostForm = {
      title: name,
      contestName: comp,
      category: category,
      contestAwardType: "NULL", // 빼기로 함
      youtubeLink: youtubeLink,
    };

    const uploadPostForm = new Blob([JSON.stringify(UploadPostForm)], {
      type: "application/json",
    });

    // json data는 data에 넣는다
    formdata.append("data", uploadPostForm);

    // 표지 사진도 파일이다
    formdata.append("thumbnail", thumbnail);

    // file은 따로 넣고
    Object.values(uploads).forEach((file) => formdata.append("file", file));

    axios.defaults.withCredentials = true;

    axios
      .post("/BE/reference", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("정상 등록되었습니다.");
          navigate("/manage/list");
        }
      })
      .catch((err) => {
        alert("통신 오류");
      });
  };

  return (
    <S.ManageShareContainer>
      <S.ManageShareBox>
        <S.ManageShareTable>
          <tbody>
            {/* 작품명 */}
            <tr>
              <th>작품명</th>
              <td>
                <input
                  required
                  type="email"
                  placeholder="작품명을 입력해주세요"
                  onChange={onChangeName}
                  value={name}
                  maxLength={40}
                />
              </td>
            </tr>
            {/* 참가 공모전 */}
            <tr>
              <th>참가공모전</th>
              <td>
                <input
                  required
                  type="text"
                  placeholder="공모전을 검색하거나 등록해보세요"
                  onChange={onChangeComp}
                  value={comp}
                  maxLength={60}
                />
              </td>
            </tr>
            {/* 카테고리 */}
            <tr>
              <th style={{ verticalAlign: "top" }}>카테고리</th>
              <td>
                <S.CategoryButtonBox>
                  <S.Category
                    checked={checked[0]}
                    onClick={() => onChangeCategory("idea")}
                  >
                    기획/아이디어
                  </S.Category>
                  <S.Category
                    checked={checked[1]}
                    onClick={() => onChangeCategory("marketing")}
                  >
                    광고/마케팅
                  </S.Category>
                  <S.Category
                    checked={checked[2]}
                    onClick={() => onChangeCategory("video")}
                  >
                    영상
                  </S.Category>
                </S.CategoryButtonBox>
                <S.CategoryButtonBox>
                  <S.Category
                    checked={checked[3]}
                    onClick={() => onChangeCategory("design")}
                  >
                    디자인/사진
                  </S.Category>
                  <S.Category
                    checked={checked[4]}
                    onClick={() => onChangeCategory("digital")}
                  >
                    IT/디지털
                  </S.Category>
                  <S.Category
                    checked={checked[5]}
                    onClick={() => onChangeCategory("etc")}
                  >
                    기타 아이디어
                  </S.Category>
                </S.CategoryButtonBox>
              </td>
            </tr>
            {/* 유튜브 링크 */}
            {category === "video" && (
              <tr>
                <th>유튜브 링크</th>
                <td>
                  <input
                    required
                    type="text"
                    className="input"
                    placeholder="영상 작업물 업로드 시 유튜브 링크를 업로드 해주세요."
                    onChange={onChangeYoutubeLink}
                  />
                </td>
              </tr>
            )}

            {/* 표지사진 */}
            <tr>
              <th>표지사진</th>
              <td>
                <S.ThumbailWrapper onClick={onClickUpload_}>
                  {thumbnail === null ? (
                    <S.ThumbnailText>
                      목록에 노출될 표시 사진을 업로드해주세요
                    </S.ThumbnailText>
                  ) : (
                    <div>
                      <span style={{ paddingLeft: "16px" }}>
                        {thumbnail.name}&nbsp;
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation(); // 겹쳐진 영역 중복 클릭 방지
                          onClickDelete_();
                        }}
                      >
                        🗙
                      </span>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileThumbnail}
                    onChange={handleFileChange_}
                    style={{ display: "none" }}
                    accept=".jpeg, .png, .jpg"
                  />
                </S.ThumbailWrapper>
              </td>
            </tr>
            {/* 첨부파일 */}
            {category !== "video" && (
              <tr>
                <th style={{ verticalAlign: "top" }}>첨부파일</th>
                <td>
                  <S.FileWrapper onClick={onClickUpload}>
                    {uploads.length === 0 ? (
                      <S.FileContainer>
                        PDF/JPEG/PNG/JPG 파일만 업로드 가능하며, PDF 파일을 1개
                        이상 올릴 시 다른 파일을 추가로 업로드할 수 없습니다.
                        <br />
                        (이미지 파일의 경우 복수 업로드 가능하며 파일 제목의
                        가나다순, 숫자의 경우 오름차순으로 업로드됩니다.)
                      </S.FileContainer>
                    ) : (
                      <S.FileContainer>
                        {uploads.map((upload) => (
                          <span key={upload.name}>
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
                      </S.FileContainer>
                    )}
                  </S.FileWrapper>
                  <input
                    type="file"
                    ref={fileInput}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    accept=".pdf, .jpg, .jpeg, .png, .mp4, .wav"
                    multiple="multiple"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </S.ManageShareTable>
      </S.ManageShareBox>
      <S.ButtonBox>
        <S.WarningBox>
          {!buttonColor ? (
            <>아직 모든 정보가 입력되지 않았어요!</>
          ) : (
            <>&nbsp;</>
          )}
        </S.WarningBox>
        <S.Button
          disabled={!buttonColor}
          state={buttonColor}
          onClick={onClickRegister}
        >
          {isEdit ? "수정하기" : "등록하기"}
        </S.Button>
      </S.ButtonBox>
    </S.ManageShareContainer>
  );
}

export default ManageShareContainer;
