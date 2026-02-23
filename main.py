def on_forever():
    def on_button_pressed_a():
         # Change this - each group uses different number!
        temp = input.temperature()
        light_level = input.light_level()

        json_str = '{"l":"' + str(light_level) + '","t":' + (temp) + "}"
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(3000)

def calculate_checksum(text: str):
    checksum = 0
    ascii_chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    for ch in text:
        code = 32
        for i in range(len(ascii_chars)):
            if ascii_chars[i] == ch:
                code = 32 + i
                break
        checksum = (checksum + code) % 256
    hex_chars = "0123456789ABCDEF"
    return hex_chars[checksum // 16] + hex_chars[checksum % 16]
        
basic.forever(on_forever)
