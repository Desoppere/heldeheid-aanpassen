input.onButtonPressed(Button.A, function () {
    led.setBrightness(100)
})
input.onButtonPressed(Button.AB, function () {
    led.setBrightness(50)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(0)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
led.setBrightness(255)
basic.forever(function () {
	
})
