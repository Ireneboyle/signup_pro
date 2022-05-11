const name= document.getElementById('name')
const email= document.getElementById('email')
const password= document.getElementById('password')
const form= document.getElementById('form')
const errorElement = document.getElementById('error')



form.addEventListener("submit", (e) => {

    alert()
    let messages = []

    if (name.value === ''|| name.value === null) {
        messages.push('Name is required')

    }


    if (email.value ===''|| email.value === null) {
        messages.push('email is required')

    }
    if (password.value ===''|| password.value === null){
        messages.push("Fill password please!")
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else{
        e.preventDefault()
        errorElement.innerText="submitted"
    }
});

 

