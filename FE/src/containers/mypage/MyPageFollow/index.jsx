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
  FollowList,
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
  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [following, setFollowing] = useState(true);
  const [followInfo, setFollowInfo] = useState({
    // followingColor: "#000000",
    // followerColor: "#D0D0D0",
    // followingIntro: (
    //   <FollowNum>
    //     <Text>호갱</Text>님이 팔로우하고 있는 유저는 총&nbsp;
    //     <Text>10</Text>명 입니다
    //   </FollowNum>
    // ),
    // followerIntro: (
    //   <FollowNum>
    //     총&nbsp;<Text>10</Text>명이&nbsp;
    //     <Text>호갱</Text>님을 팔로잉하고 있어요
    //   </FollowNum>
    // ),
  });

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

  const getFollowingList = () => {
    const newInfo = [];
    axios
      .get(`/BE/following`)
      .then((res) => {
        for (let i = 0; i < res.data.data.resMypageList.length; i++) {
          let userInfo = (
            <FollowWrap key={i.toString()}>
              <FollowProfileImgWrap>
                <FollowProfileImg
                  src={res.data.data.resMypageList[i].profileImage}
                ></FollowProfileImg>
              </FollowProfileImgWrap>
              <FollowProfileIntroWrap>
                <FollowProfileName>
                  {res.data.data.resMypageList[i].userName}
                </FollowProfileName>
                <FollowNumWrap>
                  <FollowTotal>
                    <FollowTitle>Follower</FollowTitle>{" "}
                    {res.data.data.resMypageList[i].followerNum}
                  </FollowTotal>
                  <FollowTotal>
                    <FollowTitle>Following</FollowTitle>{" "}
                    {res.data.data.resMypageList[i].followingNum}
                  </FollowTotal>
                </FollowNumWrap>
                <FollowProfileIntro>
                  {res.data.data.resMypageList[i].oneLineIntroduction}
                </FollowProfileIntro>
              </FollowProfileIntroWrap>
              <FollowBtnWrap>
                <FollowDetailBtn
                  onClick={() =>
                    checkFollow(res.data.data.resMypageList[i].memberId)
                  }
                >
                  팔로잉 취소
                </FollowDetailBtn>
                <FollowDetailBtn
                  onClick={() =>
                    navigate(
                      `/user/list/${res.data.data.resMypageList[i].memberId}`
                    )
                  }
                >
                  작품 보러가기
                </FollowDetailBtn>
              </FollowBtnWrap>
            </FollowWrap>
          );
          newInfo.push(userInfo);
        }
        setFollowingList(newInfo);
        setFollowInfo({
          followingColor: "#000000",
          followerColor: "#D0D0D0",
          followingIntro: (
            <FollowNum>
              <Text>{res.data.data.userName}</Text>님이 팔로우하고 있는 유저는
              총&nbsp;
              <Text>{res.data.data.followNum}</Text>명 입니다
            </FollowNum>
          ),
          followerIntro: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFollowerList = () => {
    const newInfo = [];
    axios.get(`/BE/follower`).then((res) => {
      for (let i = 0; i < res.data.data.resMypageList.length; i++) {
        let userInfo = (
          <FollowWrap key={i.toString()}>
            <FollowProfileImgWrap>
              <FollowProfileImg
                src={res.data.data.resMypageList[i].profileImage}
              ></FollowProfileImg>
            </FollowProfileImgWrap>
            <FollowProfileIntroWrap>
              <FollowProfileName>
                {res.data.data.resMypageList[i].userName}
              </FollowProfileName>
              <FollowNumWrap>
                <FollowTotal>
                  <FollowTitle>Follower</FollowTitle>{" "}
                  {res.data.data.resMypageList[i].followerNum}
                </FollowTotal>
                <FollowTotal>
                  <FollowTitle>Following</FollowTitle>{" "}
                  {res.data.data.resMypageList[i].followingNum}
                </FollowTotal>
              </FollowNumWrap>
              <FollowProfileIntro>
                {res.data.data.resMypageList[i].oneLineIntroduction}
              </FollowProfileIntro>
            </FollowProfileIntroWrap>
            <FollowBtnWrap>
              <FollowDetailBtn
                onClick={() =>
                  checkFollow(res.data.data.resMypageList[i].memberId)
                }
              >
                맞팔로우 하기
              </FollowDetailBtn>
              <FollowDetailBtn
                onClick={() =>
                  navigate(
                    `/user/list/${res.data.data.resMypageList[i].memberId}`
                  )
                }
              >
                작품 보러가기
              </FollowDetailBtn>
            </FollowBtnWrap>
          </FollowWrap>
        );
        newInfo.push(userInfo);
      }
      setFollowerList(newInfo);
      setFollowInfo({
        followingColor: "#D0D0D0",
        followerColor: "#000000",
        followingIntro: null,
        followerIntro: (
          <FollowNum>
            총&nbsp;<Text>{res.data.data.followNum}</Text>
            명이&nbsp;
            <Text>{res.data.data.userName}</Text>님을 팔로잉하고 있어요
          </FollowNum>
        ),
      });
    });
  };

  useEffect(() => {
    getFollowingList();
  }, []);

  return (
    <>
      <Wrapper>
        <HeaderWrap>
          <BtnWrap>
            <FollowBtn
              style={{ color: followInfo.followingColor, fontWeight: "bolder" }}
              onClick={() => {
                setFollowing(true);
                getFollowingList();
              }}
            >
              팔로잉 관리
            </FollowBtn>
            <Line>|</Line>
            <FollowBtn
              style={{ color: followInfo.followerColor, fontWeight: "bolder" }}
              onClick={() => {
                setFollowing(false);
                getFollowerList();
              }}
            >
              팔로워 관리
            </FollowBtn>
          </BtnWrap>
          {following ? followInfo.followingIntro : followInfo.followerIntro}
        </HeaderWrap>
        <FollowList>
          {following === true ? followingList : followerList}
        </FollowList>
      </Wrapper>
    </>
  );
}

export default MyPageFollow;
