import React, { useState } from 'react'
import styled from "styled-components";

const Style={
    Wrapper:styled.div`
        margin-top: 200px;
        margin-bottom: 112px;
    `,
    ProfileImage:styled.img`
        width: 222px;
        height: 222px;
        border-radius: 70%;
        overflow: hidden;
    `,
    ProfileIntro:styled.div`
        color: #C3C3C3;
        font-size: 15px;
        font-weight: bold;
        font-family: 'Inter';
        margin-top: 22px;
    `,
    ImgBtnWrap:styled.form`
        display: flex;
        flex-direction: row;
        width: 400px;
        margin: 0 auto;
    `,
    ProfileImageButton:styled.label`
        width: 177px;
        height: 46px;
        display: block;
        margin: 0 auto;
        background-color: #FADA5E;
        color: #FFFFFF;
        border-radius: 30px;
        line-height: 46px;
        font-size: 13px;
        font-weight: bold;
        font-family: 'Inter';
        margin-top: 22px;
        &:focus,
        &:hover {
            background-color: #FFBE0A;
            color: #FFFFFF;
        };
    `,
    HorizonLine:styled.hr`
        width: 890px;
        color: #BOBOBO;
        margin-top: 48px;
    `,
    DirectionTxt:styled.div`
        color: #5D5D5D;
        text-align: left;
        font-size: 18px;
        font-family: 'Inter';
    `,
    ProfileWrapper:styled.form`
        width: 890px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
    `,
    ItemWrapper:styled.div`
        margin-top: 22px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 28px;
    `,
    Question:styled.div`
        width: 200px;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Inter';
    `,
    Answer:styled.input`
        width: 264px;
        height: 42px;
        color: #1F1F1F;
        border: 1px solid #B0B0B0;
        border-radius: 10px;
        font-family: 'Inter';
        &::placeholder {
            color: #1F1F1F;
        };
        &:focus {
            outline: none;
            border: 3px solid #FADA5E;
        }
    `,
    University:styled.div`
        width: 264px;
        height: 42px;
        color: #1F1F1F;
        border: 1px solid #B0B0B0;
        border-radius: 10px;
        font-family: 'Inter';
    `,
    ItemButton:styled.button`
        width: 142px;
        height: 42px;
        background-color: #FADA5E;
        color: #464646;
        border-radius: 10px;
        border: 1px solid #B0B0B0;
        line-height: 40px;
        font-size: 15px;
        font-weight: bold;
        font-family: 'Inter';
        &:focus,
        &:hover {
            background-color: #FFBE0A;
            color: #FFFFFF;
        };
    `,
    ModifyButton:styled.button`
        width: 906px;
        height: 68px;
        background: #FADA5E;
        border: 1px solid #D0D0D0;
        border-radius: 30px;
        margin-top: 48px;
        font-size: 20px;
        color: #010101;
        font-weight: bold;
        font-family: 'Noto Sans KR';
        &:focus,
        &:hover {
            background-color: #FFBE0A;
            color: #FFFFFF;
        };
    `
    
}

function Follower() {
    const username = '호갱';
    const follower = 41;
    const following = 3;
    const intro = "안녕하세요."
    return(
    <>
        <div>
            <div>
                <button>
                    팔로잉 관리
                </button>
                <button>
                    팔로워 관리
                </button>
            </div>
            <div><span>{username}</span>님이 팔로잉하고 있는 유저는 총 <span>{follower}</span>명 입니다</div>
        </div>
        <div>
            <div>
                <img></img>
            </div>
            <div>
                <div>{username}</div>
                <div>
                    <div><span>Follower</span> {follower}</div>
                    <div><span>Following</span> {following}</div>
                </div>
                <div>{intro}</div>
            </div>
            <div>
                <button>
                    맞팔로우 하기
                </button>
                <button>
                    작품 보러가기
                </button>
            </div>
        </div>
            
    </>
  )
}

export default Follower