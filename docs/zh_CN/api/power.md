# Power

*电源相关的函数可能涉及 IP5306 芯片的寄存器，如果有不明白的地方，可以查看 [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) 的寄存器手册。*

* IP5306芯片不支持与旧M5STACK硬件通信。使用功能时，还要考虑支持失控情况。*

按顺序使用：初始化，通信检查和控制，如以下示例所示。

```arduino
  M5.Power.begin();
  if(!M5.Power.canControl()) {
    //can't control.
    return;
  }
  M5.Power.lightSleep(SLEEP_SEC(5));
```
## begin()

**函数原型:**

<mark>void begin()</mark>

**功能:**

Performs initialization of Power class.

**参数**

无。

**返回值**

无。 

## setPowerBoostOnOff()

**函数原型:**

<mark>bool setPowerBoostOnOff(bool en)</mark>

**功能:**

更改电源开/关方法。
通过USB连接时，电源不会关闭。

**参数**

| 値 |功能 |
| --- | --- |
|true|按住可打开/关闭。|
|false|两次短按打开/关闭。|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## setPowerBoostKeepOn()

**函数原型:**

<mark>bool setPowerBoostKeepOn(bool en)</mark>

**功能:**

更改电源开/关方法。
通过USB连接时，电源不会关闭。

**参数**

| 値 |功能 |
| --- | --- |
|true| 短按一下开/关。|
|false| 遵循setPowerBoostOnOff（）方法。|

**返回值**

|true| 控制成功 |
|false| 控制失败|

## setPowerVin()

**函数原型:**

<mark>bool setPowerVin(bool en)</mark>

**功能:**

当USB等电源切断时，
决定是否再次打开电源。

**参数**

| 値 |功能 |
| --- | --- |
|true| 电源将再次打开。|
|false| 电源不会再次打开。|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## setPowerWLEDSet()

**函数原型:**

<mark>bool setPowerWLEDSet(bool en)</mark>

**功能:**

设置模式以打开电源LED。
M5GO的IP5306没有接线，无法通过此功能进行控制。

**参数**

| 値 |功能 |
| --- | --- |
|true| 两次短按即可打开LED|
|false| 按住可打开LED|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## setPowerBtnEn()

**函数原型:**

<mark>bool setPowerBtnEn(bool en)</mark>

**功能:**

设置是否接受电源按钮。

关于不接受按钮时的行为：
如果电源打开，电源按钮仅接受CPU复位。
如果未提供电源，则无法打开电源。

**参数**

| 値 |功能 |
| --- | --- |
|true|接受电源操作。|
|false|不接受电源控制。|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|


## setLowPowerShutdownTime()

**函数原型:**

<mark>bool setLowPowerShutdownTime(ShutdownTime time)</mark>

**功能:**

设置等待时间，直到IP5306进行节能判断并关闭电源。

**参数**

| 値 |功能 |
| --- | --- |
|ShutdownTime::SHUTDOWN_8S | 等待8秒。|
|ShutdownTime::SHUTDOWN_16S| 等待16秒。|
|ShutdownTime::SHUTDOWN_32S| 等待32秒。|
|ShutdownTime::SHUTDOWN_64S| 等待64秒。|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|


## setPowerBoostKeepOn()

**函数原型:**

<mark>bool setPowerBoostKeepOn(bool en)</mark>

**功能:**

此功能设置/取消设置始终提升输出模式。

**参数**

| 値 |功能 |
| --- | --- |
|true|总是输出功率。|
|false|不总是输出功率。 |

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## setKeepLightLoad()

**函数原型:**

<mark>bool setKeepLightLoad(bool en)</mark>

**功能:**

此功能设置/取消设置以禁用自动关闭。
（已弃用：此功能将被禁用，并将在不久的将来删除）


**参数**

| 値 |功能 |
| --- | --- |
|true|当电流消耗低时，不会发生自动关闭 |
|false|电流消耗低时自动关闭 |

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## setLowPowerShutdown()

**函数原型:**

<mark>bool setLowPowerShutdown(bool en)</mark>

**功能:**

此功能设置/取消设置以禁用自动关闭。
（已弃用：此功能将被禁用，并将在不久的将来删除）


**参数**

| 値 |功能 |
| --- | --- |
|true|启用节能关机功能。|
|false|禁用节能关机功能。|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## setAutoBootOnLoad()

**函数原型:**

<mark>bool setAutoBootOnLoad(bool en)</mark>

**功能:**

设置是否在IP5306的次级侧发生功耗时自动启动.  

**参数**

| 値 |功能 |
| --- | --- |
|true|启用自动启动功能。|
|false|禁用自动启动功能。|

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|


