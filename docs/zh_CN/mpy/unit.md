# unit

>unit模块中包含着M5Stack-Unit系列周边产品的硬件驱动。

## 添加模块

- **函数原型**

```python
def get(unit, port, *arg)
```

- 引入模块

```python
unit.get(unit.JOYSTICK, unit.PORTA)
```

- 卸载模块

```python
unit.deinit()
```

## I2C

### Ultrasonic

- [查看产品详情](zh_CN/unit/sonic)

- Chip: **RCWL-9600**

- Addr: **0x57**

```python

Ultrasonic0 = unit.get(unit.ULTRASONIC, unit.PORTA)

#读取测距信息
distance = Ultrasonic0.distance
```

### Heart

- [查看产品详情](zh_CN/unit/heart)

- Chip: **RCWL-9600**

- Addr: **0x57**

```python

heart0 = unit.get(unit.HEART, unit.PORTA)

#设置传感器工作模式 0x02为心率模式 | 0x03为心率血氧模式
heart0.setMode(mode)

#调整传感器LED电流，RED为血氧测试LED电流，IR为心率测试LED电流。
heart0.setLedCurrent(red, ir)

#读取心率
HeartRate = heart0.getHeartRate()

#读取血氧
SpO2 = heart0.getSpO2()

```

### ENV/ENV II

- [查看产品详情](zh_CN/unit/env)

- ENV
- Chip: **dht12**, **bmp280**
- Addr: **0x5c**, **0x76**

-----------------------

- ENV II
- Chip: **sht30**, **bmp280**
- Addr: **0x44**, **0x76**

```python
# init --- Effective IO: PORTA | PORTC
unit_env = unit.get(unit.ENV, unit.PORTA)

# temperature: -20 ~ 60, Celsius
tmp = unit_env.temperature
# humidity: 20 ~ 95, percentage
hum = unit_env.humidity
# pressure: 30000 ~ 110000Pa, pa
pre = unit_env.pressure
```

### ADC

- [查看产品详情](zh_CN/unit/adc)

- Chip: **ADS1100**

- Addr: **0x48**

``` python
# init --- Effective IO: PORTA | PORTC
unit_adc = unit.get(unit.ADC, unit.PORTA)

# get voltage, value range 0~12, measurement: V
vol = unit_adc.voltage
```

### ACCEL

- [查看产品详情](zh_CN/unit/accel)

- Chip: **ADXL345**

- Addr: **0x53**

```python
adc0 = unit.get(unit.ADC, unit.PORTA)

x = accel0.acceleration[0]
y = accel0.acceleration[1]
z = accel0.acceleration[2]
```

### DAC

- [查看产品详情](zh_CN/unit/dac)

- Chip: **ADS1100**

- Addr: **0x48**

```python
# init --- Effective IO: PORTA
unit_dac = unit.get(unit.DAC, unit.PORTA)

# data: 0~4096, maybe 2640 output is 3.3V, max is 3.7V
# save: True or False, whether to save to eeprom 
unit_dac.writeData(data, save=False)
# vol: 0~3.3
# save: True or False, whether to save to eeprom 
unit_dac.setVoltage(vol, save=False)
```

### NCIR

- [查看产品详情](zh_CN/unit/ncir)

- Chip: **MLX90614**

- Addr: **0x5a**

```python
# init --- Effective IO: PORTA | PORTC
unit_ncir = unit.get(unit.NCIR, unit.PORTA)
# tmp: -70°C ~ 382.2°C
tmp = unit_ncir.temperature
```

### Joystick

- [查看产品详情](zh_CN/unit/joystick) 

- Chip: **ATmega328P**

- Addr: **0x52**

```python
# init --- Effective IO: PORTA | PORTC
unit_joystick = unit.get(unit.JOYSTICK, unit.PORTA)
# X direction value, 0 ~ 255
x = unit_joystick.X
#  X invert direction value, 0 ~ 255
x = unit_joystick.InvertX
# Y direction value, 0 ~ 255
y = unit_joystick.Y
# Y invert direction value, 0 ~ 255
y = unit_joystick.InvertY
# if press, return 1, else 0
press = unit_joystick.Press
```

### ToF

- [查看产品详情](zh_CN/unit/tof)

- Chip: **VL53L0X**

- Addr: **0x29**

```python
# init --- Effective IO: PORTA | PORTC
unit_tof = unit.get(unit.TOF, unit.PORTA)
# distance: 30 ~ 800(mm), other is invalid
distance = unit_tof.distance
```

### Color

- [查看产品详情](zh_CN/unit/color)

- Chip: **TCS3472**

- Addr: **0x29**

``` python
# init --- Effective IO: PORTB
unit_color = unit.get(unit.COLOR, unit.PORTA)

# return: tuple, like (3521, 1515, 1147, 865), (clear, red, green, blue)
raw = unit_color.rawData

# return red value, range 0~255
red = unit_color.red
# return green value, range 0~255
unit_color.green
# return blue value, range 0~255
unit_color.blue
```

