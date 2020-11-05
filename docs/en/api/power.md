# Power

*Power related functions depend on the IP5306 chip. Please refer to the data sheet [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) as required.*

* The older M5STACK hardware does not support communication with IP5306 chip. When using functions, also consider supporting out of control cases. *

Use initialization, communication check, and control in this order, as shown in the example below.

```arduino
  M5.Power.begin();
  if(!M5.Power.canControl()) {
    //can't control.
    return;
  }
  M5.Power.lightSleep(SLEEP_SEC(5));
```
## begin()

**Syntax:**

`void begin()`

**Description:**

Performs initialization of Power class.


**Function argument**

No argument.

**Function return value**

No return value.

## setPowerBoostOnOff()

**Syntax:**

`bool setPowerBoostOnOff(bool en)`

**Description:**

Change the power on / off method.
The power does not turn off when connected via USB.

**Function argument**

| Param | Description |
| --- | --- |
|true|Press and hold to turn on / off.|
|false|Turn on / off with two short presses.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |

## setPowerBoostSet()

**Syntax:**

`bool setPowerBoostSet(bool en)`

**Description:**

Change the power on / off method.
The power does not turn off when connected via USB.

**Function argument**

| Param | Description |
| --- | --- |
|true| ON / OFF in one short press.|
|false| Follow the setPowerBoostOnOff () method.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |

## setPowerVin()

**Syntax:**

`bool setPowerVin(bool en)`

**Description:**

When the power supply from USB etc. is cut off,
Decide whether to turn on the power again. 

**Function argument**

| Param | Description |
| --- | --- |
|true|The power will be turned on again. |
|false|The power will not be turned on again. |

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |

## setPowerWLEDSet()

**Syntax:**

`bool setPowerWLEDSet(bool en)`

**Description:**

Set the mode to turn on the power LED.
In addition, IP5306 of M5GO is not wired and can not be controlled by this function.

**Function argument**

| Param | Description |
| --- | --- |
|true| Turn on the LED with two short presses|
|false| Turn on the LED with Press and hold|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |

## setPowerBtnEn()

**Syntax:**

`bool setPowerBtnEn(bool en)`

**Description:**

Set whether to accept the power button.

About the behavior when not accepting the button:

If the power is on, the power button only accepts CPU reset.

If the power is not supplied, the power can not be turned on.

**Function argument**

| Param | Description |
| --- | --- |
|true| Accept power operation.|
|false| Does not accept power control.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |


## setLowPowerShutdownTime()

**Syntax:**

`bool setLowPowerShutdownTime(ShutdownTime time)`

**Description:**

Set the waiting time until IP5306 makes the energy saving judgment and the power is turned off.

**Function argument**

| Param | Description |
| --- | --- |
|ShutdownTime::SHUTDOWN_8S  | wait at  8sec.|
|ShutdownTime::SHUTDOWN_16S | wait at 16sec.|
|ShutdownTime::SHUTDOWN_32S | wait at 32sec.|
|ShutdownTime::SHUTDOWN_64S | wait at 64sec.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. | 


## setPowerBoostKeepOn()

**Syntax:**

`bool setPowerBoostKeepOn(bool en)`

**Description:**

This function sets/unsets always boost output mode.  

**Function argument**

| Param | Description |
| --- | --- |
|true| Always output power.|
|false| not Always output power.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |

## setKeepLightLoad()

**Syntax:**

`bool setKeepLightLoad(bool en)`

**Description:**

This function sets/unsets to disable the automatic shutdown.  
(Deprecated: This function will be disabled and will be removed in the near future)

**Function argument**

| Param | Description |
| --- | --- |
|true| When the current is too small, IP5306 will *not* automatically shutdown, | 
|false| When the current is too small, IP5306 will automatically shutdown.  |

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |


## setLowPowerShutdown()

**Syntax:**

`bool setLowPowerShutdown(bool en)`

**Description:**

Set the power saving automatic shutdown function.
(Deprecated: this function is disabled and will eventually disappear. Use setPowerBoostKeepOn())

**Function argument**

| Param | Description |
| --- | --- |
|true|Enable energy saving shutdown function.|
|false|Disable energy saving shutdown function.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |


## setAutoBootOnLoad()

**Syntax:**

`bool setAutoBootOnLoad(bool en)`

**Description:**

Set whether to automatically start when power consumption occurs on the secondary side of IP5306.  

**Function argument**

| Param | Description |
| --- | --- |
|true|Enable the auto start function.|
|false|Disable auto start function.|

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |


