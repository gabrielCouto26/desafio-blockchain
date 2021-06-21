const Block = require('./Block')
const Blockchain = require('./Blockchain')
const Drawer = require('./drawer')

let coutoCoin = new Blockchain()
let block1 = new Block("13/06/2021", 'Primeiro Bloco')
let block2 = new Block("14/06/2021", 'Segundo Bloco')

coutoCoin.addBlock(block1)
coutoCoin.addBlock(block2)

// console.log(JSON.stringify(coutoCoin, null, 2))

Drawer.drawBlockchain(coutoCoin)

document.getElementById('btnAddBlock').addEventListener('click', function(e){
    e.preventDefault()
    let blockData = document.getElementById('blockData').value
    let block = new Block("20/06/2021", blockData)

    coutoCoin.addBlock(block)

    Drawer.drawBlockchain(coutoCoin)
})