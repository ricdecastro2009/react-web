import {Link} from 'react-router-dom';

function NotFound(){

    
    return(
        <div>
            <h1>Página Não existe</h1>
            <Link to="/"> Voltar para Home </Link>
        </div>
    )
    
}

export default NotFound