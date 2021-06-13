const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(timestamp, data){
        this.index = null
        this.timestamp = timestamp
        this.data = data
        this.previousHash = ''
        this.hash = this._calculateHash()
        this.nonce = 0
    }

    _calculateHash(){
        return SHA256(this.previousHash  + this.nonce + JSON.stringify(this.data) + this.timestamp).toString()
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce += 1
            this.hash = this._calculateHash()
        }
    }
}

class Blockchain{
    constructor(){
        this.chain = []
        this.difficulty = 2
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
        if(!this.chain.length){
            newBlock.index = 1
            newBlock.previousHash = 0
        } else {
            newBlock.index = this.chain.length + 1
            newBlock.previousHash = this.getLatestBlock().hash
        }
        
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
    }

}

let coutoCoin = new Blockchain()
coutoCoin.addBlock(new Block("13/06/2021", 'Primeiro Bloco'))
coutoCoin.addBlock(new Block("14/06/2021", 'Segundo Bloco'))
coutoCoin.addBlock(new Block("15/06/2021", 'Terceiro Bloco'))

console.log(JSON.stringify(coutoCoin, null, 2))