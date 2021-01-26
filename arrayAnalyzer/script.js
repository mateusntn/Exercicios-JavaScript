let numbers = []
let list = document.querySelector('ul#list');
const output = document.querySelector('div#output');

function add() {
    let number = document.querySelector('input#number');
    if (isNumber(number.value) && !inList(number.value, numbers)) {
        numbers.push(Number(number.value));
        list.innerHTML += `<li>${number.value}</li>`;
        output.innerHTML = '';
    } else {
        window.alert("Invalid value or already found in the list.");
    }
    number.value = '';
    number.focus();
}


function analyze() {
    if (numbers.length == 0) {
        window.alert("Add values before analyzing.")
    } else {
        output.innerHTML = '';
        output.innerHTML += `<p>There are ${numbers.length} numbers registered</p>`;
        numbers.sort((a, b) => a - b);
        output.innerHTML += `<p>The highest recorded value was ${numbers[numbers.length -1]}</p>`;
        output.innerHTML += `<p>The lowest recorded value was ${numbers[0]}</p>`;
        let total = 0;
        for (count in numbers) {
            total += numbers[count];
        }
        output.innerHTML += `<p>The sum off all values is ${total}</p>`;
        output.innerHTML += `<p>The avarage of the values is ${(total/numbers.length).toFixed(2)}</p>`;
    }
}



function isNumber(number) {
    if (Number(number) >= 1 && Number(number) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(number, list) {
    if (list.indexOf(Number(number)) != -1) {
        return true;
    } else {
        return false;
    }
}