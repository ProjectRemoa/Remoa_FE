import React, {Component} from 'react';
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Style={
    FullLayer:styled.div`
        overflow:hidden;
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        z-index:100;
        text-align:center;
        white-space:nowrap;
        font-size:0;
        display:inline-block;
        vertical-align:middle;
        height:100%;
        content:'';
    `,
    CommonAlert:styled.div`
        z-index:2;
        position:relative;
        display:inline-block;
        vertical-align:middle;
        width:calc(100%-56px);
        min-height: 200px;
        max-height:100%;
        min-width: 200px;
        background-color: white;
        white-space:normal;
        word-break:break-word;
        text-align:left;
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
    `,
}

class PopupContent extends Component {
    render(){
        return(
            <>
                <Style.FullLayer>
                    <Style.CommonAlert> 
                        <Style.ContentWrap>
                            <Style.Title>내 학교 찾기</Style.Title>
                            <a
                                onClick={this.props.onClose}>
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
                        
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div>
                                <input
                                    type="text"
                                >
                                </input>
                            </div>
                        </div>
                        <div>
                            <button 
                                type="button" 
                                onClick={this.props.onClose}
                            >선택
                            </button>
                        </div>
                    </Style.CommonAlert>
                </Style.FullLayer>
            </>
        );
    }
}
 
export default PopupContent;