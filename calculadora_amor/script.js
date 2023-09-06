function validarFormulario() {
    //variaveis nomes
    let nome1 = document.getElementById("nome1").value;
    let nome2 = document.getElementById("nome2").value;
    let maiusculo1 = nome1.toUpperCase();
    let maiusculo2 = nome2.toUpperCase();
    
  

    //verificação se os campos estão vazios
    if (nome1 === "" || nome2 === "") 
    {
        document.getElementById("texto").textContent = "";
        document.getElementById("frase").textContent = "Por favor, preencha os campos para calcular";
    } 


    else if(maiusculo1 === maiusculo2)
     {

        document.getElementById("texto").textContent = "";
        document.getElementById("frase").textContent = "Amor Próprio é Tudo!" ;


        let formulario = document.getElementById("form");
        let nome1Input = document.getElementById("nome1");
        let nome2Input = document.getElementById("nome2");
        nome1Input.value = "";
        nome2Input.value = "";
      }

    
    else 
    {
        //cria um numero aleatório entre 0 e 100 e cria a mensagem exibindo a "porcentagem"


        let number = Math.floor(Math.random() * 101);
      
         document.getElementById("texto").textContent = "A chance de amor entre "+ nome1+ " e "+ nome2+ " é de "+ number+ "%";

        //cria mensagens descontraidas dependendo do valor do numero gerado

        let mensagem = "";

        if (number >= 85) {
            mensagem = "COMPRE AS ALIANÇAS!!";
        } else if (number >= 70) {
           mensagem = "É Só Chegar!!";
        } else if (number >= 55) {
           mensagem = "Tá Tão Na Sua!";
        } else if (number >= 40) {
           mensagem = "O Não Você Já Tem!";
        } else if (number >= 25) {
           mensagem = "Friendzone!";
        } else if (number >= 10) {
           mensagem = "NEM TENTA (pra não passar vergonha)";
        } else if (number >= 2) {
           mensagem = "SÓ DESISTE KKKKKKK";
        } else if (number === 1) {
           mensagem = '"Enquanto houver 1% de chance, há 99% de fé"';
        } else {
           mensagem = '"Enquanto houver 1% de chance, há 99% de fé" (foda é quando há menos de 1%)';
        }

        document.getElementById("frase").textContent = mensagem;

        //limpa os campos do formulário
        let formulario = document.getElementById("form");
        let nome1Input = document.getElementById("nome1");
        let nome2Input = document.getElementById("nome2");
        nome1Input.value = "";
        nome2Input.value = "";
       
    }

   
    return false;
}





