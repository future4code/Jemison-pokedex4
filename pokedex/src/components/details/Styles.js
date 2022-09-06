import styled from 'styled-components'

// darkblue = #0A285F
// lightblue = #0075BE
// darkyellow = #D5A100
// lightyellow = #FFCC00

export const AreaDetalhes = styled.div`
    background-color: #0075BE;
    height: 85vh;
    padding: 20px;
    display: grid;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px; 
`

export const Front = styled.img`
    display: grid;
    grid-area: 1 / 1 / 3 / 2;
    background-color: #D9D9D9;
    border-radius: 55px;
`
export const Back = styled.img`
    display: grid;
    background-color: #D9D9D9;
    grid-area: 3 / 1 / 7 / 2;
    border-radius: 55px;
`
export const Stats = styled.div`
    display: grid;
    background-color: #D9D9D9;
    grid-area: 1 / 2 / 7 / 3;
    border-radius: 55px;
    text-align: center;
`
export const Type = styled.div`
    display: grid;
    background-color: #D9D9D9;
    grid-area:  1 / 3 / 2 / 4;
    border-radius: 55px;
    text-align: center;
`
export const Moves = styled.div`
    display: grid;
    background-color: #D9D9D9;
    grid-area:   2 / 3 / 7 / 4;
    border-radius: 55px;
    text-align: center;
`