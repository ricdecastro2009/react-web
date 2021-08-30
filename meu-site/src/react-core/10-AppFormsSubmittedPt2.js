import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                nome: '',
                email:'',
                password:'',
                sex:'',
            },
            error:'',
        }
        this.dadosForms = this.dadosForms.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
        
    }

    dadosForms(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form : form})
    }


    cadastrar(e){
        e.preventDefault();
        const {nome, email, password, sex} = this.state.form;
        if(nome !== '' && email !== '' && password !=='' && sex !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nPassword: ${password} \nSexo: ${sex}`);
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
                    <label>Nome: </label>
                    <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForms}/><br></br>
                    <br/>
                    <label>E-mail: </label>
                    <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForms}/><br></br>
                    <br/>
                    <label>Senha: </label>
                    <input type="password" name="password" value={this.state.form.password} onChange={this.dadosForms}/>
                    <br/>
                    <br/>
                    <label>Sexo: </label>
                    <select name="sex" value={this.state.form.sex} onChange={this.dadosForms}>
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>

                    <button type="submit">Cadastrar</button>
                </form>
                <br/>
                <div>
                    <h3>{this.state.nome}</h3>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.password}</h3>
                    <h3>{this.state.sex}</h3>
                </div>
            </div>
        )
    }
}

export default App;