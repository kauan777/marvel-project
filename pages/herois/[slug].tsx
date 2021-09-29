import React from 'react';


type HeroiType = {
    id: number
    title: string
    description: string
    slug: string
    nomecompleto: string
    terranatal: string
    especie: string
    background: string
}

type CompHeroi = {
    heroiDato: HeroiType
}

type paramsType = {
    params: {
        slug: string
    }
}


export default function Heroi({heroiDato}: CompHeroi){
   
    return(
        <div>{heroiDato.title}</div>
    )
}


export async function getStaticProps({params}: paramsType){

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
                    nomecompleto
                    terranatal
                    especie
                    background
                  }
            }
        `})
    })

    const heroesInJson = await response.json()
    const allHeroes = heroesInJson.data.allHeros
    const heroiDato = allHeroes.filter((heroi: HeroiType) => heroi.slug == params.slug)[0]

    return {
        props: {heroiDato}, 
        revalidate: 60 * 60 * 24 * 30
    }

}

export async function getStaticPaths(){

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
                    nomecompleto
                    terranatal
                    especie
                    background
                  }
            }
        `})
    })

    const heroesInJson = await response.json()
    const allHeroes = heroesInJson.data.allHeros

    const paths = allHeroes.map((item: HeroiType) => {
        const slug = item.slug
        return {
            params: {
                slug
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}