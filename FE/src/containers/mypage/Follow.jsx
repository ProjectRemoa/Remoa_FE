import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Style={
    Wrap:styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `,
    HeaderWrap:styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    BtnWrap:styled.div`
        width: 50%;
        float: left;
        display: flex;
        flex-direction: row;
        padding-top: 150px;
        margin: 0 auto;
    `,
    FollowBtn:styled.a`
        width: auto;
        font-size: 25px;
        border: none;
        background-color: transparent;
        color: #000000;
        text-align: left;
        outline: none;
        box-shadow: none;
        cursor:pointer;
    `,
    Line:styled.div`
        font-size: 25px;
        color: #000000;
        text-align: center;
        font-weight: bold;
        padding: 0 10px 0 10px;
    `,
    FollowNum:styled.div`
        width: 50%;
        float: left;
        display: flex;
        padding-top: 15px;
        margin: 0 auto;
    `,
    Text:styled.span`
        color: #FADA5E;
        font-weight: bold;
    `,
    FollowList:styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    FollowWrap:styled.div`
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 60px;
        margin: 0 auto;
    `,
    FollowProfileImgWrap:styled.div`
        width: 10%
        padding: 0 20px 0 0;
    `,
    FollowProfileImg:styled.img`
        width: 160px;
        height: 160px;
        border-radius: 50%;
        overflow: hidden;
    `,
    FollowProfileIntroWrap:styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        float: left;
        margin: 0 auto;
        text-align: left; 
    `,
    FollowProfileName:styled.div`
        font-size: 30px;
        color: #000000;
    `,
    FollowNumWrap:styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    `,
    FollowTotal:styled.div`
        color: #000000;
        font-size: 20px;
        padding: 0 10px 0 0;
    `,
    FollowTitle:styled.span`
        color: #FADA5E;
        font-size: 20px;
        font-weight: bold;
        padding: 0 10px 0 0;
    `,
    FollowProfileIntro:styled.div`
        width: 100%;
        color: #1F1F1F;
        font-size: 20px;
        margin-top: 20px;
    `,
    FollowBtnWrap:styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `,
    FollowDetailBtn:styled.button`
        width: 173px;
        height: 45px;
        background: #FADA5E;
        border-radius: 10px;
        color: #000000;
    `,
}

