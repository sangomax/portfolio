import { SvgIcon } from "@material-ui/core";
import Link from 'next/link'

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const Navbar = () => {
    return ( 
        <nav>
            <Link href="/"><a><HomeIcon fontSize='large' /></a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/profile"><a>Profile</a></Link>
        </nav>
     );
}
 
export default Navbar;