import styled from "styled-components";
import React, { useState } from 'react'
import { faMagnifyingGlass, faPassport } from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./temporary/university";

const Style={
    FullLayer:styled.div`
        position:fixed;
        top:50%;
        left:50%;
        z-index:300;
        transform: translate(-50%, -50%);
    `,
    CommonAlert:styled.div`
        text-align:left;
        background-color: #FFFFFF;
        border: 2px solid #CDCDCD;
        color: black;
        border-radius:10px;
        padding:40px;
        margin:auto;
        box-sizing:border-box;
        font-size: 16px;
    `,
    ContentWrap:styled.div`
        width: 100%;
        align-text: left;
        display: flex;
        flex-direction: row; 
    `,
    Title:styled.div`
        color: #464646;
        font-size: 25px;
        flex: 1;
    `,
    DetailContent:styled.div`
        color: #464646;
        font-size: 18px;
        margin-bottom: 15px;
    `,
    SearchWrap:styled.div`
        height : 43px;
        display: flex;
        flex-direction: row;
        gap : 10px;
        margin-bottom: 30px;
    `,
    SearchBtnWrap:styled.div`
        background-color: #FADA5E;
        padding: 0px 20px 8px 20px;
        border-radius: 25px 0px 0px 25px;
    `,
    SearchBtn:styled.button`
        border: none;
        background-color:transparent;
        outline: none;
        box-shadow: none;
    `,
    InputWrap:styled.div`
        border: 2px solid #CDCDCD;
        border-radius: 0px 25px 25px 0px;
        height : 43px;
        flex: 1;
    `,
    Input:styled.input`
        width : 90%;
        height : 90%;
        text-align: center;
        font-size: 20px;
        border : none;
        line-height : 43px;
        outline : none;
    `,
    UniversityTable:styled.table`
        width: 100%;
    `,
    SelectBtnWrap:styled.div`
        width: 100%;
        display: flex;
        margin-top: 30px;
    `,
    SelectBtn:styled.button`
        width: 235px;
        height: 49px;
        text-align: center;
        line-height: 49px;
        color: #010101;
        margin: auto;
    `,
    Table:styled.table`
        width: 100%;
        text-align: center;
        border-collapse:collapse;
        text-align: left;
    `,
    Thead:styled.thead`
        height: 56px;
        background-color: #E1E1E1;
        font-weigth: bold;
    `,
    TheadValue:styled.th`
        text-align: left;
        padding-left: 10%;
    `,
    Tbody:styled.tbody`
        background-color: #FFFFFF;
    `,
    TbodyValue:styled.td`
        height: 56px;
        padding-left: 10%;
    `,
    Trow:styled.tr`
        height: 56px;
    `
}

