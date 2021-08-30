import React, {Component} from 'react';
import './css/estilo.css'
import biscoito from './assets/biscoito.png'

class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            textoFrase: ''
        };
        this.frases = [ 'Siga os bons e aprenda com eles.', 
                        'O bom-senso vale mais do que muito conhecimento.', 
                        'O riso é a menor distância entre duas pessoas.', 
                        'Deixe de lado as preocupações e seja feliz.',
                        'Realize o óbvio, pense no improvável e conquiste o impossível.',
                        'Acredite em milagres, mas não dependa deles.',
                        'A maior barreira para o sucesso é o medo do fracasso.'];
        
        this.gerarFraseBiscoito = this.gerarFraseBiscoito.bind(this);
    }

    gerarFraseBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        let fraseFormada = this.frases[numeroAleatorio];
        state.textoFrase = '"'+ fraseFormada+'"';
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img alt="Biscoito" src={biscoito} className="img"></img>
                <Botao nome="Abrir Biscoito" acaoBtn={this.gerarFraseBiscoito}></Botao>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        )
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App;