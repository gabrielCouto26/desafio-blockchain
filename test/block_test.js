const Block = require('../src/Block')
const SHA256 = require('crypto-js/sha256')
const { expect } = require('chai')

describe('Block', function(){

    context('calculateHash', function(){
        
        it('expect criptography to work', function(){
            let block = new Block("13/06/2021", 'Primeiro Bloco')
            let hash = block._calculateHash()

            let previousHash = ''
            let nonce = 0
            let mockHash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + "13/06/2021").toString()
            
            expect(mockHash).to.be.eq(hash);
        })

        it('expect criptography not to work', function(){
            let block = new Block("13/06/2021", 'Primeiro Bloco')
            let hash = block._calculateHash()

            let previousHash = ''
            let nonce = 0
            let mockHash = SHA256(previousHash + nonce + JSON.stringify('Segundo Bloco') + "13/06/2021").toString()
            
            expect(mockHash).not.to.be.eq(hash);
        })

    })

    context('mineBlock', function(){

        it('expect mining to work', function(){
            let difficulty = 2
            let nonce = 0
            let previousHash = ''
            let hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + "13/06/2021").toString()

            while(hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
                nonce += 1
                hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + "13/06/2021").toString()
            }

            let block = new Block("13/06/2021", 'Primeiro Bloco')
            block.mineBlock(difficulty)

            expect(hash).to.be.eq(block.hash)

        })

    })

    it('expect mining not to work', function(){
        let wrongDifficulty = 3
        let difficulty = 2
        let nonce = 0
        let previousHash = 0
        let hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + "13/06/2021").toString()

        while(hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            nonce += 1
            hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + "13/06/2021").toString()
        }

        let block = new Block("13/06/2021", 'Primeiro Bloco')
        block.mineBlock(wrongDifficulty)

        expect(hash).not.to.be.eq(block.hash)

    })

})