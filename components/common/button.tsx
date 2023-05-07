import Image from 'next/image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'

const Button = styled.button<{backColor: string, borderColor?: string, color: string, disabled: boolean}>`
    padding: .5rem 0rem;
    width: 100%;    
    height: auto;
    background: ${props => props.backColor};
    border-radius: .25rem;
    border: 1px solid ${props => props.borderColor ? props.borderColor : props.backColor};
    color: ${props => props.color};

    span{
        font-weight: 500;
    }

    ${props => props.disabled &&
        css`
            border: 1px solid #ddd;
            background: #ddd;
            color: #777;
        `
    }
`

const ButtonCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`

const FixedButtonBox = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    gap: .5rem;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 767px;

    a{
        width: 100%;
    }
`

const ButtonContainer = styled.div`

`

const ButtonBoxs = styled.div`
    display: flex;
    gap: .5rem;

    a{
        width: 100%;
    }
`

type IconButtonProps = {
    backColor: string;
    color: string;
    iconImg: string;
    iconWidthSize: number;
    iconHeightSize: number;
    children: React.ReactNode;
    onClick?: () => void;
}

type ButtonProps = {
    backColor: string;
    color: string;
    children: React.ReactNode;
    disabled: boolean;
    borderColor?: string; 
    onClick?: (() => void | string ) | ((value:string, name:string, inputName:string) => void) | any ;
}

type FixedProps={
    children: React.ReactNode; 
}

export const IconButton = ({ backColor ,color, iconImg, iconWidthSize, iconHeightSize, children, onClick }:IconButtonProps) => {
    return(
        <Button backColor={backColor} color={color} disabled={false} onClick={onClick}>
            <ButtonCon>
                <Image src={iconImg} alt={''} width={iconWidthSize} height={iconHeightSize}/>
                <span>{children}</span>
            </ButtonCon>
        </Button>
    )
}


export const TextButton = ({ backColor, borderColor, color, children, disabled, onClick }:ButtonProps) => {
    return(
        <Button backColor={backColor} borderColor={borderColor} color={color} disabled={disabled} onClick={onClick}>
            <ButtonCon>
                <span>{children}</span>
            </ButtonCon>
        </Button>
    )
}

export const FixedButton = ({ children }:FixedProps) => {
    return(
        <FixedButtonBox>
            {children}
        </FixedButtonBox>
    )
}

export const ButtonBox = ({ children }:FixedProps) => {
    return(
        <ButtonContainer>
            <div className='container'>
                <ButtonBoxs>{children}</ButtonBoxs>
            </div>            
        </ButtonContainer>
    )
}