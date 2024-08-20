const email = document.querySelector('#email')
const password = document.querySelector('#password')
const button = document.querySelector('#submit')
const warning = document.querySelector('#alert')
const closeAlert = document.querySelector('#close-alert')

button.addEventListener('click', function(event) {
    if (email.value === "" && password.value === "") {
        warning.classList.remove('hidden')
        setTimeout(function() {
            warning.classList.add('hidden')
        }, 2000)
        event.preventDefault() 
    } else {
        warning.classList.add('hidden')
    }
})

closeAlert.addEventListener('click', function() {
    warning.classList.add('hidden')
})