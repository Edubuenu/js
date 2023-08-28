var agora = new Date()
/*var hora = agora.getHours()*/
var hora = 09

window.document.write(`Agora são ${hora} horas.`)
if (hora < 12){
    var img = document.createElement("img");
    img.src ="dia.jfif";
    img.style.borderRadius = "50%";
    img.style.height = "300px";
    img.style.width = "300px";
    img.style.display = "block";
    img.style.margin = "auto";
    document.body.style.background = "#ADD8E6";
    document.body.appendChild(img);
} else if (hora > 12 && hora < 18){
    var img = document.createElement("img");
    img.src ="tarde.jfif";
    img.style.borderRadius = "50%";
    img.style.height = "300px";
    img.style.width = "300px";
    img.style.display = "block";
    img.style.margin = "auto";
    document.body.style.background = "#FFFFE0";

    document.body.appendChild(img);

} else {
    var img = document.createElement("img");
    img.src ="noite.webp";
    img.style.borderRadius = "50%";
    img.style.height = "300px";
    img.style.width = "300px";
    img.style.display = "block";
    img.style.margin = "auto";
    document.body.style.background = "#D0D0D0";
    document.body.appendChild(img);

}
