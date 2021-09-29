import React from 'react';
import styled from 'styled-components';


const CardStyle = styled.div`
    width: 250px;
    height: 350px;
    border: 2px solid transparent;
    margin-left: 2.5rem;
    overflow: hidden;
    transition: ease-in-out .2s;
    animation: shimmer 1.2s ease-in-out infinite;
    background-image: linear-gradient(
        -90deg,
        #2b2b2b 0%,
        #1a1a1a 50%,
        #2b2b2b 100%
    );
    background-size: 400% 400%;

    @keyframes shimmer {
        from{
            background-position: 0% 0%; 
        }
        to{
            background-position: -135% 0%; 
        }
    }

    @media(max-width: 1273px){
        &.card1{
            display: none;
        }
    }

    @media(max-width: 983px){
        &.card2{
            display: none;
        }
    }

    @media(max-width: 733px){
        &.card3{
            display: none;
        }
    }



    @media(max-width: 510px){
                width: 270px;
                height: 350px;
                margin-left: -4%;

            }

            @media(max-width: 400px){
                width: 170px;
                height: 250px;
            }


            @media(max-width: 283px){
                width: 170px;
                height: 200px;
            }
`

const LoadingCard: React.FC = () => {
    return (
        <>
        <CardStyle className="card1" />
        <CardStyle className="card2"/>
        <CardStyle className="card3"/>
        <CardStyle className="card4"/>
        </>
    );
}

export default LoadingCard;