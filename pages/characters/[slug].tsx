import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import NavBar from '../../src/components/Navbar';
import { ContainerHeroi } from '../../styles/slug';
import withAuth from '../../utils/withAuth';


type HeroiType = {
    id: number
    title: string
    description: string
    slug: string
    background: string
    imgcard: string
    imghero: string
}

type CompHeroi = {
    heroiDato: HeroiType
}

function Heroi({heroiDato}: CompHeroi){

    return(
        <>
        <NavBar/>
        <style jsx global>{`
         body {
            overflow: hidden;
            }
    `}</style>
        <ContainerHeroi>
              <div>
                  <h1>{heroiDato.title}</h1>
                  <span>{heroiDato.description}</span>
              </div>
              <img id="hero"src={heroiDato.imghero} alt="Imagem do herois" />
              <img id="background"src={heroiDato.background} alt="Background do herói"/>
        </ContainerHeroi>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () =>{

    const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
            'authorization': '08bc754b1fe71986b2b53ec3f1949f',
            'Content-type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify({"query":`
            query {
                allHeros {
                    id
                    title
                    description
                    slug
                    background
                    imgcard
                    imghero

                  }
            }
        `})
    })

    const heroesInJson = await response.json()
    const allHeroes = heroesInJson.data.allHeros

    const paths = allHeroes.map((item: HeroiType) => { 
        return { params: { slug: item.slug}}
    })


    return {
        paths,
        fallback: false // true significa que vai ser dinamico somente no momento que for acessado, isso acontece quando eu entro com um novo item na api,dato e etc
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { slug }: any = ctx.params

    const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
            'authorization': '08bc754b1fe71986b2b53ec3f1949f',
            'Content-type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify({"query":`
            query {
                allHeros {
                    id
                    title
                    description
                    slug
                    background
                    imgcard
                    imghero

                  }
            }
        `})
    })

    const heroesInJson = await response.json()
    const allHeroes = heroesInJson.data.allHeros
    const heroiDato = allHeroes.filter((heroi: HeroiType) => heroi.slug == slug)[0]

    return{
        props: {
            heroiDato: heroiDato
        },
        revalidate: 60 * 60 * 24
    }
}

export default withAuth(Heroi)


// export async function getStaticProps({params}: paramsType){

//     const response = await fetch('https://graphql.datocms.com/', {
//         method: 'POST',
//         headers: {
//             'authorization': '08bc754b1fe71986b2b53ec3f1949f',
//             'Content-type': 'application/json',
//             'Accept': 'application/json'

//         },
//         body: JSON.stringify({"query":`
//             query {
//                 allHeros {
//                     id
//                     title
//                     description
//                     slug
//                     background
//                     imgcard
//                     imghero

//                   }
//             }
//         `})
//     })

//     const heroesInJson = await response.json()
//     const allHeroes = heroesInJson.data.allHeros
//     const heroiDato = allHeroes.filter((heroi: HeroiType) => heroi.slug == params.slug)[0]

//     return {
//         props: {heroiDato}, 
//         revalidate: 60 * 60 * 24 * 30
//     }

// }

// export async function getStaticPaths(){

//     const response = await fetch('https://graphql.datocms.com/', {
//         method: 'POST',
//         headers: {
//             'authorization': '08bc754b1fe71986b2b53ec3f1949f',
//             'Content-type': 'application/json',
//             'Accept': 'application/json'

//         },
//         body: JSON.stringify({"query":`
//             query {
//                 allHeros {
//                     id
//                     title
//                     description
//                     slug
//                     background
//                     imgcard
//                     imghero

//                   }
//             }
//         `})
//     })

//     const heroesInJson = await response.json()
//     const allHeroes = heroesInJson.data.allHeros

//     const paths = allHeroes.map((item: HeroiType) => {
//         const slug = item.slug
//         return {
//             params: {
//                 slug
//             }
//         }
//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }