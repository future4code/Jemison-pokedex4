import styled from 'styled-components'

// darkblue = #0A285F
// lightblue = #0075BE
// darkyellow = #D5A100
// lightyellow = #FFCC00

export const HeaderJS = styled.div`
    box-sizing: border-box;
    background-color: #0A285F;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
`

export const LogoJS = styled.input`
    height: 60%;
    :hover {
        box-shadow: #FFCC00 0px 2px;
    }
`

export const PokeballJS = styled.input`
    height: 70%;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: 0;

    :hover {
        box-shadow: #0075BE 2px 2px 1px 1px;
    }
`