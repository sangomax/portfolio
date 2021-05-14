import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from 'next/link'

const Footer = () => {
    return (  
        <footer>
            <Link href="https://www.instagram.com/adrianogaiotto_o_oficial/"><a><InstagramIcon /></a></Link>
            <Link href="https://github.com/sangomax"><a><GitHubIcon /></a></Link>
            <Link href="https://www.linkedin.com/in/adrianogaiotto/"><a><LinkedInIcon /></a></Link>
            <Link href="https://www.facebook.com/adriano.gaiotto"><a><FacebookIcon /></a></Link>
            <br />

            <p>Copyright 2021 AGdeO</p>
        </footer>
    );
}
 
export default Footer;