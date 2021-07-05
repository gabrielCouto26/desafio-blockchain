import React from 'react';

import BlockchainComponent from './Blockchain'
import FormComponenet from './Form'
import mock from '../mock'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blockchain: mock.blockchain
        }

        this.onBlockchainChange = this.onBlockchainChange.bind(this)
    }

    onBlockchainChange = (blockchain) => {
        this.setState({blockchain: blockchain})
    }

    render(){
        return (
            <div className="container">
                <div className="text-center mt-4">
                    <h1>Desafio Blockchain</h1>
                </div>
                <FormComponenet blockchain={this.state.blockchain} onBlockchainChange={this.onBlockchainChange} />
                <BlockchainComponent blockchain={this.state.blockchain} onBlockchainChange={this.onBlockchainChange} />
            </div>
        );
    }
};

export default App;