document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("NOTAS");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let notaMate = document.getElementById("Matematica");
        let errorMate = document.getElementById("errorMatematica");

        let notaLengua = document.getElementById("Lengua").value;
        let errorLen = document.getElementById("errorLengua");

        let notaEFSI = parseInt(document.getElementById("EFSI").value);
        let errorEF = document.getElementById("errorEFSI");

        let promedios;
        let e = document.getElementById("promedio");
        let mejorNota;

        let valido = true;


        // Validar nota Matematica

        function validarNotaMatematica() {
                if (notaMate<1 || notaMate>10) 
            {
                errorMate.innerHTML = "La nota debe ser entre 1 y 10";
                valido = false;
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
                valido = false;
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
                valido = false;
                notaEFSI.style.color= "red";
            } else {
                errorNombre.innerHTML = "";
                notaEFSI.style.color= "green";
            }
        }

        if (!valido) 
        {
            return;
        }

        promedios= (notaMate + notaLengua + notaEFSI)/3;
        e.innerHTML= promedios;
        alert("Registro exitoso!");
        form.reset();
    });
});

