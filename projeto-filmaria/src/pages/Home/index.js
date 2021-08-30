
import { useEffect, useState } from "react";
import api from '../../services/api'
import { Link } from 'react-router-dom'
import {Container, ListaFilmes} from './styles'

function Home() {

    const [filmes, setFilmes]   = useState([]);

    useEffect(() => {
      async function loadFilmes(){
        const response = await api.get('/r-api/?api=filmes/');
        setFilmes(response.data);
      }

      loadFilmes();
    }, [])

    return (
      <Container>
        <ListaFilmes>
        {
          filmes.map((filme)=> {
            return(
              <article>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome}/>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          })
        }
        </ListaFilmes>
      </Container>
    );
  }
  
  export default Home;
  