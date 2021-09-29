import styled from "styled-components";





export const ContainerCard = styled.div`

    cursor: pointer;
    background-color: #fff;
    position: relative;
    position: relative;
    width: 440px;
    height: 220px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    transition: .3s ease-in-out;


    &.background-red{
        background-color: #e50B14;
        box-shadow: 0px 100px 80px rgba(229, 11, 20, 0.07), 0px 50.0488px 40.0391px rgba(229, 11, 20, 0.0532233), 0px 30.1471px 24.1177px rgba(229, 11, 20, 0.0456112), 0px 19.3198px 15.4559px rgba(229, 11, 20, 0.0399626), 0px 12.5216px 10.0172px rgba(229, 11, 20, 0.035), 0px 7.88218px 6.30574px rgba(229, 11, 20, 0.0300374), 0px 4.5288px 3.62304px rgba(229, 11, 20, 0.0243888), 0px 1.99324px 1.59459px rgba(229, 11, 20, 0.0167767);
        transition: .2s ease-in;
        
        h2{
            color: #fff;      
        }
    }

    &:hover{
        transform: translateY(-5%);
        transition: .2s ease-in-out;
    }

    img{
        width: auto;
        position: absolute;
        object-fit: cover;
        bottom: 0;
        right: 0;
        transition: .3s ease-in;
        

    }

    h2{
        color: #151515;

    }


    @media(max-width: 970px){

        width: 400px;
        height: 300px;

        img{
            width: 200px;
        }
    }

    @media(max-width: 440px){

    width: 350px;
    height: 250px;

    img{
        width: 200px;
    }

    h2{
        font-size: 20px;
    }
}

@media(max-width: 390px){

margin: 0 16px;
width: 250px;
height: 150px;

img{
    width: 150px;
}

h2{
    font-size: 20px;
    width: 20px;
}
}

`
