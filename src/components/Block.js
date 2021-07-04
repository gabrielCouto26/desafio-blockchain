import React from 'react';
import Card from 'react-bootstrap/Card';

import Block from '../models/Block'

const Block = () => {
    return (
        <Card>
            <div className="card-header">
                {/* block index */}
            </div>
            <p className="card-text">
                {/* block difficulty */}
            </p>
            <p className="card-text">
                {/* block data */}
            </p>
            <p className="card-text">
                {/* block hash */}
            </p>
            <small className="card-footer">
                {/* block timestamp */}
            </small>
        </Card>
    );
};

export default Block;