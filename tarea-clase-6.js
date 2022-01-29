/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

//////////////// Botones //////////////

document.querySelector('#calcular-grupo-familiar').onclick = function(){
    
    const grupoFamiliar = document.querySelector('#grupo-familiar').value
    ingresarIntegrantes(grupoFamiliar)
    mostrarBotonCalcular(grupoFamiliar)
    
    
}

document.querySelector("#calcular").onclick = function (){
    
    const edadesObtenidas = recolectarEdades()    
    mostrarEdadMayor(edadesObtenidas)
    mostrarEdadMenor(edadesObtenidas)
    mostrarPromedio(edadesObtenidas)
}


document.querySelector('#reiniciar').onclick = function(){
    borrarIntegrantes()
    restaurar()
}

//////////////// Funciones //////////////


function ingresarIntegrantes(grupoFamiliar){
    for(let i = 1; i <= grupoFamiliar; i++){

        
   
        seleccionoDiv = document.querySelector('#integrantes-familia');

        crearDiv = document.createElement('div')

        crearDiv.className = 'familiares'
   
        nuevoLabel = document.createElement('label')

        nuevoLabel.className = 'edades-label'

        nuevoInput = document.createElement('input')

        nuevoInput.className = 'edades'
    
        nuevoInput.type = 'number'
   
        nuevoLabel.textContent = 'Edad del integrante Familiar'

        seleccionoDiv.appendChild(crearDiv)
   
        crearDiv.appendChild(nuevoLabel)
   
        crearDiv.appendChild(nuevoInput); 
   
        nuevoBr = document.createElement('br')

        nuevoBr.className = 'familiares'
   
        seleccionoDiv.appendChild(nuevoBr)

    }
}

function mostrarBotonCalcular (grupoFamiliar){
    if(grupoFamiliar > 0){
        document.querySelector('.ocultar').className = '';
    }
   else{
       restaurar()
   }
} 


function recolectarEdades(){

    const edadesFamiliares = document.querySelectorAll('.edades')
    const edadesFinal = []
        for(let i = 0 ; i < edadesFamiliares.length; i++){
            edadesFinal.push(Number(edadesFamiliares[i].value))
        }
       return edadesFinal
}

function mostrarEdadMayor(edadesObtenidas){

 edadMayorStrong = document.querySelector('#edad-mayor')
 document.querySelector('#resultados').className = ''
 edadMayorStrong.className = ''
 edadMayorStrong.textContent = numeroMayor(edadesObtenidas)

}

function mostrarEdadMenor(edadesObtenidas){

    edadMenorStrong = document.querySelector('#edad-menor')
    edadMenorStrong.className = ''

    edadMenorStrong.textContent = numeroMenor(edadesObtenidas)
}

function mostrarPromedio(edadesObtenidas){
    
    edadPromedioStrong = document.querySelector('#edad-promedio')
    edadPromedioStrong.className = ''
    edadPromedioStrong.textContent = promedio(edadesObtenidas)

}

function restaurar(){
    document.querySelector('#edad-mayor').className = 'ocultar'
    document.querySelector('#edad-menor').className = 'ocultar'
    document.querySelector('#edad-promedio').className = 'ocultar'
    document.querySelector('#calcular').className = 'ocultar'
}

function borrarIntegrantes(){
    const cantidadParaBorrar = document.querySelectorAll('.familiares')
    for(let i = 0; i < cantidadParaBorrar.length; i++){
        cantidadParaBorrar[i].remove()
    }

}


//////////////// Calculos //////////////




function numeroMayor(edadesObtenidas){

    let numeroMasAlto = edadesObtenidas[0];

    for(let i = 1; i < edadesObtenidas.length; i++){
    
        if(edadesObtenidas[i] > numeroMasAlto){
        numeroMasAlto = edadesObtenidas[i]

        }
    }
    return numeroMasAlto

}


function numeroMenor(edadesObtenidas){

    let numeroMasBajo = edadesObtenidas[0];

    for(let i = 1; i < edadesObtenidas.length; i++){
    
        if(edadesObtenidas[i] < numeroMasBajo){
        numeroMasBajo = edadesObtenidas[i]

        }
    }
    return numeroMasBajo

}


function promedio (edadesObtenidas){
    
  let promedio;

  for(let i = 0; i < edadesObtenidas.length; i++){

    promedio = edadesObtenidas[i];

   return edadesObtenidas.length / promedio 
  }
}


