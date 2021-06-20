const Drawer = {

    drawBlock(index, data){
        let block = document.createElement("div")
        block.classList.add("card")
        block.style.width = "18rem"

        let blockBody = document.createElement("div")
        blockBody.classList.add("card-body")

        let blockTitle = document.createElement('h5')
        blockTitle.classList.add('card-title')
        blockTitle.textContent = index

        let blockText = document.createElement('p')
        blockText.classList.add('card-text')
        blockText.textContent = data.toString()

        blockBody.appendChild(blockTitle)
        blockBody.appendChild(blockText)
        block.appendChild(blockBody)
        document.querySelector('.blockchain').appendChild(block)
    },

    drawBlockchain(blockchain){
        for(let block of blockchain.chain){
            this.drawBlock(block.index, block.data)
        }
    }

}
// Drawer.drawBlock("1", "teste")

module.exports = Drawer