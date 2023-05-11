/*****  Main. TopSlide *****/

import { EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { MainBackColorAtom } from '../../../atom/style';


const Slide = styled.div<{color: string, backColor: string, backImg: string}>`
    height: 200px;
    color: ${ props => props.color};
    background: url(${props=>props.backImg}) no-repeat right bottom;
    background-size: 220px;
`

const SubTitle = styled.p`
    padding-top: 2rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    font-size: 1.4rem;
`

const TopText = styled.div`

`

const TopTitle = styled.p`
    padding-left: 1rem;
    font-size: 1.7rem;
    font-weight: 700;
`

type SlideProps = {
    subTitle: string,
    title: string,
    color: string,
    backColor: string,
    backImg: string
}

function SlideRender({subTitle, title, color, backColor, backImg}: SlideProps){
    return(
        <Slide color={color} backColor={backColor} backImg={backImg}>
            <TopText>
                <SubTitle>{subTitle}</SubTitle>
                <TopTitle>{title}</TopTitle>
            </TopText>
        </Slide>
    )
}


export default function MainTopSwiper() {

    const [bgColor, setBgColor] = useRecoilState(MainBackColorAtom);
    const colorList= ["#20AA5B", "#F5D800","#333"];

    return (
        <Swiper
            slidesPerView={1}
            effect={"fade"}
            loop={true}
            pagination={{
                type: "fraction",
            }}
            modules={[EffectFade, Pagination]}
            onSlideChange={(swiper) => {
                setBgColor(colorList[swiper.realIndex])
            }}
            className='main-top-slide'
        >
            <SwiperSlide>
                <SlideRender subTitle={"처방전은 이제"} title={"종이 말고 닥터처방"} color={"#fff"} backColor={colorList[0]} backImg={"/images/main/slide-01.png"} />
            </SwiperSlide>
            <SwiperSlide>
                <SlideRender subTitle={"어버이날엔"} title={"비타민으로 효도"} color={"#333"} backColor={colorList[1]} backImg={"/images/main/slide-02.png"}/>
            </SwiperSlide>
        </Swiper>
    );
  };

/*****  Main. TopSlide End *****/