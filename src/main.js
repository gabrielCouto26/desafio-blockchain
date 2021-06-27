const Block = require('./Block')
const Blockchain = require('./Blockchain')
const Drawer = require('./drawer')

let coutoCoin = new Blockchain()

coutoCoin.addBlock(new Block('Primeiro Bloco'))
coutoCoin.addBlock(new Block('Segundo Bloco'))
coutoCoin.addBlock(new Block('Terceiro Bloco'))
coutoCoin.addBlock(new Block('Quarto Bloco'))
coutoCoin.addBlock(new Block('Quinto Bloco'))
coutoCoin.addBlock(new Block('Sexto Bloco'))

// console.log(JSON.stringify(coutoCoin, null, 2))

Drawer.drawBlockchain(coutoCoin)

document.getElementById('btnAddBlock').addEventListener('click', function(e){
    e.preventDefault()
    let blockData = document.getElementById('blockData').value
    let blockDIfficulty = document.getElementById('blockDifficulty').value
    let block = new Block(blockData, blockDIfficulty)

    coutoCoin.addBlock(block)
    Drawer.drawBlockchain(coutoCoin)

    document.getElementById('blockData').value = ""
})

window.addEventListener('load', () => {
    document.getElementById('blockDifficulty').value = ""
    document.getElementById('blockData').value = ""
})