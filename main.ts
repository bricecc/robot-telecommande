function recule () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P13, 0)
}
function stop () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P13, 90)
}
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    recule()
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    droite()
})
function gauche () {
    stop()
    pins.servoWritePin(AnalogPin.P0, 0)
}
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    gauche()
})
function demiTour () {
    stop()
    recule()
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P13, 180)
    basic.pause(500)
    stop()
}
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    avance()
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    stop()
})
function droite () {
    stop()
    pins.servoWritePin(AnalogPin.P13, 180)
}
function avance () {
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P13, 180)
}
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    ) < 10) {
        demiTour()
    }
})