function Follow() {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]); // test: useState([temp1,temp2]);
    const [username, setUsername] = useState("호갱");
    const [followNum, setFollowNum] = useState(10);
    const [following, setFollowing] = useState(true);
    const [followInfo, setFollowInfo] = useState({
        followingColor: "#000000",
        followerColor: "#D0D0D0",
        followingIntro: <Style.FollowNum><Style.Text>{username}</Style.Text>님이 팔로잉하고 있는 유저는 총 <Style.Text>{followNum}</Style.Text>명 입니다</Style.FollowNum>,
        followerIntro: null
    });

    const { followingColor, followerColor, followingIntro, followerIntro } = followInfo;

    const followingPage = () => {
        setFollowInfo({
            ['followingColor']: "#000000",
            ['followerColor']: "#D0D0D0",
            ['followingIntro']: <Style.FollowNum><Style.Text>{username}</Style.Text>님이 팔로잉하고 있는 유저는 총&nbsp;<Style.Text>{followNum}</Style.Text>명 입니다</Style.FollowNum>,
            ['followerIntro']: null
        });
    };

    const followerPage = () => {
        setFollowing(false);
        setFollowInfo({
            ['followingColor']: "#D0D0D0",
            ['followerColor']: "#000000",
            ['followingIntro']: null,
            ['followerIntro']: <Style.FollowNum>총&nbsp;<Style.Text>{followNum}</Style.Text>명이&nbsp;<Style.Text>{username}</Style.Text>님을 팔로잉하고 있어요</Style.FollowNum>
        });
    };

    const checkFollow = (memberId) => {
        axios.post(`/BE/follow/${memberId}`, {})
        .then(() => {
            console.log('팔로잉/언팔로잉 확인');
            window.location.reload();
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const getFollowingList = () => {
        axios.get(`/BE/following`)
        .then((res) => {
            setUsername(res.data.data.userName);
            setFollowNum(res.data.data.followNum);
            for (let i=0; i<res.data.data.resMypageList.length; i++) {
                let userInfo = (
                <Style.FollowWrap>
                    <Style.FollowProfileImgWrap>
                        <Style.FollowProfileImg src={res.data.data.resMypageList[i].profileImage}></Style.FollowProfileImg>
                    </Style.FollowProfileImgWrap>
                    <Style.FollowProfileIntroWrap>
                        <Style.FollowProfileName>{res.data.data.resMypageList[i].userName}</Style.FollowProfileName>
                        <Style.FollowNumWrap>
                            <Style.FollowTotal><Style.FollowTitle>Follower</Style.FollowTitle> {res.data.data.resMypageList[i].followerNum}</Style.FollowTotal>
                            <Style.FollowTotal><Style.FollowTitle>Following</Style.FollowTitle> {res.data.data.resMypageList[i].followingNum}</Style.FollowTotal>
                        </Style.FollowNumWrap>
                        <Style.FollowProfileIntro>{res.data.data.resMypageList[i].oneLineIntroduction}</Style.FollowProfileIntro>
                    </Style.FollowProfileIntroWrap>
                    <Style.FollowBtnWrap>
                        <Style.FollowDetailBtn
                            onClick={() => checkFollow(res.data.data.resMypageList[i].memberId)}>
                            팔로잉 취소
                        </Style.FollowDetailBtn>
                        <Style.FollowDetailBtn
                            onClick={() => navigate(`/user/list/${res.data.data.resMypageList[i].memberId}`)}>
                            작품 보러가기
                        </Style.FollowDetailBtn>
                    </Style.FollowBtnWrap>
                </Style.FollowWrap>
                );
                setUserList([...userList, userInfo]);
            }
        })
    };

    const getFollowerList = () => {
        axios.get(`/BE/follower`)
        .then((res) => {
            setUsername(res.data.data.userName);
            setFollowNum(res.data.data.followNum);
            for (let i=0; i<res.data.data.resMypageList.length; i++) {
                let userInfo = (
                <Style.FollowWrap>
                    <Style.FollowProfileImgWrap>
                        <Style.FollowProfileImg src={res.data.data.resMypageList[i].profileImage}></Style.FollowProfileImg>
                    </Style.FollowProfileImgWrap>
                    <Style.FollowProfileIntroWrap>
                        <Style.FollowProfileName>{res.data.data.resMypageList[i].userName}</Style.FollowProfileName>
                        <Style.FollowNumWrap>
                            <Style.FollowTotal><Style.FollowTitle>Follower</Style.FollowTitle> {res.data.data.resMypageList[i].followerNum}</Style.FollowTotal>
                            <Style.FollowTotal><Style.FollowTitle>Following</Style.FollowTitle> {res.data.data.resMypageList[i].followingNum}</Style.FollowTotal>
                        </Style.FollowNumWrap>
                        <Style.FollowProfileIntro>{res.data.data.resMypageList[i].oneLineIntroduction}</Style.FollowProfileIntro>
                    </Style.FollowProfileIntroWrap>
                    <Style.FollowBtnWrap>
                        <Style.FollowDetailBtn
                            onClick={() => checkFollow(res.data.data.resMypageList[i].memberId)}>
                            맞팔로우 하기
                        </Style.FollowDetailBtn>
                        <Style.FollowDetailBtn
                            onClick={() => navigate(`/user/list/${res.data.data.resMypageList[i].memberId}`)}>
                            작품 보러가기
                        </Style.FollowDetailBtn>
                    </Style.FollowBtnWrap>
                </Style.FollowWrap>
                );
                setUserList([...userList, userInfo]);
            }
        })
    };

    

    useEffect(() => {
        if(following)
            getFollowingList();
        else
            getFollowerList();
    }, []);

 

    return(
    <>
        <Style.Wrap>
            <Style.HeaderWrap>
                <Style.BtnWrap>
                    <Style.FollowBtn style={{color: followingColor, fontWeight: 'bolder'}}
                        onClick={followingPage}
                    >
                        팔로잉 관리
                    </Style.FollowBtn>
                    <Style.Line>|</Style.Line>
                    <Style.FollowBtn style={{color: followerColor, fontWeight: 'bolder'}}
                        onClick={followerPage}
                    >
                        팔로워 관리
                    </Style.FollowBtn>
                </Style.BtnWrap>
                {followingIntro}
                {followerIntro}
            </Style.HeaderWrap>
            <Style.FollowList>{userList}</Style.FollowList>
        </Style.Wrap>    
    </>
  )
}

export default Follow













/*
    let temp1 = (
        <Style.FollowWrap>
            <Style.FollowProfileImgWrap>
                <Style.FollowProfileImg src="data:image/jpeg;base64,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"></Style.FollowProfileImg>
            </Style.FollowProfileImgWrap>
            <Style.FollowProfileIntroWrap>
                <Style.FollowProfileName>호갱1</Style.FollowProfileName>
                <Style.FollowNumWrap>
                    <Style.FollowTotal><Style.FollowTitle>Follower</Style.FollowTitle> 51</Style.FollowTotal>
                    <Style.FollowTotal><Style.FollowTitle>Following</Style.FollowTitle> 31</Style.FollowTotal>
                </Style.FollowNumWrap>
                <Style.FollowProfileIntro>안녕하세요. 반갑습니다.</Style.FollowProfileIntro>
            </Style.FollowProfileIntroWrap>
            <Style.FollowBtnWrap>
                <Style.FollowDetailBtn
                    onClick={() => console.log("팔로잉취소")}>
                    팔로잉 취소
                </Style.FollowDetailBtn>
                <Style.FollowDetailBtn
                    onClick={() => navigate(`/user/list/1`)}>
                    작품 보러가기
                </Style.FollowDetailBtn>
            </Style.FollowBtnWrap>
        </Style.FollowWrap>
    );

    let temp2 = (
        <Style.FollowWrap>
            <Style.FollowProfileImgWrap>
                <Style.FollowProfileImg src="data:image/jpeg;base64,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"></Style.FollowProfileImg>
            </Style.FollowProfileImgWrap>
            <Style.FollowProfileIntroWrap>
                <Style.FollowProfileName>호갱2</Style.FollowProfileName>
                <Style.FollowNumWrap>
                    <Style.FollowTotal><Style.FollowTitle>Follower</Style.FollowTitle> 50</Style.FollowTotal>
                    <Style.FollowTotal><Style.FollowTitle>Following</Style.FollowTitle> 13</Style.FollowTotal>
                </Style.FollowNumWrap>
                <Style.FollowProfileIntro>안녕하세요. 좋은 자료 많이 공유할께요!</Style.FollowProfileIntro>
            </Style.FollowProfileIntroWrap>
            <Style.FollowBtnWrap>
                <Style.FollowDetailBtn
                    onClick={() => checkFollow}>
                    팔로잉 취소
                </Style.FollowDetailBtn>
                <Style.FollowDetailBtn
                    onClick={() => navigate(`/user/list/1`)}>
                    작품 보러가기
                </Style.FollowDetailBtn>
            </Style.FollowBtnWrap>
        </Style.FollowWrap>
    );
*/