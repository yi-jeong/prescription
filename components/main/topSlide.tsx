import styled from "@emotion/styled"

const SlideWrap = styled.div`

`

const Slide = styled.div<{color: string}>`
    width: calc( 100% + 1rem );
    height: 200px;
    color: ${ props => props.color};
    background: url("/images/main/slide-01.png") no-repeat right bottom;
`

const SubTitle = styled.p`
    padding-top: 2rem;
    padding-bottom: .5rem;
    font-size: 1.4rem;
`

const Text = styled.div`

`

const Title = styled.p`
    font-size: 1.7rem;
    font-weight: 700;
`

type SlideProps = {
    subTitle: string,
    title: string,
    color: string
}

function SlideRender({subTitle, title, color}: SlideProps){
    return(
        <Slide color={color}>
            <Text>
                <SubTitle>{subTitle}</SubTitle>
                <Title>{title}</Title>
            </Text>
        </Slide>
    )
}

export default function MainTopSlide(){
    return(
        <SlideWrap>
            <SlideRender subTitle={"처방전은 이제"} title={"종이 말고 닥터처방"} color={"#fff"} />
        </SlideWrap>
    )
}