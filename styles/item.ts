import styled from "styled-components";


export const Item = styled.section`


            position: relative;
            width: 250px;
            height: 350px;
            overflow: hidden;
            cursor: pointer;
            align-items: stretch;
            margin: 10px;
            background-color: #000;
            display: flex;
            flex-direction: column;
            transition: all .2s ease;
            border-radius: 20px 0px 20px 0px;

            &:hover{
            border-radius: 0px 0px 0px 0px;

            }


            &:hover > .imgfundo{
                transform: scale(1.1);
                transition: all .4s ease-in-out;
                opacity: 1;

            }

            &:hover > div.span span{
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

        div.img-card{
            width: 250px;
            height: 270px;
            padding: 0;
            margin: 0;
            img{
                width: 250px;
                height: 270px;
                object-fit: cover;
                z-index: 2;
                transition: all .5s;
            }
        }

            div.span{
                position: relative;
                padding: 20px;
                display: flex;
                flex: 1;
                background-color: #EFEFEF;
                justify-content: center;
                align-items: center;
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


                div.img-card{
                    width: 270px;
                    height: 280px;
                    padding: 0;
                    margin: 0;
                    img{
                        width: 270px;
                        height: 280px;
                        object-fit: cover;
                        z-index: 2;
                        transition: all .5s;
                    }
                }

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
                height: 250px;

                div.img-card{
                    width: 170px;
                    height: 190px;
                    img{
                        width: 170px;
                        height: 190px;
                    }
                }


               div span{
                    font-size: 14px;
                }
            }

            @media(max-width: 283px){
                width: 170px;
                height: 200px;
                padding: 1rem;

                div.img-card{
                    width: 120px;
                    height: 120px;
                    img{
                        width: 120px;
                        height: 120px;
                    }
                }



               div span{
                    font-size: 14px;
                }
            }
        }

`
