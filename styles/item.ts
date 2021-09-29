import styled from "styled-components";


export const Item = styled.section`


            position: relative;
            width: 250px;
            height: 350px;
            overflow: hidden;
            cursor: pointer;
            margin: 10px;
            background-color: #151515;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            transition: all .2s ease;


            &::before{
                content: "";
                position: absolute;
                top: -50%;
                width: 100%;
                height: 100%;
                background-color: #B8B8B8;
                transform: skewY(345deg);
                transition: .5s;
            }

            &:hover::before{
                top: -70%;
                transform: skewY(390deg);
                background-color: #fff;


            }

            &:hover{
                background: #e62429;
                transition: all .4s ease-in;
            }

            &:hover > img{
                transform: scale(1.1);
                transition: all .2s;
            }

        
            img{
                width: 170px;
                height: 170px;
                object-fit: cover;
                background-color: #111111;
                padding: 10px;
                border-radius: 20px;
                z-index: 1;
                transition: all .5s;
                box-shadow:  0px 100px 80px rgba(0, 0, 0, 0.07), 0px 50.0488px 40.0391px rgba(0, 0, 0, 0.0532233), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 19.3198px 15.4559px rgba(0, 0, 0, 0.0399626), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 7.88218px 6.30574px rgba(0, 0, 0, 0.0300374), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.0243888), 0px 1.99324px 1.59459px rgba(0, 0, 0, 0.0167767);
            }

            span{
                position: relative;
                margin-top: 2rem;
                transition: all .2s ease-in;
                font-weight: bold;
                color: #fff;
                font-size: 19px;
            }


            @media(max-width: 510px){
                width: 270px;
                height: 350px;

                img{
                    height: 120px;
                    width: 120px;
                }
            }

            @media(max-width: 400px){
                width: 170px;
                height: 300px;

                img{
                    height: 100px;
                    width: 100px;
                }

                span{
                    font-size: 14px;
                }
            }

            @media(max-width: 400px){
                width: 170px;
                height: 250px;

                img{
                    height: 120px;
                    width: 120px;
                }

                span{
                    font-size: 14px;
                }
            }

            @media(max-width: 283px){
                width: 170px;
                height: 200px;
                padding: 1rem;

                img{
                    height: 100px;
                    width: 100px;
                }

                span{
                    font-size: 14px;
                }
            }


`
