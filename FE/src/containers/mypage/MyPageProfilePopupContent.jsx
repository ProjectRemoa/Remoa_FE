import styled from "styled-components";
import React, { useState } from 'react'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    SearchBtn:styled.div`
        background-color: #FADA5E;
        padding: 8px 20px 8px 20px;
        border-radius: 25px 0px 0px 25px;
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
        
    `,
    SelectBtnWrap:styled.div`
        width: 100%;
        display: flex;
    `,
    SelectBtn:styled.button`
        width: 235px;
        height: 49px;
        text-align: center;
        line-height: 49px;
        color: #010101;
        margin: auto;
    `,
}

const PopupContent = (props) => {
    const [input, setInput] = useState('한국대학교');
    const [info, setInfo] = useState([['소재지1', '대학명1'], ['소재지2', '대학명2'], ['소재지3', '대학명3']]);
    
    const {getUniversity, close} = props;

    /*const getApi = () =>{
        axios.get('url')
        .then((res) => console.log(res));
    };

    useEffect(() => {
        getApi();
    }, [])*/

    const inputHandler = (e) => {
        setInput(e.target.value);
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
                    <Style.SearchBtn>
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                            color="white"
                            size='2x'
                        />
                    </Style.SearchBtn>
                    <Style.InputWrap>
                        <Style.Input
                            onChange={(e) => inputHandler(e)}
                        >
                        </Style.Input>
                    </Style.InputWrap>
                </Style.SearchWrap>

                <div>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">소재지</th>
                            <th scope="col">대학명</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{info[0][0]}</td>
                            <td>{info[0][1]}</td>
                            </tr>
                            <tr>
                            <td>{info[1][0]}</td>
                            <td>{info[1][1]}</td>
                            </tr>
                            <tr>
                            <td>{info[2][0]}</td>
                            <td>{info[2][1]}</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>

                <Style.SelectBtnWrap>
                    <Style.SelectBtn
                        type="button" 
                        onClick={getUniversity(input)}
                    >선택
                    </Style.SelectBtn>
                </Style.SelectBtnWrap>
            </Style.CommonAlert>
        </Style.FullLayer>    
        </>
    );
};
 
export default PopupContent;