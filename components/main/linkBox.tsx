import styled from "@emotion/styled"
import { IconButton } from "../common/button"
import { BannerSwiper } from "../common/swiper"

const LinkBoxWrap = styled.div`
    padding: 1rem 0;
`

const LinkBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
`

const HalfBox = styled.div`
    width: calc( 50% - .25rem );
`

const Box = styled.div`
    width: 100%;
`

export default function LinkBoxComponent(){
    return(
        <LinkBoxWrap>
            <div className="container">
                <LinkBox>
                    <HalfBox>
                        <IconButton backColor={"#F5F5F5"} color={"#333"} iconImg={"/images/main/icon-more.svg"} iconWidthSize={36} iconHeightSize={36}>내주변 병원 찾기</IconButton>
                    </HalfBox>
                    <HalfBox>
                        <IconButton backColor={"#F5F5F5"} color={"#333"} iconImg={"/images/main/icon-gpt.svg"} iconWidthSize={36} iconHeightSize={36}>GPT로 상담하기</IconButton>
                    </HalfBox>
                    <Box>
                        <BannerSwiper />
                    </Box>
                </LinkBox>
            </div>
        </LinkBoxWrap>
    )
}