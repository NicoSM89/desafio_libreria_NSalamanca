var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

/* function validateEmail() {
    
    var emailField = document.getElementById('email');

    var validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
    
    if (validEmail.test(emailField.value)) {
        return true;
    } else {
        alert('Email invalido')
        return false;
    }
} */

const titulo = document.getElementsByClassName('formulario__input')
const formulario = document.getElementById('formInicial')

formulario.onsubmit = (event) => {
    event.preventDefault()

    for (const input of event.target.children) {
        const obj = {}
        obj['tipo'] = input.name
        obj['valor'] = input.value
        console.log(obj)
        localStorage.setItem(obj.tipo,JSON.stringify,obj.valor)
    }
}

const boton = document.getElementById('btn1')

boton.onclick = mostrarAlert;

function mostrarAlert() {
        Swal.fire({
        type: 'sucess',
        title: 'Mensaje',
        text: 'Formulario Enviado'
    });
};



