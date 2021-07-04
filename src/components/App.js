import React from 'react';
import BlockchainComponent from './Blockchain'

import Blockchain from '../models/Blockchain'
import Block from '../models/Block';

let block = new Block('Primeiro Bloco')
let blockchain = new Blockchain()
blockchain.addBlock(block)

const App = () => {
    return (
        <>
            <h1>oi</h1>
            <BlockchainComponent data={blockchain}/>
        </>
    );
};

export default App;