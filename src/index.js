const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

document.addEventListener("DOMContentLoaded", (){
    fetchDogs()
    dogBreeds()
})

function fetchDogs(){
   fetch(imgUrl)
   .then((res) => res.json())
   ,then((data) => {
        const images = document.getElementById('dog-image-container')

        data.message.forEach(url => {
            let img = document.createElement('img')
            img.src = url
            images.appendChild(img)
        })
   })
   .catch((err) => console.log(err.message))
}


function dogBreeds(){
    fetch(breedUrl)
    .then((res) => res.json())
    then((data) => {
        breeds = Object.keys(data.message)
        const list = document.getElementById('dog-breeds')
        list.innerTML =  ''

        for (const breed in data.message){
            const li = document.createElement('li')
            li.addEventListener('click', () => li.style.color = 'blue')
            list.appendChild(li)
        }
   

    })
    .catch((err) => console.log(err.message))
}

function filterBreeds(){
    const select = document.querySelector('select')
    select.addEventListener('change', (e) => {
     console.log(e.target)
     const unorderedList = document.getElementById('dog-breeds')
     unorderedList.innerHTML = ''

     const filterBreeds = breeds.filter((breed) => breed.charAt(0) === select.value)
     filterBreeds.forEach((breed) =>{
         const li = document.createElement('li')
         li.addEventListener('click', () => li.style.color = 'blue')
     })
     li.innerText = breeds
     unorderedList.appendChild(li)
    })
}

