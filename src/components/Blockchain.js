import React from 'react';

import Block from './Block'

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const chain = this.props.blockchain.chain
        return (
            <div className="d-flex flex-column align-items-center mt-4 mb-4">
                {
                    chain.map((block, index) => 
                        <Block block={block} key={index} />
                    )
                }
            </div>
        );
    }
};

export default List;