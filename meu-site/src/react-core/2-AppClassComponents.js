import React, {Component} from 'react';



class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}></Sobre>
                <Social></Social>
                <hr></hr>
            </div>
        )
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou {this.props.nome}</h2>
                <h3>Sou {this.props.cargo}</h3>
                <h3>Tenho {this.props.idade} anos</h3>
            </div>
        )
    }
}

const Social = () => {
    return (
        <div>
            <a href="https://globo.com">Facebook</a>
            <a href="https://globo.com">Youtube</a>
            <a href="https://globo.com">Instagram</a>
        </div>
    )
}

function App(){
    return( 
        <div>
            <h1>Conheça nossa Equipe:</h1>
            <Equipe nome="Ricardo" cargo="Programador" idade="31"></Equipe>
            <Equipe nome="Joazinho" cargo="UX" idade="19"></Equipe>
        </div>
    )
}

export default App;