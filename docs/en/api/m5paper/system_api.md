# System & Button & SHT30 & POWER & RTC

## begin()

**Syntax:**

`void begin(bool touchEnable = true, bool SDEnable = true, bool SerialEnable = true, bool BatteryADCEnable = true, bool I2CEnable = false);`

**Functions: touch screen initialization , TF Card , UART , battery ADC reading , I2C**

**Example:**

```clike
#include <M5EPD.h>

void setup() {
  M5.begin(true,true,true,true,true);
}
```

## Button

**Function: detects device key status**

```clike
    Button(uint8_t pin, uint8_t invert, uint32_t dbTime);
    uint8_t read();
    uint8_t isPressed();
    uint8_t isReleased();
    uint8_t wasPressed();
    uint8_t wasReleased();
    uint8_t pressedFor(uint32_t ms);
    uint8_t releasedFor(uint32_t ms);
    uint8_t wasReleasefor(uint32_t ms);
    uint32_t lastChange();

```

## update()

**Syntax:**

`void update();`

**Functions: refresh device key status**


**Example:**

```clike

if( M5.BtnL.wasPressed())
{
  Serial.printf("BtnL wasPressed!");
}
M5.update();

```

## SHT30

**Function: Read the temperature and humidity detected by the SHT30**.

```clike
    float GetTemperature(TemperatureScale Degree = Cel);
    float GetRelHumidity();
    float GetAbsHumidity(AbsHumidityScale Scale = Torr);
```

**Refresh detection data (need to call the API to get new detection values)**

`void UpdateData();`

**Example:**

```clike
#include <M5EPD.h>

char temStr[10];
char humStr[10];

float tem;
float hum;

M5EPD_Canvas canvas(&M5.EPD);
void setup()
{
    M5.begin();
    M5.SHT30.Begin();
    M5.EPD.SetRotation(90);
    M5.EPD.Clear(true);
    canvas.createCanvas(400, 300);
    canvas.setTextSize(2);
}

void loop()
{
    
    M5.SHT30.UpdateData();
    tem = M5.SHT30.GetTemperature();
    hum = M5.SHT30.GetRelHumidity();
    Serial.printf("Temperatura: %2.2f*C  Humedad: %0.2f%%\r\n", tem, hum);
    dtostrf(tem, 2, 2 , temStr);
    dtostrf(hum, 2, 2 , humStr);
    canvas.drawString("Temperatura:" + String(temStr) + "*C", 100, 100);
    canvas.drawString("Humedad:" + String(humStr) , 100, 200);
    canvas.pushCanvas(0,300,UPDATE_MODE_A2);
    delay(1000);
}

```

## Related pin definitions

```clike
#define M5EPD_MAIN_PWR_PIN 2
#define M5EPD_CS_PIN 15
#define M5EPD_SCK_PIN 14
#define M5EPD_MOSI_PIN 12
#define M5EPD_BUSY_PIN 27
#define M5EPD_MISO_PIN 13
#define M5EPD_EXT_PWR_EN_PIN 5
#define M5EPD_EPD_PWR_EN_PIN 23
#define M5EPD_KEY_RIGHT_PIN 39
#define M5EPD_KEY_PUSH_PIN 38
#define M5EPD_KEY_LEFT_PIN 37
#define M5EPD_BAT_VOL_PIN 35
#define M5EPD_PORTC_W_PIN 19
#define M5EPD_PORTC_Y_PIN 18
#define M5EPD_PORTB_W_PIN 33
#define M5EPD_PORTB_Y_PIN 26
#define M5EPD_PORTA_W_PIN 32
#define M5EPD_PORTA_Y_PIN 25
```

## Power

- **Function: Enable Expansion Port Power**
- `void enableEXTPower() { digitalWrite(M5EPD_EXT_PWR_EN_PIN, 1); }`

- **Functions: power off expansion port**.
- `void disableEXTPower() { digitalWrite(M5EPD_EXT_PWR_EN_PIN, 0); }`

- **Function: Enable Ink Screen Power**
- `void enableEPDPower() { digitalWrite(M5EPD_EPD_PWR_EN_PIN, 1); }`

- **Function: Turn off the power of the ink screen**.
- `void disableEPDPower() { digitalWrite(M5EPD_EPD_PWR_EN_PIN, 0); }`

- **Function: Enable Main Power**
- `void enableMainPower() { digitalWrite(M5EPD_MAIN_PWR_PIN, 1); }`

- **Function: Turn off main power**
- `void disableMainPower() { digitalWrite(M5EPD_MAIN_PWR_PIN, 0); }`

