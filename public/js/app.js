const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.style.display = "block"
    // messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.style.display = "none"
            messageTwo.textContent = data.error
        } else {
            messageOne.style.display = "none"
            messageTwo.textContent = data.Location
            messageThree.textContent = data.Forecast
        }
    })
})
})