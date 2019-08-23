# PROTO PLUS HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\proto_plus_hat\hat_proto_plus_01.jpg" width="30%"> <img src="assets\img\product_pics\hat\proto_plus_hat\hat_proto_plus_02.jpg" width="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/m5stickc-proto-plus-hat)**


## Description

**PROTO PLUS HAT** is a universal proto board compatible with M5SticKC. Compared to the previous PROTO HAT, "PLUS" is designed to provide a larger board area. Combined with the 8 pin header, you can have more add-ons for your M5StickC. The expansion interface is fully connected to the universal board, allowing the user to freely design the circuit on the board. The 90° pin header enables the proto board to be spliced with the M5StickC at various angles. If you plan to add circuit design to your project and hope to achieve space saving by changing the way the board is spliced, HAT PROTO PLUS will be a good choice.


<img src="assets\img\product_pics\hat\proto_plus_hat\hat_proto_plus_03.jpg" width="30%">

## Product Features

- Hole Size: 0.039" 1mm (CNC Drilled)
- Hole Pitch: 0.1 in - (2.54 mm)
- Entire Hole Quantity: 168 Holes

## Include

- 1x PROTO PLUS HAT
- 1x 8 pin header（90°）

## Application

- Prototyping 
- Related work by M5 User: [view](https://www.hackster.io/kiraku-labo/balance-robot-9009db)



## Video

**Demo**

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PROTO_PLUS_HAT.mp4" type="video/mp4">
</video>


## Code

*To get complete code, please click [here](https://github.com/ShashaDDD/EC11Encoder).*

```arduino
#include <TaskScheduler.h>
#include <M5StickC.h>
#include <Arduino.h>
#include "RotaryEncoderWithButton.h"


//#include <SimpleTimer.h>

//RotaryEncoderWithButton rotary(2,3,4);
RotaryEncoderWithButton rotary(26,36,0);

uint32_t data;
int i;
void t1Callback();
Task t1(5, TASK_FOREVER, &RotaryEncoderWithButton::ReadAB);
Scheduler runner; 

void setup() {
	M5.begin();
	Serial.begin(115200);
	rotary.begin();

	runner.init();
  	runner.addTask(t1);

	delay(100);
	t1.enable();

}

void loop() {
	runner.execute();
}
```




