import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styles from './Login.module.css';
import { Button } from 'antd';
import kakao_login from '../../images/kakako_login.png'


function LoginContainer() {

  const KAKAO_AUTH_URL="https://developers.kakao.com/tool/resource/login";
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin =() =>{
    console.log("click login");
    console.log("ID : ",inputId);
    console.log("PW : ", inputPw);

    axios.post("/login",{
      id: inputId,
      password: inputPw,
    })
    .then((result)=>{
      console.log(result);
      console.log("result.data.id : ", result.data.id);
      console.log("result.data.password : ",result.data.password);

      if (result.data.id === undefined || result.data.id===null) {
        alert("입력하신 비밀번호가 일치하지 않습니다.");
        
      } 
      else if(result.data.id === inputId) {
        console.log("======================", "로그인 성공");
        sessionStorage.setItem("id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
        sessionStorage.setItem("name", result.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
        alert("환영합니다. "+ result.data.name+"님");
      }
      // 작업 완료 되면 페이지 이동(새로고침)
      document.location.href = "/";
    })
    .catch();
  }
  
  const onClickFind = () => {
    // ID, PW 찾기 페이지로 이동
  }

  const onClickRegister = () => {
    // 회원가입 페이지로 이동
  }
  
  return (
    <div style={{
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderColor: 'grey',
      borderRadius: '25px',
      padding: '15px'
    }}>
      <h4>Re모나</h4>
      <h2>로그인을 통해 더 많은 기능을 이용해보세요!</h2>
      
      {/* ID */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px'
      }}>
        <div style={{
          width: '30%',
        }}>
          ID
        </div>
        <input className={styles.input}
          type="id"
          placeholder="Enter ID"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>

      {/* PASSWORD */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '3px', paddingRight: '3px', paddingTop: '3px'
      }}>
        <div style={{
          width: '30%',
        }}>
          PASSWORD
        </div>
        <input className={styles.input}
          type="password"
          placeholder="Enter Password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />             
      </div>
 
      {/* 로그인 버튼 */ }
      <div style={{
        paddingTop: '5px',
        paddingBottom: '10px',
      }}>
        <Button
          title="로그인하기"
          onClick={onClickLogin}
          >
          로그인
        </Button>
      </div>

      {/* 카카오로 로그인 버튼*/}
      <div style={{
        paddingTop: '5px',
      }}>
        <a href={KAKAO_AUTH_URL}>
          <img src={kakao_login} alt="kakaologin"/>
        </a>
      </div>

      <div style={{
        margin: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',

      }}>
        <div style={{
          cursor: 'pointer',
          width: '45%', float: 'left',
          paddingLeft: '10px',
          fontWeight: '500',
        }}
        onClick={onClickFind}>
          ID / PW 찾기
        </div>
        <div style={{
          cursor: 'pointer',
          float: 'right',
          paddingRight: '10px',
          fontWeight: '500',
        }}
        onClick={onClickRegister}>
          회원가입
        </div>        
      </div>

    </div>
  )
}

export default LoginContainer
