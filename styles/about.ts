import styled from "styled-components";


export const AboutContainer = styled.div`

    display: flex;
    margin-right: 64px;
    margin-left: 64px;
    gap: 1rem;
    height: 85vh;
    align-items: center;


    div.technologies-used{
        background-color: #0F0F0F;
        padding: 1.5rem;
        width: 800px;
        height: 268px;

        

        h1{
            color: #fff;
            font-size: 24px;
            margin-bottom: 1.5rem;
        }

        section {
            display: flex;
            flex-direction: column;
            span{
                position: relative;
                color: #9C9C9C;
                font-weight: bold;
                display: inline-block;
                margin-bottom: 8px;
                margin-left: 15px;

                &::before{
                    content: "";
                    position: absolute;
                    left: -15px;
                    top: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    width: 9px;
                    height: 9px;
                    background-color: #E50B14;
                }
            }
        }
    }

    div.project-curiosities{
        
        background-color: #E7E7E7;
        height: 268px;
        padding: 1rem;
        box-shadow:  0px 100px 80px rgba(0, 0, 0, 0.07), 0px 50.0488px 40.0391px rgba(0, 0, 0, 0.0532233), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 19.3198px 15.4559px rgba(0, 0, 0, 0.0399626), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 7.88218px 6.30574px rgba(0, 0, 0, 0.0300374), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.0243888), 0px 1.99324px 1.59459px rgba(0, 0, 0, 0.0167767);

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1{
                color: #151515;
                font-size: 24px;
                padding-right: 0.5rem;

            }
            

            section{
                display: flex;
                gap: 0.5rem;

                img{
                    cursor: pointer;
                    transition: all.4s;


                    &:hover{
                        transform: translateY(-15%);
                        transition: all .3s;
                    }
                }
            }

        }

        span{
            color: #585858;
            font-size: 18px;

            a{
                color:#436FB0;
            }
        } 
    }

    @media(max-width: 1270px){
        display: flex;
        flex-direction: column;


        div.technologies-used{
        width: 100%;
        height: 268px;
        box-shadow: 0px 0px 0px transparent;
        margin-bottom: 2rem;
        margin-top: 4rem;

        }
    }

    @media(max-width: 628px){
    
        div.technologies-used{
        margin-top: 1.5rem;
        margin-bottom: 1rem;

        }
    
        div.project-curiosities{
            height: 368px;
        }


    }

    @media(max-width: 540px){
        margin-right: 32px;
        margin-left: 32px;
    }

    @media(max-width: 450px){


        div.technologies-used{

            section span{
                    font-size: 12px;
            }
        }

    div.project-curiosities{
    


        header {
            padding-bottom: 1rem;
            section{
            display: flex;
            flex-direction: column;
            

            img{
                width: 45px;
            }
        }
    }
        

        span{
            margin-top: 20px;
            font-size: 12px;
        }
    }

    }




`