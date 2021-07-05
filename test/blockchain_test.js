const Blockchain = require('../src/models/Blockchain')
const Block = require('../src/models/Block')
const { expect } = require('chai')

describe('Blockchain', function(){
    let blockchain = new Blockchain()
    let block;
    let block2;

    before(function(){
        block = new Block("13/06/2021", 'Primeiro Bloco')
        block2 = new Block("14/06/2021", 'Segundo Bloco')

        blockchain.addBlock(block)
        blockchain.addBlock(block2)
    })

    context('properties', function(){

        it('expect blockchain to have chain', function(){
            expect(blockchain).to.haveOwnProperty('chain')
        })

        it('expect blockchain to initialize empty chain', function(){
            let newBlockchain = new Blockchain()
            expect(newBlockchain.chain.length).to.be.eq(0)
        })

        it('expect blockchain to have difficulty', function(){
            expect(blockchain).to.haveOwnProperty('difficulty')
        })

    })

    context('addBlock', function(){

        it('expect to add first block', function(){
            let newBlockchain = new Blockchain()
            
            newBlockchain.addBlock(block)

            expect(newBlockchain.chain).to.have.members([block])
        })

        it('expect to add more blocks', function(){
            expect(blockchain.chain).to.have.members([block, block2])
        })
    })

    context('getLatestBlock', function(){

        it('expect to get latest block', function(){
            let latestBlock = blockchain.getLatestBlock()

            expect(latestBlock).to.be.eq(block2)
        })

        it('expect not to get latest block', function(){
            let latestBlock = blockchain.getLatestBlock()

            expect(latestBlock).not.to.be.eq(block)
        })

    })

    context('isChainValid', function(){

        it('expect chain to be valid', function(){
            let chainValida = true

            for(let i = 1; i < blockchain.chain.length; i++){
                const currentBlock = blockchain.chain[i]
                const previousBlock = blockchain.chain[i - 1]
    
                if(currentBlock.hash !== currentBlock._calculateHash())
                    chainValida = false // bloco foi alterado e sua hash mudou
                
                if(currentBlock.previousHash !== previousBlock.hash)
                    chainValida = false // bloco nao aponta para bloco anterior
            }

            expect(blockchain._isChainValid()).to.be.eq(chainValida)
        })

        it('expect chain not to be valid', function(){
            block2.previousHash = ''

            expect(blockchain._isChainValid()).not.to.be.eq(true)
        })

    })

})