document.addEventListener('DOMContentLoaded', () => {
    interface Data {
        names: string[],
        message: string
    }

    const form = document.getElementById('contactForm')

    const fetchData = async (url: string, data: Data) => {
        await fetch(url, { 
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( response => {
            console.log(response.status)
            if (response.status === 200) {
                console.log(response)
                response.json()
            }
        })
        .then(data => {
            console.log(data)
            alert(`Success: ${JSON.stringify(data)}`)
        })
        .catch(error => {
            console.error(error)
        })
    }

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