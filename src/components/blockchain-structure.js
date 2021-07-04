import React from 'react';

const BlockchainStructure = ({blockchain = []}) => {
    return(
        <div className="blockchain d-flex flex-column align-items-center mt-4" >
            {blockchain.map((value,index) => {
                return(
                    <>
                        <div key = {index} className="card mt-5" style={{ width: "30%"}}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {index > 0 ? "Block " + index : "Generator block"}
                                </h5>
                                <p className="card-text">
                                    <div className="card">
                                        <div className="card-body mb-2">
                                            <h6>Hash</h6> {value.hash /*.substring(0,20)*/}
                                        </div>
                                    </div>
                                </p>
                                <p className="card-text">
                                    <h6>Data</h6>{value.data}
                                </p>
                                <p className="card-text">
                                    <h6>Difficulty</h6> {value.difficulty}
                                </p>
                                <p className="card-text">
                                    <h6>Previous Hash</h6> {value.previousHash !== '' ? value.previousHash : 'None'}
                                </p>
                                <small className="card-text">
                                    {value.timestamp}
                                </small>
                            </div>
                        </div>
                        {
                            index !== blockchain.length -1 ? (
                                <i className="rotate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </i>
                            ) : ''
                        }
                    </>
                )
            })}
        </div>
    )
}

export default BlockchainStructure;