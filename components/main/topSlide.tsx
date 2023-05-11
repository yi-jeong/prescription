import styled from "@emotion/styled"
import MainTopSwiper from "./slide/topSwiper"

const SlideWrap = styled.div`
    margin: 0 auto;
    width: 100%;
`

export default function MainTopSlide(){
    return(
        <SlideWrap>
            <MainTopSwiper />
        </SlideWrap>
    )
}