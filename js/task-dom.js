//1 задание
const text = document.querySelector(".test-text");
console.log(text);
text.innerHTML = "Привет, мир! Меня зовут Гузалия"
text.style.backgroundColor = "rgb(131, 196, 234)";
text.style.color = "blue";
text.style.border = "2px solid rgb(0, 170, 255)";
// 2 задание
const email = document.getElementById("email");
console.log(email.getAttribute("placeholder"));
email.setAttribute("placeholder", "mail@mail.ru");
email.setAttribute("disabled", "disabled");
const remember = document.getElementById("remember");
console.log(remember.getAttribute("value"));
remember.setAttribute("checked", "checked");
const btn = document.getElementById("btn");
console.log(btn.getAttribute("value"));
btn.setAttribute("value", "Войти");
// 3 задание
const divlink = document.getElementById("divlink");
const link = document.createElement("a");
link.setAttribute("href","https://midis.ru/");
link.setAttribute("class","link"); 
link.innerHTML = "ссылка на сайт";
console.log(link);
console.log(divlink);
divlink.append(link);
//4
const clickbtn = document.getElementById("clickbtn");
 const svgimage = document.querySelector(".svgimage");

 clickbtn.addEventListener("click", function(){
 svgimage.style.transform = "translateY(-100px)"; // 1 способ
// svgimage.classList.toggle("move"); //2 способ
})

