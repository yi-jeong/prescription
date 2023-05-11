import styled from "@emotion/styled"
import TimeReviewSwiper from "./slide/timeReviewSwiper"
import { useEffect } from "react"

const TimeReviewWrap = styled.div`
    padding: 0;
`

const MapWrap = styled.div`
    overflow: hidden;
    background: #eee;
    border-radius: .5rem;
    height: 150px;
`

const HalfBox = styled.div`
    width: calc( 50% - .25rem );
`

const Box = styled.div`
    width: 100%;
`

declare global {
    interface Window {
      kakao: any;
    }
}

export default function TimeReviewComponent (){
    useEffect(() => {
        const mapScript = document.createElement('script');
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&autoload=false`;
        
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };
            new window.kakao.maps.Map(mapContainer, mapOption);
            });
        };

        mapScript.addEventListener('load', onLoadKakaoMap);
    }, []);
    
    return(
        <TimeReviewWrap>
            <MapWrap>
                <div id="map" style={{ height: "100%" }}></div>
            </MapWrap>
            <TimeReviewSwiper />
        </TimeReviewWrap>
    )
}