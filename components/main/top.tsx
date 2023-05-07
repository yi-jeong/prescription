import styled from "@emotion/styled"
import { Color } from "../../constants/color"
import { Size } from "../../constants/size"
import SearchBarComponent from "../common/search"
import MainTopSlide from "./topSlide"

const MainTopWrap = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: ${Size.MAXWIDTH};
    background: ${Color.MAIN};
`

export default function MainTopComponent(){

    const enterEvent = () => {

    }

    return(
        <MainTopWrap>
            <div className="container">
                <SearchBarComponent backColor={"#fff"} borderColor={"transparent"} placeholder={"진료과, 병원명, 질환을 입력해 보세요."} keyEvent={enterEvent} />
                <MainTopSlide />
            </div>
        </MainTopWrap>
    )
}