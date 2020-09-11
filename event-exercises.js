// ~~~~~~~~~~~~~~~~~~ exercise 1 ~~~~~~~~~~~~~~~~~~~~~


function buttonPressed() {
    console.log("Button Pressed");
}

var LogButtonClick = document.querySelector('#btn')
LogButtonClick.addEventListener('click', buttonPressed)



// ~~~~~~~~~~~~~~~~~~ exercise 2 ~~~~~~~~~~~~~~~~~~~~~

function leftClicked() {
    console.log("You left clicked");
}



// ~~~~~~~~~~~~~~~~~~ exercise 3 ~~~~~~~~~~~~~~~~~~~~~

function resizeWindow() {
    console.log('You Change the size of the Window!');
}
var scrollEvent = document.querySelector('#window')
window.addEventListener('resize', resizeWindow)



// ~~~~~~~~~~~~~~~~~~ exercise 4 ~~~~~~~~~~~~~~~~~~~~~


const heading = document.createElement("h2")
const listOfItems = document.createElement("ul")


heading.textContent = "Shopping List"
document.querySelector("#theContainer")
theContainer.append(heading)


function sumbitNewItem() {
    let input = document.querySelector('#submittedItem')
    console.log(input.value);
    let listItem = document.createElement("li")
    listItem.textContent = input.value
    let list = document.querySelector('#shoppingList')
    list.append(listItem)
}

const addItem = document.querySelector("#addItemButton")
addItem.addEventListener('click', sumbitNewItem)


