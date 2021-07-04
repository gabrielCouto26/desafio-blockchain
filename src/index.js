import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react'; 
import {
    BlockchainForm,
    BlockchainStructure,
    Wrapper
} from './components'
import Block from './Utils/Block-react';

const App = () => {

    const [ blockchain, setBlockchain ] = useState([]);

    return (
        <>
            <div className="text-center mt-4">
                <h1>Desafio Blockchain</h1>
            </div>
            <Wrapper>
                <BlockchainForm setBlockchain={setBlockchain} lastBlock={blockchain[blockchain.length - 1]}/>
                <BlockchainStructure blockchain={blockchain}/>
            </Wrapper>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))