## setCharge()

**函数原型:**

<mark>bool setCharge(bool en)</mark>

**功能:**

此功能设置/取消设置充电模式。电池充满电后，
尝试设置充电启用 - >禁用 - >启用，它可以充电。

**参数**

| 値 |功能 |
| --- | --- |
|true|充电开始指令  |
|false|充电停止指令  |

**返回值**

| 値 |功能 |
| --- | --- |
|true| 控制成功 |
|false| 控制失败|

## isChargeFull()

**函数原型:**

<mark>bool isChargeFull()</mark>

**说明:**

确认完全充电.  

**参数**

无。  

**返回值**

| 値 |功能 |
| --- | --- |
|true|完全充电  |
|false|没有完全充电  |


## canControl()

**函数原型:**

<mark>bool canControl()</mark>

**功能:**

此功能通过I2C通信检查电池控制器是否存在。  

**参数**

无。  

**返回值**

| 値 |功能 |
| --- | --- |
|true|电源控制器发现  |
|false|找不到电源控制器  |


## isCharging()

**函数原型:**

<mark>bool isCharging()</mark>

**功能:确认是否正在充电**

**参数**

无。  

**返回值**

| 値 |功能 |
| --- | --- |
|true|在充电过程中| 
|false|不充电 |


## getBatteryLevel()

**函数原型:**

<mark>int8_t getBatteryLevel()</mark>

**功能:**

返回电池电量  

**参数**

无。  

**返回值**

返回0到100范围内的电池电量.（单位：％）  
如果无法检查剩余金额，则返回-1  


## setWakeupButton()

**函数原型:**

<mark>void setWakeupButton(uint8_t button)</mark>

**功能:设置睡眠返回端口**

**参数**

| 値 |功能 |
| --- | --- |
|button| 端口号|

**返回值**

无。

**使用示例**

```arduino
setWakeupButton(BUTTON_A_PIN);
```

## reset()

**函数原型:**

<mark>void reset()</mark>

**功能:执行CPU重置**

**参数**

无。

**返回值**

无。

## isResetbySoftware()

**函数原型:**

<mark>bool isResetbySoftware()</mark>

**功能:**

判断当前激活状态是否在CPU复位后。
（如果执行reset（）或RTOS等的等效处理，则会成立）

**参数**

无。

**返回值**

| 値 |功能 |
| --- | --- |
|true | 通过软件重置|
|false| 出于其他原因|

## isResetbyWatchdog()

**函数原型:**

<mark>bool isResetbyWatchdog()</mark>

**功能:**

确定当前激活状态是否在看门狗之后。

**参数**

无。

**返回值**

| 値 |功能 |
| --- | --- |
|true | 通过看门狗|
|false| 出于其他原因|

## isResetbyDeepsleep()

**函数原型:**

<mark>bool isResetbyDeepsleep()</mark>

**功能:**

确定当前唤醒状态是否在deepSleep（）之后。

**参数**

无。

**返回值**

| 値 |功能 |
| --- | --- |
|true | 在deepSleep()之后|
|false| 出于其他原因|

## isResetbyPowerSW()

**函数原型:**

<mark>bool isResetbyPowerSW()</mark>

**功能:**

确定当前启动状态是否在电源开关接通电源后。

**参数**

无。

**返回值**

| 値 |功能 |
| --- | --- |
|true | 通过电源开关|
|false| 出于其他原因|


## deepSleep()

**函数原型:**

<mark>void deepSleep()</mark>

**功能:**
此功能转换为深度睡眠模式。
它在指定的时间或端口状态更改时启动。
唤醒后，CPU将重新启动，而不是从下一行运行。

**使用示例**
节能5秒钟然后重新启动。
```arduino
deepSleep(SLEEP_SEC(5));
```
## lightSleep()

**函数原型:**

<mark>void lightSleep(uint64_t time_in_us)</mark>

**功能:**
此功能转换为深度睡眠模式。
它在指定的时间或端口更改时启动。
返回后，它将从下一行执行。
与deepSleep()相比，缺少省电功能。

**使用示例**
节能5秒钟然后重新启动。
```arduino
lightSleep(SLEEP_SEC(5));
```

## powerOFF()

**函数原型:**

<mark>void powerOFF()</mark>

**功能:**
关掉电源。
使用省电功能在8秒后关闭IP5306
关闭提供给电路侧的电源。

**使用注意事项**
M5Stack无法强行关闭电源。
因此，该功能通过使用IP5306的省电功能实现。
如果用户在电路中消耗电流，IP5306无法确定电源关闭。

