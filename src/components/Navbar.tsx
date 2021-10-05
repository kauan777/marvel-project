import { useEffect, useRef, useState } from "react"
import { Header } from "../../styles/navbar"
import { auth, firebase} from "../services/firebase"
import LoadingProfile from "./Loading/LoadingProfile"
import Profile from "./Profile"
import logout from '../assets/logout.png'
import router, { useRouter } from "next/router"
import { useAuth } from "../hooks/useAuth"


export default function NavBar() {


    const divmenu = useRef<HTMLDivElement>(null)

    function handleMenu() {

        divmenu.current?.classList.toggle("show")
    }

    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const usubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setLoading(false)
            }
        })
        return () => {
            usubscribe()
        }

    }, [])
 

 

    return (
        <Header>
            {loading ? (
                <LoadingProfile />
            ) : (
                <Profile/>
            )}
            <nav>

                <div ref={divmenu} className="menu">
                    <ul>
                        <a href="/home"><li>Home</li></a>
                        <a href="/characters"><li>Heróis</li></a>
                        <a href="/about"><li>Sobre</li></a>
                        <a href="/contact"><li>Contato</li></a>
                    </ul>
                    <svg id="open" onClick={() => handleMenu()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
                    <svg id="close" onClick={() => handleMenu()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" /></svg>
                </div>
            </nav>
        </Header>
    )
}