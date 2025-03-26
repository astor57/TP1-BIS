      // Validar nota Matematica

        function validarNotaMatematica() {
            let notaMate = parseFloat(document.getElementById("Matematica").value);
            let errorMate = document.getElementById("errorMatematica");
            if (notaMate<1 || notaMate>10) 
            {
                errorMate.innerHTML = "La nota debe ser entre 1 y 10";
            } else {
                errorMate.innerHTML = "";
            }
          }

        // Validar nota Lengua
        function validarNotaLengua(){
            let notaLengua = parseFloat(document.getElementById("Lengua").value);
            let errorLen = document.getElementById("errorLengua");
            if (notaLengua<1 || notaLengua>10) 
            {
                errorLen.innerHTML = "La nota debe ser entre 1 y 10";
            } else {
                errorLen.innerHTML = "";
            }
        }

        // Validar nota EFSI
        function validarNotaEFSI(){
            let notaEFSI = parseFloat(document.getElementById("EFSI").value);
            let errorEF = document.getElementById("errorEFSI");
            if (notaEFSI<1 || notaEFSI>10) 
            {
                errorEF.innerHTML = "La nota debe ser entre 1 y 10";
            } else {
                errorEF.innerHTML = "";
            }
        }

        function calcularPromedio() {
            let notaMate = parseFloat(document.getElementById("Matematica").value);
            let notaLengua = parseFloat(document.getElementById("Lengua").value);
            let notaEFSI = parseFloat(document.getElementById("EFSI").value);
            let promedios;
            let respuestaPromedio = document.getElementById("promedio");

            promedios = (notaMate + notaLengua + notaEFSI) / 3;
            respuestaPromedio = document.getElementById("promedio");
            respuestaPromedio.innerHTML = "Promedio: " + promedios;
            if(promedios>=6)
            {
                respuestaPromedio.style.color = "green";
            }
            else
            {
                respuestaPromedio.style.color= "red";
            }
        }

        //Ta mal
        function mostrarMayorNota() {
            let notaMate = parseFloat(document.getElementById("Matematica").value);
            let notaLengua = parseFloat(document.getElementById("Lengua").value);
            let notaEFSI = parseFloat(document.getElementById("EFSI").value);
            let mayorNota = Math.max(notaMate, notaLengua, notaEFSI);
            let materias = [];

           if (notaMate === mayorNota)
           {
                materias.push("Matemática");
           } 
           if (notaLengua === mayorNota)
           {
                materias.push("Lengua");
           } 
           if (notaEFSI === mayorNota)
           {
                materias.push("EFSI");
           } 
                      
            let mejor = document.getElementById("mejorMateria");
            mejor.innerHTML= "Materia con mejor nota: " + materias.join(", ");
            mejor.style.color = "blue";

        }
