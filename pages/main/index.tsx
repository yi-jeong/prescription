import styled from "@emotion/styled"
import { NavLayout } from "../../components/common/layout"
import MainTopComponent from "../../components/main/top"
import MenuComponents from "../../components/main/menu"
import LinkBoxComponent from "../../components/main/linkBox"

const MainPageWrap = styled.div`

`

export default function MainPage(){
    return(
        <NavLayout>
            <MainTopComponent />
            <MenuComponents />
            <LinkBoxComponent />
        </NavLayout>
    )
}