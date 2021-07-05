import React from 'react';

import Block from './Block'

class BlockchainComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const chain = this.props.blockchain.chain
        return (
            <div className="d-flex flex-column align-items-center mt-4 mb-4">
                {chain.map((block, index) => <Block block={block} key={index}></Block>)}
            </div>
        );
    }
};

export default BlockchainComponent;