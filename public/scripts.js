let inputSenha = document.querySelector('#senha')
let confirmarSenha = document.querySelector('#confirmarSenha')

    confirmarSenha.onchange = function(){
        if(inputSenha.value != confirmarSenha.value) {
            alert('As senhas devem ser iguais!')
        }
    }