import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            sex:'',
            error:''
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.updateSex = this.updateSex.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    updateEmail(e){
        let valutInputted = e.target.value;
        this.setState({email: valutInputted});
    }

    updateSex(e){
        this.setState({sex: e.target.value});
    }

    cadastrar(e){
        e.preventDefault();
        console.log(this.state);
        const {email, password, sex} = this.state;

        if(email !== '' && password !=='' && sex !== ''){
            alert(`Email: ${email} \nPassword: ${password} \nSexo: ${sex}`);
        }else{
            this.setState({error: 'Ops faltou preencher algum campo verifique!'});
        }
        
    }

    render(){
        return(
            <div>
                <h1>Cadastro de Usuário</h1>
                { this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.cadastrar}>
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

                    <button type="submit">Cadastrar</button>
                </form>

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