import Data from "../interfaces/Data"

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
            response.json()
        } else if(response.status === 400){
            console.error('A url não foi encontrada!')
        }
    })
    .then(data => {
        alert(`Success: ${JSON.stringify(data)}`)
    })
    .catch(error => {
        console.error(error)
    })
}

export default fetchData