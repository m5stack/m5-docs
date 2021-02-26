# I/O (GPIO/ADC/DAC/PWM)

*Refer to Arduino API of [Arduino](http://www.arduino.cc)*

*For the sake of convenience, I will focus on things that are closely related to M5Stack*

*M5STACK PIN allocation:*
	
| pin No | Name |allocation|
| ---  |  --- |   ---    |
|    0 |  G0  |downloader |
|    1 |  T1  |UART      |
|    2 |  G2  |Side terminal (except M5FIRE),M5-BUS|
|    3 |  R1  |UART     |
|    4 |  G4  |TF|
|    5 |  G5  |Side terminal (except M5FIRE),M5-BUS|
|    6 |  G6 |SDIO      |
|    7 |  G7 |SDIO      |
|    8 |  G8 |SDIO      |
|    9 |  G9 |SDIO      |
|   10 |  G10 |SDIO      |
|   11 |  G11 |SDIO      |
|   12 |  G12 |IIS_SCLK      |
|   13 |  G13 |IIS_WS      |
|   14 |  G14 |LCD      |
|   15 |  G15 |IIS_OUT      |
|   16 |  R2 |UART      |
|   17 |  T2 |UART     |
|   18 |  G18 |TF,Top terminal(SCK),M5-BUS|
|   19 |  G19 |TF,Top terminal(MISO),M5-BUS|
|   21 |  G21 |GROVE-A(SDA)|
|   22 |  G22 |GROVE-A(SCL)|
|   23 |  G23 |TF,Top terminal(MOSI)|
|   25 |  G25 |Speaker,Side terminal (except M5FIRE),M5-BUS|
|   26 |  G26 |Side terminal (except M5FIRE),M5-BUS|
|   27 |  G27 |LCD      |
|   32 |  G32 |LCD BackLight |
|   33 |  G33 |LCD      |
|   34 |  G34 |None      |
|   35 |  G35 |Side terminal (except M5FIRE)|
|   36 |  G36 |Side terminal (except M5FIRE)|
|   37 |  G37 |Button C|
|   38 |  G38 |Button B|
|   39 |  G39 |Button A|


## digitalRead()

**Syntax:**

`int digitalRead(uint8_t pin)`

**Description:**

Reads the state of the terminal.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8</code> |Pin No |

**Function return value:**

Pin input state(0/1)

**Note**

1)If the pin mode is not set to INPUT, the correct result will not be returned.

2)If there are other circuits in the control line, they will be affected.

**Example of use;**

```clike
uint32_t pin21_data;
pin21_data = digitalRead(21);
```

## digitalWrite()

**Syntax:**

`void digitalWrite(uint8_t pin, uint8_t val)`

**Description:**

Writes the state of the terminal.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8</code> |pin No |
| val | <code>uint8</code> |出力状態(0/1) |

**Function return value:**

None.

**Note**

1)If the pin mode is not set to OUTPUT, the correct result will not be returned.

2)If there are other circuits in the control line, please note it as it may be physically damaged.


**Example of use;**

```clike
digitalWrite(2,1);
```

## pinMode()

**Syntax:**

`void pinMode(uint8_t pin, uint8_t mode)`

**Description:**

Set terminal input / output mode.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8</code> |pin No |
| mode | <code>uint8</code> |INPUT,OUTPUT,INPUT_PULLUPのいずれか|

**Function return value:**

None.

**Note**

If there are other circuits on the bus, please note that there is a possibility of physical damage.

For example, when the speaker (G25) terminal is set to INPUT mode, the current flowing to the speaker causes the main unit to generate heat.

Make sure that the operations are correct as there is a risk of damage.

**Example of use;**

```clike
pinMode(2,INPUT);
```

## analogRead()

**Syntax:**
`uint16_t analogRead(uint8_t pin)`

**Description:**

Reads the value of the analog terminal.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8</code> |pin No |

**Function return value:**

Read result. The maximum value of the response is determined by analogSetWidth ().

**Note**

G35 and G36 can be used in M5Stack.

**Example of use;**

```clike
uint16_t ret;
ret=analogRead(35);
```

## dacWrite()

**Syntax:**

`void dacWrite(uint8_t pin, uint8_t value)`

**Description:**

Output command to analog terminal.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8</code> |pin No |
| value | <code>uint8</code> |set output voltage |

**Function return value:**

None.。

**Note**

G25 and G26 can be used in M5Stack.

**Example of use;**

```clike
dacWrite(25,0x40);
```

## ledcSetup()

**Syntax:**

`double ledcSetup(uint8_t channel, double freq, uint8_t resolution_bits)`

**Description:**

Set the duty output

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| channel | <code>uint8</code> |channel (0～15) |
| freq | <code>double</code> |frequency (Hz) |
| resolution_bits | <code>uint8_t</code> |Number of full scale bits for duty indication |

**Function return value:**

Actual output frequency.

**Note**

