//*! PRÁTICA DE EXERCÍCIO - 001

// const nome = prompt("Qual é o seu nome?")

// const cor = prompt("Fale uma cor")

// const citação = prompt("Qual é sua citação favorita?")

// const mensagem1 = `A cor favorita de ${nome} é ${cor} e, sua citação favorita é "${citação}"`

// const mensagem2 = `Nome: ${nome}\nCor favorita: ${cor}`

// console.log(mensagem1)

// console.log(mensagem2)

//*Métodos e Propriedades - toUpperCase, includes e length

//*Propriedas mostram as informações do objeto, como por exemplo

//*utilizar o .length que irá informar quantas letras o objeto tem

//*Métodos realiza ações com os objetos, como aumentar os caracteres

//*remover os espaços, diminuir as letras e etc.

// console.log(`Seu nome em letras maiúsculas fica: ${nome.toUpperCase()}`)

// console.log(`O nome de ${nome} possui: ${nome.length} letras.`)

// console.log(`O nome ${nome} possui a letra "a"? ${nome.includes("a")}`);

//*! EXERCÍCIO DE FIXAÇÃO - 001

//* Parte 1

const nomeUsuario = prompt("Qual é o seu nome?")

const emailUsuario = prompt("Digite seu email:")

const imprimirM1 = `O email ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}!`

//* Parte 2

const imprimirM2 = `\nSeu nome possui: ${nomeUsuario.length} letras!`

//* Parte 3

const imprimirM3 = `\nSe substituirmos todos os R por L no seu nome ele ficará: ${nomeUsuario.replaceAll("r" , "l")}`

const imprimirM4 = `\nSeu email possui "@"?: ${emailUsuario.includes("@")}`

console.log(imprimirM1 , imprimirM2, imprimirM3, imprimirM4)

//*! EXEMPLO ADICIONAL

const fraseExemplo = `O rato roeu a roupa do rei de roma`

const trocandoLetras = `\nSe trocarmos os r por l na seguinte frase: "O rato roeu a roupa do rei de roma, ela ficará: ${fraseExemplo.replaceAll("r" , "l")}`

console.log(trocandoLetras)