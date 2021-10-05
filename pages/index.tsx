import { PageLogin } from '../styles/login'
import logo from '../src/assets/logo.png'
import googleIconImg from '../src/assets/googleicon.png'
import { useAuth } from '../src/hooks/useAuth'
import Router from 'next/router'


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
        <img src="https://www.enwallpaper.com/wp-content/uploads/marvels-spider-man-miles-morales-2020-ps5-oy-scaled.jpg"/>
      </aside>

      <main>
      <style jsx global>{`
         body {
            overflow: hidden;
            }
    `}</style>
        <div className="main-content">
          <img id="logo" src={logo.src} alt="logo da marvel"/>
          <span>Logue com o Google para ver os heróis da Marvel</span>
          <button onClick={handleSignUp} className="create-room">
            <img src={googleIconImg.src} alt="Icone do Google" />
            Entrar com o Google
          </button>
        </div>
      </main>
    </PageLogin>

  )
}
