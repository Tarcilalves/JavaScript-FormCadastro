const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // para ele não recarregar a página quando enviar o form

    //chamando 
    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value // esse username tem uma propriedade chamada value que guarda o seu valor. 
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório")
    } else {
        setSuccessFor(username);
    }

    //verificação do e-mail

    if (emailValue === "") {
        setErrorFor(email, "O e-mail é obrigatório")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, Insera um e-mail válido.")
    } else {
        setSuccessFor(email);
    }

    //verificação do password
    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatório")
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimi 7 caracteres.")
    } else {
        setSuccessFor(password);
    }

    //verificação do password Confirmation
    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatório")
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.")
    } else {
        setSuccessFor(passwordConfirmation);
    }

    //Validação de sucesso do cadastro
    const formContrls = form.querySelectorAll('.form-control')
    //fazendo um looping nesses forms controls e transformá-lo em uma lista. 
    const formIsValid = [...formContrls].every(formControl => { // transforma em uma array padrão do JS
        return formControl.className === "form-control success"
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!")
    }

    function setErrorFor(input, message) {
        //Pegar o form-control para colocar a classe error dinamicamente
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        //Adicionar a classe de error
        small.innerText = message;

        //Adicionar a classe de error
        formControl.className = "form-control error"
    }


    function setSuccessFor(input) {
        const formControl = input.parentElement; // Vai retornar o pai desse input

        //Adicionar a classe de sucesso
        formControl.className = 'form-control success'
    }

    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }
}

