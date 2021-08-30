import styled from 'styled-components';


export const MeusFilmes = styled.div`
    display: flex;
    width: 900px;
    flex-direction: column;
    align-items: cente;
`;

export const TituloPage = styled.h1`

` 
export const NenhumFilme = styled.span`
    font-size: 25px;
`

export const ListaPai = styled.ul`
    padding:0;
`
export const ListaFilho = styled.li`
    list-style: none;
    padding: 0;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    a{
        text-decoration: none;
        color: brown;
    }

`
export const BtnList = styled.button`
    margin-left: 10px;
    background-color: brown;
    color: black;
    padding: 15px;
    border-radius: 10px;
    transition:  all 0.5s;
    cursor: pointer;
    font-size: 15px;

    &:hover{
        border: 1px solid white;
        color: white;
    }
` 

