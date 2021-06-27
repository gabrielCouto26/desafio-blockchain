const Block = require('./Block')
const Blockchain = require('./Blockchain')
const Drawer = require('./drawer')

let coutoCoin = new Blockchain()

// let block1 = new Block('Primeiro Bloco')
// let block2 = new Block('Segundo Bloco')
// coutoCoin.addBlock(block1)
// coutoCoin.addBlock(block2)

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