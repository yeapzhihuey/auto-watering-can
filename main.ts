input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
let soil_moisture = 0
basic.showString("Hello!")
basic.forever(function () {
    soil_moisture = pins.analogReadPin(AnalogPin.P2)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(soil_moisture)
    }
    if (soil_moisture > 650) {
        rekabit.setAllRgbPixelsColor(0xff0000)
        basic.showIcon(IconNames.Sad)
        rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 128)
        while (soil_moisture > 500) {
            rekabit.setServoPosition(ServoChannel.S1, 30)
            basic.pause(1000)
            rekabit.setServoPosition(ServoChannel.S1, 150)
            basic.pause(1000)
            soil_moisture = pins.analogReadPin(AnalogPin.P2)
        }
        rekabit.brakeMotor(MotorChannel.M2)
    } else {
        rekabit.setAllRgbPixelsColor(0x00ff00)
        basic.showIcon(IconNames.Happy)
    }
})
