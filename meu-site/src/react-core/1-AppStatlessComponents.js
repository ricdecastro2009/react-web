import React from 'react';

const Equipe = (props) => {
    return( 
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}></Sobre>
            <Social fb={props.facebook}></Social>
            <hr/>
        </div>
    )
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo} </h3>
            <h3>Idade: {props.idade}</h3>
            
        </div>
    )
}
const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook</a>
            <a href={props.fb}>Linckedin</a>
            <a href={props.fb}>Youtube</a>
        </div>
    )
}

function App(){
    return( 
        <div>
            <h1>Conheça nossa Equipe:</h1>
            <Equipe nome="Ricardo" cargo="Dev" idade="31" facebook="https://google.com"></Equipe>
            <Equipe nome="Joaozinho" cargo="Programador" idade="29" facebook="https://google.com"></Equipe>
            <Equipe nome="Amanda" cargo="Front" idade="24" facebook="https://google.com"></Equipe>
        </div>
    )
}

export default App;