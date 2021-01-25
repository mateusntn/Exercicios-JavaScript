function Time(){
    const text = document.querySelector('div.text');
    const image = document.querySelector('div.image');
    const now = new Date(); 
    const hour = now.toLocaleTimeString();
    text.innerHTML = `<p>Now it's ${hour}</p> `;

    if (4 < now.getHours() && now.getHours() < 13){
        image.innerHTML = `<img src="img/manha.png" alt="Foto de dia">`;
        document.body.style.backgroundColor = '#e2cd9f';
    } else if (13 <= now.getHours() && now.getHours() < 18) {
        image.innerHTML = `<img src="img/tarde.png" alt="Foto de tarde">`;
        document.body.style.backgroundColor = '#b9846f';
    } else {
        image.innerHTML = `<img src="img/noite.png" alt="Foto de noite">`;
        document.body.style.background= '#515154';
    }
}