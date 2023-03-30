import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Style={
    BtnWrap:styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-top: 150px;
        padding-left: 20px;
    `,
    FollowBtn:styled.a`
        font-size: 25px;
        border: none;
        background-color: transparent;
        color: #000000;
        text-align: center;
    `,
    Line:styled.div`
        font-size: 25px;
        color: #000000;
        text-align: center;
        font-weight: bold;
        margin: 0 10px 0 10px;
    `,
    FollowNum:styled.div`
    
    `,
    Text:styled.span`
        
    `
    
}

function Following() {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);
    const [username, setUsername] = useState('');
    const [followNum, setFollowNum] = useState();

    const getFollowingList = () => {
        axios.get(`/BE/following`)
        .then((res) => {
            setUsername(res.data.data.userName);
            setFollowNum(res.data.data.followNum);
            for (let i=0; i<res.data.data.resMypageList.length; i++) {
                let userInfo = (
                <div>
                    <div>
                        <img src={res.data.data.resMypageList[i].profileImage}></img>
                    </div>
                    <div>
                        <div>{res.data.data.resMypageList[i].userName}</div>
                        <div>
                            <div><span>Follower</span> {res.data.data.resMypageList[i].followerNum}</div>
                            <div><span>Following</span> {res.data.data.resMypageList[i].followingNum}</div>
                        </div>
                        <div>{res.data.data.resMypageList[i].oneLineIntroduction}</div>
                    </div>
                    <div>
                        <button
                            onClick={setFollow(res.data.data.resMypageList[i].memberId)}>
                            팔로잉 취소
                        </button>
                        <button
                            onClick={navigate(`/user/list/${res.data.data.resMypageList[i].memberId}`)}>
                            작품 보러가기
                        </button>
                    </div>
                </div>
                );
                setUserList([...userList, userInfo]);
            }
        })
    };

    const setFollow = (memberId) => {
        axios.post(`/BE/follow/${memberId}`)
        .then(() => {
            console.log('팔로잉/언팔로잉 확인');
            window.location.reload();
        })
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        getFollowingList();
    }, []);

    return(
    <>
        <div>
            <Style.BtnWrap>
                <Style.FollowBtn style={{fontWeight: 'bolder'}}>
                    팔로잉 관리
                </Style.FollowBtn>
                <Style.Line>|</Style.Line>
                <Style.FollowBtn style={{color:'#D0D0D0', fontWeight: 'bolder'}}>
                    팔로워 관리
                </Style.FollowBtn>
            </Style.BtnWrap>
            <Style.FollowNum><Style.Text>{username}</Style.Text>님이 팔로잉하고 있는 유저는 총 <span>{followNum}</span>명 입니다</Style.FollowNum>
        </div>
        {userList}      
    </>
  )
}

export default Following