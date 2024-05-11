//Desafio Classificador de nível de Herói

let heroi = [["Lucas", "9600"],["Ian", "500"],["Maria", "15000"]]



for(let i = 0; i<heroi.length; i++){
    if(heroi[i][1] < 1000){
        console.log("O heroí "+ heroi[i][0] ,"está no rank Ferro")
    }
    else if(heroi[i][1]>=1001 && heroi[i][1]<2000){
        console.log("O heroí "+ heroi[i][0] ,"está no rank Bronze")
    }
    else if(heroi[i][1]>=2001 && heroi[i][1]<5000){
        console.log("O heroí "+ heroi[i][0] ,"está no rank Prata")
    }
    else if(heroi[i][1]>=5001 && heroi[i][1]<8000){
        console.log("O heroí "+ heroi[i][0] ,"está no rank Platina")
    }
    else if(heroi[i][1]>=8001 && heroi[i][1]<9000){
        console.log("O heroí "+ heroi[i][0] ,"está no rank Ascedente")
    }
    else if(heroi[i][1]>=9001 && heroi[i][1]<10000){
        console.log("O heroí "+ heroi[i][0] ,"está no rank Imortal")
    }
    else{
        console.log("O heroí "+ heroi[i][0] ,"está no rank Radiante")
    }
    
}       
