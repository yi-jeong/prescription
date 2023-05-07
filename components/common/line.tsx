import styled from "@emotion/styled"
import React from "react"

const Line = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 767px;
    height: 8px;
    background: #F8F8F8;
`

export default function LineComponent(){
    return (<Line></Line>)
}