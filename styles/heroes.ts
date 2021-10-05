import styled from "styled-components";

export const ContainerHerois = styled.main`

    margin-left: auto;
    margin-right: auto;
    background: #0C0C0C;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 5rem;
    height: 100vh;
    padding: 0rem 2rem 0rem 2rem;
    color: #fff;
    display: flex;
    flex-direction: column; 

    .rec.rec-carousel-wrapper:focus,
    .rec.rec-carousel-wrapper .rec-carousel:focus,
    .rec.rec-carousel-wrapper .rec-slider-container:focus,
    .rec.rec-carousel-wrapper .rec-slider-container .rec-slider:focus,
    .rec.rec-carousel-wrapper .rec-slider-container .rec-slider div:focus {
        outline: none;
}

.rec.rec-carousel-wrapper {
  padding: 20px;
  background: #090909;
}

    .rec.rec-carousel-wrapper .rec-carousel button {
        background-color:#e62429;
        filter: brightness(80%);
        color: #ccc;
    }

    .rec.rec-carousel-wrapper .rec-carousel button:hover{
        filter: brightness(100%);
    }

    .rec.rec-carousel-wrapper .rec-carousel button:disabled{
        filter: brightness(30%);
    }

    .rec.rec-carousel-wrapper .rec-pagination .rec.rec-dot.rec {
     background: #353535;
     box-shadow: none;
    }

    .rec.rec-carousel-wrapper .rec-pagination .rec.rec-dot.rec.rec-dot_active {
    background: #e62429;
    box-shadow: none;
    transform: scale(1.4);
}
    

    h1{
        animation: color1 20s ease-in-out infinite;
        margin: 2rem;
    }

    @keyframes color1{

        0%{
            color: #fff;
        }
        50%{
            color: #e62429;
            text-shadow: 0px 100px 80px rgba(255, 0, 0, 0.07), 0px 50.0488px 40.0391px rgba(255, 0, 0, 0.0532233), 0px 30.1471px 24.1177px rgba(255, 0, 0, 0.0456112), 0px 19.3198px 15.4559px rgba(255, 0, 0, 0.0399626), 0px 12.5216px 10.0172px rgba(255, 0, 0, 0.035), 0px 7.88218px 6.30574px rgba(255, 0, 0, 0.0300374), 0px 4.5288px 3.62304px rgba(255, 0, 0, 0.0243888), 0px 1.99324px 1.59459px rgba(255, 0, 0, 0.0167767);;

        }
        100%{
            color: #fff;
        
        }
    }
    


    @media(max-width:450px){
        padding: 0.5rem;

        h1{
            font-size: 20px;
            margin-top: 2rem;
        }
    }

`