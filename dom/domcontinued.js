console.log('hi')

htmlCollection = document.getElementById('html-collection')

htmlCollection.setAttribute(
  'href',
  'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection'
)

commentElements = document.querySelectorAll('.comment')
console.log(commentElements)

commentElements[0].textContent = 'yay'

for (let commentElement of commentElements) {
  commentElement.style.fontSize = "30px"
  commentElement.style.color = "orange"
  commentElement.style.backgroundColor = "brown"
}