function calculate_checksum(text: string) {
    let code: number;
    let checksum = 0
    let ascii_chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
    for (let ch of text) {
        code = 32
        for (let i = 0; i < ascii_chars.length; i++) {
            if (ascii_chars[i] == ch) {
                code = 32 + i
                break
            }
            
        }
        checksum = (checksum + code) % 256
    }
    let hex_chars = "0123456789ABCDEF"
    return hex_chars[Math.idiv(checksum, 16)] + hex_chars[checksum % 16]
}

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
