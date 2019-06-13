# Module ENCODER {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_encoder_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_encoder_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Encoder-Panel-for-M5Stack-FACES-ESP32-Pocket-Computer-with-12pcs-NeoPixel-LED-MEGA328-Inside-I2C/3226069_32960440900.html?spm=2114.12010615.8148356.16.24884ead1iqJmC)**

## Description

**ENCODER** is compatible with FACE Kit. You can have it replace the keycoard panel inside the FACE kit. It is designed for rotary encoder control, integrated Mega328 microprocessor inside and LEDs around the encoder.

The series communication protocol between M5 core and ENCODER is IIC (adress: 0x5E)

<img src="assets/img/product_pics/module/module_encoder_03.png" width="60%" height="60%">

## Product Features

-  12 RGB Led
-  IIC communication
-  Simple API for programming
-  Mega328 inside
-  Encoder detection

## Function

**Control single RGB**

```arduino
/*
    Parameter:
        led_index: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int led_index, int r, int g, int b){
    // IIC send data
    Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
    Wire.write(led_index);
    Wire.write(r);
    Wire.write(g);
    Wire.write(b);
    Wire.endTransmission();
}
```

**Read encoder increment**

```arduino
void get_encoder_increment(void){
    int temp_encoder_increment;

    // IIC read data
    Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
    if(Wire.available()){
       temp_encoder_increment = Wire.read();// get increment
       button_state = Wire.read();// get button value
    }
    if(temp_encoder_increment > 127){//anti-clockwise
        direction = 1;// flag for encoder direction
        encoder_increment = 256 - temp_encoder_increment;
    }
    else{// clockwise
        direction = 0;
        encoder_increment = temp_encoder_increment;
    }
}
```

## Include

-  1x M5Stack ENCODER Module
-  Encoder turnpanel

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/firmware_328p/FacesEncoder328)**

## EasyLoader

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Module/MiniBurner_faces_encoder.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### Arduino IDE

*If you want the complete code `faces_encoder.ino`, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/Arduino/faces_encoder).*

```arduino
/*
* faces_encoder.ino
*/
#include <M5Stack.h>

#define Faces_Encoder_I2C_ADDR     0X5E

// declaration
int encoder_increment;//positive: clockwise nagtive: anti-clockwise
uint16_t encoder_value=0;
int button_state;
uint8_t direction;//0: clockwise 1: anti-clockwise
int temp_encoder_increment;

// initialization
M5.begin();
Wire.begin();

// get data from ENCONDER
Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
if(Wire.available()){
    temp_encoder_increment = Wire.read();// the first byte: increment
    button_state = Wire.read();// the second byte: button value
}

// IIC send data, 4bytes
Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
Wire.write(led_index);
Wire.write(r);
Wire.write(g);
Wire.write(b);
Wire.endTransmission();
```

<img src="assets/img/product_pics/module/module_example/ENCODER/example_faces_encoder_01.png" width="55%" height="55%">

<!-- ## Schematic

<img src="assets/img/product_pics/module/gps_sch.png"> -->
