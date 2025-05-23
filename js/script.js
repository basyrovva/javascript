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
    // let a = 14 % 5; //остаток от деления
    // let b = Math.floor(14 % 5); //целочисленное деление
    // console.log(a, b);


    // let number,d1,d2,d3,d4;
    // number = parseInt(prompt("Введите 4-значное число"));
    // d1 = Math.floor(number/1) % 10; 
    // d2 = Math.floor(number/10) % 10;
    // d3 = Math.floor(number/100) % 10;
    // d4 = Math.floor(number/1000) % 10;
    // console.log(d1,d2,d3,d4);
}

{
    /*Найти максимум из трех чисел */
    // let x, y, z, max;
    // x = parseFloat(prompt("Введите первое число"));
    // y = parseFloat(prompt("Введите второе число"));
    // z = parseFloat(prompt("Введите третье число"));
    // if(x >= y && x >= z){
    //     max = x;
    // }
    // else if(y >= x && y >= z) {
    //     max = y;
    // }
    // else {
    //     max = z;
    // }
    // alert("max = " + max);
}

{
    /*Найти максимум из трех чисел - 2 способ*/
    // let x, y, z, max;
    // x = parseFloat(prompt("Введите первое число"));
    // y = parseFloat(prompt("Введите второе число"));
    // z = parseFloat(prompt("Введите третье число"));
    // max = x;
    // if(y > max){
    //     max = y;
    // }
    // if(z > max){
    //     max = z;
    // }
    // alert("max = " + max);
}

{
    /*Даны n натуральных чисел. Найти максимум среди них. */
    // let n, a, max;
    // n = parseInt(prompt("Введите кол-во числел"));
    // max = parseInt(prompt("Введите число"));
    // for(let i = 1; i < n; i++){
    //     a = parseInt(prompt("Введите число"));
    //     if(a > max){
    //         max = a;
    //     }
    // }
    // alert("max = " + max);
}

{
    /*Дана последовательность натуральных чисел, которая заканчивается вводом числа 0. Найти максимум среди этой последовательности. */
    let a, max;
    a = parseInt(prompt("Введите число"));
    max = a;
    while(a != 0){
        a = parseInt(prompt("Введите число"));
        if(a > max){
            max = a;
        }
    }
    alert("max = " + max);
}

