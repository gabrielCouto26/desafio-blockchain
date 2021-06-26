const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data, blockDifficulty = 0){
        this.index = null
        this.timestamp = this._actualDateAndTime()
        this.data = data
        this.previousHash = ''
        this.hash = this._calculateHash()
        this.nonce = 0
        this.blockDifficulty = blockDifficulty
    }

    _calculateHash(){
        return SHA256(this.previousHash  + this.nonce + JSON.stringify(this.data) + this.timestamp).toString()
    }

    mineBlock(difficulty){
        difficulty = this.blockDifficulty ? this.blockDifficulty : difficulty
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce += 1
            this.hash = this._calculateHash()
        }
    }

    _actualDateAndTime(){
        let newDate = new Date();
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        let hour = newDate.getHours()
        let min = newDate.getMinutes()

        return `${day}/${month}/${year} - ${hour}:${min}`
    }
}

module.exports = Block