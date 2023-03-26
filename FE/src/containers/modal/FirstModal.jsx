import React, { useState } from "react";
import { FM } from "../../layout/FirstModalStyle";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  check: {
    fontWeight: "700",
  },
});

export default function FirstModal({ modalOpen, setModalOpen }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const onClickChange = () => {
    sessionStorage.removeItem("new");
    navigate("/mypage/profile");
  };

  return (
    <>
      <FM.ModalWrapper style={{ display: modalOpen === false && "none" }}>
        <FM.Modal>
          <FM.Up>
            <FM.Welcome>
              <span style={{ color: "#FADA5E" }}>레모아</span>에 오신 것을
              환영합니다
            </FM.Welcome>
            <FM.Warn>
              <PriorityHighIcon style={{ color: "red" }} />
              잠깐!
            </FM.Warn>
            <FM.Guide>
              시작하시기 전에
              <br />
              프로필 정보를 추가해보세요
            </FM.Guide>
          </FM.Up>

          <FM.Line />

          <FM.Howtable>
            <tr>
              <td>
                <CheckIcon
                  className={classes.check}
                  style={{ fontSize: "30px" }}
                />
              </td>
              <FM.HowWrapper>
                <FM.How style={{ marginLeft: "-35px" }}>
                  기본으로 설정된 프로필 사진을 변경하고
                  <br />한 줄 소개 등 추가 정보를 입력해보세요
                </FM.How>
              </FM.HowWrapper>
            </tr>
            <tr>
              <td>
                <CheckIcon
                  className={classes.check}
                  style={{ fontSize: "30px" }}
                />
              </td>
              <FM.HowWrapper>
                <FM.How>
                  개성 넘치는 프로필로 작품을 등록하고
                  <br />
                  피드백을 달아서 더 많은 팔로워를 모아보세요
                </FM.How>
              </FM.HowWrapper>
            </tr>
          </FM.Howtable>

          <FM.ChangeProfile
            style={{ cursor: "pointer" }}
            onClick={onClickChange}
          >
            프로필 변경 바로가기
          </FM.ChangeProfile>
          <FM.Close
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalOpen(false);
              sessionStorage.removeItem("new");
            }}
          >
            다음에 변경하기
          </FM.Close>
        </FM.Modal>
      </FM.ModalWrapper>
    </>
  );
}
