var peso = "100";
if ("peso">="100"){

     console.log("Peso da peça valido")
} else console.log ("Peso da peça invalido")

var ListadePecas = ["Pistao" + ' ', "Suspensão" + ' ', "Carretel" + ' ', "Garra" +' ']
console.log (ListadePecas)

if(ListadePecas.length <="10") {
   console.log ("Cadastro de Peças pode ser efetuado")
}

for (var i=0; i < ListadePecas.length; i++){
    var PecaAtual = ListadePecas[i];
    if(PecaAtual.length <"5") {
        console.log(PecaAtual + "Esta peça possui o nome inferior a 4 caracteres")
        
    } else {
        console.log (PecaAtual + "Peça cadastrada com sucesso")
    }
    
}
