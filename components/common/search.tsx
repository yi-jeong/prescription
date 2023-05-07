import styled from "@emotion/styled"
import { BiSearch } from "react-icons/bi";

const SearchBarWrap = styled.div`
    padding: 1rem 0;
`

const SearchBar = styled.div<{backColor: string, borderColor: string}>`
    padding: .25rem .5rem;
    display: flex;
    gap: .25rem;
    border-radius: .5rem;
    border: 1px solid ${ props => props.borderColor };
    background: ${ props => props.backColor };
`

const SearchIcon = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchInput = styled.input<{backColor: string, borderColor: string}>`
    width: calc( 100% - 2rem );
    border: 1px solid ${ props => props.borderColor };
    background: ${ props => props.backColor };
`


type SearchProps = {
    backColor: string,
    borderColor: string,
    placeholder: string,
    keyEvent: () => void
}


export default function SearchBarComponent({backColor, borderColor, placeholder, keyEvent}: SearchProps){
    return(

        <SearchBarWrap>
            <SearchBar backColor={backColor} borderColor={borderColor}>
                <SearchIcon>
                    <BiSearch size={25} />
                </SearchIcon>
                <SearchInput type="text" backColor={backColor} borderColor={borderColor} placeholder={placeholder} />
            </SearchBar>
        </SearchBarWrap>

    )
}