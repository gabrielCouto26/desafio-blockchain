import React from 'react'
import PropTypes from 'prop-types'

import {Form as RForm} from 'react-bootstrap'
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
    }

    handleDataChange = (e) =>{
        this.setState({blockData: e.target.value})
    }

    handleDifficultyChange = (e) =>{
        this.setState({blockDifficulty: e.target.value})
    }

    render(){
        const blockData = this.state.blockData
        const blockDifficulty = this.state.blockDifficulty

        return (
            <RForm className="position-fixed mt-4">
                <RForm.Group>
                    <RForm.Label>Add new block</RForm.Label>
                    <RForm.Control
                        value={blockData}
                        onChange={this.handleDataChange}
                        type="text"
                        placeholder="Block data"
                        id="blockData"
                    />
                    <RForm.Control
                        value={blockDifficulty}
                        onChange={this.handleDifficultyChange}
                        type="number"
                        placeholder="Block difficulty"
                        id="blockDifficulty" 
                    />
                </RForm.Group>
                <Button
                    onClick={() => this.props.addBlock({blockData: blockData, blockDifficulty: blockDifficulty})}
                    variant="primary"
                >
                    Add
                </Button>
            </RForm>
        )
    }
};

Form.propTypes = {
    addBlock: PropTypes.func
}

Form.defaultProps = {
    addBlock: () => undefined
}

export default Form;