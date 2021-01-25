const errormsg = "[ERROR] Check the data and try again!"; 
function verify() {
    const output = document.querySelector('div#output');
    const txtDateBirth = document.querySelector('input#year');
    const dateBirth = String(txtDateBirth.value);
    const age = calcAge(dateBirth);
    if (txtDateBirth.value.length == 0 || age < 0) {
        window.alert(errormsg);
    } else {
        let gender = document.getElementsByName('gender');
        let img = document.createElement('img');
        img.setAttribute('id','photo');
        if (gender[0].checked) {
            gender = "Man"
            if (age < 10) {
                img.setAttribute('src','img/bebe-m.png');
            } else if (age < 21) {
                img.setAttribute('src','img/jovem-m.png');
            } else if (age < 50) {
                img.setAttribute('src','img/adulto-m.png');
            } else {
                img.setAttribute('src','img/idoso-m.png');
            }
        } else if (gender[1].checked) {
            gender = "Woman"
            if (age < 10) {
                img.setAttribute('src','img/bebe-f.png');
            } else if (age < 21) {
                img.setAttribute('src','img/jovem-f.png');
            } else if (age < 50) {
                img.setAttribute('src','img/adulto-f.png');
            } else {
                img.setAttribute('src','img/idoso-f.png');
            }
        }
        output.innerHTML = `<p> We detected a ${age} years old ${gender}</p>`;
        output.appendChild(img);
    }    
}

function calcAge(dateBirth) { 
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const birth = dateBirth.split('/');
    const birthDay = Number(birth[0]);
    const birthMonth = Number(birth[1]);
    const birthYear = Number(birth[2]);
    let age = currentYear - birthYear;
    
    if(currentMonth < birthMonth) {
        age--; 
    } else if(currentMonth == birthMonth && currentDay < birthDay){ 
        age--;         
    } 
    return age;
       
}