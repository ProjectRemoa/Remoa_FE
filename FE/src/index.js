import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import ToDoPage from './page/ToDoManagement'

const root = ReactDOM.createRoot(document.getElementById('root'));
const Style = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Style.Wrapper>
      <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/todo/*" element={ <ToDoPage />} />
      </Routes>
      </Style.Wrapper>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// "/todo/*" 중 * 기호는 뒤에 무언가가 더 올 수 있음을 의미한다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
