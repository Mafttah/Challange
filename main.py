def on_forever():
    def on_button_pressed_a():
         # Change this - each group uses different number!
        temp = input.temperature()
        light_level = input.light_level()

        json_str = '{"l":"' + str(light_level) + '","t":' + (temp) + "}"
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(3000)
        
basic.forever(on_forever)
