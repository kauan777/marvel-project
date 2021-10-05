import styled from "styled-components";


export const AboutContainer = styled.div`

   div.introduction{
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50vh;
        color: #fff;
        

        h1{
            z-index: 1;
            margin: auto;
            margin-bottom: 0;
            font-weight: bold;
            font-size: 50px;
            padding: 0rem 1rem 0rem 1rem;
        }
        
        h3{
            z-index: 1;
            padding: 0;
            margin: auto;
            margin-top: 0;
            color: #bbb;
            font-weight: 500;

        }

       img{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 50vh;
            object-fit: cover;
            filter: brightness(30%);
       }
   }

   section.container-card{
    
    margin-bottom: 20px;
    height: 420px;
    width: 100%;
    margin: 0 auto;
    padding: 0rem 2rem  0rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    div.card{
        width: 300px;
        height: 420px;
        margin: 10px;
        background-color: #0E0E0E;
        margin-top: -14%;
        z-index: 1;
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 50.0488px 40.0391px rgba(0, 0, 0, 0.0532233), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 19.3198px 15.4559px rgba(0, 0, 0, 0.0399626), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 7.88218px 6.30574px rgba(0, 0, 0, 0.0300374), 0px 4.5288px 3.62304px rgba(0, 0, 0, 0.0243888), 0px 1.99324px 1.59459px rgba(0, 0, 0, 0.0167767);
        overflow: hidden;
        transition: all .3s ease-in-out;

        
        &:hover > img{
            transition: all .2s ease-in-out;
        }

        &:hover{
            box-shadow: 0px 100px 80px rgba(229, 11, 20, 0.07), 0px 50.0488px 40.0391px rgba(229, 11, 20, 0.0532233), 0px 30.1471px 24.1177px rgba(229, 11, 20, 0.0456112), 0px 19.3198px 15.4559px rgba(229, 11, 20, 0.0399626), 0px 12.5216px 10.0172px rgba(229, 11, 20, 0.035), 0px 7.88218px 6.30574px rgba(229, 11, 20, 0.0300374), 0px 4.5288px 3.62304px rgba(229, 11, 20, 0.0243888), 0px 1.99324px 1.59459px rgba(229, 11, 20, 0.0167767);
            transition: all .3s ease-in-out;
            transform: translateY(-5%);
        }
      

        section{
            display: flex;
            flex-direction: column;


            span{
                position: relative;
                margin-left: 0rem;
                color: #ABABAB;
                padding: 0px 16px 0px 16px;
                z-index: 2;
                letter-spacing: 0.6px;
            }

        
        }

        .container-itens{

                span{
                    margin-left: 2.4rem;
                    padding: 2px;
                }

                & span::before{
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

        h2{
            margin-left: 1rem;
            color: #fff;
            margin-bottom: 8px;

        }

        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            z-index: 2;
            margin-left: 0%;
            transition: all .2s ease-in-out;



        }
    }
   }


   div.line{
       width: 96%;
       height: 2px;
       background-color: #3F3F3F;
       margin: 10px auto 0px auto;
    }

    div.text-end{
        color: #ABABAB;
        width: 80% auto;
        font-weight: bold;
        text-align: center;
        padding: 40px;


        span a{
            color: #E50B14;
        }
    }

    @media(max-width:1090px){
    
        section.container-card{
    
        
        margin-bottom: 20px;
        width: 90%;
        height: 840px;

        margin: 0 auto;
        padding: 0rem 2rem  0rem 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;


        div#card3{
            margin-top: 10px;

            span{
                 a{
                        text-decoration: underline ;
                 }
            }

        }
    }
}


@media(max-width:790px){


    section.container-card{

        grid-template-columns: 1fr;
        height: 1330px;

        #card1{
            margin-top: -7%;
        }

        div#card2{
            margin-top: 5px;
        }


        h2{
            font-size: 20px;
        }

        section span{
            font-size: 12px;
            
        }
        
        }
    }

@media(max-width:500px){

    div.introduction{
        height: 60vh;
        color: #fff;
        

        h1{
            font-size: 45px;
        }
        
        h3{
            font-size: 16px;

        }

       img{
            height: 60vh;
            filter: brightness(25%);
       }
   }

    section.container-card{

        div.card{
            width: 250px;
            height: 380px;
        }
    }
}

@media(max-width:500px){

    div.introduction{
        height: 60vh;
        color: #fff;
        

        h1{
            font-size: 30px;
        }
        
        h3{
            font-size: 14px;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;

        }
}

    div.text-end{
        text-align: left;
    }
}

@media(max-width:394px){
    section.container-card{

        #card1{
            margin-top: -30%;
        }
        
        div.card{
            width: 250px;
            height: 380px;

            h2{
                margin-top: 10px;
                margin-left: 16px;
                margin-right: 10px; 
            }
        }
    }

}

@media(max-width:326px){

    section.container-card{
        width: 100%;

        #card1{
            margin-top: -14%;
        }

        div.card{
            width: 220px;
            height: 380px;
        }
    }
}




`