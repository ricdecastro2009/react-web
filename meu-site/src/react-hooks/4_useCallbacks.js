import React, { useState, useEffect, useMemo, useCallback} from "react";

function App() {

  //
  const [mensagens , setMensagens] = useState([]); // 'O Brasil é ouro', 'Olimpiadas na França 2024', 'Aprendendo React'
  const [mensagemInput, setMensagemInput] = useState('');
  

  //Esse é como se fosse o willamount pois n esta atrelado a nenhum state
  useEffect(()=>{
    console.log('didAmount')
    let mensagemStorage = localStorage.getItem('mensagens');
    console.log(mensagemStorage);
    if(mensagemStorage){
      setMensagens(JSON.parse(mensagemStorage))
    }
  }, [])

  //Recebe uma função de execução e um array que é o state q ele vai atualizar com o didUpdate nativo do react.
  // pode receber várias states que ele ficará monitorando.
  useEffect(() => {
      localStorage.setItem('mensagens', JSON.stringify(mensagens));
  }, [mensagens]);

  // o use callback serve para re excecutar uma unica função parecido com o useMemo porém é possivel executar funções dentro dele.
  const handleAdd = useCallback(() => {
    setMensagens([...mensagens, mensagemInput]);
    setMensagemInput('');
  
  }, [mensagens, mensagemInput]);

  //Serve para atualizar apenas um calculo ao invés de atualizar todo o item de mensagem.
  //use Memosempre retorna algo para a gente
  const totalMensagens = useMemo(()=> mensagens.length, [mensagens]);



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
      <br></br>
      <strong>Você possui {totalMensagens} Mensagens</strong><br></br>
      <input type="text" name="iptText" value={mensagemInput} onChange={e => setMensagemInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar Mensagem</button>
      <hr></hr>

      
      
      




    </div>
    
  );
}

export default App;
