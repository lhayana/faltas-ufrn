function calcular(){
    var u1 = document.getElementById("adc").elements.namedItem("n1").value;
    var u2 = document.getElementById("adc").elements.namedItem("n2").value;
    var u3 = document.getElementById("adc").elements.namedItem("n3").value;
    
    u1 = parseFloat(u1);
    u2 = parseFloat(u2);
    u3 = parseFloat(u3);

    console.log(u1, u2, u3);

    var cont = 0;
    var notas = [u1, u2, u3];

        for (let i = 0; i < notas.length; i++) {
            if ((isNaN(notas[i]) === false)){
                cont = cont + 1;         
        }
    }

   console.log(`preenchidos: ${cont}`);

    var MenorQueTres = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 3) {
            MenorQueTres = MenorQueTres + 1;
        }
    }

    console.log(`menores que 3:  ${MenorQueTres}`);

    ordenado = notas.sort((a, b) => a - b);
    console.log(`ORDENADO: ${ordenado}`);

    if (cont === 3) { 

if (u1 >= 3 && u2 >= 3 && u3 >= 3){
    tire = (15 - (ordenado[1] + ordenado[2]));
console.log(`1precisa tirar: ${tire}`);
    document.getElementById("write").innerHTML = `Você precisa tirar: ${tire}`;
    }
    if (MenorQueTres === 1){
        console.log(ordenado);
        tire = (15 - (ordenado[1] + ordenado[2]));
        console.log(`2precisa tirar: ${tire}`);
        document.getElementById("write").innerHTML = `Você precisa tirar: ${tire}`;
        
        if(tire < 3 && tire > 0){
        media7 = (21 - (ordenado[1] + ordenado[2]));
        console.log(`PRECISA TIRAR MEDIA7:  ${media7}`);
            
            if (media7 < 3) {
              document.getElementById("write").innerHTML = `Você precisa tirar: ${media7}`;  
            }
            else{
              document.getElementById("write").innerHTML = `Você precisa tirar 3`;                
            }
        }
        //else if(tire < 3){
         //   console.log("soh tire 3 mofi")
         //   document.getElementById("write").innerHTML = `Você precisa tirar 3.`;
    }
    if (MenorQueTres === 2) {
        media7 = (21 - (ordenado[1] + ordenado[2]));
        
        if (media7 > 10) {
            document.getElementById("write").innerHTML = `Você já reprovou :(`;
        }
        else {
           console.log(`2 - PRECISA TIRAR MEDIA7:  ${media7}`);
        document.getElementById("write").innerHTML = `Você precisa tirar: ${media7}`; 
        }
    }
}
    if (cont === 2) {
        if (u1 >= 3 && u2 >= 3) {
            tire = (15 - (ordenado[0] + ordenado[1]));
            
            if (tire < 3) {
                document.getElementById("write").innerHTML = `Você precisa tirar 3`;
            }
            else{
            console.log(`cont2 === tire:  ${tire}`);
            document.getElementById("write").innerHTML = `Você precisa tirar: ${tire}`;
        }
    }
        else if (MenorQueTres === 1) {
            media7 = (21 - (ordenado[0] + ordenado[1]));
            if (media7 > 10) {
                console.log("ja tais na reposicao")
                document.getElementById("write").innerHTML = `Você já está na reposição :(`;
            }
            else{
                console.log(`cont2 === MEDIA7:  ${media7}`);
                document.getElementById("write").innerHTML = `Você precisa tirar: ${media7}`;
            }
        }
    }

    if (cont <= 1){
        alert("Preencha pelo menos dois (2) campos.");
    }
}