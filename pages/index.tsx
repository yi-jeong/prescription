import styled from "@emotion/styled"
import { Color } from "../constants/color"
import Image from "next/image"
import router from "next/router";
import { useEffect } from "react"
import React from "react";

const MainWrap = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 767px;
  height: 100vh;
  background: ${Color.MAIN};
`

const Main = styled.div`
  position: relative;
  text-align: center;
`

const MainTitle = styled.div`
  margin-bottom: 3rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
`

const MainImage = styled(Image)`

`

export default function Home() {

  useEffect(()=>{
    setTimeout(()=>{
      router.replace("/main")
    },3000)
  },[])

  return (
    <MainWrap>
      <div className="container">
        <Main>
          <MainTitle>닥터처방</MainTitle>
          <MainImage src={"/images/main/main-img.png"} alt={""} width={256} height={160} />
        </Main>
      </div>
    </MainWrap>
  )
}
