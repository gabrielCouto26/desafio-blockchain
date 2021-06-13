const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this._calculateHash()
        this.nonce = 0
    }

    _calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce += 1
            this.hash = this._calculateHash()
        }
        console.log("Block mined: " + this.hash)
    }
}

class Blockchain{
    constructor(){
        this.chain = [this._createFirstBlock()]
        this.difficulty = 2
    }

    _createFirstBlock(){
        return new Block(0, '12/06/2021', 'Primeiro Bloco', '0')
    }

    _isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i - 1]

            if(currentBlock.hash !== currentBlock._calculateHash())
                return false // bloco foi alterado e sua hash mudou
            
            if(currentBlock.previousHash !== previousBlock.hash)
                return false // bloco nao aponta para bloco anterior
        }

        return true
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
    }

}

let coutoCoin = new Blockchain()

console.log('Bloco 1')
coutoCoin.addBlock(new Block(1, "13/06/2021", 'Segundo Bloco'))

console.log('Bloco 2')
coutoCoin.addBlock(new Block(2, "14/06/2021", 'Terceiro Bloco'))