const Drawer = {
    // * desenhar blocos
    drawBlock(index, data){
        let block = document.createElement("div")
        block.classList.add("card")

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
        document.querySelector('.container').appendChild(block)
}

    //* desenhar blockchain
    // conjunto de blocos ligados

}
// Drawer.drawBlock("1", "teste")

module.exports = Drawer