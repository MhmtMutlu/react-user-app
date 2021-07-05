import styled from "styled-components";

export const Card = styled.div`
    width: 18rem;
    height: 22rem;
    postion: relative;
    text-align: center;
    margin: 2rem 0 2rem 2.5rem;
    background-color: gray;
`

export const CardHeader = styled.div`
    width: 100%;
    height: 30%;
    background-color: lightgray;
`

export const CardImage = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: -9rem;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 3.5rem;
`

export const CardTitle = styled.h3`
    font-size: 24px;
`

export const CartText = styled.p`
    font-weight: bold;
    margin: 0.7rem;
`