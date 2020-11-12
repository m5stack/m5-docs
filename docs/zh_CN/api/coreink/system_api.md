# System & Button & RTC

## begin()

**函数原型：**

`int begin(bool InkEnable = true, bool wireEnable = false);`

**功能：初始化 E-Ink ，RTC , I2C , Speaker**


**例程**

```arduino
#include "M5CoreInk.h"

void setup() {
  M5.begin(true,false);
}
```

## update()

**函数原型：**

`void update();`

**功能：刷新设备按键/蜂鸣器状态**

**例程：**
```arduino

if( M5.BtnPWR.wasPressed())
{
  Serial.printf("Btn wasPressed!");
}
M5.update();

```

## Button

**功能：检测设备按键状态**

`M5.BtnUP.wasPressed()`

`M5.BtnDOWN.wasPressed()`

`M5.BtnMID.wasPressed()`

`M5.BtnEXT.wasPressed()`

`M5.BtnPWR.wasPressed()`

?>RTC相关函数使用前请使用`M5.begin();`进行初始化

## Speaker

**功能：蜂鸣器驱动**

`void end();`

`void mute();`

`void tone(uint16_t frequency);`

`void tone(uint16_t frequency, uint32_t duration);`

`void beep();`

`void setBeep(uint16_t frequency, uint16_t duration);`

`void update();`

`void write(uint8_t value);`

`void setVolume(uint8_t volume);`

`void playMusic(const uint8_t *music_data, uint16_t sample_rate);`


```
M5.Speaker.tone(2700);
```

## SetTime()

**函数原型:**

`void SetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**函数参数:**

设置结构体变量时间


## GetTime()

**函数原型:**

`void GetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**函数参数:**

获取结构体时间


## SetData()

**函数原型:**

`void SetData(RTC_TimeTypeDef* RTC_DateStruct)`

**函数参数:**

设置结构体变量日期


## GetData()

**函数原型:**

`void GetData(RTC_TimeTypeDef* RTC_DateStruct)`

**函数参数:**

获取结构体变量日期

**使用示例:**

```
#include "M5CoreInk.h"

Ink_Sprite InkPageSprite(&M5.M5Ink);

RTC_TimeTypeDef RTCtime;
RTC_DateTypeDef RTCDate;

char timeStrbuff[64];

void flushTime(){
    M5.rtc.GetTime(&RTCtime);
    M5.rtc.GetData(&RTCDate);
    
    sprintf(timeStrbuff,"%d/%02d/%02d %02d:%02d:%02d",
                        RTCDate.Year,RTCDate.Month,RTCDate.Date,
                        RTCtime.Hours,RTCtime.Minutes,RTCtime.Seconds);
                                         
    InkPageSprite.drawString(10,100,timeStrbuff);
    InkPageSprite.pushSprite();
}

void setupTime(){
  
  RTCtime.Hours = 23;
  RTCtime.Minutes = 33;
  RTCtime.Seconds = 33;
  M5.rtc.SetTime(&RTCtime);
  
  RTCDate.Year = 2020;
  RTCDate.Month = 11;
  RTCDate.Date = 6;
  M5.rtc.SetData(&RTCDate);
}

void setup() {

    M5.begin();
    if( !M5.M5Ink.isInit())
    {
        Serial.printf("Ink Init faild");
        while (1) delay(100);   
    }
    M5.M5Ink.clear();
    delay(1000);
    //creat ink refresh Sprite
    if( InkPageSprite.creatSprite(0,0,200,200,true) != 0 )
    {
        Serial.printf("Ink Sprite creat faild");
    }
    setupTime();
}

void loop() {
  flushTime();
  delay(15000);
}
```

## shutdown()

### 函数重载1:

关闭电源，再次启动需要通过PWR按键唤醒

`void shutdown();`

### 函数重载2:

关闭电源，根据传入的延时秒数，在延时结束后通过RTC唤醒设备。

`int shutdown( int seconds );`

### 函数重载3:

关闭电源，传入指定了某个时间点的RTC时间结构体，当符合该时间的`时`,`分`,`秒`的时候通过RTC唤醒设备。

`int shutdown( const RTC_TimeTypeDef &RTC_TimeStruct);`

### 函数重载4:

关闭电源，传入指定了某个时间点的RTC时间结构体，当同时符合该时间点的`周数`,`天数`,`时间`的时通过RTC唤醒设备。

`int shutdown( const RTC_DateTypeDef &RTC_DateStruct, const RTC_TimeTypeDef &RTC_TimeStruct);`


**使用示例:**

```
#include "M5CoreInk.h"

Ink_Sprite InkPageSprite(&M5.M5Ink);

void ButtonTest(char* str)
{
    InkPageSprite.clear();
    InkPageSprite.drawString(35,59,str);
    InkPageSprite.pushSprite();
    delay(2000);
}

void setup() {

    M5.begin();
    if( !M5.M5Ink.isInit())
    {
        Serial.printf("Ink Init faild");
    }
    M5.M5Ink.clear();
    delay(1000);
    //creat ink refresh Sprite
    if( InkPageSprite.creatSprite(0,0,200,200,true) != 0 )
    {
        Serial.printf("Ink Sprite creat faild");
    }

    ButtonTest("Press Btn PWR for sleep , after 5 sec wakeup.");
}

void loop() {
    if( M5.BtnPWR.wasPressed())
    {
        Serial.printf("Btn %d was pressed \r\n",BUTTON_EXT_PIN);
        M5.shutdown(20);
        // M5.shutdown(RTC_TimeTypeDef(10,2,0));
    }

    M5.update();
}

```