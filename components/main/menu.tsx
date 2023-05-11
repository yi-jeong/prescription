import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"

const MenuWrap = styled.div`
`

const MenuList = styled.div`
    position: relative;
    z-index: 1;
    margin: -1.25rem auto 0;
    padding: .5rem;
    background: #fff;
    border: 1px solid #eee;
    border-radius: .5rem;
    display: flex;
    flex-wrap: wrap;
`

const MenuBox = styled.div`
    padding-top: .75rem;
    padding-bottom: .75rem;
    width: 25%;
    text-align: center;
`

const Menu = styled.div`

`

const MenuName = styled.div`
    margin-top: .5rem;
    font-size: .9rem;
`

type MenuProps = {
    href: string,
    imgSrc: string,
    name: string,
}

function MenuBoxRender({href, imgSrc, name}: MenuProps){
    return(
        <MenuBox>
            <Link href={href}>
                <Menu>
                    <Image src={imgSrc} alt={name} width={36} height={36} />
                    <MenuName>{name}</MenuName>
                </Menu>
            </Link>
        </MenuBox>
    )
}

export default function MenuComponents(){
    return(
        <MenuWrap>
            <div className="container">
                <MenuList>
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-07.svg"} name={"코로나"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-04.svg"} name={"소아과"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-05.svg"} name={"이비인후과"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-06.svg"} name={"정신건강과"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-03.svg"} name={"정형외과"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-02.svg"} name={"피부과"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-01.svg"} name={"외과"} />
                    <MenuBoxRender href={""} imgSrc={"/images/main/icon-08.svg"} name={"내과"} />
                </MenuList>
            </div>
        </MenuWrap>
    )
}