import React, {Component} from 'react';
import Membro from '../components/Membro/index';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    
    

    render(){
        return(
            <div>
                <Membro nome="Visitante"></Membro>
            </div>
        );
    }
}

export default App;