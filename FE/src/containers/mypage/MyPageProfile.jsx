import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultImage from "../../images/profile_img.png"
import { useRef } from 'react';
import { useEffect } from 'react';
import PopupContent from './MyPageProfilePopupContent';

const Style={
    Wrapper:styled.div`
        margin-top: 100px;
        margin-bottom: 112px;
        height:auto;
        widht:auto;
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
        cursor:pointer;
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

function MyPageProfile() {
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState()//defaultImage);
    const [previewImage, setPreviewImage] = useState()//defaultImage);
    const [idcheck, setIdcheck] = useState();
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const imgInput = useRef();

    const [input, setInput] = useState({
        email: '',//'maninhat@kakao.com',
        nickname: '',//'호갱',
        phoneNumber: '',//'01012345678',
        university: '',//'한국대학교',
        oneLineIntroduction: '',//'안녕하세요 만나서 반갑습니다! 좋은 자료 많이 공유할게요!'
    });

    const { email, nickname, phoneNumber, university, oneLineIntroduction } = input;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]:value
        });
    };

    const changePhone = (e) => {
        let phone = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

        setInput({
            ...input,
            ['phoneNumber']: phone
        });
    };

    const changeUniversity = (name) => {
        setInput({
            ...input,
            ['university']:name
        });
    };

    const onChangeImg = (e) => {
        console.log(e);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        return new Promise((resolve) => {
            reader.onload = () => {
                setProfileImage(reader.result);
                setPreviewImage(e.target.files[0]);
                resolve();
            };
        });
    };

    const sendProfileImg = () => {
        imgInput.current.click();
    };

    const nicknameOverlapCheck = (nickname) => {
        axios
        .get(`/BE/nickname?nickname=${nickname}`)
        .then((res) => {
        if (res.status === 200) {
            console.log(res.data.data);
            if (!res.data.data) {
                setIdcheck(<div style={{width: '200px', color:'#FF0101', lineHeight: '42px', fontSize:'15px'}}>중복된 닉네임이 존재합니다.</div>);
            } else {
                if (checkUserId(nickname)) {
                    setIdcheck(<div style={{width: '200px', color:'#0075FF', lineHeight: '42px', fontSize:'15px'}}>닉네임을 사용하실 수 있습니다.</div>);
                }   
                else
                    window.location.reload();

            } 
        }
        })
        .catch((err) => {
            console.log(err);
        });  
    
    };

    const openPopup = () => {
        setIsOpenPopup(true);
    };

    const closePopup = () => {
        setIsOpenPopup(false);
    };

    const getProfileImg = () => {
        axios
        .get(`/BE/user/img`)
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                setProfileImage(res.data.data);
        }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const deleteProfileImg = () => {
        axios
        .delete(`/BE/user/img`)
        .then(() => {
            console.log("프로필 이미지 삭제 완료");
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const changeProfile = () => {
        axios.put(`/BE/user`, {
            nickname : nickname,
            phoneNumber : phoneNumber,
            university : university,
            oneLineIntroduction : oneLineIntroduction
        }, { withCredentials: true })
        .then((res) => {
            if (res.status === 200) {
                navigate("/");
                sessionStorage.setItem("nickname",nickname);
            }
        })
        .catch((err) => {
            console.error(err);
        });

        const formData = new FormData();
        formData.append('file', previewImage);

        axios.put(`/BE/user/img`, formData, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(() => {
            navigate("/");
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const getProfile = () => {
        axios.get('/BE/user', { withCredentials: true })
        .then((res) => {
            if (res.status === 200) {
                setInput(res.data.data);
            }
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    };


    const checkUserId = (id) => {
        if (id == "")
            return false;
 
        const idRegExp = /^[ㄱ-ㅎ가-힣a-zA-z0-9]{2,7}$/;
        if (!idRegExp.test(id)) {
            alert("닉네임은 한글, 영문 대소문자, 숫자 2~8자리로 입력해야합니다!");
            return false;
        }
        return true;
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

            <Style.ImgBtnWrap>
                <Style.ProfileImageButton
                    onClick={sendProfileImg}
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
                    onChange={(e) => onChangeImg(e)}
                ></input>
                <Style.ProfileImageButton
                    onClick={deleteProfileImg}
                >
                    기본 사진으로 변경
                </Style.ProfileImageButton>
            </Style.ImgBtnWrap>
            
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
                        onChange={onChangeInput}
                    ></Style.Answer>
                    <Style.ItemButton
                        type='button'
                        onClick={() => nicknameOverlapCheck(nickname)}
                    >중복 확인</Style.ItemButton>
                    <div>{idcheck}</div>
                </Style.ItemWrapper>
                <Style.ItemWrapper>
                    <Style.Question>휴대전화</Style.Question>
                    <Style.Answer 
                        placeholder={phoneNumber}
                        name="phoneNumber"
                        onChange={changePhone}
                    ></Style.Answer>
                </Style.ItemWrapper>
                
                <Style.ItemWrapper>
                    <Style.Question>재학 중 대학</Style.Question>
                    <Style.Answer
                        id='profileUniversity'
                        placeholder={university}
                        disabled
                    ></Style.Answer>
                    <Style.ItemButton
                        type='button'
                        id='popupDom'
                        onClick={openPopup}
                    >검색하기</Style.ItemButton>
                    {isOpenPopup && <PopupContent changeUniversity={changeUniversity} close={closePopup}></PopupContent>}
                </Style.ItemWrapper>
                
                <Style.ItemWrapper style={{gridTemplateColumns: '1fr 3fr'}}>
                    <Style.Question>한줄 소개</Style.Question>
                    <Style.Answer 
                        placeholder={oneLineIntroduction}
                        name="oneLineIntroduction"
                        onChange={onChangeInput}
                        style={{
                            width: "675px",
                            height: "90px",
                            flex: 2.7
                        }}
                    ></Style.Answer>
                </Style.ItemWrapper>
            </Style.ProfileWrapper>

            <Style.ModifyButton
                onClick={() => changeProfile()}
            >수정 완료</Style.ModifyButton>

        </Style.Wrapper>
    </>
  )
}

export default MyPageProfile