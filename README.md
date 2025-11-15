# Dio-Crypto-Wallet

## Objetivo
Desenvolver um projeto que cria uma Carteira de Criptomoedas.

## Como Funciona na Prática
O usuária terá que rodar o programa em um terminal. Ao rodar, o programa vai criar os seguintes dados:
- ENDEREÇO - é a chave pública, que pode ser compartilhada (por exemplo, para fazer trasferências)
- CHAVE PRIVADA - é a chave secreta que dá acesso as   suas criptomoedas (Não pode ser compartilhada)
- SEED - é um senha que contêm palavras aleatórias

## Fazendo os Testes
Podemos ver quantos BTC testnet temos em um Explorador de Blocos. Quando colocar no Explorador, você verá que estará zerado, sem nada,
mas podemos comprar BTC testnet - é uma criptomoeda somente para testes, não tem valor -, para isso usaremos o nosso ENDEREÇO para comprá-los.

### Testes de Transferência 
No nosso programa, iremos rodá-lo novamente para criar mais uma conta, para podermos enviar as Criptos testnet para a outra conta. 
Para isso, iremos pegar o ENDEREÇO da outra conta, para fazer a transferência. Ao fazer, teremos que esperar a blockchain aprovar a nosso transferência.

## Usando o Electrum
No software Electrum, podemos ver tudo o que está acontecendo, se exite alguma transferência pendende, como também todas as transferências que já foram realizadas.

Para fazer os testes no Electrum, iremos mudar a propriedades dele, colocando no final --testnet, em seguir é só abri o software e criar uma nova carteira, só que 
iremos importar um endereço ou chave privada. Então, pegaremos a CHAVE PRIVADA e colocaremos no Electrum e, por fim, criaremos uma senha de acesso.

## Ferramentas e Linguagens de programação usadas
- Javascript
- Node.JS
- Electrum


