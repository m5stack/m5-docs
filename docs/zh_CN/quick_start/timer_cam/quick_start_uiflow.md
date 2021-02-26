# Timer Camera 接入UIFlow上手指南

## 下载烧录工具

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压打开应用程序。

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

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.webp" width="70%"> 

?>注意：Linux用户请切换至解压文件路径下，在终端中运行`./M5Burner`, 运行应用。

## 烧录固件

>`打开M5Burner`-->`将设备连接至电脑`-->`选择对应的端口`-->`切换至TimerCam选项`-->`选择合适版本点击download`-->`配置合适的参数`-->点击`Burn`进行烧录-->等待弹窗`successful`则表示烧录完成

<img src="assets/img/quick_start/timer_cam/timercam_uiflow_01.webp" width="550px">
<img src="assets/img/quick_start/timer_cam/timercam_uiflow_02.webp" width="550px">

## TOKEN获取

>-->点击`Get Token`即可获取-->等待弹窗`Token`，显示的字符串即为Token，也可通过扫描二维码获取，或直接在浏览器中打开。

<img src="assets/img/quick_start/timer_cam/timercam_uiflow_04.webp" width="550px">
<img src="assets/img/quick_start/timer_cam/timercam_uiflow_05.webp" width="550px">

## UIFlow编程

**目前TimerCamera的UIFlow代码块开发正在进行中，但您现在仍然可以通过以下方式在UIFlow中获取图片，以下示例将图片发送至M5Core主机进行显示**

<img src="assets/img/quick_start/timer_cam/timercam_uiflow_03.webp">

其中，HTTP内填入的地址即为生成的Token二维码(浏览器打开地址)，手动添加"lcd.image(0, 0, req.content)"即可将获取到的图像显示到屏幕上。

## Core2 代码示例

```clike
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
