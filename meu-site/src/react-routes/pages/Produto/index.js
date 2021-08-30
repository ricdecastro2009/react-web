import {Link, useParams} from 'react-router-dom';


function Produto(){
    const {id} = useParams();
    
    return(
        <div>
            <h1>Produto Selecionado: {id}</h1>
            <Link to="/"> Voltar para Home </Link>
        </div>
    )
    
}

export default Produto