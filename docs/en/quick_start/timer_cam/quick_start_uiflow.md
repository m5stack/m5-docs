#  Timer Camera Use With UIFlow

## Download M5Burner

>According to your operating system, click the button below to download the corresponding M5Burner firmware burning tool. Unzip and open the application

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>Note: after installation of MacOS users, please put the application into the application folder, as shown in the figure below.

><img src="/image/base/application.webp" width="70%"> 

?>Note: for Linux users, please switch to the unzipped file path and run the application in the terminal.

## Burning firmware

>Open `M5Burner`-->`Connect the device to the computer`-->`Select the corresponding port`-->`Switch to TIMERCAM option`-->`Select the appropriate version and click download`-->`Configure the appropriate parameters`-->Click `Burn` to flash-->Waiting for the pop-up window `successful` indicates that the burning is complete

<img src="assets/img/quick_start/timer_cam/timercam_uiflow_01.webp" width="550px">
<img src="assets/img/quick_start/timer_cam/timercam_uiflow_02.webp" width="550px">

## Get Token

>-->Click`Get Token`-->waiting for pop-up window `Token`, the displayed string is token. It can also be obtained by scanning the QR code or opened directly in the browser.

<img src="assets/img/quick_start/timer_cam/timercam_uiflow_04.webp" width="550px">
<img src="assets/img/quick_start/timer_cam/timercam_uiflow_05.webp" width="550px">

## UIFlow Program

**At present, the development of UIFlow blockly of TimerCamera is in progress, but you can still get pictures in uiflow by the following methods. The following example sends the pictures to M5 core host for display**

<img src="assets/img/quick_start/timer_cam/timercam_uiflow_03.webp">

其中，HTTP内填入的地址即为生成的Token二维码(浏览器打开地址)，手动添加"lcd.image(0, 0, req.content)"即可将获取到的图像显示到屏幕上。

## Core2 代码示例

```Python
import urequests
import time
import wifiCfg
import lvgl as lv

wifiCfg.auto_connect()

ticks_ms = 0
old_tick = 0

scr = lv.scr_act()
scr.clean()

img = lv.img(scr)

while True:
    if wifiCfg.is_connected():
        ticks_ms = time.ticks_ms()
        if time.ticks_diff(ticks_ms, old_tick) > 40000:
            old_tick = ticks_ms
            try:
                req = urequests.get("http://api.m5stack.com:5003/timer-cam/image?tok=xxxxxxxxxYOUR-TOKENxxxxxxxxx&width=320&high=240&decode=png")
                if (req.status_code) == 200:
                    print("Len: " + str(len(req.content)))
                    img_dsc = lv.img_dsc_t({
                                        "data_size": len(req.content),
                                        "data": req.content})
                    img.set_src(img_dsc)
                    del img_dsc
            except (KeyboardInterrupt, Exception) as e:
                print('Speaker caught exception {} {}'.format(type(e).__name__, e))
                break
        else:
            pass
    else:
        wifiCfg.auto_connect()

```

<script>
   anchor_search();
   scrollFunc();
</script>
