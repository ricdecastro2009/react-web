import React, { useState, useEffect} from "react";

function App() {

  const [mensagens , setMensagens] = useState(['O Brasil é ouro', 'Olimpiadas na França 2024', 'Aprendendo React']);
  const [mensagemInput, setMensagemInput] = useState('');
  

  //Esse é como se fosse o willamount pois n esta atrelado a nenhum state
  useEffect(()=>{
    console.log('didAmount')
    let mensagemStorage = localStorage.getItem('mensagens');
    console.log(mensagemStorage);
    if(mensagemStorage){
      setMensagens(JSON.parse(mensagemStorage))
    }
    // ;
  }, [])

  //Recebe uma função de execução e um array que é o state q ele vai atualizar com o didUpdate nativo do react.
  // pode receber várias states que ele ficará monitorando.
  useEffect(() => {
      //console.log('Teste');
      localStorage.setItem('mensagens', JSON.stringify(mensagens));
  }, [mensagens]);

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
