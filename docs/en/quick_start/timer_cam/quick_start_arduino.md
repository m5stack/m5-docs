# Arduino IDE Development

## Arduino-IDE

>[Click here to visit Arduino's official website](https://www.arduino.cc/en/Main/Software),Select the installation package for your own operating system to download.

<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.webp">

## M5Stack Boards Manager

>1.Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.webp">

>2.Copy the following M5Stack Boards Manager url to `Additional Boards Manager URLs:`

**https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/arduino/package_m5stack_index.json**

<img src="assets/img/related_documents/Arduino_IDE/arduino_board_config.webp">

>3.Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/related_documents/Arduino_IDE/board_manage.webp">

>4.Search `M5Stack` in the pop-up window, find it and  click `Install`

<img src="assets/img/related_documents/Arduino_IDE/search_M5STACK.webp">

>5.select `Tools`->`Board:`->`Timer-CAM`
 
<img src="assets\img\quick_start\timer_cam\timercam_arduino_01.webp">

>6.select `Sketch`->`Include Library:`->`Manage Libraries`

<img src="assets/img/related_documents/Arduino_IDE/manage_libraries.webp">

>7.Search `Timer-CAM` in the pop-up window, find it and  click `Install`

<img src="assets\img\quick_start\timer_cam\timercam_arduino_02.webp">

>8.`File`->`Example`->`Timer-CAM` Open the case program, modify the SSID and other information in the program according to the code comments, and compile and upload it to the device.

<img src="assets\img\quick_start\timer_cam\timercam_arduino_03.webp">

<script>

   anchor_search();
   scrollFunc();

</script>