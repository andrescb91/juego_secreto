/*
let numerosecreto=0;
let numeroIntentos=0;
let numeroSorteado=[];
let numeroMaximo=9;
let intentosMaximos=3;
let numeroAcertados=0;

parametrosIniciales();

function textoElementoHtml(elemento,texto){
    let elementoHtml=document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
}

function obtenerNumeroSecreto(){
       let numeroGenerado= Math.trunc((Math.random()*numeroMaximo)+1);
        console.log(numeroGenerado);
        console.log(numeroSorteado);
        console.log(`Intentos ${numeroIntentos}`);

       if(numeroSorteado.length==numeroMaximo){
            console.log("Se sortearon todos los numeros posibles");
            textoElementoHtml('p',`Se sortearon todos los numeros posibles, Acerteste en ${numeroAcertados} de ${numeroMaximo} numeros`);
            let butonReiniciar=document.getElementById('reiniciar');
            butonReiniciar.innerHTML='Nueva Partida';
            numeroIntentos=0;
            numeroSorteado.length=0;
            numeroAcertados=0;
            reiniciarIntentoJuego();
       }else{
            if(numeroSorteado.includes(numeroGenerado)){
                return obtenerNumeroSecreto();
            }else{
                numeroSorteado.push(numeroGenerado)
                return numeroGenerado;
            }
        }
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroIntentos==intentosMaximos){
        console.log("Se terminaron el numero de intentos, adivina un nuevo numero");
        textoElementoHtml('p','Se terminaron el numero de intentos, adivina un nuevo numero');
        reiniciarIntentoJuego();
        return
   }
    if(document.getElementById('valorUsuario').value==''){
        alert("Entrada vacia");
        numeroIntentos++;
        return;
    }
    if(numeroUsuario<1 || numeroUsuario>numeroMaximo){
        alert("Numero Fuera de Rango")
        numeroIntentos++;
        clearInput();
        return;
    }
    if(numerosecreto===numeroUsuario){
        textoElementoHtml('p',`Felicitaciones, Acertaste en ${numeroIntentos} ${numeroIntentos==1?"intento":"intentos"}`);
        //Cuenta los numeros acertados
        numeroAcertados++;
        reiniciarIntentoJuego();
    }else{
        if(numeroUsuario>numerosecreto){
            textoElementoHtml('p','Numero Secreto es Menor');
        }else{
            textoElementoHtml('p','Numero Secreto es Mayor');
        } 
        numeroIntentos++;
        clearInput();
    }
}
function clearInput(){
    //Limpiar input
    let inputUser=document.querySelector('#valorUsuario');
    //limpiar input
    inputUser.value='';
    //Colocar el cursor en el input
    inputUser.focus();
}

function reiniciarJuego(){
    
        //bloquea boton reinicar juego
        setAtributosElementosHtmlbyId('reiniciar','disabled');
        //Desbloquea boton Intento
        removerAtributosElementosHtmlbyId('numeroUsuario','disabled')
        //Desbloquea Input
        removerAtributosElementosHtmlbyId('valorUsuario','disabled')
        //Parametro Inicales: Numero secreto
        parametrosIniciales()
        clearInput(); 
    
}

function parametrosIniciales(){
    //Cambiamos titulo
    textoElementoHtml('h1','Juego de Numero Secreto');
    //Cambiamos
    textoElementoHtml('p',`Escriba un numero de 1 al ${numeroMaximo}, tienes tres intentos por cada numero`);
    let butonReiniciar=document.getElementById('reiniciar');
    butonReiniciar.innerHTML='Nuevo Numero';
    //Reinicar intentos
    numeroIntentos=1;
     //Se obtiene nuevo numero Secreto
    numerosecreto=obtenerNumeroSecreto();
}

function removerAtributosElementosHtmlbyId(elemento,atributo){
    document.getElementById(elemento).removeAttribute(atributo);
}
function setAtributosElementosHtmlbyId(elemento,atributo){
    document.getElementById(elemento).setAttribute(atributo,true);
}

function reiniciarIntentoJuego(){
    //Desbloquea boton reinicar juego
    removerAtributosElementosHtmlbyId('reiniciar','disabled')
    //Bloque elemento HTML Input
    setAtributosElementosHtmlbyId('valorUsuario','disabled')
    //Bloquea botn Intento
    setAtributosElementosHtmlbyId('numeroUsuario','disabled')
}
    

//1
let listaGenerica=[];

//2
let lenguagesDeProgramacion =['JavaScript','C','C++','Kotlin','Python'];
console.log(lenguagesDeProgramacion)

//3
lenguagesDeProgramacion.push('Java','Ruby','Python');


//4
function mostrarLenguaje(listaLenguajes){
    console.log(listaLenguajes);
}
mostrarLenguaje(lenguagesDeProgramacion)



//6
let posicionLista=0;
let sumaNumeros=0;
let numeroUsuario=[4,2,3];
function calculoPromedioLista(listaNUmeros){
    if(posicionLista<listaNUmeros.length){
        sumaNumeros+=numeroUsuario[posicionLista];
        posicionLista++;
        return calculoPromedioLista(listaNUmeros);
    }
    console.log(`El promedio de ${listaNUmeros} es ${sumaNumeros/listaNUmeros.length} `)
}
calculoPromedioLista(numeroUsuario);

//7
Solucion 1
let posicionLista=0;
let numeroUsuario=[4,2,3,8,7,2,8,9];
let numeroMayor=numeroUsuario[0];
let numeroMenor=numeroUsuario[0];
function mostrarNumeroMayorMenor(listaNUmeros){
    if(posicionLista<listaNUmeros.length){
        if(listaNUmeros[posicionLista]>numeroMayor){
            numeroMayor=listaNUmeros[posicionLista];
        }
        if(listaNUmeros[posicionLista]<numeroMenor){
            numeroMenor=numeroMayor=listaNUmeros[posicionLista];
        }
        posicionLista++;
        return mostrarNumeroMayorMenor(listaNUmeros);
    }
    console.log(`De la lista ${numeroUsuario}, el mayor es ${numeroMayor} y el numero menor es ${numeroMenor}`)
}
mostrarNumeroMayorMenor(numeroUsuario);

Solucion 1
let numeroUsuario=[4,2,3,8,7,2,8,9];
function mostrarNumeroMayorMenor(listaNUmeros){
    console.log(`Lista: ${listaNUmeros}`)
    console.log(`Numero Maximo ${Math.max(...listaNUmeros)}`);
    console.log(`Numero Maximo ${Math.min(...listaNUmeros)}`);
}
mostrarNumeroMayorMenor(numeroUsuario);


//8
let posicionLista=0;
let sumaNumeros=0;
let numeroUsuario=[4,2,3];
function sumaLista(listaNUmeros){
    if(posicionLista<listaNUmeros.length){
        sumaNumeros+=numeroUsuario[posicionLista];
        posicionLista++;
        return sumaLista(listaNUmeros);
    }
    console.log(`La Suma de ${listaNUmeros} es ${sumaNumeros} `)
}
sumaLista(numeroUsuario);

//9

let posicionLista=0;
let sumaNumeros=0;
let numeroUsuario=[4,2,3,1,7,8];
function buscarNumero(numeroBuscar){
    if(posicionLista<numeroUsuario.length){
        if(numeroBuscar==numeroUsuario[posicionLista]){
            return posicionLista;
        }else{
            posicionLista++;
            return buscarNumero(numeroBuscar);
        } 
    }
}
console.log(buscarNumero(7));

//10
let posicionLista=0;
let listaSuma=[];

function sumaListas(listaUno, listaDos){
    if(posicionLista<listOne.length){
        listaSuma.push(listaUno[posicionLista]+listaDos[posicionLista]);
        posicionLista++;
        return sumaListas(listaUno, listaDos)
    }
    return listaSuma
}

let listOne=[1,2,3,4];
let listaTwo=[4,3,2,1];

console.log(sumaListas(listOne,listaTwo));

//11

let posicionLista=0;
let listaCuadrado=[];

function numeroCuadrado(listaUno){
    if(posicionLista<listOne.length){
        listaCuadrado.push(listaUno[posicionLista]*listaUno[posicionLista]);
        posicionLista++;
        return numeroCuadrado(listaUno)
    }
    return listaCuadrado
}

let listOne=[1,2,3,4];

console.log(numeroCuadrado(listOne));
*/