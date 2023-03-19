import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultImage from "../../images/profile_img.png"
import { useRef } from 'react';
import { useEffect } from 'react';

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
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
    `,
    Question:styled.div`
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

function MyPageProfile() {
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(defaultImage);
    const [idcheck, setIdcheck] = useState("");

    const imgInput = useRef();

    const [input, setInput] = useState({
        email: 'maninhat@kakao.com',
        nickname: '호갱',
        phoneNumber: '01012345678',
        university: '한국대학교',
        oneLineIntroduction: '안녕하세요 만나서 반갑습니다! 좋은 자료 많이 공유할게요!'
    });

    const { email, nickname, phoneNumber, university, oneLineIntroduction } = input;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]:value
        });
    };

    const onChangeImg = (e) => {
        imgInput.current.click();

        setProfileImage({
            ...profileImage,
            profileImage: e.target.value
        })

        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        axios.put(`localhost:8080/user/img`, formData)
        .then((res) => {
            if (res.status === 200) {
                console.log(res);
                console.log("프로필 사진 put 완료")
                navigate("/");
            }
        })
        .catch((err) => {
            console.log("PUT : 프로필 사진을 변경하던 중 에러")
            console.error(err);
        });
    };

    const nicknameOverlapCheck = (nickname) => {
        axios
        .get(`http://localhost:8080/nickname?nickname=${nickname}`)
        .then((res) => {
        if (res.status === 200) {
            setIdcheck(res.data.data);
        }
        })
        .catch((err) => {
            console.log(err);
        });  
    
    };

    const getProfileImg = () => {
        axios
        .get(`http://localhost:8080/user/img`)
        .then((res) => {
        if (res.status === 200) {
            setProfileImage(res.data.data);
        }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const changeProfile = (nickname, phoneNumber, university, oneLineIntroduction) => {
        axios.put(`http://localhost:8080/user`, {
            nickname : nickname,
            phoneNumber : phoneNumber,
            university : university,
            oneLineIntroduction : oneLineIntroduction
        }, { withCredentials: true })
        .then((res) => {
            if (res.status === 200) {
                navigate("/");
            }
        })
        .catch((err) => {
            console.log("PUT : 사용자 정보를 변경하던 중 에러")
            console.error(err);
        });
    };

    const getProfile = () => {
        axios.get('http://localhost:8080/user', { withCredentials: true })
        .then((res) => {
            if (res.status === 200) {
                setInput(res.data.data);
            }
        })
        .catch((err) => {
            console.log("GET : 사용자 정보를 가져오는 중 에러")
            console.log(err);
        });
    };


    useEffect(() => {
        getProfile();
        getProfileImg();
    }, []);
    

    return(
    <>
        <Style.Wrapper>
            <Style.ProfileImage src={profileImage}></Style.ProfileImage>
            <Style.ProfileIntro>
                <span style={{color: "#000000"}}>{nickname}</span> 
                님<br />오늘은 어떤 공모전에 참여하시나요?
            </Style.ProfileIntro>

            <div>
                <Style.ProfileImageButton
                    onClick={onChangeImg}
                >
                    프로필 사진 변경
                </Style.ProfileImageButton>
                <input
                    type="file"
                    ref={imgInput}
                    id="ProfileImg"
                    name='file'
                    accept="image/*"
                    style={{display: "none"}}
                />
            </div>
            
            <Style.HorizonLine/>
            
            <Style.DirectionTxt>
                프로필 수정 후 수정 완료 버튼을 반드시 눌러주세요
            </Style.DirectionTxt>
            
            <Style.ProfileWrapper>
                <Style.ItemWrapper>
                    <Style.Question>계정</Style.Question>
                    {email}
                </Style.ItemWrapper>
                
                <Style.ItemWrapper>
                    <Style.Question>닉네임</Style.Question>
                    <Style.Answer 
                        placeholder={nickname}
                        name="nickname"
                        value={nickname}
                        onChange={onChangeInput}
                    ></Style.Answer>
                    <Style.ItemButton
                        type='button'
                        onClick={() => nicknameOverlapCheck(nickname)}
                    >중복 확인</Style.ItemButton>
                </Style.ItemWrapper>
                <div>{idcheck}</div>
                <Style.ItemWrapper>
                    <Style.Question>휴대전화</Style.Question>
                    <Style.Answer 
                        placeholder={phoneNumber}
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={onChangeInput}
                    ></Style.Answer>
                </Style.ItemWrapper>
                
                <Style.ItemWrapper>
                    <Style.Question>재학 중 대학</Style.Question>
                    <Style.University>{university}</Style.University>
                    <Style.ItemButton
                        type='button'
                    >검색하기</Style.ItemButton>
                </Style.ItemWrapper>
                
                <Style.ItemWrapper style={{display: "flex"}}>
                    <Style.Question style={{flex:1}}>한줄 소개</Style.Question>
                    <Style.Answer 
                        placeholder={oneLineIntroduction}
                        name="oneLineIntroduction"
                        value={oneLineIntroduction}
                        onChange={onChangeInput}
                        style={{
                            width: "700px",
                            height: "90px",
                            flex: 2.1
                        }}
                    ></Style.Answer>
                </Style.ItemWrapper>
            </Style.ProfileWrapper>

            <Style.ModifyButton
                onClick={() => changeProfile(nickname, phoneNumber, university, oneLineIntroduction)}
            >수정 완료</Style.ModifyButton>

        </Style.Wrapper>
    </>
  )
}

export default MyPageProfile