import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../src/components/Navbar';
import { AboutContainer } from '../styles/about';
import brasil from '../src/assets/brasil.png'
import eua from '../src/assets/eua.png'
import { useRouter } from 'next/router';
import { auth } from '../src/services/firebase';


export function Brasil(){

  const links = [
    <a target= "_blank" href="https://www.rocketseat.com.br/">Rocketseat</a>,
    <a  target= "_blank" href="https://www.alura.com.br/">Alura</a>,
    <a target= "_blank" href="https://www.instagram.com/maykbrito/"> Mayk Brito</a>, 
    <a target= "_blank" href="https://www.instagram.com/dieegosf/"> Diego Fernandez</a>,
    <a target= "_blank" href="https://www.instagram.com/devsoutinho/"> Dev Soutinho </a>
  ]

  return(
    <span>
    O conhecimento que foi aplicado nesse projeto veio da semana NLW - Together ({links[0]}) e
    da Imersão React ({links[1]}), onde foram abordados diversos assuntos em como consumir uma API,
    como criar contextos, hooks, components etc. Então quero deixar meus agradecimentos ao {links[2]}, {links[3]} e o 
    {links[4]}
    que de certa maneira contribuiram para esse projeto dar certo!
    </span>
  )
}

function Eua(){

  
  const links = [
    <a target= "_blank" href="https://www.rocketseat.com.br/">Rocketseat</a>,
    <a  target= "_blank" href="https://www.alura.com.br/">Alura</a>,
    <a target= "_blank" href="https://www.instagram.com/maykbrito/"> Mayk Brito</a>, 
    <a target= "_blank" href="https://www.instagram.com/dieegosf/"> Diego Fernandez</a>,
    <a target= "_blank" href="https://www.instagram.com/devsoutinho/"> Dev Soutinho </a>
  ]


  return(
    <span>
      The knowledge that was applied to this project came from the NLW week - Together ({links[0]}) and
      of React immersion ({links[1]}), where several issues were addressed on how to consume an API,
      how to create contexts, hooks, components etc. So I want to leave my thanks to {links[2]}, {links[3]} and 
      {links[4]}
      who in a way contributed to this project
      happen!
    </span>
   
  )
}


const Sobre: React.FC = () => {

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

  const imgBr: any = useRef()
  const imgEua: any = useRef()

  const links = [
    <a target= "_blank" href="https://www.rocketseat.com.br/">Rocketseat</a>,
    <a  target= "_blank" href="https://www.alura.com.br/">Alura</a>,
    <a target= "_blank" href="https://www.instagram.com/maykbrito/"> Mayk Brito</a>, 
    <a target= "_blank" href="https://www.instagram.com/dieegosf/"> Diego Fernandez</a>,
    <a target= "_blank" href="https://www.instagram.com/devsoutinho/"> Dev Soutinho </a>
  ]

  const [ComponentLanguage, setComponentLanguage] = useState(<Brasil/>);

  return (
    <>
    <NavBar/>
    <AboutContainer>
      <div className="technologies-used">
        <h1>Tecnogias usadas</h1>
        <section>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>GraphQL - DatoCMS</span>
          <span>Firebase (Authentication)</span>
          <span>Styled-components</span>
          <span>React-Carrousel</span>
        </section>
      </div>

      <div className="project-curiosities">
        <header>
          <h1>Curiosidades do projeto</h1>
          <section>
            <img ref={imgBr} 
              src={brasil.src} 
              onClick={() =>  {
                setComponentLanguage(<Brasil/>)
                imgBr.current.style.filter = "brightness(100%)"
                imgEua.current.style.filter = "brightness(50%)"

              }} 
              alt="Bandeira do Brasil"
            />
            <img ref={imgEua}
                 src={eua.src} 
                 onClick={() =>{
                   setComponentLanguage(<Eua/>)
                   imgEua.current.style.filter = "brightness(100%)"
                   imgBr.current.style.filter = "brightness(50%)"
                  }}  
                 alt="Bandeira do Estados Unidos"/>
          </section> 
        </header>
        {ComponentLanguage}
      </div>
    </AboutContainer>
    </>

  );
}

export default Sobre;