import {Link} from 'react-router-dom'
import { NotFaul } from './styles'


function NotFound(){
    return(
        <NotFaul>
            <h1>Sorry mas essa página ao Existe!</h1>
            <h2>404</h2>
            <Link to="/">Voltar para a Home</Link>
        </NotFaul>
    )
}

export default NotFound