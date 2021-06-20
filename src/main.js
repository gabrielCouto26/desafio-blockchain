const Block = require('./Block')
const Blockchain = require('./Blockchain')
const Drawer = require('./drawer')

let coutoCoin = new Blockchain()
let block1 = new Block("13/06/2021", 'Primeiro Bloco')
let block2 = new Block("14/06/2021", 'Segundo Bloco')
let block3 = new Block("15/06/2021", 'Terceiro Bloco')

coutoCoin.addBlock(block1)
coutoCoin.addBlock(block2)
coutoCoin.addBlock(block3)

console.log(JSON.stringify(coutoCoin, null, 2))

// desenhar

// Drawer.drawBlock(block1.index, block1.data)
Drawer.drawBlockchain(coutoCoin)