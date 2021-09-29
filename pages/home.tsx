import { useEffect } from "react";
import { auth } from "../src/services/firebase"
import { ContainerHome } from "../styles/home";
import NavBar from "../src/components/Navbar";
import { useRouter } from 'next/router'
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import iron from '../src/assets/imgcard1.png'
import captain from '../src/assets/imgcard2.png'

export default function Home() {

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

    return (
        <>
            <NavBar />
            <ContainerHome>
                    <Card text="Ver Heróis" imgcard={iron.src} className="background-red" onClick={()=> router.push("/herois")}/>
                    <Card text="Sobre o projeto" imgcard={captain.src}  onClick={()=> router.push("/sobre")}/>

                <Footer />
            </ContainerHome>
        </>
    )
}





