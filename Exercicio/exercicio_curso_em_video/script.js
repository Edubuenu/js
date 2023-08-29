function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 3
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        //Bom Dia!
        img.src = '/Exercicio/exercicio1/dia.jfif'
        img.style.borderRadius = "50%";
        img.style.height = "250px";
        img.style.width = "250px";
        img.style.display = "block";
        img.style.margin = "auto";
        document.body.style.background = "#e2cd9e";
    } else if (hora > 12 && hora <= 18) {
        //Boa Tarde!
        img.src = '/Exercicio/exercicio1/tarde.jfif'
        img.style.borderRadius = "50%";
        img.style.height = "250px";
        img.style.width = "250px";
        img.style.display = "block";
        img.style.margin = "auto";
        document.body.style.background = "#f505";
    } else {
        //Boa noite
        img.src = '/Exercicio/exercicio1/noite.webp'
        img.style.borderRadius = "50%";
        img.style.height = "250px";
        img.style.width = "250px";
        img.style.display = "block";
        img.style.margin = "auto";
        document.body.style.background = "#515154";
    }
    
}