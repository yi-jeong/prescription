import styled from "@emotion/styled"
import { FaStar } from "react-icons/fa";

const ListBoxWrap = styled.ul`

`

const ListBox = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid #eee;

    &:last-child{
        border-bottom: 0;
    }
`

const List = styled.div`
    display: flex;
    gap: .75rem;
`

const ListImgBox = styled.div<{backImg: string}>`
    width: 70px;
    height: 70px;
    background: url(${props => props.backImg}) center no-repeat;
    background-size: 140px;
    border-radius: .5rem;
`

const ListCon = styled.div`
    width: calc( 100% - 100px - .75rem );
    display: flex;
    flex-wrap: wrap;

    .con-top, .con-bottom{
        width: 100%;
    }

    .con-bottom{
        display: flex;
        align-items: end;
    }

    .title{
        font-size: 1.1rem;
        font-weight: 500;
    }

    .more-info{
        margin-top: .25rem;
        display: flex;
        align-items: center;
        gap: .5rem;

        .score{
            display: flex;
            align-items: center;
            gap: .25rem;
            font-size: .9rem;
        }

        .review-length{
            font-size: .9rem;
            color: #919191;
        }
    }

`

type ListBoxProps = {
    name: string,
    score: string,
    review: string,
    address: string,
    backImg: string,
}

function ListBoxRander({name, score, review, address, backImg}:ListBoxProps){
    return(
        <ListBox>
            <List>
                <ListImgBox backImg={backImg} />
                <ListCon>
                    <div className="con-top">
                        <div className="title">{name}</div>
                        <div className="more-info">
                            <div className="score"><FaStar size={15} /> {score}</div>
                            <div className="review-length">방문자리뷰 {review}</div>
                        </div>
                    </div>
                    <div className="con-bottom">
                        <div>서울 용산구 이태원동 20-19</div>
                    </div> 
                </ListCon>
            </List>
        </ListBox>
    )
}

export default function ListBoxComponent(){
    return(
        <ListBoxWrap>
            <ListBoxRander name={"닥터 성형외과"} score={"4.3"} review={"152"} address={"서울 용산구 이태원동 20-19"} backImg={"/images/main/content-01.png"} />
            <ListBoxRander name={"닥터 성형외과"} score={"4.3"} review={"152"} address={"서울 용산구 이태원동 20-19"} backImg={"/images/main/content-01.png"} />
            <ListBoxRander name={"닥터 성형외과"} score={"4.3"} review={"152"} address={"서울 용산구 이태원동 20-19"} backImg={"/images/main/content-01.png"} />
        </ListBoxWrap>
    )
}