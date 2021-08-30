import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            sex:''
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.updateSex = this.updateSex.bind(this);
    }

    updateEmail(e){
        let valutInputted = e.target.value;
        this.setState({email: valutInputted});
    }

    updateSex(e){
        this.setState({sex: e.target.value});
    }

    render(){
        return(
            <div>
                <h1>Cadastro de Usuário</h1>
                <label>E-mail: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.updateEmail}/><br></br>
                <br/>
                <label>Senha: </label>
                <input type="password" name="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                <br></br><br></br>
                <label>Sexo: </label>
                <select name="sex" value={this.state.sex} onChange={this.updateSex}>
                    <option value="">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>

                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.password}</h3>
                    <h3>{this.state.sex}</h3>
                </div>
            </div>
        )
    }
}

export default App;