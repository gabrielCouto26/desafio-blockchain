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

module.exports = Blockchain