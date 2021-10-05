import styled from "styled-components"

export const ContainerContact = styled.div`

    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    width: 65%;
    gap: 10px;
    place-items: center;
    height: 80vh;

    @media(max-width: 1044px){
    width: 71%;

    }

    @media(max-width: 1044px){
        grid-template-columns: 1fr 1fr;
        gap: 0px;
        width: 50%;
        margin-top: 2rem;
    }

    @media(max-width: 928px){
        width: 70%;
    
    }

    @media(max-width: 650px){
        margin-top: 0rem;
        width: 100%;
        grid-template-columns: 1fr;
        padding: 2rem;
        margin-bottom: 2rem;
        height: auto;

    
    }


`