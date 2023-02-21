const maquina1 = document.getElementById("nombre")
const maquina2 = document.getElementById("edad")
const maquina3 = document.getElementById("fdn")
const maquina4 = document.getElementById("domicilio")
const maquina5 = document.getElementById("ocupacion")
const maquina6 = document.getElementById("experiencia1")
const maquina7 = document.getElementById("experiencia2")
const maquina8 = document.getElementById("habilidad1")
const maquina9 = document.getElementById("habilidad2")
const maquina10 = document.getElementById("habilidad3")
const maquina11 = document.getElementById("habilidad4")
const maquina12 = document.getElementById("habilidad5")
const maquina13 = document.getElementById("contacto1")
const maquina14 = document.getElementById("contacto2")

const maquinaEscribir1 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir1("Nombre: Tomas Aparicio",500,maquina1)

const maquinaEscribir2 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir2("Edad: 21 años",500,maquina2)

const maquinaEscribir3 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir3("Nacimiento: 25/07/2001",500,maquina3)

const maquinaEscribir4 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir4("Direccion: Valerio Furlan",500,maquina4)

const maquinaEscribir5 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir5("Ocupacion: Estudiante",500,maquina5)

const maquinaEscribir6 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir6("Parrillero",500,maquina6)

const maquinaEscribir7 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir7("Ayudante de cocina",500,maquina7)

const maquinaEscribir8 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir8("Responsable",500,maquina8 )

const maquinaEscribir9 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir9("Empatico",500,maquina9)

const maquinaEscribir10 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir10("Adaptable",500,maquina10)

const maquinaEscribir11 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir11("Ordenado",500,maquina11)

const maquinaEscribir12 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir12("Puntual",500,maquina12)

const maquinaEscribir13 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir13("2622695429",500,maquina13)

const maquinaEscribir14 = (text = " ", tiempo = 200, etiqueta = " " ) => {
    let arrayCaracteres = text.split(" ")
    etiqueta.innerHTML = " "
    let cont = 0
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++ 
        if (cont === arrayCaracteres.length){
            clearInterval(escribir) 
    }
}, tiempo)
}

maquinaEscribir14("apariciotomas82@gmail.com",500,maquina14)