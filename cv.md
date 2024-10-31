 1. Sitnikov Mathew

---
____2. My email:____ <br> ___sitnikovmatvey2008@gmail.com___
<br> ____My number:____ <br> ___+79127063203___

* * * * *
## 3. My strength: right, since I'm right-handed. I want to develop my soft skills

___

I dont know any language. <br>
\_\_\_ But I can write a table in markdown \_\_\_ <br>

| Это буквы | Это цифры | Это рейтинг популярных букв и цифр |
|- - - - - - - -| - - - - - - - -| - - - - - - - - - - - - - - - - - - - - - - - - - | 
| 1 |            
* __I'm a little lazy, well, you understand what I wanted__

___
### 5.
* This is my code:
```
const number = '+79127063203';
const a = confirm('Do you want to know my number?')
if(a === true){
    alert(`My number is: ${number}`)
}
```
* And this: 
```
const a =	document.getElementsByClassName('good');
console.log(a)
a[0].addEventListener('click', () => {
	const statTheGame = confirm("Вы зашли на игру верно?");

if(statTheGame === true) {
    const Player1 = prompt("Введите имя первого игрока");
    const Player2 = prompt("Введите имя второго игрока");

    const Hello = alert(`
    Приветствую ${Player1} и ${Player2} в игре Ybn! 
    Правила игры: 
    1. В игре есть пять однорублёвых монет. Они разделяются на решки и орлы 
    2. Наш бот подкидывает монетку, в зависимости от вашей удачи выпадает либо орел, либо решка
    3. Если у одного или у обоих игроков 6 решек то будет переброс монеток.
    Подсказки:
    1) Орел сильнее решки 
    2) У кого из игроков выпадает больше орлов, тот выиграл!
    `);

    let scorePlayer1 = 0;
    let scorePlayer2 = 0;

do{
    confirm(`${Player1}, подбрасывайте монету!`)
    let orel = 0;
    let reshka = 0;
    for (let i = 0; i < 6; i += 1) {
        const randomNumber = Math.floor(Math.random() * 2) + 1
        if (randomNumber === 1) {
            orel += 1;
        } else {
            reshka += 1;
        }
    }
    alert(`Количество орлов у игрока ${Player1}: ${Math.round(orel)} \nКоличество решек у игрока ${Player1}: ${reshka}`);

    confirm(`${Player2}, подбрасывайте монету!`)
    let orel1 = 0;
    let reshka1 = 0;
    for (let j = 0; j < 6; j += 1) {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        if (randomNumber === 1){
            orel1 += 1;
        } else {
            reshka1 += 1;
        }
    }
    alert(`Количество орлов у игрока ${Player2}: ${Math.round(orel1)} \nКоличество решек у игрока ${Player2}: ${reshka1}`);
    
    if(orel > orel1 && reshka < 6 && reshka1 < 6){
        alert(`Выиграл игрок ${Player1}!`);
        scorePlayer1 += 1;
    } else if(orel < orel1 && reshka < 6 && reshka1 < 6) {
        alert(`Выиграл игрок ${Player2}!`);
        scorePlayer2 += 1;
    } else if(reshka == 6 || reshka1 == 6) {
        alert(`Переброс монет!`) }
        else {
            alert('Ничья!');
            scorePlayer1 += 1;
            scorePlayer2 += 1;
        }
        /*
    } else if(this.orel == this.orel1) {
        alert(`Ничья!`);
        */
    alert(`Счет игры: ${scorePlayer1}(${Player1}) : ${scorePlayer2}(${Player2})`);
}while(confirm(`Продолжим игру?`));
} else {
    alert('nooooooooooooooo')
}
});
```

___
6. Without <br>
![People with a two glasses][1]

[1]: real-dude.jpg
___
- [ ] 7. ~~I dont pupil in school now!~~


* * * * *

8. I have a damn good German (ein, twain, drei), <br>

_What about English?_ <br>
-I DONT KWOW
<!-- 
Имя и фамилия

Контакты для связи

Краткая информация о себе (ваша цель и приоритеты, подчеркните свои сильные стороны, расскажите о своём опыте работы, если опыта работы нет, расскажите о своём стремлении учиться и узнавать новое)

Навыки (языки программирования, фреймворки, методологии, системы контроля версий и инструменты разработки, которыми вы владеете)

Примеры кода

Опыт работы. Junior Dev может перечислить учебные проекты с указанием использованных навыков и ссылками на исходный код.

Образование (включая пройденные курсы и тренинги)

Английский язык (уровень английского языка, если была языковая практика, расскажите о ней) -->
