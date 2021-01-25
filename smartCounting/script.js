function count() {
    const starttxt = document.querySelector('input#beginning').value;
    const endtxt = document.querySelector('input#end').value;
    const steptxt = document.querySelector('input#step').value;
    let output = document.querySelector('p#output');
    
    if (starttxt.length == 0 || endtxt.length == 0 || steptxt.length == 0 ) {
        output.innerHTML = `Impossible to count, Fill in all fields! `;
    } else {
        output.innerHTML = `Counting <br>`;
        const start = Number(starttxt);
        const end = Number(endtxt);
        let step = Number(steptxt);
        if (step == 0) {
            window.alert("Invalid step! Considering STEP = 1");
            step = 1;
        }
        if(start < end) {
            for (let count  = start; count <= end ; count += step) {
                output.innerHTML += `${count}... `;
            }
        } else {
            for (let count  = start; count >= end ; count -= step) {
                output.innerHTML += `${count}... `;
            }
        }
    }
}