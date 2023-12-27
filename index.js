//Saida
console.log("Digite o nome do seu Herói")
//Variavel
let nickName  = ""
//concatenando mensagem fixa + variavel
console.log("Bem vindo Herói " + nickName)
//concatenando variavel + mensagem fixa
console.log(nickName + " herói entrou no servidor")
//variavel xp
let contador = 1
//
if(contador <= 1000){
    console.log("Ferro")
} else if(contador <= 2000){
    console.log("Bronze")
}else if(contador <= 5000){
    console.log("Prata")
}else if(contador <= 7000){
    console.log("Ouro")
}else if(contador <= 8000){
    console.log("Platina")
}else if(contador <=9000){
    console.log("Ascendente")
}else if(contador <= 10000){
    console.log("Imortal")
}else{
    console.log("Radiante")
}