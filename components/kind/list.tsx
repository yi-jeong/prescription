import styled from "@emotion/styled"
import Image from "next/image"

const ListWrap = styled.div`
    max-width: 767px;
    margin: 0 auto;
`

const List = styled.ul`
    border-top: 1px solid #eee;
`

const ListBox = styled.li`
    padding: 1rem 0;
    border-bottom: .75rem solid #F5F5F5;
`

const ContentsBox = styled.div`

`

const FlexBox = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
`

const Content = styled.div`
    width: calc( 100% - .5rem - 80px );

    .title{
        margin-bottom: .5rem;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .address{
        padding-bottom: .3rem;
    }
    .open{
        font-size: .9rem;
        color: #B4B4B4;
    }
`

const ContentImage = styled.div`
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: .5rem;
`

const StateBox = styled.div<{state: string}>`
    font-size: .9rem;
    font-weight: 500;
    color: ${ props => props.state == "open" ? "#20AA5B" : "#B4B4B4"}
`

function ListBoxRender(){
    return(
        <ListBox>
            <div className="container">
                <ContentsBox>
                    <FlexBox>
                        <Content>
                            <div className="title">재밌는 내과</div>
                            <FlexBox>
                                <div className="address">서울 용산구 이태원동</div>
                            </FlexBox>
                            <FlexBox>
                                <StateBox state={"open"}>진료중</StateBox>
                                <div className="open">월요일 09:00 ~ 18:00</div>
                            </FlexBox>
                        </Content>
                        <ContentImage>
                            <Image src={"/images/list.png"} alt={""} width={90} height={90} />
                        </ContentImage>
                    </FlexBox>
                </ContentsBox>
            </div>
        </ListBox>
    )
}

export default function KindListComponent(){
    return(
        <ListWrap>
            <List>
                <ListBoxRender />
                <ListBoxRender />
                <ListBoxRender />
                <ListBoxRender />
                <ListBoxRender />
            </List>
        </ListWrap>
    )
}