import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Style={
    Wrap: styled.div`
        width: 100%;
        padding: 60px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    Title: styled.div`
        width: 100%;
        height: 60px;
        font-size: 25px;
        font-weight: bold;
        text-align: left;
    `,
    TableWrap:styled.div`
        display: flex;
        justify-content: center;
    `,
    Table:styled.table`
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    `,
    Thead:styled.thead`
        text-align: center;
        font-weight: bold;
    `,
    Tbody:styled.tbody`
        text-align: center;
    `,
    TheadValue:styled.td`
        border-top: 3px solid #000000;
        border-bottom: 1px solid #B0B0B0;
        height: 50px;
    `,
    TbodyValue:styled.td`
        border-bottom: 1px solid #B0B0B0;
        height: 50px;
    `,
    Trow:styled.tr`
    `,
    F:styled.div`
        padding: 0 0 30px 0;
    `,
    QA:styled.div`
        padding: 0 0 30px 0;
    `,
  
};

function MyPageFAQ() {
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  return (
    <>
    <Style.Wrap>
        <Style.F>
            <Style.Title>공지사항</Style.Title>
                <Style.TableWrap>
                    <Style.Table>
                        <Style.Thead>
                            <Style.Trow>
                                <Style.TheadValue>번호</Style.TheadValue>
                                <Style.TheadValue>제목</Style.TheadValue>
                                <Style.TheadValue>작성자</Style.TheadValue>
                                <Style.TheadValue>작성일</Style.TheadValue>
                                <Style.TheadValue>조회수</Style.TheadValue>
                            </Style.Trow>
                        </Style.Thead>
                        <Style.Tbody>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>   
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                        </Style.Tbody>
                    </Style.Table>
                </Style.TableWrap>
            </Style.F>
            <Style.QA>
                <Style.Title>문의하기</Style.Title>
                <Style.TableWrap>
                    <Style.Table>
                        <Style.Thead>
                            <Style.Trow>
                                <Style.TheadValue>번호</Style.TheadValue>
                                <Style.TheadValue>제목</Style.TheadValue>
                                <Style.TheadValue>작성자</Style.TheadValue>
                                <Style.TheadValue>작성일</Style.TheadValue>
                                <Style.TheadValue>조회수</Style.TheadValue>
                            </Style.Trow>
                        </Style.Thead>
                        <Style.Tbody>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                            <Style.Trow>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                                <Style.TbodyValue></Style.TbodyValue>
                            </Style.Trow>
                        </Style.Tbody>
                    </Style.Table>
                </Style.TableWrap>
            </Style.QA>
        </Style.Wrap>
    </>
  );
}

export default MyPageFAQ;
