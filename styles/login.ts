import styled from "styled-components";



export const PageLogin = styled.section`

    display: flex;
    align-items: stretch;
    height: 100vh;

    aside{
        color: #fff;
        flex: 7;
        display: flex;

        img{
            width: 100%;
            object-fit: cover;
        }

    }

    main{
        padding: 0 32px;
        flex: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 5;
        max-width: 320px;
        align-items: center; //Eesticar
        place-content: center;
        text-align: center;

        img#logo{
            width: 210px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 24px;
        }

            span{
                color: #BFBFBF;
                margin-bottom: 1.3rem;
                font-size: 1.1rem;
            }


            .create-room{
            height: 50px;
            border-radius: 8px;
            width: 100%;
            background: #E50B14;
            font-weight: 500;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: 0;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            outline: none;
            transition: filter 0.2s ease-in-out;

                img{
                    margin-right: 8px;
                }

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    }

    @media(max-width:875px ){

        aside{
            flex: 3;
        }
    }

    @media(max-width:550px ){

        aside{
            display: none;
        }

        main{
        padding: 0 16px;


            .main-content {

                    img#logo{
                width: 190px;
                        }

                    span{
                        font-size: 1rem;
                    }

            }
        }
    }


`