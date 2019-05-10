# Unit PaHUB {docsify-ignore-all}


<img src="assets/img/product_pics/unit/pahub/pahub_p1.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/pahub/pahub_p3.jpg" width="30%" height="30%">



:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/productM5Stack-Official-NeoPixel-RGB-LEDs-Cable-SK6812-with-GROVE-Port-2m-1m-50cm-20cm-10cm/3226069_32950831315.html?spm=a2g1x.12024536.productList_5885013.pic_0)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**


## Description

**PaHUB**, is a expander for I2C GROVE PORTA(red port on M5Core). 1-to-6. If you want connect mutiple I2C slave devices and some of them may sharing the same address, this unit can resolve I2C address conflicts.

At the Unit PaHUB's heart is an **TCA9548A** produced by TI. The TCA9548A device has eight bidirectional translating switches that can be controlled through the I2C bus. The SCL/SDA upstream pair fans out to downstream pairs, or channels. Any individual SCn/SDn channel or combination of channels can beselected, determined by the contents of the
programmable control register.

Technically this Unit allows mutiple levels of nesting, for example you can wire PaHUBs to the root PaHUB to get more seats for your I2C slave devices, if you have 7 of them you can have up to 36 I2C GROVE ports, which makes it easier to get your project more organized.

The I2C address of this unit is 0x77 (changable by resistors).

*Notice: Please pay attention to the channel order while programing*

<img src="assets/img/product_pics/unit/pahub/pahub_p2.jpg" width="30%" height="30%">



## Product Features

- I2C GROVE PORTA Expander
- Two Lego-compatible holes
- Nested allowed
- 1-To-6

## Kit includes

- 1x PaHUB Unit
- 1x Grove Cable


## DOCUMENTS
- Datasheet - **[TCA9548A](http://www.ti.com/lit/ds/symlink/tca9548a.pdf)**


## Driver Protocol

- protovol type - I2C
- address - 0x77

## Related Link

