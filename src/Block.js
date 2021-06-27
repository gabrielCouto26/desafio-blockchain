const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data, difficulty = 2){
        this.index = null
        this.timestamp = this._actualDate()
        this.data = data
        this.previousHash = ''
        this.hash = this._calculateHash()
        this.difficulty = difficulty
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

    _actualDate(){
        let newDate = new Date();
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        let actualDateString = `${day}/${month}/${year}`
        return actualDateString
    }
}

module.exports = Block