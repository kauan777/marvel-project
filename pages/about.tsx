import NavBar from '../src/components/Navbar';
import { AboutContainer } from '../styles/about';
import withAuth from '../utils/withAuth';


const Sobre: React.FC = () => {

   const links = [
           <a target="_blank" href="https://www.rocketseat.com.br/">Rocketseat</a>,
           <a target="_blank" href="https://www.alura.com.br/">Alura</a>,
           <a target="_blank" href="https://www.instagram.com/maykbrito/"> Mayk Brito</a>,
           <a target="_blank" href="https://www.instagram.com/dieegosf/"> Diego Fernandez</a>,
           <a target="_blank" href="https://www.instagram.com/devsoutinho/"> Dev Soutinho </a>
        ]


  return (
    <>
      <NavBar />
      <AboutContainer>
        <div className="introduction">
          <h1>Uma breve resumida sobre o projeto</h1>
          <h3>Aqui estão minhas inspirações e as tecnologias usadas</h3>
          <img src="https://images3.alphacoders.com/678/thumb-1920-678085.jpg" />
        </div>
        <section className="container-card">
          <div className="card" id="card1">
            <img src="https://i.pinimg.com/originals/ae/a0/e2/aea0e21c2526f0197dd07ae67a4e4173.jpg" />
            <h2>Tecnologias utilizadas</h2>
            <section className="container-itens">
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>GraphQL - DatoCMS</span>
              <span>Firebase (Authentication)</span>
              <span>Styled-components</span>
              <span>React-Carrousel</span>
            </section>
          </div>
          <div className="card" id="card2">
            <img src="https://i.pinimg.com/originals/77/5e/66/775e6625385d54eacc88b8cf14d9b58d.jpg" />
            <h2>Sobre mim</h2>
            <section>
              <span>Meu nome é Kauan, tenho 16 anos, moro em São Paulo-SP, curso Desenvolvimento e Análise de Sistemas e atualmente estou estudando ReactJS,TypeScript e NextJS</span>
            </section>
          </div>
          <div className="card"  id="card3">
            <img src="https://i.pinimg.com/564x/4a/b6/9c/4ab69c1c1651c8af7ab7416f093baa5a.jpg" />
            <h2>Inspirações</h2>
            <section className="container-itens">
              <span><a  target="_blank"  href="https://github.com/alura-challenges/alurakut">Alurakut</a></span>
              <span><a  target="_blank"  href="https://github.com/rocketseat-education/nlw-06-reactjs">Letmeask</a></span>
              <span><a  target="_blank"  href="https://github.com/rocketseat-education/nlw-06-origin">OriginSix</a></span>
            </section>
          </div>
        </section>
          <div className="line"/>
        <div className="text-end">
          <span>
          O conhecimento que foi aplicado nesse projeto veio da semana NLW - Together ({links[0]}) e
          da Imersão React ({links[1]}), onde foram abordados diversos assuntos em como consumir uma API,
          como criar contextos, hooks, components etc. Então quero deixar meus agradecimentos ao {links[2]}, {links[3]} e o
          {links[4]}
          que de certa maneira contribuiram para esse projeto dar certo!
          </span> 
        </div>
      </AboutContainer>
    </>
  );
}

export default withAuth(Sobre)




