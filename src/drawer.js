const Drawer = {

    drawBlock(newBlock){
        let block = document.createElement("div")
        block.classList.add("card")
        block.style.width = "18rem"
        block.style.margin = "2rem 0"

        let blockBody = document.createElement("div")
        blockBody.classList.add("card-body")

        let blockTitle = document.createElement('h5')
        blockTitle.classList.add('card-title')
        blockTitle.textContent = newBlock.index

        let blockText = document.createElement('p')
        blockText.classList.add('card-text')
        blockText.textContent = newBlock.data.toString()

        let blockDifficulty = document.createElement('p')
        blockDifficulty.classList.add('card-text')
        blockDifficulty.textContent = "Difficulty: " + newBlock.difficulty.toString()

        let blockDate = document.createElement('small')
        blockDate.classList.add('card-text')
        blockDate.textContent = newBlock.timestamp.toString()

        if(parseInt(newBlock.index, 10) > 1){
            let arrow = this.drawArrow()
            document.querySelector('.blockchain').appendChild(arrow)
        }

        blockBody.appendChild(blockTitle)
        blockBody.appendChild(blockText)
        blockBody.appendChild(blockDifficulty)
        blockBody.appendChild(blockDate)
        block.appendChild(blockBody)
        document.querySelector('.blockchain').appendChild(block)
    },

    drawBlockchain(blockchain){
        document.querySelector('.blockchain').innerHTML = ""
        for(let block of blockchain.chain){
            this.drawBlock(block)
        }
    },

    drawArrow(){
        let arrow = document.createElement('i')
        arrow.classList.add('rotate')
        arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>`
        return arrow
    }

}

module.exports = Drawer