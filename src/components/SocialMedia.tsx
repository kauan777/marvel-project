import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const SocialMediaStyled = styled.div`

    position: relative;
    width: 250px;
    background-color: #0E0E0E;
    height: 250px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 50.0488px 40.0391px rgba(0, 0, 0, 0.0532233), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 19.3198px 15.4559px rgba(0, 0, 0, 0.0399626), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 7.88218px 6.30574px rgba(0, 0, 0, 0.0300374), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.0243888), 0px 1.99324px 1.59459px rgba(0, 0, 0, 0.0167767);


    transition: ease-in .2s;



    img{
        width: 45px;
        margin: 10px;
        z-index: 1;
        filter: brightness(500%);

    }

    span{
        font-weight: bold;
        color: #fff;
        z-index: 1;

    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #fff;
        height: 5px;
        transition: ease-in-out .3s;
    }

    &:hover{
        transform: translateY(-5%);
        transition: ease-in .2s;

    }

    &:hover::before{
        height: 100%;
        transition: ease-in-out .4s;

    }

    &:hover > img{
        filter: brightness(0%);
        transition: ease-in .3s;
    }

    &:hover > span{
        color: #101010; 
        transition: ease-in .4s;
    }

    @media(max-width:1301px){
        width: 200px;
        height: 200px;
        
    }

    @media(max-width: 1044px){
    
        width: 200px;
        height: 200px;
    }

    @media(max-width: 650px){

    transition: linear .1s; 
        width: 250px;
        height: 300px;

        &:hover{
            transform: translateY(0%);
        }
    
    &::before{
        transition: linear .1s;
    }

    &:hover::before{
        transition: linear .1s;
    }

    &:hover > img{
        transition: linear .1s;
    }
    &:hover > span{
        transition: linear .1s;
    }
    
    }


`

interface SocialType extends React.HTMLAttributes<HTMLDivElement>{ 
    icon: string
    name: string
    link: string
}


export default function SocialMedia({icon, name, link}:SocialType){
  return (
    <a rel="noreferrer" href={`${link}`} target="_blank">
        <SocialMediaStyled >
            <img src={icon} alt="Icon"/>
            <span>{name}</span>
        </SocialMediaStyled>
    </a>    
  );
}