- **Functions: initialize battery ADC detection**
- `void BatteryADCBegin();`

- **Functions: Read battery voltage native ADC value**
- `uint32_t getBatteryRaw();`

- **Function: Read battery voltage**
- `uint32_t getBatteryVoltage();`

## RTC

?>Please use `M5.RTC.begin();` to initialize RTC related functions before using

```clike
typedef struct RTC_Time
{
    int8_t hour;
    int8_t min;
    int8_t sec;
    RTC_Time() : hour(), min(), sec() {}
    RTC_Time(int8_t h, int8_t m, int8_t s) : hour(h), min(m), sec(s) {}
} rtc_time_t;

typedef struct RTC_Date
{
    int8_t week;
    int8_t mon;
    int8_t day;
    int16_t year;
    RTC_Date() : week(), mon(), day(), year() {}
    RTC_Date(int8_t w, int8_t m, int8_t d, int16_t y) : week(w), mon(m), day(d), year(y) {}
} rtc_date_t;

```

## setTime()

**Syntax:**

`void setTime(rtc_time_t *time);`

**Description:**

Set RTC Time Struct

## getTime()

**Syntax:**

`void getTime(rtc_time_t *time);`

**Description:**

Get RTC Time Struct

## setDate()

**Syntax:**

`void setDate(rtc_date_t *date);`

**Description:**

Set RTC Date Struct

## getDate()

**Syntax:**

`void getDate(rtc_date_t *date);`

**Description:**

Get RTC Date Struct

**Example:**


```clike
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

rtc_time_t RTCtime;
rtc_date_t RTCDate;

char timeStrbuff[64];

void flushTime(){
    M5.RTC.getTime(&RTCtime);
    M5.RTC.getDate(&RTCDate);
    
    sprintf(timeStrbuff,"%d/%02d/%02d %02d:%02d:%02d",
                        RTCDate.year,RTCDate.mon,RTCDate.day,
                        RTCtime.hour,RTCtime.min,RTCtime.sec);
                                         
    canvas.drawString(timeStrbuff, 0, 0);
    canvas.pushCanvas(100,200,UPDATE_MODE_DU4);
}

void setupTime(){
  
  RTCtime.hour = 23;
  RTCtime.min = 33;
  RTCtime.sec = 33;
  M5.RTC.setTime(&RTCtime);
  
  RTCDate.year = 2020;
  RTCDate.mon = 11;
  RTCDate.day = 27;
  M5.RTC.setDate(&RTCDate);
}

void setup() {

    M5.begin();
    M5.EPD.SetRotation(90);
    M5.EPD.Clear(true);
    M5.RTC.begin();
    canvas.createCanvas(400, 300);
    canvas.setTextSize(3);
    setupTime();
}

void loop() {
  flushTime();
  delay(1000);
}
```


## shutdown()

### function overload-1:

Power off and wake up again via PWR button

`void shutdown();`

### function overload-2:

Turn off the power and wake up the device via RTC at the end of the delay based on the number of seconds of incoming delay.

`int shutdown( int seconds );`

### function overload-3:

Turn off the power, pass in the RTC time structure that specifies a certain point in time, and wake up the device via RTC when the `hours`, `minutes`, and `seconds` of that time are met.

`int shutdown( const rtc_time_t &RTC_TimeStruct);`

### function overload-4:

Turn off the power, pass in the RTC time structure specified for a certain point in time, and wake up the device by RTC when the `week number`, `day number`, and `time` of that point in time match at the same time.

`int shutdown( const rtc_date_t &RTC_DateStruct, const rtc_time_t &RTC_TimeStruct);`


**Example:**

```clike
#include <M5EPD.h>

M5EPD_Canvas canvas(&M5.EPD);

void setup()
{
    M5.begin();
    M5.EPD.SetRotation(90);
    M5.TP.SetRotation(90);
    M5.EPD.Clear(true);
    M5.RTC.begin();
    canvas.createCanvas(540, 960);
    canvas.setTextSize(3);
    canvas.drawString("Press PWR Btn for sleep!", 45, 350);
    canvas.drawString("after 5 sec wakeup!", 70, 450);
    canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
    
    
}

void loop()
{
    if(M5.BtnP.wasPressed()){
        
        canvas.drawString("I'm going to sleep.zzzZZZ~", 45, 550);
        canvas.pushCanvas(0,0,UPDATE_MODE_DU4);
        delay(1000);
        M5.shutdown(5);
    }
    M5.update();
    delay(100);
}
```