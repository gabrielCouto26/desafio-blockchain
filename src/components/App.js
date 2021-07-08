import React from 'react';

import List from './List'
import Form from './Form'

import mock from '../mock'
import Block from '../models/Block'

const App = () => {

    const [blockchain, setBlockchain] = React.useState(mock.blockchain)
    const [contador, setContador] = React.useState(0)

    const addBlock = ({blockData, blockDifficulty}) => {
        let block = new Block(blockData, blockDifficulty)
        blockchain.addBlock(block)
        
        setContador(contador+1)
    }

    return (
        <div className="container">
            <div className="text-center mt-4">
                <h1>Desafio Blockchain</h1>
            </div>
            <Form
                blockchain={blockchain}
                addBlock={addBlock} 
            />
            <List blockchain={blockchain} />
        </div>
    );
};

export default App;