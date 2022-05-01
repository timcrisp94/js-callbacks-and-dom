

elText = document.getElementById("event-listener")
elText.textContent = 'an EVENT LISTENER is a CALLBACK FUNCTION called when an event fires. Event listeners may also be referred to as event handlers'

elTextTwo = document.getElementById("event-listener-two")
elTextTwo.textContent = 'element.addEventListener(type, listener, useCapture) ' + 
' OR ' +
'element.addEventListener(event-name, callback, use-capture'

elEventObject = document.getElementById("event-object")
elEventObject.textContent = 'examining the event object provided as an argument to our event listener gives us: several properties that provide where the click occurred; the target property which holds a reference to the DOM element that triggered the event'

const btn = document.querySelector('button')

// step one - add event listener and console log

// btn.addEventListener('click', function(evt) {
//   console.log('we know our cached element reference is working ' + evt)
// })

// step two - create a new li element

// btn.addEventListener('click', function(evt) {
//   const li = document.createElement('li')
//   console.log('li')
// });

// step three - create a new comment

btn.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  // get the text from the input field
  // assign it to textContent of li

  // attach new li to ul
})