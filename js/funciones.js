/* Simulador:
1 - Dar bienvenida
2 - Elegir Avion
3 - Elegir destino
4 - Elegir tiempo
5 - Mostrar resumen
6 - Configuracion del avion
6 - Ir a volar
7 - Evaluar condiciones de hielo (Finalizar vuelo si el anit hielo no es true y si hay tormenta)
8 - Finalizar vuelo (Si las condiciones son buenas o si el anti hielo es true en tormenta/lluvia)
*/
 
let nombre;

let avion = {
    nombre: '',
    velocidad: 0,
    autonomia: 0
}
let planDeVuelo = []

function bienvenida() {
    let bienvenida = confirm("Bienvenido a FlightCoder! \n\nEste es un simulador de vuelo basico.\nLos pasos son los siguientes:\n1 - Ingresa tu nombre. \n2 - Elige un avion. \n3 - Elige un destino \n4 - Elige el clima. \n5 - Realiza tu vuelo. \n\nTen en cuenta que dependiendo la configuracion de tu avion si no tienes cuidado en algunas condiciones meteorologicas se pueden generar accidentes. \nRecuerda achicar un poco la consola para poder ver los datos. \n\nEstas listo?")
    if (bienvenida) {
        selectAvion()
    }
}

function selectAvion() {
    nombre = prompt("Cual es el nombre del piloto?")
    if (nombre == null || nombre == "") {
        alert("Debes ingresar tu nombre")
    } else {
        let continuar = true
        while (continuar) {
            let referencia = parseInt(prompt("Selecciona tu avion.\nPresiona el numero del avion que quieres utilizar:\n 1 - Cessna 182. \n 2 - Beechcraft Baron. \n 3 - Boeing 737"))
            if (referencia == 1 || referencia == 2 || referencia == 3) {
                switch (referencia) {
                    case 1:
                        avion.nombre = 'Cessna 182'
                        avion.velocidad = 150
                        //console.log(avion);
                        break
                    case 2:
                        avion.nombre = 'Beechcraft Baron'
                        avion.velocidad = 350
                        //console.log(avion);
                        break
                    case 3:
                        avion.nombre = 'Boeing 737'
                        avion.velocidad = 700
                        //console.log(avion);
                        break
                }
                let confirmacion = prompt("Has seleccionado " + avion.nombre + "? (si/no)").toLowerCase()
                //console.log(confirmacion);
                if (confirmacion == 'si') {
                    continuar = false
                    selectDestino()
                }
            } else {
                alert("Debes elegir uno de los aviones!")
                return
            }
        }
    }
}

function selectDestino() {
    let continuar = true
    while (continuar) {
        let referencia = parseInt(prompt("Estas despegando desde el aeropuerto de Ezeiza. Selecciona la ciudad de destino persionando el numero correspondiente a la ciudad:\n 1 - Montevideo, Uruguay. \n 2 - Cordoba, Argentina. \n 3 - Santiago, Chile"))
        if (referencia == 1 || referencia == 2 || referencia == 3) {
            switch (referencia) {
                case 1:
                    planDeVuelo.push('Montevideo, Uruguay')
                    break
                case 2:
                    planDeVuelo.push('Cordoba, Argentina')
                    break
                case 3:
                    planDeVuelo.push('Santiago, Chile')
                    break
            }
            let confirmacion = prompt("Has seleccionado " + planDeVuelo[0] + "? (si/no)").toLowerCase()
            if (confirmacion == 'si') {
                continuar = false
                //console.log(planDeVuelo)
                selectTiempo()
            }
        } else {
            alert("Debes elegir uno de los destinos!")
            return
        }
    }
}

