import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Style = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  HeaderWrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  BtnWrap: styled.div`
    width: 50%;
    float: left;
    display: flex;
    flex-direction: row;
    padding-top: 150px;
    margin: 0 auto;
  `,
  FollowBtn: styled.a`
    width: auto;
    font-size: 25px;
    border: none;
    background-color: transparent;
    color: #000000;
    text-align: left;
    outline: none;
    box-shadow: none;
  `,
  Line: styled.div`
    font-size: 25px;
    color: #000000;
    text-align: center;
    font-weight: bold;
    padding: 0 10px 0 10px;
  `,
  FollowNum: styled.div`
    width: 50%;
    float: left;
    display: flex;
    padding-top: 15px;
    margin: 0 auto;
  `,
  Text: styled.span`
    color: #fada5e;
    font-weight: bold;
  `,
  FollowList: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  FollowWrap: styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 60px;
    margin: 0 auto;
  `,
  FollowProfileImgWrap: styled.div`
        width: 10%
        padding: 0 20px 0 0;
    `,
  FollowProfileImg: styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
  `,
  FollowProfileIntroWrap: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    float: left;
    margin: 0 auto;
    text-align: left;
  `,
  FollowProfileName: styled.div`
    font-size: 30px;
    color: #000000;
  `,
  FollowNumWrap: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  `,
  FollowTotal: styled.div`
    color: #000000;
    font-size: 20px;
    padding: 0 10px 0 0;
  `,
  FollowTitle: styled.span`
    color: #fada5e;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px 0 0;
  `,
  FollowProfileIntro: styled.div`
    width: 100%;
    color: #1f1f1f;
    font-size: 20px;
    margin-top: 20px;
  `,
  FollowBtnWrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  FollowDetailBtn: styled.button`
    width: 173px;
    height: 45px;
    background: #fada5e;
    border-radius: 10px;
    color: #000000;
  `,
};

