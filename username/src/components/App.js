import React from 'react';

import Name from "./Name";

class App extends React.Component{
    state = {gretting: ''}
    
    onNameSubmit = (term) => {
        this.setState( {gretting: `Hello ${term}`} )
        return this.state.term;
    }
    
    render(){
        return (
            <div>
                <Name onSubmit={this.onNameSubmit}/>
                <p>{this.state.gretting}</p>
            </div>
        );
    }
    
};

export default App;