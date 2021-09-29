import React, { useEffect, useState } from 'react';
import NavBar from '../../src/components/Navbar';
import { ContainerHerois } from '../../styles/heroes';
import { Item } from '../../styles/item';
import Carousel from "react-elastic-carousel";
import LoadingCard from '../../src/components/Loading/LoadingCard';
import { useRouter } from 'next/router';
import { auth } from '../../src/services/firebase';


const Herois: React.FC = () => {
  
  type HeroType = {
    id: number
    title: string
    slug: string
    imgcard: string
  }

  const [heroes, setHeroes]= useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()
        
  useEffect(() => {
      const usubscribe = auth.onAuthStateChanged(user => {
          if (!user) {
              router.push('/')
          }
      })
      return () => {
          usubscribe()
      }
  }, [])


  useEffect(() => {

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': `08bc754b1fe71986b2b53ec3f1949f`,
        'Content-type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify({
        "query": `query{
          allHeros {
            id
            title
            slug
            imgcard
          }
        }`})
    })
    .then((response) => response.json())
    .then((responseInJson) =>{
      const allHeroes = responseInJson.data.allHeros
      setHeroes(allHeroes)
      setLoading(false)
    })

  }, [])

  console.log(loading)

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1090, itemsToShow: 4 },
  ];
  
  return (
    <>
    <NavBar />
    <ContainerHerois >
       <h1>Vingadores</h1>
       <Carousel breakPoints={breakPoints} >
       {loading ? <LoadingCard key={Math.random()}/> :
         heroes.map((hero: HeroType)=> {
           return(
              <a href={`herois/${hero.slug}`} key={hero.id}>
                <Item >
                  <img src={hero.imgcard} alt="Imagem de fundo do Card"/>
                  <span>{hero.title}</span>
                </Item>
              </a>
           )
         })}
       </Carousel>
    </ContainerHerois>
    </>

  );
}

export default Herois