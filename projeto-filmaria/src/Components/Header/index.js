import './header.css'
import {Link} from 'react-router-dom' 


function Header(){
    return(
        <>
            <header>
                <Link className="logo" to="/">Favorites</Link>
                <Link className="favoritos" to="/favoritos">Salvos</Link>
            </header>
        </>
    )
}

export default Header;