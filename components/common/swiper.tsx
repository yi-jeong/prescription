import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
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

const BoxCon = styled.div`

`

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`

const Text= styled.div`
    margin-top: .25rem;
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
            <BoxCon>      
                <Title>{title}</Title>
                <Text>{text}</Text>
            </BoxCon>
        </Box>
    )
}

export function BannerSwiper() {
  return (
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        centeredSlides={true}
        pagination={{
            type: "fraction",
        }}
        modules={[Pagination]}
    >
        <SwiperSlide>
            <BannerBoxRender title={'아프면 보험료 얼마나 나오지?'} text={'30초 만에 가장 저렴한 보험 찾기'} backColor={'#FFE0E0'} imgSrc={"/images/main/banner_slide-01.svg"} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxRender title={'아프면 보험료 얼마나 나오지?'} text={'30초 만에 가장 저렴한 보험 찾기'} backColor={'#FFE0E0'} imgSrc={"/images/main/banner_slide-01.svg"} />
        </SwiperSlide>
    </Swiper>
  );
};