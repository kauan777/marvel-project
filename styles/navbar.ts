import styled from "styled-components";


export const Header = styled.header`
        position: relative;
        z-index: 100;
        width: 100%;
        padding: 10px 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow:  0px 0px 15px #0E0E0E;
    

    nav{
        display: flex;
        align-items: center;


    svg{
        display: none;
        filter: invert();
        cursor: pointer;
        
    }
    svg#close{
        position: absolute;
        top: -2rem;
    }


        section{

            display: flex;
            align-items: center;
            gap: 8px;

            div.image{
                width: 47px;
                height: 47px;
                border-radius: 50%;
                border: 2px solid #C4C4C4;
                overflow: hidden;

                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }

            span{
                color: #C4C4C4;
                font-size: 15px;
            }

        }

        ul{
            position: relative;
            display: flex;
            list-style: none;
            color: #C4C4C4;
            gap: 32px;

            li{
                position: relative;
                padding: 5px;
                transition: .2s;
                font-weight: 600;

                a{
                    position: relative;
                    display: inline-block;
                }

            }

            li:hover{
                color: #fff;
            }
            
            li::before{
                content: '';
                width: 0%;
                height: 3px;
                left: 0;
                border-radius: 15%;
                background: #E50B14;
                position: absolute;
                transition: width .3s;
                bottom: -.6rem;
                
            }

            li:hover::before{
                width: 100%;
            }

        }

    }

    @media(max-width: 970px){

        padding: 16px 32px 16px 32px;

        nav{

            section{

            display: flex;
            align-items: center;
            gap: 8px;

            img{
                width: 40px;
                border-radius: 50%;
                border: 2px solid #C4C4C4;
            }

            span{
                color: #C4C4C4;
                font-size: 12px;
            }

            }

            ul{
                display: none;
                opacity: 0;
                transition: 1s;
            }

            svg#open{
                display: block;
            }

            svg#close{
                display: block;
                visibility: hidden;
                opacity: 0;
                position: absolute;
                top: 0rem;
                right: 2rem;
                transition: .1s ease-in-out;
            }

            .menu.show{
                opacity: 1;
                visibility: visible;
                height: 100vh;
                width: 100vw;
                z-index: 100;
                background: #151515;
                position: fixed;
                text-align: center;
                top: 0;
                left: 0;
                display: grid;
                place-content: center;

            ul{
                display: flex;
                flex-direction: column;
                justify-content: center;
                opacity: 1;
                transition: 1s;
                margin: 0;
                padding: 0;

                li::before{
                    transition: width .1s;
                }
            }

                svg#open{
                        display: none;
                        visibility: hidden;
                        opacity: 0;
                    }
                    svg#close{
                        display: block;
                        visibility: visible;
                        opacity: 1;
                        position: absolute;
                        right: 2rem;
                        top: 2rem;
                        transition: .1s ease-out;
                    }
            } 
            

        }

    }


`