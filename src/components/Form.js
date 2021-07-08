import React from 'react'
import PropTypes from 'prop-types'

import {Form as RForm} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Form = ({addBlock}) => {

    const [blockData, setBlockData] = React.useState('teste')
    const [blockDifficulty, setBlockDifficulty] = React.useState(2)

    return (
        <RForm className="position-fixed mt-4">
            <RForm.Group>
                <RForm.Label>Add new block</RForm.Label>
                <RForm.Control
                    value={blockData}
                    onChange={(e) => setBlockData(e.target.value)}
                    type="text"
                    placeholder="Block data"
                    id="blockData"
                />
                <RForm.Control
                    value={blockDifficulty}
                    onChange={(e) => setBlockDifficulty(e.target.value)}
                    type="number"
                    placeholder="Block difficulty"
                    id="blockDifficulty" 
                />
            </RForm.Group>
            <Button
                onClick={
                    () => addBlock({
                            blockData: blockData, 
                            blockDifficulty: blockDifficulty
                        })
                }
                variant="primary"
            >
                Add
            </Button>
        </RForm>
    )
};

Form.propTypes = {
    addBlock: PropTypes.func
}

Form.defaultProps = {
    addBlock: () => undefined
}

export default Form;