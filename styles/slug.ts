import styled from "styled-components";

export const ContainerHeroi = styled.div`

    
    div{
        position: absolute;
        z-index: 2;
        color: #fff;
        width: 570px;
        top: 15rem;
        left: 4rem;

        h1{
            font-size: 50px;
            margin: 0px 0px 16px 0px;
        }

        span{
            color: #ccc;
        }
    }

    img#background{
        position:absolute;
        width: 100%;
        top: 0;
        z-index: 0;
        filter: brightness(30%);
        height: 100vh;
        object-fit: cover;
    }


        img#hero{
            height: 80%;
            position: absolute;
            bottom: 0;
            right: 10%;
            z-index: 1;
            transition: all .3s ease-in;

        }


        @media(max-width:1230px){


            img#hero{
                right: 5%;
            }
        }

        @media(max-width:1017px){
        
            div{
                width: 470px;
            }
        
        }

        @media(max-width:883px){


            div{
                width: 270px;
            }

            img#hero{
                right: 5%;
            }
        }

        @media(max-width: 739px){

        img#background{
            filter: brightness(20%);
            
        }

        img#hero{
            filter: brightness(30%);
        }
    }

    @media(max-width: 416px){
        
        div{
            top: 12rem;
            width: 320px;
            left: 2rem;

            h1{
            font-size: 45px;  
            }
        }
    }


`