## setCharge()

**Syntax:**

`bool setCharge(bool en)`

**Description:**

This function sets/unsets charge mode. When the battery is fully charged,  

try set charge enable->disable->enable, It can be recharged.  

**Function argument**

| Param | Description |
| --- | --- |
|true|Start charging, |
|false| Stop charging. |

**Function return value**

| Param | Description |
| --- | --- |
|true|Control success.|
|false|Control failure. |

## isChargeFull()

**Syntax:**

`bool isChargeFull()`

**Description:**

This function checks if the battery is fully charged.  

**Function argument**

No argument.  

**Function return value**

| Param | Description |
| --- | --- |
|true|Full charged,  |
|false|Not full charged.  |


## canControl()

**Syntax:**

`bool canControl()`

**Description:**

This function checks the existence of the battery controller over I2C communication.  

**Function argument**

No argument.

**Function return value**

| Param | Description |
| --- | --- |
|true|Battery controller is found,  |
|false|Battery controller is not found.  |


## isCharging()

**Syntax:**

`bool isCharging()`

**Description:**

This function checks the state of the charging.  

**Function argument**

No argument.  

**Function return value**

| Param | Description |
| --- | --- |
|true|In charging,  |
|false| Not in charging.|


## getBatteryLevel()

**Syntax:**

`int8_t getBatteryLevel()`

**Description:**

This function gets the battery level.  

**Function argument**

No argument.

**Function return value**

Battery remaining percentage. (0-100 %)  

Returns -1 if it can not communicate with the controller.  

## setWakeupButton()

**Syntax:**

`void setWakeupButton(uint8_t button)`

**Description:**

Sets the signal port to monitor when waking from sleep.

**Function argument**

| Param | Description |
| --- | --- |
|button| number of port.  |

**Function return value**

No return value.

**Example of use:**

```arduino
setWakeupButton(BUTTON_A_PIN);
```

## reset()

**Syntax:**

`void reset();`

**Description:**

Reset CPU and reboot.

**Function argument**

No argument.

**Function return value**

No return value.

## isResetbySoftware()

**Syntax:**

`bool isResetbySoftware()`

**Description:**

It is judged whether the current activation status is after CPU reset.
(It will be true if equivalent processing from reset () or RTOS etc. is performed)

**Function argument**

No argument,

**Function return value**

| Param | Description |
| --- | --- |
|true| By software reset|
|false| For other reasons|

## isResetbyWatchdog()

**Syntax:**

`bool isResetbyWatchdog()`

**Description:**

Determines whether the current activation status is after the watchdog.

**Function argument**

No argument,

**Function return value**

| Param | Description |
| --- | --- |
|true | By watchdog|
|false| For other reasons|

## isResetbyDeepsleep()

**Syntax:**

`bool isResetbyDeepsleep()`

**Description:**

Determines if the current wakeup state is after deepSleep ().

**Function argument**

No argument,

**Function return value**

| Param | Description |
| --- | --- |
|true | after deepSleep()|
|false| For other reasons|

## isResetbyPowerSW()

**Syntax:**

`bool isResetbyPowerSW()`

**Description:**

Determines whether the current start state is after power on from the power switch.

**Function argument**

No argument,

**Function return value**

| Param | Description |
| --- | --- |
|true | By PowerSwitch|
|false| For other reasons|


## deepSleep()

**Syntax:**

`void deepSleep(uint64_t time_in_us)`

**Description:**

This function shifts to deep sleep mode.  

It starts when the specified time or port status changes.
After waking up, the CPU will be restarted instead of running from the next line.

**Example of use:**
Save energy for 5 seconds and then restart.
```arduino
deepSleep(SLEEP_SEC(5));
```

## lightSleep()

**Syntax:**

`void lightSleep(uint64_t time_in_us)`

**Description:**
This function shifts to deep sleep mode.  

It starts when the specified time or port changes.
After returning, it will be executed from the next line.

Power saving capability is lacking compared to deepSleep().

**Example of use:**
Save energy for 5 seconds and then restart.
```arduino
lightSleep(SLEEP_SEC(5));
```

## powerOFF()

**Syntax:**

`void powerOFF()`

**Description:**
Turn off the power.

By turning off the IP5306 after 8 seconds using the power saving function
Turn off the power supplied to the circuit side.

**Usage notes:**
M5Stack does not have a means to forcibly turn off the power.

So,this function is realized by using the power saving function of IP5306.
If the user is consuming current in the circuit IP5306 fails to determine the power off.
