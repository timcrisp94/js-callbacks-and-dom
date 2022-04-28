console.log('dom')
const titleElement = document.querySelector('.title')
const pElement = document.querySelector('.cool')
pElement.innerText = 'something new!'
titleElement.innerText = 'the dom dom bay bay'

textContent = document.getElementById('text-content')
textContent.textContent = 'textContent - Used to retrieve/set content as plain text'

titleElement.style.textAlign = 'center'

pElement.style.color = 'purple'
pElement.style.backgroundColor = 'pink'

img = document.getElementById('img')

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

img.setAttribute(
  "src",
  `https://picsum.photos/${getRandomIntInclusive(200, 800)}`
)