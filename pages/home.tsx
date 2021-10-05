import { ContainerHome } from "../styles/home";
import NavBar from "../src/components/Navbar";
import Card from "../src/components/Card";
import iron from '../src/assets/imgcard1.png'
import captain from '../src/assets/imgcard2.png'
import withAuth from "../utils/withAuth";
import { useRouter } from "next/router";

function Home() {
    
    const router = useRouter()

    return (
        <>
            <NavBar />
            <style jsx global>{`
            body {
                overflow: hidden;
            }
            `}</style>
            <ContainerHome>
                    <Card text="Ver Heróis" imgcard={iron.src} className="background-red" onClick={()=> router.push("/characters")}/>
                    <Card text="Sobre o projeto" imgcard={captain.src}  onClick={()=> router.push("/about")}/>
            </ContainerHome>
        </>
    )
}

export default withAuth(Home)







