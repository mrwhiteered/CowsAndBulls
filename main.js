
                "use strict";
               /* Функция для рандомного целого числа от мин до макс */
                function randomInteger(min, max) {
                  
                  let rand = min - 0.5 + Math.random() * (max - min + 1);
                  return Math.round(rand);
                };


/* Загадывание 4-х не повторяющихся рандомных чисел от 0-9 */
 

          let a =0;
          let b = 0;
          let c =0;
          let d = 0;
          
                do  {
                 a = (randomInteger(0,9));
                 b = (randomInteger(0,9));
                 c = (randomInteger(0,9));
                 d = (randomInteger(0,9));
                
                }
                while (a==b || b==c || c==d ||d==a || d==b || a ==c);
            
                a = String(a);
                b = String(b);
                c = String(c);
                d= String(d);

                
                /*  let arr=[];
                 for (let i =0;i<4;i++){
                 arr.push(prompt("введите число"));
                 }
             alert(arr); */

             let secret = +a+b+c+d;
             alert('Число загадано. ' + " Давай играть!" );
            
             let count = 0;

 /*Ввод числа и преобразование числа в массив*/
 function start (){
 let Value = prompt("Введиет число", 1234);

 count ++;
 

 
 let mass = Array.from(Value);
 /* alert(mass[0]); */
if (mass[0]==mass[1] || mass[0] == mass[2] || mass[0]==mass[3] || mass[1]==mass[2] || mass[2] == mass[3])
{alert ('Так вводить число нельзя. Все цифры должны быть разными');
count--;
}
else {

    let bulls = 0;
    let cows =0;
/* alert(typeof mass[3]); */

if (a==mass[0]) bulls+=1;
if (a==mass[1]) cows +=1;
if (a==mass[2]) cows +=1;
if (a==mass[3]) cows +=1;

if (b==mass[1]) bulls+=1;
if (b==mass[0]) cows +=1;
if (b==mass[2]) cows +=1;
if (b==mass[3]) cows +=1;

if (c==mass[2]) bulls+=1;
if (c==mass[1]) cows +=1;
if (c==mass[0]) cows +=1;
if (c==mass[3]) cows +=1;

if (d==mass[3]) bulls+=1;
if (d==mass[1]) cows +=1;
if (d==mass[2]) cows +=1;
if (d==mass[0]) cows +=1;



/* 
 alert('Быков = ' +bulls +  ' Коров = ' + cows);
 */


/* 
 Запись на страничку  */
if (bulls==4) {alert('Ты победил! ' + 'Загаданное число='+a+b+c+d)}
else { 

/* if (Value.length != 4) 
alert('так нельзя вводить число')
else  */
if (Value.length !=4){alert('так нельзя вводить число');
count--;
}
else {
let answer = Value +" "   + 'быков-' +bulls + " "  + ' коров-' +cows ;


/* let li = document.createElement('li');
li.textContent = answer;
ul_bulls.append(li);  */


/* 
Вызов функций результата и количества попыток */
showCount({
    
    html: 'Попытки ' + count,
    className: "welcome"
  });
  showResult({
      className:'answer',
paddingTop:100,
      answer: answer,
      
  });};};};

/* 
 Функция для создания списка из результатов, создается элемент li
 которому присваивается результат переменной answer и записывется
 в конец списка l_buuls */
 };
 function showResult ({ paddingTop = 100, answer}) {
    let li = document.createElement('li');
    li.className = 'answer';
    li.textContent = answer;
    ul_bulls.append(li); 
     
 }

 /* 
 Функция для количества опыток */
 function showCount({ className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }

    

    notification.innerHTML = html;
    document.body.append(notification);

    
  };

  
  button.onclick = start;
  
 
    let openRuls = document.getElementById('ruls');
    let elemRuls = openRuls.querySelector('.pravila');
    elemRuls.onclick =  function(){
        alert ('В игре необходимо с помощью подсказок отгадать четырёхзначное число, которое загадал компьютер. Вы делаете предположение какое это может быть число. В ответ на каждое такое предположение компьютер отмечает, сколько в этой попытке отгадано быков (угаданные цифры стоят на своих местах) и сколько коров (цифры угаданны, но стоят не на своем месте). Задача как можно скорее отгадать число, число состоит из не повторяющихся цифр от 0 до 9, первая цифра числа может быть 0')
       
    };

    let restartGame = document.getElementById('restart');
    let reset = restartGame.querySelector('.reset');
    
    reset.onclick = function resetGame() {
        location.href=location.href;
        
    };
    
 

        