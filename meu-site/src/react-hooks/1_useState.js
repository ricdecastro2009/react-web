import React, {useState} from "react";

function App() {

  const [mensagens , setMensagens] = useState(['O Brasil é ouro', 'Olimpiadas na França 2024', 'Aprendendo React']);
  const [mensagemInput, setMensagemInput] = useState('');
  
  
  function insertMessage(){
    let mensagemFixa = "O Brasil é Penta e Bi do Ouro olimpico";
    setMensagens([...mensagens, mensagemFixa, mensagemInput]);
    setMensagemInput('');
  }

  return (
    <div className="App">
      { 
        mensagens.map(mensagem => {
          return(
            <ul key={mensagem}>
              {mensagem}
            </ul>
          )
        })
      }
      <input type="text" name="iptText" value={mensagemInput} onChange={e => setMensagemInput(e.target.value)}/>
      <button type="button" onClick={insertMessage}>Adicionar Mensagem</button>
      <hr></hr>

      
      
      




    </div>
    
  );
}

export default App;
