import React from 'react';
import PropTypes from "prop-types"

import Block from './Block'

const List = ({ blockchain }) => {
    const chain = blockchain.chain
    return (
        <div className="d-flex flex-column align-items-center mt-4 mb-4">
            {
                chain.map((block, index) => 
                    <Block block={block} key={index} />
                )
            }
        </div>
    );
};

List.propTypes = {
    blockchain: PropTypes.object
}

List.defaultProps = {
    blockchain: { }
}


export default List;