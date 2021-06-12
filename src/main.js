const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this._calculateHash()
    }

    _calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
    }
}

class Blockchain{
    constructor(){
        this.chain = [this._createFirstBlock()]
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
        newBlock.hash = newBlock._calculateHash()
        this.chain.push(newBlock)
    }

}

let coutoCoin = new Blockchain()
coutoCoin.addBlock(new Block(1, "13/06/2021", 'Segundo Bloco'))
coutoCoin.addBlock(new Block(2, "14/06/2021", 'Terceiro Bloco'))

console.log('Is blockchain valid? ' + coutoCoin._isChainValid())

// console.log(JSON.stringify(coutoCoin, null, 4))