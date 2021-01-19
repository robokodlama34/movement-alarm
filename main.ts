let z = 0
let alarm_triggered = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Triangle)
        basic.pause(2000)
        z = input.acceleration(Dimension.Z)
        alarm_triggered = false
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.Z) < z - 30) {
        alarm_triggered = true
    }
    if (alarm_triggered) {
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
    }
})
