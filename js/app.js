function myFunction() {
    var ch = document.getElementById("myForm").elements.namedItem("nf").value;
    porc = (ch*0.25);
    dur_aula = (50/60)
    faltas = (porc/dur_aula);
    console.log(faltas);
    var arredondado = Math.floor(faltas);

    if (ch != 0 && ch !== ""){
        document.getElementById("write").innerHTML = `Você pode faltar: ${arredondado} aulas.`;
    }
    else{
        alert("Insira a quantidade de horas da disciplina.");
    }
}