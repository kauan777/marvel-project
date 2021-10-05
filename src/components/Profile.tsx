import React from 'react';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';

export const ProfileStyle = styled.section`

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
`

const Profile: React.FC = () => {

    const { user } = useAuth()

  return (
    <ProfileStyle>
        <div className="image">
            <img src={user?.avatar} />
        </div>
        <span>{user?.name}</span>
    </ProfileStyle>
  );
}

export default Profile;