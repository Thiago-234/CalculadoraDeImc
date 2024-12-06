const masculino = document.getElementById("masculino");
const feminino = document.getElementById("feminino");

function masculinoCor(){
    masculino.style.background = "#59b602"; // Cor de fundo quando masculino for selecionado
    feminino.style.background = ""; // Desmarca feminino quando seleciona masculino
       
}

function femininoCor(){
    feminino.style.background = "#59b602"; // Cor de fundo quando feminino for selecionado
    masculino.style.background = ""; // Desmarca masculino quando seleciona feminino
}

const altura = document.getElementById("altura");
const peso = document.getElementById("peso")
const btnCalcular = document.getElementById("btn-calcular");
const btnLimpar = document.getElementById("btn-limpar");
const resultado = document.getElementById("resultado");
resultado.innerHTML = "Desconhecido";
situacao.innerHTML = "Desconhecida";

function calcularImc(event){
    event.preventDefault();
    
    let alturaCm = altura.value; 
    let pesoKg = peso.value;

    if (alturaCm > 2.50 ){
        alert("A altura deve ser menor que 2.50 Metros")
    }
    else if (pesoKg < 0 || pesoKg == 0 ){
        alert("O peso não deve ser negativo ou igual a 0!")
    }
    else{

        let imc = pesoKg / (alturaCm * alturaCm);
    
        resultado.innerHTML = imc.toFixed(4);
        const situacao = document.getElementById("situacao");
    
        if (imc < 18.5) {
            situacao.innerHTML = "Magreza";
            situacao.style.color = "gray";
        } else if (imc >= 18.5 && imc < 24.9) {
            situacao.innerHTML = "Normal";
            situacao.style.color = "green";
        } else if (imc >= 25 && imc < 29.9) {
            situacao.innerHTML = "Sobrepeso";
            situacao.style.color = "yellow";
        } else if (imc >= 30 && imc < 39.9) {
            situacao.innerHTML = "Obesidade";
            situacao.style.color = "red";
        } else {
            situacao.innerHTML = "Obesidade Grave";
            situacao.style.color = "darkred";
        }
    }
}

function limparCampos(){
    altura.value = "";
    peso.value = "";
    masculino.background = "";
    feminino.background = "";
}