Channel and GPIO port numbers are not identical.

It is good to recognize that it is a number to memorize the setting.



## ledcAttachPin()

**Syntax:**

`void ledcAttachPin(uint8_t pin, uint8_t chan)`

**Description:**

Specify the port to output.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8_t</code> |pin No) |
| chan | <code>uint8_t</code> |Channel(0～15) |

**Function return value:**

None.

## ledcWrite()

**Syntax:**

`void ledcWrite(uint8_t chan, uint32_t duty)`

**Description:**

Output with the specified duty value.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| chan | <code>uint8_t</code> |Channel(0～15) |
| duty | <code>uint32_t</code> |Duty |

**Function return value:**

None.

**Note**

The unit of duty depends on the bit scale set at initialization.

When specifying with 8 bits, specifying 0xFF results in 100% output.

## ledcDetachPin()

**Syntax:**

`void ledcDetachPin(uint8_t pin)`

**Description:**

Release the assigned port and stop the output.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | <code>uint8_t</code> |pin No) |


**Function return value:**

None.

## analogSetCycles()

**Syntax:**

`void analogSetCycles(uint8_t cycles)`

**Description:**

Set the period of a single sampling, value 1-255, default 8.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| cycles | uint8_t | sampling period |

**Function return value:**

None

## analogSetWidth()

**Syntax:**

`void analogSetWidth(uint8_t bits)`

**Description:**

Set the ADC sampling resolution to 9-12, default to 12.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| bits | uint8_t | sampling resolution |

**Function return value:**

None

## analogReadResolution()

**Syntax:**

`void analogReadResolution(uint8_t bits)`

**Description:**

Set the reading resolution of analog data, value 1 to 16, default is 12. If it is between 9 and 12, it will be equal to the set hardware resolution, otherwise the value will be moved.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| bits | uint8_t | sampling resolution |

**Function return value:**

None

## analogSetSamples()

**Syntax:**

`void analogSetSamples(uint8_t samples)`

**Description:**

Set the actual sampling times of single sampling, take the value of 1 ~ 255, default is 1;

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| samples | uint8_t | sampling times |

**Function return value:**

None

## analogSetAttenuation()

**Syntax:**

`void analogSetAttenuation(adc_attenuation_t attenuation)`

**Description:**

Set the global input attenuation of ADC to ADC_0db, ADC_2_5db, ADC_6db, ADC_11db, default to 11 DB

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| attenuation | adc_attenuation_t | attenuation |

**Function return value:**

None

## analogSetPinAttenuation()

**Syntax:**

`void analogSetPinAttenuation(uint8_t pin, adc_attenuation_t attenuation)`

**Description:**

Setting input attenuation for a single IO port

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | specified pin |
| attenuation | adc_attenuation_t | attenuation |

**Function return value:**

None


## hallRead()

**Syntax:**

`int hallRead(void));`

**Description:**

Read Hall Sensor.

**Function argument**
	
None

**Function return value:**

int.

## attachInterrupt()

**Syntax:**

`void attachInterrupt(pin, ISR(callback function), interrupt type/mode)`

**Description:**

set pin interrupt.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | pin No. |
| ISR | callcack function | which function you want excute |
| interrupt | mode | CHANGE/RISING/FALLING |

**Function return value:**

None.

## detachInterrupt()

**Syntax:**

`void detachInterrupt(pin)`

**Description:**

Prohibit specified pin interruptio.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | pin No. |

**Function return value:**

None.

## ledcReadFreq()

**Syntax:**

`double ledcReadFreq(uint8_t channel)`

**Description:**

Returns the current frequency of the specified channel.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| channel | uint8_t | specified channel |

**Function return value:**

current frequency

## ledcRead()

**Syntax:**

`uint32_t ledcRead(uint8_t channel)`

**Description:**

Returns the value of the specified channel duty cycle.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| channel | uint8_t | specified channel |

**Function return value:**

duty cycle

## adcAttachPin()

**Syntax:**

`bool adcAttachPin(uint8_t pin)`

**Description:**

This is Non-blocking mode.Connect pins to ADC (and remove any other analog modes that may be opened).

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | specified pin |

**Function return value:**

Return 1 if boot succeeds


## adcStart()

**Syntax:**

`bool adcStart(uint8_t pin)`

**Description:**

This is Non-blocking Start ADC Conversion on Connected Pins.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | specified pin |

**Function return value:**

Return 1 if boot succeeds

## adcBusy()

**Syntax:**

`bool adcBusy(uint8_t pin)`

**Description:**

This is Non-blocking mode Check whether the ADC conversion is in progress.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | specified pin |

**Function return value:**

Conversion returning 1

## adcEnd()

**Syntax:**

`uint16_t adcEnd(uint8_t pin)`

**Description:**

This is Non-blocking mode Get the result of the transformation (wait if it's not finished).

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| pin | uint8_t | specified pin |

**Function return value:**

Returns the conversion result
