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