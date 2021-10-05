import styled from "styled-components";


export const Item = styled.section`


            position: relative;
            width: 250px;
            height: 350px;
            overflow: hidden;
            cursor: pointer;
            margin: 10px;
            background-color: #000;
            display: flex;
            align-items: center;
            flex-direction: column;
            transition: all .2s ease;
            border-radius: 20px 0px 20px 0px;

            &:hover{
            border-radius: 0px 15px 0px 15px;

            }


            &:hover > img{
                transform: scale(1.1);
                transition: all .4s ease-in-out;
                opacity: 1;

            }

            &:hover > div span{
                transition: all .2s ease-in-out;
                color: #fff;
            }

            div::before{
                content: '';
                position: absolute;
                top: 0;
                height: 5px;
                width: 100%;
                background-color: #e62429;
                transition: all .3s ease-in;
            }

            &:hover > div::before{
                height: 100%;
                transition: all .3s ease-in-out;
            }

        
            img{
                width: 100%;
                object-fit: cover;
                opacity: 0.7;
                z-index: 0;
                transition: all .5s;
            }

            div{
                position: relative;
                padding: 10px;
                display: flex;
                background-color: #EFEFEF;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                z-index: 2;

            span{
                transition: all .2s ease-in;
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 0.6px;
                font-weight: 900;
                color: #151515;
                font-size: 19px;
                z-index: 2;
            }
        }


            @media(max-width: 510px){
                width: 270px;
                height: 350px;
                border-radius: 0px;

                &:hover > div span{
                transition: all .08s ease-in-out;
                color: #fff;
            }

                &:hover > div::before{
                height: 100%;
                transition: all .1s ease-in-out;
            }



            @media(max-width: 400px){
                width: 170px;
                height: 300px;


        
              div span{
                    font-size: 14px;
                }
            }

            @media(max-width: 400px){
                width: 170px;
                height: 250px;


               div span{
                    font-size: 14px;
                }
            }

            @media(max-width: 283px){
                width: 170px;
                height: 200px;
                padding: 1rem;



               div span{
                    font-size: 14px;
                }
            }
        }

`
