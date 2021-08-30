import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import api from '../../services/api'
import {toast} from 'react-toastify'
import { FilmeInfo } from './styles'


function Filme(){
    const {id} = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            const response  = await api.get(`/r-api/?api=filmes/${id}`)
            if(response.data.length === 0){
                history.replace('/');
                return
            }
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        return ()=> {
            console.log("COMPONENTE DESMONTADO");
        }

    }, [history, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes');
        
        let filmesSalvos = JSON.parse(minhaLista) || [];
        
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.info('Vc ja possui o filme salvo');
            return
        }
        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme Salvo com sucesso');
    }

    if(loading){
        
        return(
            <>
                <FilmeInfo>
                    <h1>Carregando seu filme...</h1>
                </FilmeInfo>
            </>
        )
    }

    return(
        <>
            <FilmeInfo>
                <h1>{filme.nome}</h1>
                <img src={filme.foto} alt={filme.nome}/>
                <h3>{setFilme.sinopse}</h3>
                <div>
                    <button onClick={salvarFilme}>Salvar</button>
                    <button> 
                        <a rel="noreferrer" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} target="_blank">Trailer</a>
                    </button>
                </div>
            </FilmeInfo>
        </>
       
    )
}

export default Filme