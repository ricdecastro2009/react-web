import React, {Component} from 'react';
import Feed from '../components/Feed';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed: [
                {id:1, username: 'Ricardo', curtidas: 10, comentarios:2},
                {id:2, username: 'Joao', curtidas: 5, comentarios:3},
                {id:3, username: 'Roger', curtidas: 35, comentarios:315},
                {id:4, username: 'Luizao', curtidas: 1, comentarios:1},
            ]
        }
    }

    render(){
        return(
            <div>
                <Feed feeds={this.state.feed}></Feed>                                  
            </div>
        )
    }
}

export default App;