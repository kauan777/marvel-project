import { PageLogin } from '../styles/login'
import background from '../src/assets/backgroundlogin.png'
import logo from '../src/assets/logo.png'
import googleIconImg from '../src/assets/googleicon.png'

import { useAuth } from '../src/hooks/useAuth'
import Router from 'next/router'
import Footer from '../src/components/Footer'


export default function Home() {

  const { user, signInWithGoogle } = useAuth()

  async function handleSignUp() {
    if (!user) {
      await signInWithGoogle()
    }
    Router.push('/home')
  }


  return (
    <PageLogin>
      <aside>
        <img src={background.src} />
      </aside>

      <main>
        <div className="main-content">
          <img id="logo" src={logo.src} />
          <span>Logue com o Google para ver os heróis da Marvel</span>
          <button onClick={handleSignUp} className="create-room">
            <img src={googleIconImg.src} alt="Icone do Google" />
            Entrar com o Google
          </button>
        </div>
        <Footer/>
      </main>
    </PageLogin>

  )
}