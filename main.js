const form = document.getElementById('form-numero');

//Adicionando elemento de submissão
form.addEventListener('submit',function(event)  {
    event.preventDefault(); //Previne o envio do formulário

    const primeiroNumero = parseFloat( document.getElementById("numeroA").value); 
    const segundoNumero = parseFloat( document.getElementById("numeroB").value);
    
    if(segundoNumero < primeiroNumero){
        alert('Número B precisar se maior que o número A');
    } else { alert('Números enviados com sucesso!')
        form.reset(); // Reseta o formulário após o envio
    }

});


