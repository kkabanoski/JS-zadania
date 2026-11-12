const inputField = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
const orderedList = document.getElementById("ordered-list")
let li = document.createElement("li")
let tasks = ['xd']

addBtn.addEventListener("click", () => {
    tasks.push(inputField.value)
    inputField.value = ''
    renderList()
})

function renderList(){
    for (let i = 0; i < tasks.length; i++){
        orderedList.innerHTML = `<li>${tasks[i]}</li>`
    }
} 