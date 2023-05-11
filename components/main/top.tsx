import styled from "@emotion/styled"
import { Color } from "../../constants/color"
import { Size } from "../../constants/size"
import SearchBarComponent from "../common/search"
import MainTopSlide from "./topSlide"
import { useState } from "react"
import { useRecoilValue } from "recoil"
import { MainBackColorAtom } from "../../atom/style"

const MainTopWrap = styled.div<{backColor: string}>`
    margin: 0 auto;
    width: 100%;
    max-width: ${Size.MAXWIDTH};
    background: ${props=> props.backColor};
    transition: .1s;

`

export default function MainTopComponent(){
    const backTopColor = useRecoilValue(MainBackColorAtom);

    const enterEvent = () => {

    }

    return(
        <MainTopWrap backColor={backTopColor}>
            <div className="container">
                <SearchBarComponent backColor={"#fff"} borderColor={"transparent"} placeholder={"진료과, 병원명, 질환을 입력해 보세요."} keyEvent={enterEvent} />
            </div>
            <MainTopSlide />
        </MainTopWrap>
    )
}