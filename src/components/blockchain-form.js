import React, {useState} from 'react';
import Block from '../Utils/Block-react';

const BlockchainForm = ({setBlockchain,lastBlock}) => {

    const [ blockData, setBlockData] = useState("");
    const [ blockDifficulty, setBlockDifficulty] = useState("");

    function handleBlockchain(){

        console.log(lastBlock != null ? lastBlock.hash : '')

        const block = new Block(blockData,parseInt(blockDifficulty),lastBlock != null ? lastBlock.hash : '');

        block.mineBlock(block.difficulty);

        setBlockchain(prevState => [...prevState,block]);

    }

    function handleBlockData(event){
        setBlockData(event.target.value);
    }

    function handleBlockDifficulty(event){
        setBlockDifficulty(event.target.value);
    }

    return(
        <div className="position-fixed top=10">
                <div className="form-group">
                    <label htmlFor="blockData">Add New Block</label>
                    <input type="text" className="form-control" id="blockData" value={blockData} onChange={handleBlockData} placeholder="Block data"/>
                    <br/>
                    <input type="number" className="form-control" id="blockDifficulty" value={blockDifficulty} onChange={handleBlockDifficulty} placeholder="Block difficulty"/>
                </div>
                <button id="btnAddBlock" className="btn btn-primary" onClick={handleBlockchain}>Add</button>
        </div>
    )
}

export default BlockchainForm;