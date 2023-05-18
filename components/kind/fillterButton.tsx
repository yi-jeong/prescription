import styled from "@emotion/styled"
import {RiArrowDropDownLine} from "react-icons/Ri"

const ContentWrap = styled.div`
`

const FillterList = styled.ul`
    padding: .75rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
`

const FillterBox = styled.li`
    &:first-of-type{
        padding-right: .5rem;
        border-right: 1px solid #eee;
    }
`

const Fillter = styled.div<{active: boolean}>`
    padding: 0 .5rem;
    display: flex;
    align-items: center;
    background: ${props => props.active? "#C4EFD7" : "#F2F2F2"};
    color: ${props => props.active? "#20AA5B" : "#B1B1B1"};
    height: 30px;
    font-size: .9rem;
    font-weight: 500;
    border-radius: .25rem;
`

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

export default function KindFillterComponent(){
    return(
        <ContentWrap>
            <div className="container">
                <FillterList>
                    <FillterBox>
                        <Fillter active={true}>전체 <RiArrowDropDownLine size={20} /></Fillter>
                    </FillterBox>
                    <FillterBox>
                        <Fillter active={false} >진료중</Fillter>
                    </FillterBox>
                    <FillterBox>
                        <Fillter active={false} >전문의</Fillter>
                    </FillterBox>
                    <FillterBox>
                        <Fillter active={false} >대기없는 진료</Fillter>
                    </FillterBox>
                </FillterList>
            </div>
        </ContentWrap>
    )
}