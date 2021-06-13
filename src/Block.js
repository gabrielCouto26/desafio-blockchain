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

module.exports = Block