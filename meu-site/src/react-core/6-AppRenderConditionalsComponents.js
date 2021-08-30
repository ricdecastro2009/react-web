import React, {Component} from 'react'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            status: 1,
            status2: false
        }
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status2:false});
    }

    entrar(){
        this.setState({status2:true});
    }

    render(){
        return(


            <div>
                
                {this.state.status === 1 && 
                    <h1>Bem Vindo</h1>
                }
                
                {this.state.status2 ? 
                    <div>
                        <h1>Seja bem vindo ao Sistema</h1> 
                        <button onClick={this.sair}>Sair do Sistema</button>
                    </div>
                    : 
                    <div>
                        <h1>Olá Visitante Faça o login</h1> 
                        <button onClick={this.entrar}>Entrar do Sistema</button>
                    </div>
                
                }

                <h1>Curso React</h1>
            </div>
        )
    }

}

export default App;