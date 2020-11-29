# Arduino IDE 环境搭建

## Arduino-IDE

>[点击此处访问 Arduino 官网](https://www.arduino.cc/en/Main/Software),选择对应自己操作系统的安装包进行下载.

<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.webp">

## M5Stack的板管理

>1.打开 Arduino IDE，选择 `文件`->`首选项`->`设置`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.webp">

>2.复制下方的 M5Stack 板管理网址到 `附加开发板管理器:` 中

**https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json**

<img src="assets/img/related_documents/Arduino_IDE/arduino_board_config.webp">

>3.选择 `工具`->`开发板:`->`开发板管理器...`

<img src="assets/img/related_documents/Arduino_IDE/board_manage.webp">

>4.在新弹出的对话框中，输入并搜索 `M5Stack`，点击`安装`（若出现搜索失败的情况，可以尝试重启Arduino程序）

<img src="assets/img/related_documents/Arduino_IDE/search_M5STACK.webp">

>5.选择 `工具`->`开发板:`->`M5Stack-Paper`
 
<img src="assets\img\quick_start\m5paper\arduino_01.webp">

>6.选择`项目`->`加载库:`->`管理库`

<img src="assets/img/related_documents/Arduino_IDE/manage_libraries.webp">

>7.在弹出的对话框中搜索`M5EPD`-> 点击`安装` 。  (未能搜索到库，也可以通过Github下载导入。  [M5EPD-Lib下载链接](https://github.com/m5stack/M5EPD))

>8.`File`->`Example`->`M5EPD`->`Hello World`案例程序，编译上传至设备。

<img src="assets\img\quick_start\m5paper\arduino_03.webp">


## Example

- **Arduino** 

   - [FactoryTest](https://github.com/m5stack/M5Paper_FactoryTest)
   - [M5EPD_Todo](https://github.com/m5stack/M5EPD_Todo)
   - [M5EPD_Calculator](https://github.com/m5stack/M5EPD_Calculator)
   - [M5EPD_TTFExample](https://github.com/m5stack/M5EPD_TTFExample)
   - [M5EPD-Lib](https://github.com/m5stack/M5EPD)

-  **API**

   - [Arduino API](zh_CN/arduino/arduino_home_page?id=m5paper)


<script>

   anchor_search();
   scrollFunc();

</script>