/////////////////////////Declaracion de variables////////////////


let info =[]
let infoFil=[]
////////////////////////////Funciones////////////////////////////
const informacion= () =>{


    let nombre = document.getElementById("idN").value.toLowerCase();
    let origin = document.getElementById("idO").value.toLowerCase();
    let destiny = document.getElementById("idD").value.toLowerCase();
    let people = document.getElementById("idNP").value.toLowerCase();
    let day = document.getElementById("idF").value.toLowerCase();
    

    let persona = {
        nombre : nombre,
        origen : origin,
        destino : destiny,
        personas : people,
        fecha : day
    }
    info.push(persona)
    console.log(info)
}

const filtrado= () => {
    let filtro = info.filter((filtr) => (filtr.destino == 'mallorca')|| (filtr.destino == 'galicia') || filtr.destino == 'canarias')
        
    
    // infoFil.push(filtro)
    console.log(infoFil)
    
    let imprimir ='';
    document.getElementById("imprimir_2").innerHTML=""
    for(let i = 0; i< filtro.length; i++){
       
        imprimir += `<div>${filtro[i].nombre}</div>
                        <div>${filtro[i].destino}</div>`
       
    }
    
    document.getElementById("imprimir_2").innerHTML = imprimir

   
    
}       


