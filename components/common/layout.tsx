import styled from "@emotion/styled"
import Header from "./header"
import Nav from "./nav"

const Layout = styled.div`
    overflow: hidden;
    height: 100%;
`

export const NoneLayout = styled.div`
    overflow: hidden;
    height: 100vh;
`

const FixedButtonLayoutCon = styled.div<{backColor: string}>`
    margin-top: 60px;
    padding-bottom: 80px;
    height: calc( 100% - 60px ); 
    background: ${props => props.backColor};
`

const NavLayoutCon = styled.div`
    padding-bottom: 80px;
`

const NoneLayoutCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    height: calc( 100% - 60px );  
`

const NoneButtonLayoutCon = styled.div`
    margin-top: 60px;
    height: calc( 100% - 60px );  
`


type DefaultLayoutProps ={
    children: React.ReactNode;
}

type HeaderFixedLayoutProps = {
    headerTitle: string;
    headerBack: boolean;
    headerCancel: boolean;
    backColor?: string;
    children: React.ReactNode;
}

export const DefaultLayout = ({children}:DefaultLayoutProps) => {
    return(
        <Layout>
            {children}
        </Layout>
    )
}

export const NavLayout = ({children}:DefaultLayoutProps) => {
    return(
        <Layout>
            <NavLayoutCon>
                {children}
            </NavLayoutCon>
            <Nav />
        </Layout>
    )
}

export const NoneScrollLayout = ({headerTitle, headerBack, headerCancel, children}:HeaderFixedLayoutProps) => {
    return(
        <NoneLayout>
            <Header title={headerTitle} back={headerBack} cancel={headerCancel} />
            <NoneLayoutCon>
                {children}
            </NoneLayoutCon>
        </NoneLayout>
    )
}

export const NoneScrollButtonLayout = ({headerTitle, headerBack, headerCancel, children}:HeaderFixedLayoutProps) => {
    return(
        <NoneLayout>
            <Header title={headerTitle} back={headerBack} cancel={headerCancel} />
            <NoneButtonLayoutCon>
                {children}
            </NoneButtonLayoutCon>
        </NoneLayout>
    )
}

export const HeaderFixedButtonLayout = ({headerTitle, headerBack, headerCancel, backColor, children}:HeaderFixedLayoutProps) => {
    return(
        <Layout>
            <Header title={headerTitle} back={headerBack} cancel={headerCancel} />
            <FixedButtonLayoutCon backColor={backColor? backColor : "#fff"}>
                {children}
            </FixedButtonLayoutCon>
        </Layout>
    )
}