function selectTiempo() {
    let continuar = true
    while (continuar) {
        let referencia = parseInt(prompt("Selecciona las condiciones meteorologicas: \n1 - Despejado \n2 - Lluvia \n3 - Tormenta"))
        if (referencia == 1 || referencia == 2 || referencia == 3) {
            switch (referencia) {
                case 1:
                    planDeVuelo.push('Despejado')
                    break
                case 2:
                    planDeVuelo.push('Lluvia')
                    break
                case 3:
                    planDeVuelo.push('Tormenta')
                    break
            }
            let confirmacion = prompt("Has seleccionado " + planDeVuelo[1] + "? (si/no)").toLowerCase()
            if (confirmacion == 'si') {
                continuar = false
                let resumen = confirm("Este es el resumen para tu vuelo:\n \n" + "Nombre del piloto: " + nombre + "\nAvion: " + avion.nombre + "\nVelocidad: " + avion.velocidad + " Km/h" + "\nDestino: " + planDeVuelo[0] + "\nClima: " + planDeVuelo[1] + "\n \nDeseas pasar al chequeo del avion?");
                if (resumen) {
                    planDeVuelo.push(nombre, avion.velocidad)
                    realizarVuelo(avion, planDeVuelo)
                }
            }
        } else {
            alert("Debes seleccionar una de las opciones de meteorologia")
            return
        }
    }
}

function realizarVuelo(avion, planDeVuelo) {
    let referencia
    let continuar = true;

    //Variables de configuracion del avion
    let configuraciones = []
    let navLuces = false
    let gps = false
    let antiHielo = false
    let radios = false
    alert("Ahora debes configurar el avion para el vuelo.")
    console.warn("Cuidado! Volar sin el anti hielo en condiciones de elevada humedad puede generar la formacion de hielo y resultar en accidentes!")
    while (continuar) {
        referencia = parseInt(prompt("Configuracion: \n 1 - para activar las luces de navegacion. \n 2 - Para activar el GPS. \n 3 - Para activar el anti hielo. \n 4 - Para activar las radios \n \n Presione 5 para despegar."))
        switch (referencia) {
            case 1:
                if (navLuces == false) {
                    navLuces = true
                    console.log("Las luces an sido encendidas ✅")
                } else {
                    navLuces = false
                    console.log("Las luces an sido apagadas 🔴")
                }
                break
            case 2:
                if (gps == false) {
                    gps = true
                    console.log("El GPS ha sido encendido ✅")
                } else {
                    gps = false
                    console.log("El GPS ha sido apagado 🔴")
                }
                break
            case 3:
                if (antiHielo == false) {
                    antiHielo = true
                    console.log("El antihielo ha sido encendido ✅")
                } else {
                    antiHielo = false
                    console.log("El antihielo ha sido apagado 🔴")
                }
                break
            case 4:
                if (radios == false) {
                    radios = true
                    console.log("Las radios han sido encendidas ✅")
                } else {
                    radios = false
                    console.log("Las radios han sido encendidas 🔴")
                }
                break
            default:
                continuar = false
                console.log("Chequeo listo.")
                break
        }

        let confirmacion = prompt("Persione ENTER para volver a la configuracion. \nDigite 'despegar' para despegar?").toLowerCase()
        if (confirmacion == "despegar") {
            //Este resumen aparece en la consola.
            console.log("Despegando \n \n")
            console.log("Tu avion: " + avion.nombre)
            console.log("Velocidad: " + avion.velocidad)
            console.log("Luces de navegacion: " + navLuces)
            console.log("GPS: " + gps)
            console.log("Anti Hielo: " + antiHielo)
            console.log("Radios: " + radios)
            console.log("--------------------")
            console.log("Destino: " + planDeVuelo[0])
            console.log("Clima: " + planDeVuelo[1])
            checkClimaEnVuelo(planDeVuelo, antiHielo)
        }
    }
}

function checkClimaEnVuelo(planDeVuelo, antiHielo) {
    if (antiHielo == false && (planDeVuelo.includes("Tormenta") || planDeVuelo.includes("Lluvia"))) {
        console.warn("Te has accidentado por no utilizar el anit hielo en condiciones de humedad.")
    } else {
        console.log("Has realizado tu vuelo correctamente. ✅")
    }
}

bienvenida()