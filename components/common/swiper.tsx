import { EffectFade, Grid, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from '@emotion/styled';


const Box = styled.div<{ backColor: string }>`
    padding: 1rem;
    display: flex;
    align-items: center;
    height: 80px;
    border-radius: .5rem;
    background: ${ props => props.backColor };

`

const BoxCon = styled.div<{back: string}>`
    width: 100%;
    background: url(${props=> props.back}) right center no-repeat;
`

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`

const Text= styled.div`
    margin-top: .5rem;
    font-size: .9rem;
    font-weight: 300;
    color: #7C7C7C;
`

type BannerProps = {
    title: string,
    text: string,
    backColor: string,
    imgSrc: string
}

function BannerBoxRender({title, text, backColor, imgSrc}: BannerProps){
    return(
        <Box backColor={backColor}>
            <BoxCon back={imgSrc}>      
                <Title>{title}</Title>
                <Text>{text}</Text>
            </BoxCon>
        </Box>
    )
}

export function BannerSwiper() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={15}
        effect={"fade"}
        loop={true}
        pagination={{
            type: "fraction",
        }}
        modules={[EffectFade, Pagination]}
    >
        <SwiperSlide>
            <BannerBoxRender title={'아프면 보험료 얼마나 나오지?'} text={'30초 만에 가장 저렴한 보험 찾기'} backColor={'#FFE0E0'} imgSrc={"/images/main/banner_slide-01.svg"} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxRender title={'슬라이드 2'} text={'슬라이드 2 서브 텍스트'} backColor={'#FFF3E0'} imgSrc={"/images/main/banner_slide-01.svg"} />
        </SwiperSlide>
    </Swiper>
  );
};

const ContentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    width: 100%;
`

const ContentBox = styled.div<{backImg: string}>`
    width: calc( 50% - .25rem );

    .boxCon{
        overflow: hidden;
        position: relative;
        padding-top: 35%;
        padding-bottom: 35%;
        background: url(${props=>props.backImg}) center no-repeat ;
        border-radius: .5rem;

        &:before{
            content:"";
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: 100%;
            background: #333;
            opacity: .3;
        }

        &:after{
            content:"";
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            height: 50%;
            background: linear-gradient(to top, #333, #333 10%, transparent);
        }
        
        .title{
            position: absolute;
            width: 100%;
            text-align: center;
            bottom: 1rem;
            color: #fff;
            font-size: .9rem;
            line-height: 1.2rem;
            font-weight: 500;
            z-index: 1;
        }
    }
`

function ContentBoxRender({title, imgSrc}: BannerProps){
    return(
        <ContentBox backImg={imgSrc}>
            <div className='boxCon'>      
                <div className='title'>{title}</div>
            </div>
        </ContentBox>
    )
}

function ContentWrapRender(){
    return(
        <ContentWrap>
            <ContentBoxRender title={'이마거상술 재발하는 원인 (feat. 성형외과 전문의)'} text={'dd'} backColor={''} imgSrc={'/images/main/content-01.png'}></ContentBoxRender>
            <ContentBoxRender title={'2'} text={'dd'} backColor={''} imgSrc={'/images/main/content-01.png'}></ContentBoxRender>
            <ContentBoxRender title={'3'} text={'dd'} backColor={''} imgSrc={'/images/main/content-01.png'}></ContentBoxRender>
            <ContentBoxRender title={'4'} text={'dd'} backColor={''} imgSrc={'/images/main/content-01.png'}></ContentBoxRender>
        </ContentWrap>
    )
}

export function ContentBoxSwiper(){
    return(
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
            type: "bullets",
        }}
        modules={[Pagination]}
        className="contentSwiper"
        >
            <SwiperSlide>
                <ContentWrapRender />
            </SwiperSlide>
            <SwiperSlide>
                <ContentWrapRender />
            </SwiperSlide>
            <SwiperSlide>
                <ContentWrapRender />
            </SwiperSlide>
        </Swiper>
    )
}