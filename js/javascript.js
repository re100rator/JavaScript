let money = prompt("Ваш бюджет на месяц");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let a = prompt("Введите статью на обязательные расходы в месяц");
let b = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        c: a + " " + b
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};

alert("Бюджет на один день " + money/30); 

console.log(appData.expenses.c);
