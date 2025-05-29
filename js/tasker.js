let container = document.querySelector(".container");
const btnCreat = document.getElementById("btn-create-task");
const newTask = document.getElementById("new-task");

let tasks = document.querySelectorAll(".task");

// [...tasks].map(function(item){
//     return item + "!";
// });

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const immediate = document.querySelectorAll(".immeadiate");
function compare(a, b) { //функция сравнения для сортировки
    //если первое значение больше второго
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    //если равны
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    //первое значеие меньше второго
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}
function compareReverse(a, b) { //функция сравнения для сортировки
    //если первое значение больше второго
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1;
    //если равны
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    //первое значеие меньше второго
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;
}
function filter(a, b) { //функция сравнения для сортировки
    //если первое значение больше второго
    if (a.querySelector("").innerHTML > b.querySelector("span").innerHTML) return -1;
    //если равны
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    //первое значеие меньше второго
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;
}
btn1.addEventListener("click", function () {
    let newTasks = [...tasks].sort(compare);
    for (let i in newTasks) { //перебор всех элементов в массиве
        container.append(newTasks[i]) //добавление новых элементов в контейнер
    }
})
btn2.addEventListener("click", function () {
    let newTasks = [...tasks].sort(compareReverse);
    for (let i in newTasks) { //перебор всех элементов в массиве
        container.append(newTasks[i]) //добавление новых элементов в контейнер
    }
})
btn3.addEventListener("click", function(){
    let newTasks = [...tasks].filter(immediate);
    for (let i in newTasks) { //перебор всех элементов в массиве
        container.append(newTasks[i]) //добавление новых элементов в контейнер
    }
})

//добавление новой задачи
btnCreat.addEventListener("click", function (event) {
    event.preventDefault();//отменяем повдение по умолчанию - форма не обновляет страницу
    let text = newTask.value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${text}</span>`;
    container.append(task);
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
});

//удаление всех задач
const btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function () {
    container.innerHTML = "";
    tasks = document.querySelectorAll(".task");
    console.log(tasks);
});