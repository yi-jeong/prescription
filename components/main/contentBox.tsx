import styled from "@emotion/styled"
import { ContentBoxSwiper } from "../common/swiper"
import { Children } from "react"

const ContentWrap = styled.div`
    padding: 1.5rem 0;
`

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`

const FillterList = styled.ul`
    padding: .75rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
`

const FillterBox = styled.li`

`

const Fillter = styled.div<{active: boolean}>`
    padding: .25rem .5rem;
    background: ${props => props.active? "#C4EFD7" : "#F2F2F2"};
    color: ${props => props.active? "#20AA5B" : "#B1B1B1"};
    font-size: .9rem;
    font-weight: 500;
    border-radius: .25rem;
`

const ConBox = styled.div`

`

type ContentProps = {
    title: string,
    fillterList: { index: number, fillterName: string, fillterCode: number }[],
    children: React.ReactNode;
}

type FillterProps = {
    name: string,
    active: boolean,
}

function FillterRander({name, active}: FillterProps){
    return(
        <FillterBox>
            <Fillter active={active} >{name}</Fillter>
        </FillterBox>
    )
}

export default function ContentBox({title, fillterList, children}:ContentProps){
    return(
        <ContentWrap>
            <div className="container">
                <Title>{title}</Title>
                <FillterList>
                    <FillterBox>
                        <Fillter active={true}>전체</Fillter>
                    </FillterBox>
                    {
                        fillterList?.map(el=> <FillterRander key={el.index} name={el.fillterName} active={false} />)
                    }
                </FillterList>
                <ConBox>
                    {children}
                </ConBox>
            </div>
        </ContentWrap>
    )
}