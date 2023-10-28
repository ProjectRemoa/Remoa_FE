import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponent from "./MyPageFollow.styles";
const {
  Wrapper,
  HeaderWrap,
  BtnWrap,
  FollowBtn,
  Line,
  FollowNum,
  Text,
  FollowWrap,
  FollowProfileImgWrap,
  FollowProfileImg,
  FollowProfileIntroWrap,
  FollowProfileName,
  FollowNumWrap,
  FollowTotal,
  FollowTitle,
  FollowProfileIntro,
  FollowBtnWrap,
  FollowDetailBtn,
} = styledComponent;

function MyPageFollow() {
  const navigate = useNavigate();
  const [followList, setFollowList] = useState([]);
  const [followInfo, setFollowInfo] = useState({});

  const checkFollow = (memberId) => {
    axios
      .post(`/BE/follow/${memberId}`, {})
      .then(() => {
        console.log("팔로잉/언팔로잉 확인");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const UserInfo = ({ i, user, type, checkFollow }) => (
    <FollowWrap key={i}>
      <FollowProfileImgWrap>
        <FollowProfileImg src={user.profileImage} />
      </FollowProfileImgWrap>

      <FollowProfileIntroWrap>
        <FollowProfileName>{user.userName}</FollowProfileName>
        <FollowNumWrap>
          <FollowTotal>
            <FollowTitle>Follower</FollowTitle> {user.followerNum}
          </FollowTotal>
          <FollowTotal>
            <FollowTitle>Following</FollowTitle> {user.followingNum}
          </FollowTotal>
        </FollowNumWrap>
        <FollowProfileIntro>{user.oneLineIntroduction}</FollowProfileIntro>
      </FollowProfileIntroWrap>

      <FollowBtnWrap>
        <FollowDetailBtn onClick={() => checkFollow(user.memberId)}>
          {type === "following" ? "팔로잉 취소" : "맞팔로우 하기"}
        </FollowDetailBtn>
        <FollowDetailBtn
          onClick={() => navigate(`/user/list/${user.memberId}`)}
        >
          작품 보러가기
        </FollowDetailBtn>
      </FollowBtnWrap>
    </FollowWrap>
  );

  const getUserInfo = (type) => {
    axios
      .get(`/BE/${type}`)
      .then((res) => {
        const newInfo = res.data.data.resMypageList.map((user, i) => (
          <UserInfo key={i} user={user} type={type} checkFollow={checkFollow} />
        ));
        setFollowList(newInfo);
        setFollowInfo({
          followColor: type === "following" ? "#000000" : "#D0D0D0",
          followerColor: type === "following" ? "#D0D0D0" : "#000000",
          followIntro: (
            <FollowNum>
              {type === "following" ? (
                <>
                  <Text>{res.data.data.userName}</Text>님이 팔로우하고 있는
                  유저는 총&nbsp;
                  <Text>{res.data.data.followNum}</Text>명 입니다
                </>
              ) : (
                <>
                  총&nbsp;
                  <Text>{res.data.data.followNum}</Text>
                  명이&nbsp;
                  <Text>{res.data.data.userName}</Text>님을 팔로잉하고 있어요
                </>
              )}
            </FollowNum>
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo("following");
  }, []);

  return (
    <Wrapper>
      <HeaderWrap>
        <BtnWrap>
          <FollowBtn
            style={{ color: followInfo.followColor }}
            onClick={() => {
              getUserInfo("following");
            }}
          >
            팔로잉 관리
          </FollowBtn>
          <Line>|</Line>
          <FollowBtn
            style={{ color: followInfo.followerColor }}
            onClick={() => {
              getUserInfo("follower");
            }}
          >
            팔로워 관리
          </FollowBtn>
        </BtnWrap>
        {followInfo.followIntro}
      </HeaderWrap>
      {followList}
    </Wrapper>
  );
}

export default MyPageFollow;
