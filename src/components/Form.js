import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Block from '../models/Block'

class FormComponenet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blockData: 'teste',
            blockDifficulty: 2
        }

        this.handleDataChange = this.handleDataChange.bind(this)
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDataChange = (e) =>{
        this.setState({blockData: e.target.value})
    }

    handleDifficultyChange = (e) =>{
        this.setState({blockDifficulty: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        
        let block = new Block(this.state.blockData, this.state.blockDifficulty)
        this.props.blockchain.addBlock(block)
        this.props.onBlockchainChange(this.props.blockchain)
    }

    render(){
        const blockData = this.state.blockData
        const blockDifficulty = this.state.blockDifficulty

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Add new block</Form.Label>
                    <Form.Control value={blockData} onChange={this.handleDataChange} type="text" placeholder="Block data" id="blockData"/>
                    <Form.Control value={blockDifficulty} onChange={this.handleDifficultyChange} type="number" placeholder="Block difficulty" id="blockDifficulty" />
                </Form.Group>
                <Button type="submit" variant="primary">Add</Button>
            </Form>
        )
    }
}

export default FormComponenet;