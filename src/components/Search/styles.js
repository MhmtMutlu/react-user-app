import styled from "styled-components";

export const SearchSection = styled.div`
    margin: 2rem 0;
    padding: 0;
    height: 6rem;
`
export const Section = styled.div`
    margin: auto;
    padding: 1rem 9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 750px) {
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
    }

`

export const Title = styled.h3`
    font-size: 24px;
`

export const SearchBar = styled.input`
    width: 40%;
    border-radius: 1rem;
    outline: none;
    padding: 1rem;
    @media (max-width: 750px) {
        width: 12rem;
    }
`