### Extend IO

- [查看产品详情](zh_CN/unit/extio)

- Chip: **PCA9554PW**

- Addr: ***0x27***

```python
# init --- Effective IO: PORTA | PORTC
unit_extIO = unit.get(unit.EXT_IO, unit.PORTA)
# Method
# mode: unit_extIO.ALL_OUTPUT or unit_extIO.ALL_INPUT
unit_extIO.setPortMode(mode)
# pin: 0~7, mode: 1 or 0, 1:output, 0:INPUT
unit_extIO.setPinMode(pin, mode)
# state --> 0x00 ~ 0xff, 
# 0 pin in 0 bit 7 pin in 7 bit
# singState = (state >> pin) & 0x01
state = unit_extIO.digitReadPort()
# pin: 0~7
# state --> 0: LOW, 1:HIGH
state = unit_extIO.digitRead(pin)
# state: 0x00 ~ 0xff
unit_extIO.digitWritePort(state)
# pin: 0 ~ 7, value: 0:LOW, 1:HIGH
unit_extIO.digitWrite(pin, value)
```

### RFID

- [查看产品详情](zh_CN/unit/rfid)

- Chip: **MFRC522**

- Addr: **0x28**

```python
# init --- Effective IO: PORTA | PORTC
unit_rfid = unit.get(unit.RFID, unit.PORTA)
# if card near return True, else return False
state = unit_rfid.isCardOn()
# return card Uid (string), like '73f66c1bf2'
# if read fail, return ''
uid = unit_rfid.readUid()
# block: must (block + 1) % 4 != 0
# data: string, int, float, will convert to string
unit_rfid.writeBlock(block, data)
# return block data (string)
dataStr = unit_rfid.readBlockStr(block)
```

### CardKB

- [查看产品详情](zh_CN/unit/cardkb)

- Chip: **ATmega328P**

- Addr: ***0x5F***

```python
# init --- Effective IO: PORTB
unit_cardKB = unit.get(unit.CARDKB, unit.PORTA)

# isNewKeyPress() --> if press key return True else False
  unit_cardKB.isNewKeyPress():
  # return last press key value at once, type: int  
  key = unit_cardKB.keyData
  # return press string, len < 50, press ESC clear, press [X] delete last one
  keyString = unit_cardKB.keyString
```

### Tracker

- [查看产品详情](zh_CN/unit/track)

- Chip: **ATmega328P**

- Addr: ***0x5a***

```python
# init --- Effective IO: PORTA | PORTC
unit_track = unit.get(unit.TRACK, unit.PORTA)
# pos: 1, 2, 3, 4
# value: 0 ~ 1024
value = unit_track.getAnalogValue(pos)
# pos: 1, 2, 3, 4
# value: 0 ~ 1024
unit_track.setAnalogValue(pos, value)
# pos: 1, 2, 3, 4
# value: 0, 1
value = unit_track.getDigitalValue(pos)
```

### Makey

- [查看产品详情](zh_CN/unit/makey)

- Chip: **ATmega328P**

- Addr: **0x51**

```python
# init --- Effective IO: PORTA | PORTC
unit_makey = unit.get(unit.MAKEY, unit.PORTA)
# data:-1, 0 ~ 15
data = unit_makey.value
```

---------------------------------------

## IO/ADC/DAC

### PIR

- [查看产品详情](zh_CN/unit/pir)

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_pir = unit.get(unit.PIR, unit.PORTB)
# return 0 or 1
state = pir.state
```


### Button

- [查看产品详情](zh_CN/unit/button)

``` python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_btn = unit.get(unit.BUTTON, unit.PORTB)

# Method
# if set the callback param, it will interrupt callback function
# or if not set param it will return result(True or False) at once
unit_btn.wasPressed(callback=None)
unit_btn.wasReleased(callback=None)
unit_btn.wasDoublePress(callback=None)
# holdTime: sec
unit_btn.pressFor(holdTime=1.0, callback=None):

#example 
def on_wasPressed():
  lcd.print('Button was Pressed\n')

def on_wasReleased():
  lcd.print('Button was Released\n')

def on_pressFor():
  lcd.print('Button press for 1.2s press hold\n')
  
def on_doublePress():
  lcd.print('Button was double press\n')

unit_btn.wasPressed(on_wasPressed)
unit_btn.wasReleased(on_wasReleased)
unit_btn.wasDoublePress(on_doublePress)
unit_btn.pressFor(1.2, on_pressFor)
```

### Dual Button

- [查看产品详情](zh_CN/unit/button)

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_dualButton = unit.get(unit.DUAL_BUTTON, unit.PORTB)
# btnRed, btnRed method like button unit
btnRed = unit_dualButton.btnRed
btnRed = unit_dualButton.btnBlue
```


