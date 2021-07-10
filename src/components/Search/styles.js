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
    color: #343a40;
`

export const SearchBar = styled.input`
    width: 40%;
    border: none;
    border-bottom: 2px solid #343a40;
    border-radius: 1rem;
    background-color: #dee2e6;
    color: #343a40;
    outline: none;
    padding: 1rem;

    &::placeholder {
        color: #343a40;
    }

    @media (max-width: 750px) {
        width: 12rem;
    }
`