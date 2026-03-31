

function changeColor(){
    document.getElementById('greetings').style.color = "blue"
}
function hideTitile(){
    document.getElementById('titleText').classList.add("title")
}
function showTitile(){
    document.getElementById('titleText').classList.remove("title")
}
function addElement(){
    let inp = document.getElementById('todo').value
    let newElement = document.createElement("p")
    newElement.innerHTML = inp
    
    let result = document.getElementById('results')
    result.appendChild(newElement)
    document.getElementById('todo').value = ""
}

document.getElementById('changeBtn').addEventListener("click",changeColor)

