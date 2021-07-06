import React from 'react';

import List from './List'
import Form from './Form'
import mock from '../mock'

import Block from '../models/Block'

// implementar redux

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blockchain: mock.blockchain
        }

        this.addBlock = this.addBlock.bind(this)
    }

    addBlock = ({blockData, blockDifficulty}) => {
        let block = new Block(blockData, blockDifficulty)
        this.state.blockchain.addBlock(block)

        this.setState({blockchain: this.state.blockchain})
    }

    render(){
        return (
            <div className="container">
                <div className="text-center mt-4">
                    <h1>Desafio Blockchain</h1>
                </div>
                <Form
                    blockchain={this.state.blockchain}
                    addBlock={this.addBlock} 
                />
                <List blockchain={this.state.blockchain} />
            </div>
        );
    }
};

export default App;