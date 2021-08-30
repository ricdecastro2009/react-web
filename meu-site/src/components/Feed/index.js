import React, {Component} from 'react';

class Feed extends Component{
    constructor(props){
        super(props)
        this.listFeeds = props.feeds
    }
    render(){
        return(
            <div>
                {
                    this.listFeeds.map((item) => {
                        return(
                            <div key={item.id}>
                                <h3>{item.username}</h3>
                                <h4>{item.curtidas > 1 ? item.curtidas + ' curtidas' : item.curtidas + ' curtida'} </h4>
                                <h4>{item.comentarios > 1 ? item.comentarios + ' comentarios' : item.comentarios + ' comentario'}</h4>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Feed;