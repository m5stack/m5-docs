# ODrive

<el-tag effect="plain">SKU:M036</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_01.webp"><img src="assets/img/product_pics/module/grbl13.2/grbl13.2_02.webp"></div>

## 描述

**ODrive** 是M5Stack推出的一款高性能伺服电机驱动模块，基于开源运动控制方案ODrive制作。支持控制单个三相伺服电机，峰值驱动电流可达5A。具备高转速电机控制能力的同时提供编码器信号接口，能够实现高精度运动控制定位。模块使用UART通信接口，兼容ODrive官方配置工具与协议(通过上位机工具还可配置不同的电机运动模式使电机工作更加的顺畅稳定)。

- 工作方式: 通过PC上位机配置电机参数，通过UART发送指令控制电机位移。

- 峰值驱动电流5A

## 产品特性

- 单个三相伺服电机驱动
- 峰值驱动电流5A
- 12-24V DC电源输入接口(要求适配器输出电流可达5A)
- 通信接口：UART
- 单通道伺服电机驱动/带编码器接口

## 包含

- 单模块版本
    * 1x ODrive Module
    * 1x 3.96-3P端子
    * 1x 3.96-2P端子
    * 1x 2.54-5P端子

- 配套电机版本
    * 1x ODrive Module
    * 1x 3.96-3P端子
    * 1x 3.96-2P端子
    * 1x 2.54-5P端子
    * 1x 伺服电机(详细参数见下方规格表)
    * 1x 编码器转接板

## 应用

- 高精度运动控制
- 伺服电机驱动


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>选配的伺服电机规格</td>
      <td>
         相数：3, 
         电压: 24V-DC, 
         额定电流: 4A, 
         额定功率： 62W, 
         额定转速：3000rpm
   </td>
   </tr>
   <tr>
      <td>电机驱动芯片</td>
      <td>DRV8301</td>
   </tr>
   <tr>
      <td>最大驱动电流</td>
      <td>5A</td>
   </tr>
   <tr>
      <td>接口类型</td>
      <td>3.96-2P(电源), 3.96-3P(电机), 2.54-5P(编码器)</td>
   </tr>
   <tr>
      <td>输入电源</td>
      <td>12-24V DC</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>22.5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>42.3g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>95*65*25mm</td>
   </tr>
 </table>

 ## EasyLoader



## 相关链接

- [DRV8301 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8301.pdf)

## 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>ODrive</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


## 原理图

<img src="assets/img/product_pics/module/odrive/odrive_sch_01.webp">
<img src="assets/img/product_pics/module/odrive/odrive_sch_02.webp">

## 案例程序


## ODriveTool

>odrivetool是 ODrive配套的配置和调试软件，通过它配置电机参数。该教程将演示在`Linux`平台下odrivetool的安装与基本使用。

- 使用下方命令，进行odrivetool v0.5.1 的安装，环境要求:`python3`。

```clike
pip3 install odrive==0.5.1.post0

```
- 将 `~/.local/bin` 添加到系统环境变量中， 执行下方命令， 并插入`export PATH=$PATH:~/.local/bin`至文本末尾。

```clike
vim ~/.bashrc

```

- 命令行执行`odrivetool`运行工具。并将ODrive模块连接至电脑等待odrivetool识别。成功连接后输入`odrv0.vbus_voltage`测试获取驱动板电源电压。

```clike
$odrivertool

ODrive control utility v0.5.1.post0
Website: https://odriverobotics.com/
Docs: https://docs.odriverobotics.com/
Forums: https://discourse.odriverobotics.com/
Discord: https://discord.gg/k3ZZ3mS
Github: https://github.com/madcowswe/ODrive/

Please connect your ODrive.
You can also type help() or quit().

Connected to ODrive 306A396A3235 as odrv0

In [1]: odrv0.vbus_voltage

```

- 常用配置命令。

```clike

//配置电机电流限制
odrv0.axis0.motor.config.current_lim [A].

//配置电机转速限制值
odrv0.axis0.controller.config.vel_limit

//配置功率耗散电阻的电阻值
odrv0.config.brake_resistance


//保存配置
odrv0.save_configuration()

```


更多详情内容，[请点击此处查看Odrive官方文档。](https://docs.odriverobotics.com/#start-odrivetool)


<script>

   var purchase_link = 'https://m5stack.com/products/grbl-module-13-2-stepmotor-driver-drv8825';

   anchor_search(purchase_link);
   scrollFunc();

</script>
