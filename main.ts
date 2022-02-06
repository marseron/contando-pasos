input.onButtonPressed(Button.A, function () {
    basic.showNumber(Pasos)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
})
input.onButtonPressed(Button.AB, function () {
    Pasos = 0
})
let Pasos = 0
Pasos = 0
