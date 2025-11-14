const sounds = {
    ui: new Audio("assets/ui.mp3"),
    click: new Audio("assets/click.mp3"),
    success: new Audio("assets/success.mp3"),
    fail: new Audio("assets/fail.mp3")
};

function playSound(s) {
    if (sounds[s]) sounds[s].cloneNode(true).play();
}