function Follow() {
  const navigate = useNavigate();
  const [followingList, setFollowingList] = useState([]); 
  const [followerList, setFollowerList] = useState([]);
  const [following, setFollowing] = useState(true);
  const [followInfo, setFollowInfo] = useState({
    followingColor: "#000000",
    followerColor: "#D0D0D0",
    followingIntro: (
      <Style.FollowNum>
        <Style.Text>호갱</Style.Text>님이 팔로우하고 있는 유저는 총&nbsp;
        <Style.Text>10</Style.Text>명 입니다
      </Style.FollowNum>
    ),
    followerIntro: (
      <Style.FollowNum>
        총&nbsp;<Style.Text>10</Style.Text>명이&nbsp;
        <Style.Text>호갱</Style.Text>님을 팔로잉하고 있어요
      </Style.FollowNum>
    ),
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
            <Style.FollowWrap key={i.toString()}>
              <Style.FollowProfileImgWrap>
                <Style.FollowProfileImg
                  src={res.data.data.resMypageList[i].profileImage}
                ></Style.FollowProfileImg>
              </Style.FollowProfileImgWrap>
              <Style.FollowProfileIntroWrap>
                <Style.FollowProfileName>
                  {res.data.data.resMypageList[i].userName}
                </Style.FollowProfileName>
                <Style.FollowNumWrap>
                  <Style.FollowTotal>
                    <Style.FollowTitle>Follower</Style.FollowTitle>{" "}
                    {res.data.data.resMypageList[i].followerNum}
                  </Style.FollowTotal>
                  <Style.FollowTotal>
                    <Style.FollowTitle>Following</Style.FollowTitle>{" "}
                    {res.data.data.resMypageList[i].followingNum}
                  </Style.FollowTotal>
                </Style.FollowNumWrap>
                <Style.FollowProfileIntro>
                  {res.data.data.resMypageList[i].oneLineIntroduction}
                </Style.FollowProfileIntro>
              </Style.FollowProfileIntroWrap>
              <Style.FollowBtnWrap>
                <Style.FollowDetailBtn
                  onClick={() =>
                    checkFollow(res.data.data.resMypageList[i].memberId)
                  }
                >
                  팔로잉 취소
                </Style.FollowDetailBtn>
                <Style.FollowDetailBtn
                  onClick={() =>
                    navigate(
                      `/user/list/${res.data.data.resMypageList[i].memberId}`
                    )
                  }
                >
                  작품 보러가기
                </Style.FollowDetailBtn>
              </Style.FollowBtnWrap>
            </Style.FollowWrap>
          );
          newInfo.push(userInfo);
        }
        setFollowingList(newInfo);
        setFollowInfo({
          followingColor: "#000000",
          followerColor: "#D0D0D0",
          followingIntro: (
            <Style.FollowNum>
              <Style.Text>{res.data.data.userName}</Style.Text>님이 팔로우하고
              있는 유저는 총&nbsp;
              <Style.Text>{res.data.data.followNum}</Style.Text>명 입니다
            </Style.FollowNum>
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
          <Style.FollowWrap key={i.toString()}>
            <Style.FollowProfileImgWrap>
              <Style.FollowProfileImg
                src={res.data.data.resMypageList[i].profileImage}
              ></Style.FollowProfileImg>
            </Style.FollowProfileImgWrap>
            <Style.FollowProfileIntroWrap>
              <Style.FollowProfileName>
                {res.data.data.resMypageList[i].userName}
              </Style.FollowProfileName>
              <Style.FollowNumWrap>
                <Style.FollowTotal>
                  <Style.FollowTitle>Follower</Style.FollowTitle>{" "}
                  {res.data.data.resMypageList[i].followerNum}
                </Style.FollowTotal>
                <Style.FollowTotal>
                  <Style.FollowTitle>Following</Style.FollowTitle>{" "}
                  {res.data.data.resMypageList[i].followingNum}
                </Style.FollowTotal>
              </Style.FollowNumWrap>
              <Style.FollowProfileIntro>
                {res.data.data.resMypageList[i].oneLineIntroduction}
              </Style.FollowProfileIntro>
            </Style.FollowProfileIntroWrap>
            <Style.FollowBtnWrap>
              <Style.FollowDetailBtn
                onClick={() =>
                  checkFollow(res.data.data.resMypageList[i].memberId)
                }
              >
                맞팔로우 하기
              </Style.FollowDetailBtn>
              <Style.FollowDetailBtn
                onClick={() =>
                  navigate(
                    `/user/list/${res.data.data.resMypageList[i].memberId}`
                  )
                }
              >
                작품 보러가기
              </Style.FollowDetailBtn>
            </Style.FollowBtnWrap>
          </Style.FollowWrap>
        );
        newInfo.push(userInfo);
      }
      setFollowerList(newInfo);
      setFollowInfo({
        followingColor: "#D0D0D0",
        followerColor: "#000000",
        followingIntro: null,
        followerIntro: (
          <Style.FollowNum>
            총&nbsp;<Style.Text>{res.data.data.followNum}</Style.Text>
            명이&nbsp;
            <Style.Text>{res.data.data.userName}</Style.Text>님을 팔로잉하고
            있어요
          </Style.FollowNum>
        ),
      });
    });
  };


  useEffect(() => {
    getFollowingList();
  }, []);

  return (
    <>
      <Style.Wrap>
        <Style.HeaderWrap>
          <Style.BtnWrap>
            <Style.FollowBtn
              style={{ color: followInfo.followingColor, fontWeight: "bolder" }}
              onClick={() => {
                setFollowing(true);
                getFollowingList();
              }}
            >
              팔로잉 관리
            </Style.FollowBtn>
            <Style.Line>|</Style.Line>
            <Style.FollowBtn
              style={{ color: followInfo.followerColor, fontWeight: "bolder" }}
              onClick={() => {
                setFollowing(false);
                getFollowerList();
              }}
            >
              팔로워 관리
            </Style.FollowBtn>
          </Style.BtnWrap>
          {following === true ? followInfo.followingIntro : followInfo.followerIntro}
        </Style.HeaderWrap>
        <Style.FollowList>
          {following === true ? followingList : followerList}
        </Style.FollowList>
      </Style.Wrap>
    </>
  );
}

export default Follow;