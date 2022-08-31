import styled from "styled-components";

export const Card = styled.div`
    width: 315px;
    height: 414px;
    margin: 10px;
    border: none;
    border-radius: 55px;
    background-color: #D9D9D9;
    font-weight: 500;
    text-align: center;

    :hover {
        cursor: pointer;
    }
`
export const Cards = styled.div`
    display: grid;
    row-gap: 10px;
    column-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
export const Foto = styled.div`
    width: 315px;
    height: 315px;
    border-top-left-radius: 55px;
    border-top-right-radius: 55px;
    background-color: #A9A9A9;
`

