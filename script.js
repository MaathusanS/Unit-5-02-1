document.getElementById('pagebody').style.backgroundColor = '#ffe5d9' // This code changes the page's body color with id
document.getElementById('para').innerHTML = 'Maathusan Sathiendran' // This code will print my name in the HTML document in the <p> tag with the id 'para'
document.getElementById('button').addEventListener('click', displayMessage) // This code adds the button that upon clicking will trigger the function below

function displayMessage () {
  alert('Hello') // This function will be triggered by the click of the button above and will display an alert window with the text 'Hello'
}
