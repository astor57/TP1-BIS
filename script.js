document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("NOTAS");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let notaMate = parseFloat(document.getElementById("Matematica").value);
        let errorMate = document.getElementById("errorMatematica");

        let notaLengua = parseFloat(document.getElementById("Lengua").value);
        let errorLen = document.getElementById("errorLengua");

        let notaEFSI = parseFloat(document.getElementById("EFSI").value);
        let errorEF = document.getElementById("errorEFSI");

        let promedios;
        let respuestaPromedio = document.getElementById("promedio");
        let mejorNota;

        // Validar nota Matematica

        function validarNotaMatematica() {
                if (notaMate<1 || notaMate>10) 
            {
                errorMate.innerHTML = "La nota debe ser entre 1 y 10";
                notaMate.style.color= "red";
            } else {
                errorNombre.innerHTML = "";
                notaMate.style.color= "green";
            }
          }

        // Validar nota Lengua
        function validarNotaLengua(){
            if (notaLengua<1 || notaLengua>10) 
            {
                errorLen.innerHTML = "La nota debe ser entre 1 y 10";
                notaLengua.style.color= "red";
            } else {
                errorNombre.innerHTML = "";
                notaLengua.style.color= "green";
            }
        }

        // Validar nota EFSI
        function validarNotaEFSI(){
            if (notaEFSI<1 || notaEFSI>10) 
            {
                errorEF.innerHTML = "La nota debe ser entre 1 y 10";
                notaEFSI.style.color= "red";
            } else {
                errorNombre.innerHTML = "";
                notaEFSI.style.color= "green";
            }
        }

        function calcularPromedio() {    
            promedios = (notaMate + notaLengua + notaEFSI) / 3;
            respuestaPromedio = document.getElementById("resultado");
            respuestaPromedio.innerHTML = "Promedio: " + promedios.toFixed(2);
            if(promedios>=6)
            {
                respuestaPromedio.style.color = "green";
            }
            else
            {
                respuestaPromedio.style.color= "red";
            }
        }

        function mostrarMayorNota() {
            let mayorNota;
            let materias;
           if (notaMate>notaLengua && notaMate>notaEFSI)
           {
                mayorNota="Matematica";
           }
           else if(notaLengua>notaMate && notaLengua>notaEFSI)
           {
                mayorNota="Lengua";
           }
           else if(notaEFSI>notaMate && notaEFSI>notaLengua)
           {
                mayorNota="EFSI";
           }
            
            let mejor = document.getElementById("mejorMateria");
            mejor.innerHTML = "Mayor nota en: " + materias.join(", ");
            mejor.style.color = "blue";
        }
        form.reset();
    });
});

