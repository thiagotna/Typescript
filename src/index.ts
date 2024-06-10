import fetchData  from "./functions/fetchData"
import Data from "./interfaces/Data"

document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('contactForm')

    if (form instanceof HTMLFormElement) {
        form.addEventListener('submit', (event) => {
            event.preventDefault()
    
            const names : string[] = []
            const inputNames : NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name]')
            const messageElement = document.getElementById('message') as HTMLTextAreaElement
            let messageText : string = ""

            inputNames.forEach( input => {
                input instanceof HTMLInputElement ?? names.push(input.value.trim())               
            })   

            messageElement instanceof HTMLTextAreaElement ? messageText = messageElement.value : console.error('Não foi possível definir a mensagem!')
              
            const data : Data = {
                names: names,
                message: messageText
            }

            fetchData('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', data)
        })        
    }
})