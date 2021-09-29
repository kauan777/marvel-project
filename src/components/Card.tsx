import React from 'react';

import { ContainerCard } from '../../styles/card';

export interface CardType extends React.HTMLAttributes<HTMLDivElement>{
    text: string;
    imgcard: string
}

const Card: React.FC<CardType> = ({text, imgcard, ...props}) => {
 

  return (
      <ContainerCard {...props}>
        <h2>{text}</h2>
        <img src={imgcard} alt="Imagem do Card"/>
      </ContainerCard>
  );
}

export default Card;