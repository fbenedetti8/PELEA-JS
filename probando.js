const kirito = document.querySelector("#vidaK");
const asuna = document.querySelector("#vidaA");
const sawada = document.querySelector("#vidaS");
const gokudera = document.querySelector("#vidaG");

const kiritoC = document.querySelector(".imagenK");
const asunaC = document.querySelector(".imagenA");
const sawadaC = document.querySelector(".imagenS");
const gokuderaC = document.querySelector(".imagenG");

//array de vida y ataque
let kiritoStats = [100,0]
let asunaStats = [100,0]
let sawadaStats = [100,0]
let gokuderaStats = [100,0]


//agregamos texto
kirito.innerText = kiritoStats[0];
asuna.innerText = asunaStats[0];
sawada.innerText = sawadaStats[0];
gokudera.innerText = gokuderaStats[0]


 //Eventos:
kiritoC.onclick = function kiritoF(){
	click(kiritoC,asunaC);
	aleatorio(kiritoStats)
	pelea(sawadaStats,kiritoStats,sawada)	
}
asunaC.onclick = function asunaF(){
	click(asunaC,kiritoC);
	aleatorio1(asunaStats)
	pelea(gokuderaStats,asunaStats,gokudera)	
} 
sawadaC.onclick = function sawadaF(){
	click(sawadaC,gokuderaC);
	aleatorio(sawadaStats);
	pelea(kiritoStats,sawadaStats,kirito);	
} 
gokuderaC.onclick = function gokuderaF(){
	click(gokuderaC,sawadaC);
	aleatorio1(gokuderaStats)
	pelea(asunaStats,gokuderaStats,asuna) 	
}



//tira numero aletorio para pegar
function aleatorio(e) {
	return e[1] = Math.floor(Math.random() * 31);	
}
function aleatorio1(e) {
    return e[1] = Math.floor(Math.random() * 11);	
}

// agrega o quita clases 
function click(a,b){
	if (!a.classList.contains("disminuir")) {
		a.classList.toggle("rojo")
		b.classList.toggle("disminuir")
	}			
}

function pelea(vida,ataque,elemento){
	vida[0] -= ataque[1]
	elemento.innerText = vida[0]
	if (vida[0] <= 0){
    kiritoC.onclick = null
   	sawadaC.onclick = null		
	}
}


	   