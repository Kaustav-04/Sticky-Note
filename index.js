showTodo();
let editArea = document.querySelectorAll(".editBtns");
let label = document.querySelector("#addFill div label");
let writeSec = document.querySelector("#addFill div input");
let AddBtnTodo = document.getElementById("AddBtnTodo");
let updateBtnTodo = document.getElementById("updateBtnTodo");
// Calling Addition of ToDo section
let addTodo = document.getElementById("addTodo");
let addTodoSection = document.getElementById("addTodoSection");
let cross = document.querySelector("#addFill .cross");
addTodo.addEventListener("click", function () {
    addTodoSection.style.display = "block";
    label.innerHTML = `Add Todo`;
    writeSec.setAttribute("placeholder","Add Your Todo");
    AddBtnTodo.style.display = "block";
    updateBtnTodo.style.display = "none";
})
// closing add Todo section
cross.addEventListener("click", function () {
    addTodoSection.style.display = "none";
})

// Adding Items in local sorage

AddBtnTodo.addEventListener("click", function () {
    let TodoTxt = document.getElementById("TodoTxt");
    let Todo = localStorage.getItem("Todo");
    if (Todo == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(Todo);
    }
    let today = new Date();
    obj.push(
        {
            TodoText: `${TodoTxt.value}`,
            TodoDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds()),
        }
    );
    localStorage.setItem("Todo", JSON.stringify(obj));
    TodoTxt.value = "";
    showTodo();
    addTodoSection.style.display = "none";
})
// Show Todo

function showTodo() {
    let show = document.getElementById("show");
    let Cards = document.getElementById("Cards");
    let Todo = localStorage.getItem("Todo");
    if (Todo == null) {
        obj = [];
    }
    else {
        show.innerHTML = "";
        obj = JSON.parse(Todo);
        let html = ""
        for (let index = 0; index < Array.from(obj).length; index++) {
            html += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">${obj[index].TodoText}</p>
                            <div class="dateEdit">
                                <h4 class="card-date">${obj[index].TodoDate}</h4>
                                <div class="editIcon">
                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    <div class="editBtns shadow p-3 mb-5 bg-body rounded">
                                        <div class="editItems"><button href="#" onclick="Update(${index},'${obj[index].TodoText}')">Edit</button></div>
                                        <div class="editItems"><button href="#" onclick="Delete(${index})">Delete</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
        Cards.innerHTML = html;
        localStorage.setItem("Todo", JSON.stringify(obj));
    }
    if (Todo == null || Todo == "[]") {
        show.innerHTML = "No Todos!";
    }
}

function Delete(index) {
    let Todo = localStorage.getItem("Todo");
    if (Todo == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(Todo);
    }
    obj.splice(index, 1);
    console.log(index)
    localStorage.setItem("Todo", JSON.stringify(obj));
    showTodo();
    editArea[index].style.display = "none";

}
function Update(index, TodoText) {
    addTodoSection.style.display = "block";
    label.innerHTML = `Update Todo`;
    writeSec.setAttribute("placeholder","Update Your Todo");
    AddBtnTodo.style.display = "none";
    updateBtnTodo.style.display = "block";
    writeSec.value = `${TodoText}`;
    console.log(writeSec.value);
    updateBtnTodo.setAttribute("onclick",`updateTodo(${index})`)

}
function updateTodo(index){
    let Todo = localStorage.getItem("Todo");
    if (Todo == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(Todo);
    }
    console.log(obj);
    for(let i=0; i<obj.length; i++){
        
    }
    obj[index].TodoText = `${writeSec.value}`;
    let today = new Date();
    obj[index].TodoDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + (today.getHours()) + ':' + (today.getMinutes()) + ':' + (today.getSeconds());
    localStorage.setItem("Todo",JSON.stringify(obj));
    addTodoSection.style.display = "none";
    showTodo();

}

// opening and closing The edit and delete button in cards

// function editOpen(index) {
//     editArea = document.querySelectorAll(".editBtns");
//     editArea[index].style.display = "block";
//     // editClose(index);
// }

// function editClose(index) {
//     console.log(`close`);
//     editArea = document.querySelectorAll(".editBtns");
//     editArea[index].style.display = "none";
// }

console.log(localStorage);
