import React from 'react';

import Block from './Block'

class BlockchainComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const chain = this.props.blockchain.chain
        return (
            <>
                {chain.map((block, index) => <Block block={block} key={index}></Block>)}
            </>
        );
    }
};

export default BlockchainComponent;