### Relay

- [查看产品详情](zh_CN/unit/relay)

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_relay = unit.get(unit.RELAY, unit.PORTB)
# select com connect on
unit_relay.on()
# select com connect off
unit_relay.off()
```


### IR

- [查看产品详情](zh_CN/unit/ir)

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_ir = unit.get(unit.IR, unit.PORTB)
# ir tx 25hz signal with 38khz signal carrier
unit_ir.txOn()
# off tx off
unit_ir.txOff()
# if receive ir signal return 1 else return 0
value = unit.rxStatus()
```


### Angle

Analog Device ( [查看产品详情](zh_CN/unit/angle)

``` python
# init --- Effective IO: PORTB
unit_angle = unit.get(unit.ANGLE, unit.PORTB)

# get raw value, range 0 ~ 4095
adValue = unit_angle.readraw()

# get filter value, range 0 ~ 1023
filterValue = unit_angle.read()
```

### Light

- [查看产品详情](zh_CN/unit/light)

```python
# init --- Effective IO: PORTB
unit_light = unit.get(unit.LIGHT, unit.PORTB)
# adc value, range 0 ~ 1024
analogValue = unit_light.analogValue
# digital value, only 0 or 1, base rotate the knob 
digitalValue = unit_light.digitalValue
```

### Earth

- [查看产品详情](zh_CN/unit/light)

```python
# init --- Effective IO: PORTB
unit_earth = unit.get(unit.LIGHT, unit.PORTB)
# adc value, range 0 ~ 1024
analogValue = unit_earth.analogValue
# digital value, only 0 or 1, base rotate the knob 
digitalValue = unit_earth.digitalValue
```

### Neopixel

- [查看产品详情](zh_CN/unit/neopixel)

- Chip: **SK6812**

```python
# init --- Effective IO: PORTA | PORTB | PORTC, number --> 0 ~ 1023
unit_Neopixel = unit.get(unit.NEOPIXEL, unit.PORTB, number)
# pos: 1 ~ number
# color: 0x000000 ~ 0xffffff rgb888
unit_Neopixel.setColor(pos, color)
# 0 < posBegin < posEnd < number
# color: 0x000000 ~ 0xffffff rgb888
unit_Neopixel.setColor(posBegin, posEnd, color)
# color: 0x000000 ~ 0xffffff rgb888
unit_Neopixel.setColorAll(color)
# brightness: 0~255
unit_Neopixel.setBrightness(brightness)
```

### RGB

- [查看产品详情](zh_CN/unit/rgb)

- Chip: **SK6812**

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_Rgb = unit.get(unit.RGB, unit.PORTB)
# pos: 1 ~ number
# color: 0x000000 ~ 0xffffff rgb888
unit_Rgb.setColor(pos, color)
# 0 < posBegin < posEnd < number
# color: 0x000000 ~ 0xffffff rgb888
unit_Rgb.setColor(posBegin, posEnd, color)
# color: 0x000000 ~ 0xffffff rgb888
unit_Rgb.setColorAll(color)
# brightness: 0~255
unit_Rgb.setBrightness(brightness)
```

### Weight

- [查看产品详情](zh_CN/unit/Servo)

- Chip: **HX711**

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_weight = unit.get(unit.WEIGHT, unit.PORTA)
# 0 ~ 16777216 (24bit)
rawData = unit_weight.rawData
# get weight
weight = unit_weight.weight
# set weight to zero
unit_weight.zero()
```

### Servo

- [查看产品详情](zh_CN/unit/Servo)

```python
# init --- Effective IO: PORTA | PORTB | PORTC
unit_servo = unit.get(unit.SERVO, unit.PORTA)
# us: 500 ~ 2500, 50HZ, High level duration
unit_servo.write_us(us)
# degrees: 0 ~ 180,  degree
unit_servo.write_angle(degrees)
```

---------------------------------------

## UART


### Finger

- [查看产品详情](zh_CN/unit/finger)

- Chip: **FPC1020A**

```python
# init --- Effective IO: PORTA | PORTC
unit_finger = unit.get(unit.FINGER, unit.PORTC)
# Method
# will change if finger state change
unit_finger.state

# user_id: 0 ~ 255
# access: 1, 2, 3
# note: if call this fun, unit_finger.state -> 'Wait add finger'
# finish: unit_finger.state -> 'Wait add finger'
# fail: unit_finger.state -> 'Add user fail'
unit_finger.addUser(user_id, access)

# if read know finger, will callback fingerCb with 2 formal parameter 
def fingerCb(user_id, access):
  if user_id == 1 and access == 2:
    pass
unit_finger.readFingerCb(callback=fingerCb)

# user_id: 0~255
# finish: unit_finger.state -> 'Delete user finish'
# fail: unit_finger.state -> 'Delete user fail'
unit_finger.removeUser(user_id)

# remove all user data
unit_finger.removeAllUser()
```

