import React from 'react';
import Card from 'react-bootstrap/Card';

import Seta from './Seta'

class Block extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: props.block.index,
            difficulty: props.block.difficulty,
            data: props.block.block,
            hash: props.block.hash,
            timestamp: props.block.timestamp
        }
    }

    render(){
        return (
            <>
                { this.state.index > 1 
                    ? <Seta />
                    : ''
                }
                <Card className="text-center" style={{width: "20rem", margin: "2rem 0"}}>
                    <Card.Header>
                        {this.state.index}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <strong>Difficulty:</strong> {this.state.difficulty}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data}
                        </Card.Text>
                        <Card.Text>
                            <strong>Hash:</strong> {this.state.hash}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {this.state.timestamp}
                    </Card.Footer>
                </Card>
            </>
        );
    }
};

export default Block;