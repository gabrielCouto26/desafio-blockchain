import React from 'react';

import Block from './Block'

const BlockchainComponent = (blockchain) => {
    return (
        <>
            {blockchain.data.chain.map((block, index) => <Block data={block} key={index}></Block>)}
        </>
    );
};

export default BlockchainComponent;