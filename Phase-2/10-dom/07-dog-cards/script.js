const dogName = document.getElementById('name')
const button = document.getElementById('btn')

const breed = document.getElementById('breed')
const bredFor = document.getElementById('bredfor')
const lifeSpan = document.getElementById('lifespan')
const tamperament = document.getElementById('tamperament')
const height = document.getElementById('height')
const weight = document.getElementById('weight')

const photo = document.getElementById('photo')

button.addEventListener('click', fetchDog)


async function fetchDog() {
    const response = (await axios.get('https://api.freeapi.app/api/v1/public/dogs/dog/random')).data

    const dog = response.data

    dogName.innerText = dog.name || "N/A"
    breed.innerText = dog.breed_group || "N/A"
    bredFor.innerText = dog.bred_for || "N/A"
    lifeSpan.innerText = dog.life_span || "N/A"
    tamperament.innerText = dog.temperament || "N/A"
    height.innerText = dog.height.metric ? dog.height.metric + " cm" : "N/A"
    weight.innerText = dog.weight.metric ? dog.weight.metric + " kg" : "N/A"

    photo.src = dog.image.url
}