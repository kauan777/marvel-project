import React, { useEffect, useState } from 'react';
import NavBar from '../../src/components/Navbar';
import { ContainerHerois } from '../../styles/heroes';
import { Item } from '../../styles/item';
import Carousel from "react-elastic-carousel";
import LoadingCard from '../../src/components/Loading/LoadingCard';
import withAuth from '../../utils/withAuth';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image'


const Herois: React.FC = ({ heros }: any) => {

  type HeroType = {
    id: number
    title: string
    slug: string
    imgcard: string
  }



  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (heros) {
      setLoading(false)
    }
  }, [])


  // useEffect(() => {

  //   fetch('https://graphql.datocms.com/', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `08bc754b1fe71986b2b53ec3f1949f`,
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "query": `query{
  //         allHeros {
  //           id
  //           title
  //           slug
  //           imgcard
  //         }
  //       }`})
  //   })
  //     .then((response) => response.json())
  //     .then((responseInJson) => {
  //       const allHeroes = responseInJson.data.allHeros
  //       setHeroes(allHeroes)
  //       setLoading(false)
  //     })

  // }, [])

  console.log(loading)

  const breakPoints = [
    { width: 400,  itemsToShow: 1 },
    { width: 550,  itemsToShow: 2 },
    { width: 800,  itemsToShow: 3 },
    { width: 1090, itemsToShow: 4 },
  ];

  return (
    <>
      <NavBar />
      <ContainerHerois >
        <style jsx global>{`
         body {
            overflow: hidden;
            }
    `}</style>
        <h1>HEROIS DA MARVEL</h1>
        <Carousel isRTL={false} breakPoints={breakPoints} >
          {loading ? <LoadingCard key={Math.random()} /> :
            heros.map((hero: HeroType) => {
              return (
                <Link href={`/characters/${hero.slug}`} key={hero.id}>
                  <a>
                  <Item >
                    <div className="img-card">
                    <Image width={600} height={800} className="imgfundo" src={hero.imgcard} alt="Imagem de fundo do Card" />
                    </div>
                    <div className="span">
                      <span>{hero.title} </span>
                    </div>
                  </Item>
                </a>
                </Link>
              )
            })}
        </Carousel>
      </ContainerHerois>
    </>

  );
}

export default withAuth(Herois)

export const getStaticProps: GetStaticProps = async () => {


  const req = await fetch('https://graphql.datocms.com/', {
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
  const responseInJson = await req.json()
  const allHeroes = responseInJson.data.allHeros

  return {
    props: {
      heros: allHeroes,
      loading: false
    },
    revalidate: 60 * 60 * 24
  }

}


