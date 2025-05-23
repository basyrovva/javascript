{
    let a, b, mul;
    a = 5;
    b = 3;
    mul = a * b;
    console.log(mul);
}

{
    // let  photosInFolder,photosOnPage, numberOfPage;
    // photosInFolder = parseInt(prompt("Введите кол-во фото в папке", 10));
    // photosOnPage = parseInt(prompt("Введите кол-во фото на одной странице", 10));

    // numberOfPage = Math.ceil(photosInFolder / photosOnPage);

    // alert("кол-во страниц = " + numberOfPage);
}

{
    let a = 1,b;
    b = ++a;
    console.log(a, b);
}

{
    /*Дано 4-значное число, найти все его цифры */
    let a = 14 % 5; //остаток от деления
    let b = Math.floor(14 % 5); //целочисленное деление
    console.log(a, b);


    let number,d1,d2,d3,d4;
    number = parseInt(prompt("Введите 4-значное число"));
    d1 = Math.floor(number/1) % 10; 
    d2 = Math.floor(number/10) % 10;
    d3 = Math.floor(number/100) % 10;
    d4 = Math.floor(number/1000) % 10;
    console.log(d1,d2,d3,d4);
}

{
    /*Найти максимум из двух чисел */
    let x, y, max;
    x = parseFloat(prompt("Введите первое число"));
    y = parseFloat(prompt("Введите второе число"));
    if(x > y){
        max = x;
    }
    else {
        max = y;
    }
    alert("max = " + max);
}

{
    /*Найти максимум из двух чисел - 2 способ*/
    let x, y, max;
    x = parseFloat(prompt("Введите первое число"));
    y = parseFloat(prompt("Введите второе число"));
    max = x;
    if(y > max){
        max = y;
    }
    alert("max = " + max);
}

