let numbers = []
function add() {
    let number = Number(document.querySelector('input#number').value);
    numbers.push(number);
    let list = document.querySelector('ul#list');

    list.innerHTML += `<li>${number}</li>`;
    
}

function analyze() {
    const output = document.querySelector('div#output');
    output.innerHTML += `<p>There are ${numbers.length} numbers registered</p>`;
    numbers.sort((a, b) => a - b);
    output.innerHTML += `<p>The highest recorded value was ${numbers[numbers.length -1]}</p>`;
    output.innerHTML += `<p>The lowest recorded value was ${numbers[0]}</p>`;
    let total = 0;
    for (count in numbers) {
        total += numbers[count];
    }
    output.innerHTML += `<p>The sum off all values is ${total}</p>`;
    output.innerHTML += `<p>The avarage of the values is ${total/numbers.length}</p>`;
}