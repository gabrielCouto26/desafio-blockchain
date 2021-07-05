import React from 'react';
import Card from 'react-bootstrap/Card';

import Seta from './Seta'

class Block extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let {index, difficulty, data, hash, timestamp} = this.props
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
                            {data}
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
    }
};

export default Block;