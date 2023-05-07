import styled from "@emotion/styled"
import router from "next/router";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";


const HeaderWrap = styled.header<{backColor: string, color: string}>`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 767px;
    height: 60px;
    background: ${ props => props.backColor };
    color: ${ props => props.color };
`

const HeaderBack = styled.div`
    position: absolute;
    transform: translateY(-20%);
    left: .5rem;
    width: 30px;
    height: 30px;
`

const HeaderCancel = styled.div`
    position: absolute;
    right: 0;
    transform: translateY(-20%);
    width: 30px;
    height: 30px;
`

const HeaderTitle = styled.div`
    position: relative;
    margin: 0 auto;
    width: calc( 100% - 30px - 30px );
    text-align: center;
    font-weight: 500;
`

type headerProps = {
    title: string;
    back: boolean;
    cancel: boolean;
    backColor?: string;
    color?: string;
}

export default function Header({ title, back, backColor, color, cancel }:headerProps){

    const backEvent = () => {
        router.back();
    }

    return(
        <HeaderWrap backColor={backColor? backColor : "#fff"} color={color? color: "#333"}>
            <div className="container">
                {
                    back? <HeaderBack onClick={backEvent}><HiChevronLeft size={30} /></HeaderBack> : <></>
                }  
                <HeaderTitle>{title}</HeaderTitle>
            </div>
        </HeaderWrap>
    )
}