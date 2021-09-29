import React from 'react';
import styled from 'styled-components';

export const ProfileLoading = styled.div`

display: flex;
align-items: center;
gap: 8px;


div.img{
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 2px solid transparent;
    overflow: hidden;
    transition: ease-in-out .2s;
    animation: shimmer 1.2s ease-in-out infinite;
    background-image: linear-gradient(
        -90deg,
        #353535 0%,
        #1a1a1a 50%,
        #353535 100%
    );
    background-size: 400% 400%;

    @keyframes shimmer {
        from{
            background-position: 0% 0%; 
        }
        to{
            background-position: -135% 0%; 
        }
    }

}

div.span{
    background-image: linear-gradient(
        -90deg,
        #1f1f1f 0%,
        #6e6e6e 50%,
        #292929 100% 
    );
    width: 100px;
    height: 10px;
    border: 2px solid transparent;
    overflow: hidden;
    transition: ease-in-out .2s;
    animation: shimmer 1.2s ease-in-out infinite;
    background-size: 400% 400%;
}

    `


const LoadingProfile: React.FC = () => {
    return (
        <ProfileLoading>
            <div className="img"></div>
            <div className="span"></div>
        </ProfileLoading>
    );
}

export default LoadingProfile;