const PopupContent = (props) => {
    const [input, setInput] = useState('한국대학교');
    const [info, setInfo] = useState([]);//[data[0]['address'], data[0]['name']], [data[1]['address'], data[1]['name']], [data[2]['address'], data[2]['name']], [data[3]['address'], data[3]['name']], [data[4]['address'], data[4]['name']]]);

    const {close} = props;

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const clickTableEvent = (target) => {
        let targeting = document.getElementById(target);
        /*let t1 = document.getElementById("tr1");
        let t2 = document.getElementById("tr2");
        let t3 = document.getElementById("tr3");
        let t4 = document.getElementById("tr4");
        let t5 = document.getElementById("tr5");*/
        if (targeting) {
            /*t1.style.backgroundColor = '#FFFFFF';
            t2.style.backgroundColor = '#FFFFFF';
            t3.style.backgroundColor = '#FFFFFF';
            t4.style.backgroundColor = '#FFFFFF';
            t5.style.backgroundColor = '#FFFFFF';*/
            targeting.style.backgroundColor = '#FADA5E';
        }
    };
      
    const searchUniversity = (input) => {
        /*data.forEach((value) => {
            if (value['name'].includes(input) && [value['address'],value['name']]) {
                let universityValue = [value['address'],value['name']];
                setInfo([info.concat(universityValue)]);
                console.log(universityValue);
            } 
            //console.log(info);
        });*/
        for (let i=0; i<data.length; i++) {
            if (data[i]['name'].includes(input)) {
                console.log(data[i]);
                let universityValue = (
                <Style.Trow 
                    id={data[i]['name']}
                    key={data[i]['name']}
                    onClick={() => clickTableEvent(data[i]['name'])}    
                >
                    <Style.TbodyValue>{data[i]['address']}</Style.TbodyValue>
                    <Style.TbodyValue>{data[i]['name']}</Style.TbodyValue>
                </Style.Trow>
                );
                console.log(universityValue);
                setInfo([...info, universityValue]);
            }
        };
        console.log("info = ",info);
    };

    return(
        <>
        <Style.FullLayer>
            <Style.CommonAlert> 
                <Style.ContentWrap>
                    <Style.Title>내 학교 찾기</Style.Title>
                    <a
                        onClick={close}>
                        <FontAwesomeIcon 
                            icon={faXmark}
                            color="#FADA5E"
                            size='2x'
                        />
                    </a>   
                </Style.ContentWrap>    
                    <Style.DetailContent>
                        학교 명을 검색해보세요. 키워드 형으로 입력하면 쉽게 찾을 수 있어요. (ex. 한국, 한국대)
                    </Style.DetailContent>
                
                <Style.SearchWrap>
                    <Style.SearchBtnWrap>
                        <Style.SearchBtn
                            type="button"
                            onClick={() => searchUniversity(input)}>
                            <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                            color="white"
                            size='2x'
                            />
                        </Style.SearchBtn>
                    </Style.SearchBtnWrap>
                    <Style.InputWrap>
                        <Style.Input
                            onChange={(e) => inputHandler(e)}
                        >
                        </Style.Input>
                    </Style.InputWrap>
                </Style.SearchWrap>

                <Style.Table>
                    <Style.Thead>
                        <Style.Trow>
                        <Style.TheadValue scope="col">소재지</Style.TheadValue>
                        <Style.TheadValue scope="col">대학명</Style.TheadValue>
                        </Style.Trow>
                    </Style.Thead>
                    <Style.Tbody>
                        {info? info : null}
                        {/*<Style.Trow
                            id="tr1"
                            onClick={() => clickTableEvent("tr1")}
                        >
                        <Style.TbodyValue>{info[0][0]}</Style.TbodyValue>
                        <Style.TbodyValue>{info[0][1]}</Style.TbodyValue>
                        </Style.Trow>
                        <Style.Trow
                            id="tr2"
                            onClick={() => clickTableEvent("tr2")}    
                        >
                        <Style.TbodyValue>{info[1][0]}</Style.TbodyValue>
                        <Style.TbodyValue>{info[1][1]}</Style.TbodyValue>
                        </Style.Trow>
                        <Style.Trow
                            id="tr3"
                            onClick={() => clickTableEvent("tr3")} 
                        >
                        <Style.TbodyValue>{info[2][0]}</Style.TbodyValue>
                        <Style.TbodyValue>{info[2][1]}</Style.TbodyValue>
                        </Style.Trow>
                        <Style.Trow
                            id="tr4"
                            onClick={() => clickTableEvent("tr4")}    
                        >
                        <Style.TbodyValue>{info[3][0]}</Style.TbodyValue>
                        <Style.TbodyValue>{info[3][1]}</Style.TbodyValue>
                        </Style.Trow>
                        <Style.Trow
                            id="tr5"
                            onClick={() => clickTableEvent("tr5")}    
                        >
                        <Style.TbodyValue>{info[4][0]}</Style.TbodyValue>
                        <Style.TbodyValue>{info[4][1]}</Style.TbodyValue>
                        </Style.Trow>*/}
                    </Style.Tbody>
                </Style.Table> 

                <Style.SelectBtnWrap>
                    <Style.SelectBtn
                        type="button" 
                        onClick={close}
                    >선택
                    </Style.SelectBtn>
                </Style.SelectBtnWrap>
            </Style.CommonAlert>
        </Style.FullLayer>    
        </>
    );
};
 
export default PopupContent;