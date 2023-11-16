import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../components/common/SearchBar";
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
  HorizonLine,
} = styledComponent;

function MyPageFollow() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [isFollowing, setIsFollowing] = useState(true);
  const [followData, setFollowData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [input, setInput] = useState("");

  const { userName, followNum } = userData;

  const followingIds = followingList.map((following) => following.memberId);
  const isFollowed = followerList.some((follower) =>
    followingIds.includes(follower.memberId)
  );

  useEffect(() => {
    getUserInfo("following");
  }, []);

  const getUserInfo = (type) => {
    axios.get(`/BE/${type}`).then((res) => {
      setUserData(res.data.data);
      setFollowData(res.data.data.resMypageList);
      setOriginalData(res.data.data.resMypageList);

      if (type === "following") {
        setFollowingList(res.data.data.resMypageList);
      }
      if (type === "follower") {
        setFollowerList(res.data.data.resMypageList);
      }
    });
  };

  const checkFollow = (memberId) => {
    axios
      .post(`/BE/follow/${memberId}`, {})
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = () => {
    const inputData = input?.toUpperCase().trim();
    setFollowData(
      originalData.filter((follow) =>
        follow.userName.toUpperCase().includes(inputData)
      )
    );
  };

  return (
    <Wrapper>
      <HeaderWrap>
        <BtnWrap>
          <FollowBtn
            style={{
              color: isFollowing ? "#1e1e1e" : "#a7a7a7",
              fontWeight: isFollowing ? 700 : 500,
            }}
            onClick={() => {
              getUserInfo("following");
              setIsFollowing(true);
            }}
          >
            팔로잉 관리
          </FollowBtn>
          <Line>|</Line>
          <FollowBtn
            style={{
              color: isFollowing ? "#a7a7a7" : "#1e1e1e",
              fontWeight: isFollowing ? 500 : 700,
            }}
            onClick={() => {
              getUserInfo("follower");
              setIsFollowing(false);
            }}
          >
            팔로워 관리
          </FollowBtn>
        </BtnWrap>
        <FollowNum>
          {isFollowing ? (
            <>
              {userName}님이 팔로우하고 있는 유저는 총&nbsp;
              <Text>{followNum}명</Text> 입니다
            </>
          ) : (
            <>
              총&nbsp;
              <Text>{followNum}명</Text>
              이&nbsp;
              {userName}님을 팔로잉하고 있어요
            </>
          )}
        </FollowNum>
      </HeaderWrap>

      <SearchBar
        placeholder="팔로우하고 있는 유저를 검색해보세요"
        handleInput={(input) => setInput(input)}
        handleClick={handleSearch}
      />

      <div style={{ marginTop: "48px" }}>
        {followData.map((user, i) => {
          return (
            <>
              <FollowWrap key={user.memberId}>
                <FollowProfileImgWrap>
                  <FollowProfileImg src={user.profileImage} />
                </FollowProfileImgWrap>

                <FollowProfileIntroWrap>
                  <FollowProfileName>{user.userName}</FollowProfileName>
                  <FollowNumWrap>
                    <FollowTotal>
                      <FollowTitle>팔로워</FollowTitle>
                      <span style={{ fontSize: "14px", marginLeft: "4px" }}>
                        {user.followerNum}
                      </span>
                    </FollowTotal>
                    <FollowTotal>
                      <FollowTitle>팔로잉</FollowTitle>
                      <span style={{ fontSize: "14px", marginLeft: "4px" }}>
                        {user.followingNum}
                      </span>
                    </FollowTotal>
                  </FollowNumWrap>
                  <FollowProfileIntro>
                    {user.oneLineIntroduction}
                  </FollowProfileIntro>
                </FollowProfileIntroWrap>

                <FollowBtnWrap>
                  <FollowDetailBtn
                    isFollowing={isFollowing}
                    isFollowed={isFollowed}
                    onClick={() => checkFollow(user.memberId)}
                  >
                    {isFollowing
                      ? "팔로잉 취소"
                      : isFollowed
                      ? "팔로잉 취소"
                      : "맞팔로우 하기"}
                  </FollowDetailBtn>
                  <FollowDetailBtn
                    onClick={() => navigate(`/user/list/${user.memberId}`)}
                  >
                    작품 보러가기
                  </FollowDetailBtn>
                </FollowBtnWrap>
              </FollowWrap>
              {i !== followData.length - 1 && <HorizonLine />}
            </>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default MyPageFollow;
