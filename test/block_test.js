const Block = require('../src/Block')
const SHA256 = require('crypto-js/sha256')
const { expect } = require('chai')

describe('Block', function(){
    let block;
    let actualDate;
    
    before(function(){
        block = new Block('Primeiro Bloco')

        let newDate = new Date();
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        let hour = newDate.getHours()
        let min = newDate.getMinutes()

        actualDate = `${day}/${month}/${year} - ${hour}:${min}`
    })

    context('properties', function(){

        it('expect block to have index', function(){
            expect(block).to.haveOwnProperty('index')
        })

        it('expect block to have timestamp', function(){
            expect(block).to.haveOwnProperty('timestamp')
        })

        it('expect block to have data', function(){
            expect(block).to.haveOwnProperty('data')
        })

        it('expect block to have previousHash', function(){
            expect(block).to.haveOwnProperty('previousHash')
        })

        it('expect block to have hash', function(){
            expect(block).to.haveOwnProperty('hash')
        })

        it('expect block to have nonce', function(){
            expect(block).to.haveOwnProperty('nonce')
        })
    })


    context('calculateHash', function(){
        
        it('expect criptography to work', function(){
            let hash = block._calculateHash()

            let previousHash = ''
            let nonce = 0
            let mockHash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + actualDate).toString()
            
            expect(mockHash).to.be.eq(hash);
        })

        it('expect criptography not to work', function(){
            let hash = block._calculateHash()

            let previousHash = ''
            let nonce = 0
            let mockHash = SHA256(previousHash + nonce + JSON.stringify('Segundo Bloco') + actualDate).toString()
            
            expect(mockHash).not.to.be.eq(hash);
        })

    })

    context('mineBlock', function(){

        it('expect mining to work', function(){
            let difficulty = 2
            let nonce = 0
            let previousHash = ''
            let hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + actualDate).toString()

            while(hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
                nonce += 1
                hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + actualDate).toString()
            }

            block.mineBlock(difficulty)

            expect(hash).to.be.eq(block.hash)

        })

        it('expect mining not to work', function(){
            let wrongDifficulty = 3
            let difficulty = 2
            let nonce = 0
            let previousHash = 0
            let hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + actualDate).toString()
    
            while(hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
                nonce += 1
                hash = SHA256(previousHash + nonce + JSON.stringify('Primeiro Bloco') + actualDate).toString()
            }
    
            block.mineBlock(wrongDifficulty)
    
            expect(hash).not.to.be.eq(block.hash)
    
        })

    })

})