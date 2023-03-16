import React, {Component} from 'react';
import styled from "styled-components";

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
        background-color:yellowgreen;
        white-space:normal;
        word-break:break-word;
        text-align:left;
        border-radius:10px;
        padding:30px;
        margin:auto;
        box-sizing:border-box;
        font-size: 16px;
    `,
}

class PopupContent extends Component {
    render(){
        return(
            <div className="dimmed_layer_wrapper">
                <Style.FullLayer>
                    <Style.CommonAlert> 
                        <h2>This is Popup Title</h2>
                        <div>This is Popup Body</div>
                        <div>
                            <button type="button" onClick={this.props.onClose}>close</button>
                        </div>
                    </Style.CommonAlert>
                </Style.FullLayer>
            </div>
        );
    }
}
 
export default PopupContent;