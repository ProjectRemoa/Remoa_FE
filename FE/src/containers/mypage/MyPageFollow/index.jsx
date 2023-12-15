import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getFollow, postFollow } from "../../../apis/mypage/follow";
import SearchBar from "../../../components/common/SearchBar";
import Loading from "../../../styles/Loading";
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
  const queryClient = useQueryClient();
  const [isFollowing, setIsFollowing] = useState(true);
  const [input, setInput] = useState("");
  const [type, setType] = useState("following");
  const [followData, setFollowData] = useState();
  const { data, isLoading } = useQuery([type], () => getFollow(type));
  const { mutate } = useMutation((memberId) => postFollow(memberId), {
    onSuccess: () => queryClient.invalidateQueries([type]),
  });

  useEffect(() => {
    setFollowData(data?.resMypageList);
  }, [data?.resMypageList]);

  const followingIds = data?.resMypageList.map(
    (following) => following.memberId
  );

  const isFollowed = data?.resMypageList.some((follower) =>
    followingIds.includes(follower.memberId)
  );

  const handleSearch = () => {
    const inputData = input?.toUpperCase().trim();
    setFollowData(
      data?.resMypageList.filter((follow) =>
        follow.userName.toUpperCase().includes(inputData)
      )
    );
  };

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <HeaderWrap>
            <BtnWrap>
              <FollowBtn
                style={{
                  color: isFollowing ? "#1e1e1e" : "#a7a7a7",
                  fontWeight: isFollowing ? 700 : 500,
                }}
                onClick={() => {
                  setType("following");
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
                  setType("follower");
                  setIsFollowing(false);
                }}
              >
                팔로워 관리
              </FollowBtn>
            </BtnWrap>
            <FollowNum>
              {isFollowing ? (
                <>
                  {sessionStorage.getItem("nickname")}님이 팔로우하고 있는
                  유저는 총&nbsp;
                  <Text>{formatCount(data.data.followNum)}명</Text> 입니다
                </>
              ) : (
                <>
                  총&nbsp;
                  <Text>{formatCount(data.data.followNum)}명</Text>
                  이&nbsp;
                  {sessionStorage.getItem("nickname")}님을 팔로잉하고 있어요
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
            {followData?.map((user) => (
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
                        {formatCount(user.followerNum)}
                      </span>
                    </FollowTotal>
                    <FollowTotal>
                      <FollowTitle>팔로잉</FollowTitle>
                      <span style={{ fontSize: "14px", marginLeft: "4px" }}>
                        {formatCount(user.followingNum)}
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
                    onClick={() => mutate(user.memberId)}
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
            ))}
          </div>
        </Wrapper>
      )}
    </>
  );
}

export default MyPageFollow;
