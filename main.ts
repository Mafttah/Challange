basic.forever(function on_forever() {
    function on_button_pressed_a() {
        //  Change this - each group uses different number!
        let temp = input.temperature()
        let light_level = input.lightLevel()
        let json_str = "{\"l\":\"" + ("" + light_level) + "\",\"t\":" + temp + "}"
        basic.showIcon(IconNames.Diamond)
        basic.pause(3000)
    }
    
})
