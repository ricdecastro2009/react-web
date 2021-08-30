import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import { BtnList, ListaFilho, ListaPai, MeusFilmes, NenhumFilme, TituloPage } from './styles';


function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect (() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function handleDelete(idFilme){
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== idFilme);
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Filme Excluido com sucesso');
    }

    return(
        <MeusFilmes>
            <TituloPage>Meus Filmes</TituloPage>
            {filmes.length === 0 && <NenhumFilme>Você não possui nenhum Filme salvo</NenhumFilme>}
            <ListaPai>
                {
                    filmes.map((filme) => {
                        return(
                            <ListaFilho key={filme.id}>
                                <span>{filme.nome}</span>
                                <div>
                                    <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                    <BtnList onClick={() => handleDelete(filme.id)}>Excluir</BtnList>
                                </div>
                            </ListaFilho>
                        )
                    })
                }
            </ListaPai>
        </MeusFilmes>
    )
}

export default Favoritos