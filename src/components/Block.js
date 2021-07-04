import React from 'react';
import Card from 'react-bootstrap/Card';

const Block = (block) => {
    return (
        <Card>
            <div className="card-header">
                {block.data.index}
            </div>
            <p className="card-text">
                {block.data.difficulty}
            </p>
            <p className="card-text">
                {block.data.data}
            </p>
            <p className="card-text">
                {block.data.hash}
            </p>
            <small className="card-footer">
                {block.data.timestamp}
            </small>
        </Card>
    );
};

export default Block;