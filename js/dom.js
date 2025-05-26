//1 - Выбрать элемент на страничке
//1.1 - Выбор элемента по id
const h1 = document.getElementById("title");
console.log(h1);
// 1.2 - Выбор элемента по селектору
const menu = document.querySelector(".menu");
console.log(menu);
//1.3 - Выбор нескольких элементов 
const links = document.querySelectorAll("a.link");
console.log(links);

//2 - Работа с контентом (содержимым тегов)
 console.log(h1.textContent);   //-чтение содержимого без тегов
 console.log(h1.innerHTML);     //-чтение содержимого с тегами
 console.log(h1.innerText);     
 console.log(h1.outerHTML);     
 console.log(h1.outerText);     

 h1.textContent = "Новый заголовок <img src='images/bluesky.svg' alt='logo'></img>";    // Изменить содержимое, теги воспринимаются как текст
 h1.innerHTML = "Новый заголовок <img src='images/bluesky.svg' alt='logo'></img>";    // Изменить содержимое или контент с тегами

 //3 - Работа со стилями (атрибут style)
 menu.style.background = "pink";
 menu.style.border = "10px solid rgb(7, 122, 189)"    
 menu.style.fontSize = "20px";    
 menu.style.borderRadius = "30px";    

 //4 - Работа с классами (атрибут class)
 const block = document.getElementById("block");
 block.classList.add("border"); // добавление класса
 block.classList.add("red");
 block.classList.add("large");
 block.classList.remove("large"); // удаление класса

 console.log(block.classList.contains("border")); //Проверяем, содержит ли такой класс (true or false)

 //5 - Работа с атрибутами
 const link = document.querySelector(".link");
 console.log(link.getAttribute("href")); //считать значение атрибута
 link.setAttribute("href","https://icons.getbootstrap.com/icons/bluesky/") //установить или изменить атрибут
 link.removeAttribute("href"); //удалить атрибут

 //6 - Создание нового элемента
 const image = document.createElement("img"); //создаем тег
 image.setAttribute("src","images/4.png"); //добавляем атрибут src
 image.setAttribute("alt","клубничка"); //добавляем атрибут alt
 block.append(image);//добавляем картинку в блок, варианты append, prepend, before, after

 //7 - работа с потомками 
 console.log(document.querySelectorAll("a"));
 console.log(menu.querySelectorAll("a"));

 //8 - работа с предкми
 const lastLink = document.querySelector(".menu li:last-child a");
 console.log(lastLink);
 const parent = lastLink.closest("li"); //взять ближайшего предка с заданным селектором (li)
 console.log (parent);

 //9 - работа с событиями 
 const btn = document.getElementById("btn");
 const circle = document.querySelector(".circle");

 btn.addEventListener("click", function(){
//  circle.style.transform = "translateX(600px)"; // 1 способ
circle.classList.toggle("move"); //2 способ
})
