
let freq: number = 50

radio.setGroup(69)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
//radio.setFrequencyBand(69)

function randomString(l: number) { 
    let letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ret: string = ""

    for (let i = 0; i <= l; i++) { 
        ret = ret + letters[randint(0, letters.length - 1)]
    }
    return ret
}




basic.forever(function() {
    radio.sendValue("a", control.deviceSerialNumber())
    basic.pause(100)
})

radio.onReceivedValue(function(name: string, value: number) {
    if (radio.receivedPacket(RadioPacketProperty.SerialNumber) === -1650614892) {
        serial.writeValue(name, value)
     }  
})


