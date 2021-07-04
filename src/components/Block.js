import React from 'react';
import Card from 'react-bootstrap/Card';

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
            <Card>
                <Card.Header>
                    {this.state.index}
                </Card.Header>
                <Card.Text>
                    Difficulty: {this.state.difficulty}
                </Card.Text>
                <Card.Text>
                    {this.state.data}
                </Card.Text>
                <Card.Text>
                    {this.state.hash}
                </Card.Text>
                <Card.Footer>
                    {this.state.timestamp}
                </Card.Footer>
            </Card>
        );
    }
};

export default Block;