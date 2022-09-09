import styled from "styled-components";

export const CardStyle = styled.div`
    width: 100%;
    height: 100%;
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
    margin: 0;
    padding: 10vh 5vw;
    background-color: #0075BE;
`
export const Foto = styled.input`
    width: 100%;
    height: 315px;
    border-top-left-radius: 55px;
    border-top-right-radius: 55px;
    background-color: #A9A9A9;
`

export const PokemonName = styled.div`
    font-size: 0.7rem;
    margin: 2vh 0 1vh 0;
    text-transform: uppercase;
    text-shadow: 1px 1px #bcbcbc;
`
