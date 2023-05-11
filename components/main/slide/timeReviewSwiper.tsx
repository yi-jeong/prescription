import { EffectFade, Grid, Pagination } from 'swiper';
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
import { FaStar } from 'react-icons/fa';


const Slide = styled.div`

    padding: 1rem 0; 
    border-bottom: 1px solid #eee;

    &:last-child{ border-bottom: 0; }

    .title{
        display: flex;
        gap: .5rem;
        align-items: center;

        .id{ width: 24px; height: 24px; background: #20AA5B; border-radius: 100rem; text-align: center; line-height: 24px; color: #fff; font-size: .9rem; font-weight: 500 }
        .name{ font-weight: 500; }
        .kind{ font-size: .9rem; color: #999; }
    }

    .content{
        margin-top: .5rem;
        margin-bottom: .5rem;
        font-size: .9rem;
        line-height: 1.2rem;
    }

    .info{
        display: flex;
        gap: .5rem;
        color: #999;
    }
`

type SlideProps = {
    mapIndex: string,
    name: string,
    kind: string,
    content: string,
    date: string,
    editor: string,
    score: string
}

function SlideRender({mapIndex, name, kind, content, date, editor, score}: SlideProps){

    return(
        <Slide>
            <div className='title'>
                <div className='id'>{mapIndex}</div>
                <div className='name'>{name}</div>
                <div className='kind'>{kind}</div>
            </div>
            <div className='content'>{content.length > 70 ? content.slice(0, 65) + "..." : content}</div>
            <div className='info'>
                <div className='yymmdd'>{date}</div>
                <div className='editor'>{editor}</div>
                <div className='score'><FaStar size={15} /> {score}</div>
            </div>
        </Slide>
    )
}


export default function TimeReviewSwiper() {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
                type: "bullets",
            }}
            modules={[Pagination]}
            className='time-review-slide'
        >
            <SwiperSlide>
                <SlideRender mapIndex={'A'} name={'메롱 성형외과'} kind={'성형외과'} content={'일단 너무 병원 자체가 너무 쾌적하고 인포 간호사분들도 친절해요. 그리고 상담도 너무 자세히 해주셔서, 다음주 중으로 다시 방문하려고요.'} date={'2023. 01. 23'} editor={'홍길동'} score={'4.2'} />
                <SlideRender mapIndex={'B'} name={'메롱 성형외과'} kind={'성형외과'} content={'일단 너무 병원 자체가 너무 쾌적하고 인포 간호사분들도 친절해요. 그리고 상담도 너무 자세히 해주셔서, 다음주 중으로 다시 방문하려고요.'} date={'2023. 01. 23'} editor={'홍길동'} score={'4.2'} />
                <SlideRender mapIndex={'C'} name={'메롱 성형외과'} kind={'성형외과'} content={'일단 너무 병원 자체가 너무 쾌적하고 인포 간호사분들도 친절해요. 그리고 상담도 너무 자세히 해주셔서, 다음주 중으로 다시 방문하려고요.'} date={'2023. 01. 23'} editor={'홍길동'} score={'4.2'} />
            </SwiperSlide>
            <SwiperSlide>
                <SlideRender mapIndex={'A'} name={'메롱 성형외과'} kind={'성형외과'} content={'일단 너무 병원 자체가 너무 쾌적하고 인포 간호사분들도 친절해요. 그리고 상담도 너무 자세히 해주셔서, 다음주 중으로 다시 방문하려고요.'} date={'2023. 01. 23'} editor={'홍길동'} score={'4.2'} />
                <SlideRender mapIndex={'B'} name={'메롱 성형외과'} kind={'성형외과'} content={'일단 너무 병원 자체가 너무 쾌적하고 인포 간호사분들도 친절해요. 그리고 상담도 너무 자세히 해주셔서, 다음주 중으로 다시 방문하려고요.'} date={'2023. 01. 23'} editor={'홍길동'} score={'4.2'} />
                <SlideRender mapIndex={'C'} name={'메롱 성형외과'} kind={'성형외과'} content={'일단 너무 병원 자체가 너무 쾌적하고 인포 간호사분들도 친절해요. 그리고 상담도 너무 자세히 해주셔서, 다음주 중으로 다시 방문하려고요.'} date={'2023. 01. 23'} editor={'홍길동'} score={'4.2'} />
            </SwiperSlide>
        </Swiper>
    );
};
