import styled from "styled-components";

export const WrapperSection = styled.section`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    @media (max-width: 750px) {
        font-size: 14px;
    }
`

export const Wrapper = styled.div`
    margin: auto;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const LoadButton = styled.button`
    background-color: #ced4da;
    border: none;
    border-bottom: 4px solid #343a40;
    border-radius: 1rem;
    margin: 1rem 0;
    padding: 1rem 1.5rem;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #6c757d;
        color: #dee2e6;
        border-bottom: 4px solid #adb5bd;
    }
`