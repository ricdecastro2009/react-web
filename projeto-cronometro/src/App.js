import React, {Component} from 'react'
import './style.css'
// Importando a imagem do cronometro
import cronometro from './assets/cronometro.png'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            numero: 0,
            botaoOne: 'VAI'
        }
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
            state.botaoOne = 'VAI'
        }else{
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);        
            }, 100);
            state.botaoOne = 'PAUSAR'
        }
        this.setState(state);

    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
        }
        let state = this.state;
        state.numero = 0;
        state.botaoOne = 'VAI';
        this.setState(state);

    }

    render(){
        return (
            <div className="container">
                <img alt="Cronometro" src={cronometro} className="img"/>
                <span className="timer">{this.state.numero.toFixed(1)}</span>
                <div className="areaBtn">
                    <button className="botao" onClick={this.vai}>{this.state.botaoOne}</button>
                    <button className="botao" onClick={this.limpar}>Limpar</button>
                </div>
            </div>
        )
    }
}


export default App