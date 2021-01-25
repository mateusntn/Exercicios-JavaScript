function multiply() {
    const number = Number(document.querySelector('input#number').value);
    let output = document.querySelector('div#output');

    const validation = document.querySelector('input#number').value;
    if (validation.length == 0)
    {
        window.alert ("Type some value.");
    } else {
        output.innerHTML = `${number} times table:`;
        for (let count = 0; count <= 10; count++) {
            output.innerHTML += `<p>${count} x ${number} = ${count*number}</p>`;
        }
    }

}