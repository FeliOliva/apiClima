let select = document.getElementById("miSelect");


let opciones = [
    { descripcion: "Seleccione una Ciudad" },
    { codigo: "ar.X5900", descripcion: "Villa Maria" },
    { codigo: "ar.V9410", descripcion: "Ushuaia" },
    { codigo: "ar.H3500", descripcion: "Resistencia" }
];

opciones.forEach((opcion, index) => {
    let opcionElement = document.createElement("option");
    opcionElement.value = index;
    opcionElement.text = opcion.descripcion;
    select.appendChild(opcionElement);
})

async function cargarClima() {
    let index = document.getElementById("miSelect").value;
    if (opciones[index].descripcion == "Seleccione una Ciudad") {
        alert("seleccione una opcion")
        location.reload();
    }
    let codigoPostal = opciones[index].codigo;
    let nombreCiudad = opciones[index].descripcion;
    console.log(nombreCiudad);
    await fetch(`http://api.weatherunlocked.com/api/current/${codigoPostal}?lang=es&app_id=b503d17c&app_key=8760b678063da865edc7488fa34a178e`)
        .then((response) => response.json())
        .then((data) => {
            let temperaturaActualC = data.temp_c;
            let icono = data.wx_icon;
            let descripcionClima = data.wx_desc;
            let latitud = data.lat;
            let longitud = data.lon;
            let sensacionTermicaC = data.feelslike_c;
            let velocidadVientoKmh = data.windspd_kmh;
            let humedadPorcentaje = data.humid_pct;
            let direccionViento = data.winddir_compass;
            let nuevaDireccionViento;
            //mostrar
            let nombreCiudadh4 = document.querySelector('.nombreCiudad');
            nombreCiudadh4.textContent = "Clima en " + nombreCiudad;
            let h4Temperatura = document.querySelector('.temperatura');
            h4Temperatura.textContent = temperaturaActualC + "°C";
            let urlIcono = "iconos/" + icono.slice(0, -3) + "png";
            let imagenClima = document.querySelector('.imagenClima');
            imagenClima.src = urlIcono;
            let valorDescripcionClima = document.getElementsByClassName('descripcionClima');
            let descripcionLatitud = document.getElementsByClassName('Latitud');
            let valorSensacionTermica = document.getElementsByClassName('valorSensacionTermica');
            let valorHumedad = document.getElementsByClassName('valorHumedad');
            let valorlongitud = document.getElementsByClassName('valorlongitud');
            let velocidadViento = document.getElementsByClassName('velocidadViento');
            let valordireccionViento = document.getElementsByClassName('valordireccionViento');
            let valorRedondeado = parseFloat(sensacionTermicaC).toFixed(0);
            for (var i = 0; i < valorDescripcionClima.length; i++) {
                var inputElement = valorDescripcionClima[i];
                inputElement.setAttribute('size', descripcionClima.length);
                inputElement.value = descripcionClima;
              }
            switch (direccionViento) {
                case "N":
                    nuevaDireccionViento = "Norte";
                    break;
                case "NNE":
                    nuevaDireccionViento = "Norte-Noreste";
                    break;
                case "NE":
                    nuevaDireccionViento = "Noreste";
                    break;
                case "ENE":
                    nuevaDireccionViento = "Este-Noreste";
                    break;
                case "E":
                    nuevaDireccionViento = "Este";
                    break;
                case "ESE":
                    nuevaDireccionViento = "Este-Sureste";
                    break;
                case "SE":
                    nuevaDireccionViento = "Sureste";
                    break;
                case "SSE":
                    nuevaDireccionViento = "Sur-Sureste";
                    break;
                case "S":
                    nuevaDireccionViento = "Sur";
                    break;
                case "SSW":
                    nuevaDireccionViento = "Sur-Suroeste";
                    break;
                case "SW":
                    nuevaDireccionViento = "Suroeste";
                    break;
                case "WSW":
                    nuevaDireccionViento = "Oeste-Suroeste";
                    break;
                case "W":
                    nuevaDireccionViento = "Oeste";
                    break;
                case "WNW":
                    nuevaDireccionViento = "Oeste-Noroeste";
                    break;
                case "NW":
                    nuevaDireccionViento = "Noroeste";
                    break;
                case "NNW":
                    nuevaDireccionViento = "Norte-Noroeste";
                    break;
                default:
                    break;
            }
            

            for (var i = 0; i < valorDescripcionClima.length; i++) {
                valorDescripcionClima[i].value = descripcionClima;
                descripcionLatitud[i].value = latitud + "º";
                valorSensacionTermica[i].value = valorRedondeado + "°C";
                valorHumedad[i].value = humedadPorcentaje + "%";
                valorlongitud[i].value = longitud + "º";
                velocidadViento[i].value = velocidadVientoKmh + "Km/h";
                valordireccionViento[i].value = nuevaDireccionViento;
            }



            console.log(valorRedondeado);
            console.log(codigoPostal);
            console.log("Temperatura Actual:", temperaturaActualC + "°C");
            console.log("Descripción del Clima:", descripcionClima);
            console.log("Latitud:", latitud);
            console.log("Longitud:", longitud);
            console.log("Sensación Térmica:", sensacionTermicaC + "°C");
            console.log("Velocidad del Viento:", velocidadVientoKmh + " km/h");
            console.log("Humedad:", humedadPorcentaje + "%");
            console.log("Dirección del Viento:", direccionViento);
        });

}
