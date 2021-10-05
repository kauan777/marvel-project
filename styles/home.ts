import styled from "styled-components";


export const ContainerHome = styled.div`

        height: 80vh;
        gap: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(max-width: 970px){
                margin-top: 6rem;
                gap: 3rem;
                padding: 0 16px;
                flex-direction: column;
                height: 60vh;

        }

        @media(max-width: 390px){
                margin-top: 2rem;
        }
`