# UHF-RFID

<el-tag effect="plain">SKU:U107</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/uhf_rfid/uhf_rfid_01.webp"><img src="assets/img/product_pics/unit/uhf_rfid/uhf_rfid_02.webp"><img src="assets/img/product_pics/unit/uhf_rfid/uhf_rfid_03.webp"></div>

## 描述

**UHF-RFID** 是一款超高频(UHF)嵌入式无线射频读写模块。采用JRD-4035模块方案，内置陶瓷天线，完全免除普通UHF模块需要另配天线而给用户带来的技术的不确定性。优化RF设计实现模块的低耗电高性能，100mW的发射功率即可达到了1.5M以上的有效距离。使用串行通信接口，配合内置封装的AT指令集，实现即插即用，提供良好的开发与使用体验。适用仓储物流管理与智慧零售等应用场景，满足监控读取多个产品标签的应用需求。

## 产品特性

- 稳定识别距离1.5m-2m
- 工作频谱范围：840-960MHz
- 空中接口协议: 
    * EPCglobal UHF Class 1 Gen 2
    * ISO 18000-6C
- UART通信接口(波特率:115200bps)
- 缓存区最大容纳200标签
- 标签识别灵敏，稳定

## 包含

- 1x UHF-RFID
- 1x HY2.0 连接线(5CM)

## 应用

- 仓储物流托盘管理
- 车辆管理
- 智慧零售

## 规格参数

<table class="table-1">
    <thead>
    <tr>
        <th>规格</th>
        <th>参数</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>空中接口协议</td>
            <td>EPCglobal UHF Class 1 Gen 2 / ISO 18000-6C</td>
        </tr>
        <tr>
            <td>工作区域支持</td>
            <td>
                US, Canada and other regions following U.S. 
                FCC。Europe and other regions following ETSI EN 302 208, 
                Mainland China, Japan, Korea, Malaysia, Taiwan
            </td>
        </tr>
        <tr>
            <td>工作频谱范围</td>
            <td>840-960MHz</td>
        </tr>
        <tr>
            <td>标签缓存区</td>
            <td>200标签</td>
        </tr>
        <tr>
            <td>通信协议</td>
            <td>UART(波特率:115200bps)</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>41g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>58.8g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>56*48*11.5mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>88*61*21mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

- **Windows** 
   - [UHF-RFID TEST](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_UHF_RFID.exe)

## 管脚映射

**当将UHF-RFID Unit连接至PortC时，管脚映射如下**

<table>
 <tr><td>M5Core(PORT C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>UHF-RFID Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/uhf_rfid/uhf_rfid_sch.webp">

## 相关链接

- [固件通信协议](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uhf_rfid/MagicRF%20M100%26QM100_Firmware_manual_cn.pdf)

## 案例程序

### 1. Arduino

- [点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/UHF_RFID)

- 通信协议指令集

```clike

//0.硬件版本
BB 00 03 00 01 00 04 7E

//1.软件版本
BB 00 03 00 01 01 05 7E

//2.制造商    
BB 00 03 00 01 02 06 7E 

//3.单次轮询指令       
BB 00 22 00 00 22 7E

//4.多次轮询指令       
BB 00 27 00 03 22 27 10 83 7E 
   
//5.停止多次轮询指令 
BB 00 28 00 00 28 7E 

//6.设置Select参数指令
BB 00 0C 00 13 01 00 00 00 20 60 00 30 75 1F EB 70 5C 59 04 E3 D5 0D 70 AD 7E

//7.获取Select参数
BB 00 0B 00 00 0B 7E               

//8.设置Select模式
BB 00 12 00 01 01 14 7E 

//9.读标签数据储存区
BB 00 39 00 09 00 00 FF FF 03 00 00 00 02 45 7E

//10.写标签数据存储区
BB 00 49 00 0D 00 00 FF FF 03 00 00 00 02 12 34 56 78 6D 7E
     
//11.锁定Lock 标签数据存储区
BB 00 82 00 07 00 00 FF FF 02 00 80 09 7E,

//12.灭活kill标签                       
BB 00 65 00 04 00 00 FF FF 67 7E

//13.设置通信波特率                                             
BB 00 11 00 02 00 C0 D3 7E  

//14.获取Query命令相关参数
BB 00 0D 00 00 0D 7E

//15.设置Query参数
BB 00 0E 00 02 10 20 40 7E

//16.设置工作地区
BB 00 07 00 01 01 09 7E 

//17.获取工作地区
BB 00 08 00 00 08 7E 

//18.设置工作信道
BB 00 AB 00 01 01 AC 7E   

//19.获取工作信道
BB 00 AA 00 00 AA 7E             

//20.设置为自动跳频模式
BB 00 AD 00 01 FF AD 7E

//21.插入工作信道
BB 00 A9 00 06 05 01 02 03 04 05 C3 7E

//22.获取发射功率                  
BB 00 B7 00 00 B7 7E

//23.设置发射功率
BB 00 B6 00 02 07 D0 8F 7E

//24.设置发射连续载波
BB 00 B0 00 01 FF B0 7E

//25.获取接收解调器参数
BB 00 F1 00 00 F1 7E

//26.设置接收解调器参数
BB 00 F0 00 04 03 06 01 B0 AE 7E

//27.测试射频输入端阻塞信号
BB 00 F2 00 00 F2 7E

//28.测试射频输入端 RSSI 信号
BB 00 F3 00 00 F3 7E

//30.模块休眠
00 BB 00 17 00 00 17 7E

//31.模块空闲休眠时间
BB 00 1D 00 01 02 20 7E

//32. IDLE 模式
BB 00 04 00 03 01 01 03 0C 7E

//33.NXP G2X 标签支持 ReadProtect/Reset ReadProtect 指令
BB 00 E1 00 05 00 00 FF FF 00 E4 7E

//34.NXP G2X 标签支持 Change EAS 指令
BB 00 E3 00 05 00 00 FF FF 01 E7 7E

//35.NXP G2X 标签支持 EAS_Alarm 指令
BB 00 E4 00 00 E4 7E

//36.NXP G2X 标签的 16bits Config-Word
BB 00 E0 00 06 00 00 FF FF 00 00 E4 7E  

//37.Impinj Monza 4 QT 标签支持 QT 指令
BB 00 E5 00 08 00 00 FF FF 01 01 40 00 2D 7E

//38.BlockPermalock 指令可以永久锁定用户区的某几个 Block                     
BB 00 D3 00 0B 00 00 FF FF 01 03 00 00 01 07 00 E8 7E
     
```

## 相关视频

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/UHF-RFID_VIDEO.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/products/uhf-rfid-unit-jrd-4035';

   anchor_search(purchase_link);
   scrollFunc();

</script>
