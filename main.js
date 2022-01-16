const teclas = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");


function Playnotes(evento) {

    let keycode = null;

    let isKeyboard = evento.type === "keydown"
    if (isKeyboard) {
        keycode = evento.keyCode
    } else {
        keycode = evento.target.dataset.key
        console.log(keycode)
    }

    audios.forEach(function (audio) {
        if (audio.dataset.key == keycode) {
            audio.play()
        }
    })
}
 
window.addEventListener("keydown", Playnotes);
teclas.forEach(function (tecla) {
    tecla.addEventListener("click", Playnotes)
})


