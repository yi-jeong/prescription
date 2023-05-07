import { useRouter } from "next/router";
import Link from "next/link";
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Color } from "../../constants/color";

const NavWrap = styled.footer`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width:100%;
    max-width: 767px;
    height: 60px;
    background: #fff;
    border-top: 1px solid #eee;
    z-index: 5;
`

const NavBox = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    a{
        width:100%;
    }
`

const NavLink = styled.div<{active:boolean}>`
    font-size: .9rem; 
    color: #aaa; 
    line-height: 1.6rem; 
    font-weight: 400; 
    text-align: center;  
    transition: .5s;

    &:hover {
        background: #fff;
        color: ${Color.MAIN};
    }
`;

const NavName = styled.div<{active:boolean}>`
    display: block;
    font-size: .9rem;

    ${props => props.active && `
        color: ${Color.MAIN};
    `}
`

const NavIcon = styled.div<{img:string, activeImg:string, active:boolean}>`
    margin: 0 auto;
    width: 25px;
    height: 25px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;

    ${props => props.active && `
        background-image: url(${props.activeImg});
        color: #DE51A3;
    `}

    &:hover {
        background-image: url(${props => props.active ? props.activeImg : props.img});
        color: #DE51A3;
    }
`;

type NavLinkProps = {
    href: string;
    activeHref: string;
    img: string;
    activeImg: string;
    children: React.ReactNode;
}

function CustomLink({ href, activeHref, img, activeImg, children }: NavLinkProps) {
    const [hoverCheck, sethoverCheck] = useState(false);
    const router = useRouter();
    const isActive = router.pathname === href || router.pathname.includes(activeHref) || hoverCheck;
    
    const handleMouseEnter = () => {
        sethoverCheck(true);
    };

    const handleMouseLeave = () => {
        sethoverCheck(false);
    };

    return (
        <Link href={href} passHref>
            <NavLink active={isActive} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavIcon img={img} activeImg={activeImg} active={isActive} />
                <NavName active={isActive}>{children}</NavName>
            </NavLink>
        </Link>
    );
}

export default function Nav() {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(()=>{
        if(localStorage.getItem("user") == undefined || localStorage.getItem("user") == null || !localStorage.getItem("user")){
            setIsLogin(false);
        }else{
            setIsLogin(true);
        }
    },[])
    
    return (
        <NavWrap>
            <NavBox>
                <CustomLink href={"/main"} activeHref={"/main/"} img={"/images/nav/nav-01.svg"} activeImg={"/images/nav/nav-01.svg"}>
                    홈
                </CustomLink>
                <CustomLink href={"/chat/list"} activeHref={"/chat/"} img={"/images/nav/nav-02.svg"} activeImg={"/images/nav/nav-02.svg"}>
                    진료내역
                </CustomLink>
                <CustomLink href={"/healt/list"} activeHref={"/healt/"} img={"/images/nav/nav-03.svg"} activeImg={"/images/nav/nav-03.svg"}>
                    건강정보
                </CustomLink>
                <CustomLink href={isLogin ? "/myPage/myInfo" : "/login"} activeHref={"/myPage/"} img={"/images/nav/nav-04.svg"} activeImg={"/images/nav/nav-04.svg"}>
                    마이페이지
                </CustomLink>
            </NavBox>
        </NavWrap>
    )
}