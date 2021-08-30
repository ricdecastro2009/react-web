import styled from 'styled-components'


export const FilmeInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    
    img{
        border-radius: 20px;
    }

    button{
        margin-right: 5px;
        margin-top: 15px;
        cursor: pointer;
        border-radius: 5px;
        border: 0;
        font-size: 20px;
        outline: none;
        padding: 12px;
        transition: all 0.5s;
        
        &:hover{
            background-color: brown;
            color: white;
        }
    }

    a{
        text-decoration: none;
        color: black;
        transition: all 0.5s;
        &:hover{
            text-decoration: none;
            color: white;
        }
    }
`