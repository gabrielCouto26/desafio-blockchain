import React from 'react'

import {Form as RForm} from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Form extends React.Component {
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
        this.props.onBlockchainChange({blockData: this.state.blockData, blockDifficulty: this.state.blockDifficulty})
    }

    render(){
        const blockData = this.state.blockData
        const blockDifficulty = this.state.blockDifficulty

        return (
            <RForm onSubmit={this.handleSubmit} className="position-fixed mt-4">
                <Form.Group>
                    <Form.Label>Add new block</Form.Label>
                    <Form.Control value={blockData} onChange={this.handleDataChange} type="text" placeholder="Block data" id="blockData"/>
                    <Form.Control value={blockDifficulty} onChange={this.handleDifficultyChange} type="number" placeholder="Block difficulty" id="blockDifficulty" />
                </Form.Group>
                <Button type="submit" variant="primary">Add</Button>
            </RForm>
        )
    }
}

export default Form;