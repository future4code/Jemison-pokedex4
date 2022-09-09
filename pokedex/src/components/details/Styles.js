import styled from 'styled-components'

// darkblue = #0A285F
// lightblue = #0075BE
// darkyellow = #D5A100
// lightyellow = #FFCC00

export const AreaDetalhes = styled.div`
    background-color: #0075BE;
    min-height: 85vh;
    padding: 20px;
    display: grid;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px; 

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        padding: 2vw;
    }
`

export const Front = styled.img`
    display: grid;
    width: 50%;
    grid-area: 1 / 1 / 3 / 2;
    background-color: #D9D9D9;
    border-radius: 50%;
    margin: 5% 0 5% 20%;

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        box-sizing: border-box;
        width: 80%;
        margin: 5vh auto 2.5vh auto;
    }
    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
        width: 60%;
        margin-left: 10%;
    }
    
`
export const Back = styled.img`
    display: grid;
    width: 50%;
    background-color: #D9D9D9;
    grid-area: 3 / 1 / 7 / 2;
    border-radius: 50%;
    margin: 10% 0 0 20%;

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        box-sizing: border-box;
        width: 80%;
        margin: 2.5vh auto 5vh auto;
    }
    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
        width: 60%;
        margin-left: 10%;
    }

`
export const Stats = styled.div`
    display: grid;
    background-color: #D9D9D9;
    grid-area: 1 / 2 / 7 / 3;
    border-radius: 55px;
    text-align: center;

    h2 {
        margin: 30px 0 0 0;
        text-shadow: 1px 1px #bcbcbc;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
        padding: 0;
        margin: 0 3vw;
        height: 100%;
    }

    ul li {
        font-size: 0.6rem;
        margin-top: 1.5vh;
        text-shadow: 1px 1px #bcbcbc;
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;

        h2 {
            margin: 4vh 0;
        }

        ul {
            margin: 3vh 0vw;
            height: 100%;
        }

        ul li {
            font-size: 0.7rem;
        }
    }
    /* Smartphones (portrait) ----------- */
    @media only screen and (max-width : 320px) {
        width: 100%;
    }
`
export const Type = styled.div`
    display: grid;
    background-color: #D9D9D9;
    grid-area:  1 / 3 / 2 / 4;
    border-radius: 55px;
    text-align: center;

    ul {
        margin-left: 1.3vw;
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    ul li {
        font-size: 1rem;
        text-shadow: 1px 1px #bcbcbc;
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin: 0 auto;
        width: 90%;
    }
    /* Smartphones (portrait) ----------- */
    @media only screen and (max-width : 320px) {
        width: 100%;
    }
    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
        width: 100%;
        margin-top: 5vh;
        height: 40px;
        ul {
            width: 30%;
            margin: 0 auto;
            padding: 0;
            justify-content: space-evenly;
        }

        ul li {
            font-size: 0.7rem;
            padding: 0 15px;
        }
    }
`
export const Moves = styled.div`
    display: grid;
    background-color: #D9D9D9;
    grid-area:   2 / 3 / 7 / 4;
    border-radius: 55px;
    text-align: center;

    h2 {
        margin: 30px 0 10px 0;
        text-shadow: 1px 1px #bcbcbc;
    }

    p {
        font-size: 0.6rem;
        margin: 0;
        //margin-top: 1.5vh;
        text-shadow: 1px 1px #bcbcbc;
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;

        h2 {
            margin: 4vh 0;
        }

        p {
            font-size: 0.7rem;
            padding-bottom: 1.5vh;
            margin-bottom: 1.5vh;
        }
    }
    /* Smartphones (portrait) ----------- */
    @media only screen and (max-width : 320px) {
        width: 100%;
    }
`