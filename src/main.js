const Block = require('./Block')
const Blockchain = require('./Blockchain')

let coutoCoin = new Blockchain()
coutoCoin.addBlock(new Block("13/06/2021", 'Primeiro Bloco'))
coutoCoin.addBlock(new Block("14/06/2021", 'Segundo Bloco'))
coutoCoin.addBlock(new Block("15/06/2021", 'Terceiro Bloco'))

console.log(JSON.stringify(coutoCoin, null, 2))