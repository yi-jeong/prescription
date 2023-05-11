import styled from "@emotion/styled"
import { NavLayout } from "../../components/common/layout"
import MainTopComponent from "../../components/main/top"
import MenuComponents from "../../components/main/menu"
import LinkBoxComponent from "../../components/main/linkBox"
import LineComponent from "../../components/common/line"
import ContentBox from "../../components/main/contentBox"
import { ContentInfoFillter, ContentReviewFillter } from "../../constants/fillter"
import { ContentBoxSwiper } from "../../components/common/swiper"
import ListBoxComponent from "../../components/main/listBox"
import TimeReviewComponent from "../../components/main/timeReview"

const MainPageWrap = styled.div`

`

export default function MainPage(){
    return(
        <NavLayout>
            { /* 상단 검색 및 슬라이드 */}
            <MainTopComponent />

            { /* 메뉴 리스트 */}
            <MenuComponents />

            { /* 링크 박스 */}
            <LinkBoxComponent />
            <LineComponent />

            { /* 현직 의사가 알려주는 건강정보 */}
            <ContentBox title={"현직 의사가 알려주는 건강정보"} fillterList={ContentInfoFillter}>
                <ContentBoxSwiper />
            </ContentBox>
            <LineComponent />

            { /* 이태원동 후기 많은 병원 */}
            <ContentBox title={"이태원동 후기 많은 병원"} fillterList={ContentReviewFillter}>
                <ListBoxComponent />
            </ContentBox>
            <LineComponent />

            { /* 이태원동 병원 실시간 후기 */}
            <ContentBox title={"이태원동 병원 실시간 후기"} fillterList={ContentReviewFillter}>
                <TimeReviewComponent />
            </ContentBox>

            
        </NavLayout>
    )
}