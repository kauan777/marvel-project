import styled from "styled-components";

export const FooterSocial =  styled.footer`

            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;

            div.social-media{
                display: flex;
                justify-content: center;
                gap: 24px;

                img{
                    width: 32px;
                    transition: .2s ease-in-out;
                }

                img:hover{
                    filter: brightness(2.5);
                    transform: translateY(-5%);
                }
            }

            span{
                color: #686868;
                margin-top: 12px;
                margin-bottom: 24px;
            }

            @media(max-width: 970px){
                position: relative;

            }

`