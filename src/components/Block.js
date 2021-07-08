import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

import Seta from './Seta'

const Block = ({ block }) => {
    const { index, difficulty, data, hash, timestamp} = block
    return (
        <>
            { index > 1 
                ? <Seta />
                : ''
            }
            <Card className="text-center" style={{width: "20rem", margin: "2rem 0"}}>
                <Card.Header>
                    {index}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Difficulty:</strong> {difficulty}
                    </Card.Text>
                    <Card.Text>
                        <strong>Data:</strong> {data}
                    </Card.Text>
                    <Card.Text>
                        <strong>Hash:</strong> {hash}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {timestamp}
                </Card.Footer>
            </Card>
        </>
    );
};

Block.propTypes = {
    index: PropTypes.number,
    difficulty: PropTypes.number,
    data: PropTypes.string,
    hash: PropTypes.string,
    timestamp: PropTypes.string
}

Block.defaultProps = {
    index: 0 ,
    difficulty: 2,
    data: 'default',
    hash: 'default',
    timestamp: 'agora'
}

export default Block;