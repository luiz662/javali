var btnMais = document.querySelector("#mais")
/* console.log (btnMais) */
var btnMenos = document.querySelector("#menos")

var res = document.querySelector ("#res")

var contador = 0 

function incremento(){

/* alert("teste") */
contador ++
/* console.log(contador) */

res.innerText = contador
limiter
}

btnMais.addEventListener("click", incremento)

function decremento ()
{
contador -- 
/* console.log (contador) */

res.innerText = contador
limiter
}
btnMenos.addEventListener("click", decremento)

function limiter  (){

if( contador ==0 )
   
{btnMenos.setAttribute ("disabled"," ")}else{btnMenos.removeAttribute("disabled", "")}
    

   
}

limiter()