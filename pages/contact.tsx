import NavBar from "../src/components/Navbar";
import SocialMedia from "../src/components/SocialMedia";
import { ContainerContact } from "../styles/contact";
import linkedin from '../src/assets/linkedin.png'
import github from '../src/assets/github.png'
import instagram from '../src/assets/instagram.png'
import withAuth from "../utils/withAuth";


function Contact() {


    return (
        <>
            <NavBar />
            <ContainerContact>
                <SocialMedia link="https://www.instagram.com/ikauan.costa/" name="Instagram" icon={instagram.src} />
                <SocialMedia link="https://github.com/kauan777" name="GitHub" icon={github.src} />
                <SocialMedia link="https://www.linkedin.com/in/kauancosta/" className="card3" name="Linkedin" icon={linkedin.src} />
            </ContainerContact>
        </>
    )
}

export default withAuth(Contact)

