import React, {Component} from 'react';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00',
        }
    }

    //Depois q o componente é montado
    componentDidMount(){
        setInterval(() =>{
            this.setState({hora: new Date().toLocaleTimeString()});
        },1000)
    }

    //Sempre q um state dentro do componente é atualizado.
    componentDidUpdate(){
        console.log("Atualizou");
    }

    //Esse é utilizado para comparar a mudança de determinado estado ele retorna true ou false
    /*shouldComponentUpdate(){

    }
    */

    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
               
            </div>
        );
    }
}

export default App;