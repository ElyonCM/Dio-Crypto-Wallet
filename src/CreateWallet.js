// Importando as dependências
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

/*
    Definindo a rede
    -> bitcoin é a rede principal (mainnet)
    -> testnet é a rede de testes (testnet)
*/
const network = bitcoin.networks.testnet

/* 
    Derivação de carteira HD
    -> Quando está 1 é testnet
    -> Quando está 0 é mainnet
*/
const path = `m/49'/1'/0'/0` 

// Criando os mnemônicos para a seed - Palavras aleatórias (Senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

/*
    Criar a raiz da carteira deteminística 
    -> Vai gerar a partir da seed e ir para uma determinada rede
*/
let root = bip32.fromSeed(seed,network)

// Criando uma conta - par pvt-pub keys
let account = root.derivePath(path)

// Gera um nó apartir de uma raiz, derivando outras contas
let node = account.derive(0).derive(0)

// Gerando um endereço 
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF()) // Formata a chave (importar para um software de gerenciamento de carteira)
console.log("Seed: ", mnemonic)