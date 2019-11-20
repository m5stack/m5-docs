<div style="margin-top: 40px;">

<div class="faq-tips" style="display:none">
    <h5>未搜索到相关问题，你可以<a href="https://github.com/m5stack/m5-docs/issues" target="view_window">点击此处</a>，前往Github提交问题.</h5>
</div>

<div class="faq-class">
    <h5>常见产品购买问题</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q1：不同的M5主机、摄像头Unit之间有什么区别？<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/Product_compared.pdf" role="button" style="text-decoration:none" target="view_window">查看产品比较表格</a>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q2: LoRa与LoRaWAN模块有什么区别？<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          LoRa模块：采用Ra-02模组，采用串行通信协议: SPI，支持频段范围410-525Hz.
          <br>
          LoRaWAN模块：采用RHF76-052模组，内置LoRaWAN协议栈，使用串口通信，通过发送AT指令控制模组，支持与全双工LoRaWAN网关通信，支持双频段433-470MHz 和868-915MHz.
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q3: M5摄像头通过 WIFI 传输图像给手机，能传输多远？<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          经过测试，在室内使用 M5Camera 能传输 20 米左右。
        </span>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q4: 能否连接5G频段的Wi-Fi<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
          ESP32芯片不支持5G频段的WiFi，只可以连接2.4G。
        </span>
      </div>
    </div>
</div>



<div class="faq-class">
    <h5>常见产品编程问题</h5>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q1: 如何消除M5Core的扬声器噪声？<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>在 Arduino 程序的 Setup()中执行以下语句</span>
          <pre v-pre="" data-lang="">
            <code class="lang-c">
              dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
            </code>
         </pre>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q2: 编写的程序里用到了按键，但是按过一次之后就再也不起作用<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>使用按键和喇叭需要在执行后添加M5.update()来重新响应。</span>
          <pre v-pre="" data-lang="">
            <code class="lang-c">
              M5.update();
            </code>
         </pre>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q3: UIFlow的Micropython与官方主线Micropython有什么区别<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>UIFlow是基于主线Micropython的二次封装，集成了大量M5Stack官方库，在使用上UIFlow更加简单容易理解，同时也大部分兼容主线的API写法。</span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q4: M5Stack设备支持中文显示吗<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>在Arduino环境中支持GB2312编码显示，参考Display中的hzk16示例，在Micropython环境下受限于执行速度和UTF-8文件大小，暂不支持。</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q5: 如何获得更多的API<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>M5官方提供的参考API仅限于M5硬件封装的功能，软件应用的库比如WIFI，HTTP等不属于提供的范畴，可参考其他ESP32和Arduino库，使用上是通用的。</span>
      </div>
    </div>
</div>


<div class="faq-class">
    <h5>常见产品售后问题</h5>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q1: M5stickC 无法识别端口(COM)<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
          <span>
            M5StickC仅支持WIN10&Linux&MAC免驱，其余操作系统则需要用户自行安装驱动程序。
            <br>
            安装步骤：1，点击下方链接，下载驱动安装包. 2.连接设备，并打开电脑设备管理器端口选项。 3，右键点击未能识别的设备，进行手动更新。
          </span>
          <br>
          <a href="https://www.ftdichip.com/Drivers/VCP.htm">驱动下载连接</a>
      </div>
    </div>
</div>



<div class="faq-item">
    <h5 class="faq-title">Q2: 有些模块与 M5Core 堆叠之后不能下载程序，比如 USB 模块与 M5Core 堆叠<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> 可能是堆叠之后，M5-Bus 总线上的引脚 GPIO0 与 M5Core 接触不太好。这种情况下，在下载程序的时候，GPIO0 理应会一直保持低电平的，可是因为接触不好，GPIO0 不能一直保持低电平，所以下载失败。
        解决方案：在下载过程中，手动让 GPIO0 连接 GND，保证足够长时间拉低。</span>
      </div>
    </div>
</div>




<div class="faq-item">
    <h5 class="faq-title">Q2: M5GO 底座堆叠了 M5Core 之后，M5Core 不能开机，测试了底座电池满电<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> 可能是堆叠之后，底座上的 M5-Bus 总线上的左下角的引脚 BATTERY 与 M5Core 接触不太好，这是生产时焊接位置偏了导致的。总线排针焊接位置稍微偏了一些之后，容易出现 BATTERY 引脚与 M5Core 接触不好。解决方案：重新焊接 M5-Bus 总线排针，排针位置必须严格与焊盘位置吻合。</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q3: 有的电脑虽然连接上了主控，可是仍然无法使用 Arduino IDE、ESPFlashDownloadTool 或 M5Burner 来烧录程序。<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> 原因和解决方案：可能是因为这些串口的供电电流不够大，需要在主控中的 RST 引脚和 GND 引脚之间接入电容 ( 电容值是比0.1uF大的 )，或者在下载程序的时候，将 GPIO 0 连接到 GND，使得 GPIO 0 能持续足够的低电平。</span>
        <img class="faq-img" src="assets/img/faq/faq_03.png">
        <img class="faq-img" src="assets/img/faq/faq_05.png">
        <img class="faq-img" src="assets/img/faq/faq_06.png">
        <img class="faq-img" src="assets/img/faq/faq_07.png">
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q4: ESP32 有哪些特殊的 GPIO 管脚需要注意？<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> ESP32 有 34 个 GPIO 管脚，其中 GPIO 34-39 仅用作输入，不能作为输出，其他的既可以作为输入又可以作为输出管脚。</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q5: 为什么带 MPU9250 的 Stick 烧录了出厂固件之后，按按键 A，结果显示 "No"，即 "不存在9250"<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>重启这个 Stick，就可以显示。因为读取 MPU9250 的代码放置在出厂程序的 setup() 函数中，开机只执行一次，所以重启，让 Stick 再检测一次 MPU9250。</span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q6: M5stickC 无法开机<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span> 以下操作能够使设备恢复正常：1，将BAT短接到GND。 2.插入USB线。 3，屏幕亮起后停止短接，USB继续为设备充电. </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q7: M5StickV 加载不了SD卡<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>首先要确认SD卡的格式是否为FAT32，不可以存在分区，一些大容量SD卡通常被格式化为NTFS类型，对SD卡的兼容度做了以下测试。 
        <br>
        <a href="https://docs.m5stack.com/#/zh_CN/core/m5stickv">SD卡兼容性列表</a>
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q8: 向V-Training发送照片但是接收的邮件并未包含模型文件<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>仔细检查邮件中的内容，训练错误将在邮件中指出，发送的照片中只允许包含指定的两个文件夹，照片的最低数量和分类有要求，如果存在隐藏文件会导致训练失败 
        <br>
       <a href="https://docs.m5stack.com/#/zh_CN/related_documents/v-training"> V-Training详细使用教程 </a>
        </span>
      </div>
    </div>
</div>

<div class="faq-item">
    <h5 class="faq-title">Q9: 烧录程序时出现MD5文件错误<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>首先仔细检查你的程序，确认没有任何问题，其次使用M5Burner进行擦除，检查是否可以清除成功，再次烧录FactoryTest检查是否可以烧录，如果能成功操作，说明没有问题，如果重复出现MD5文件错误则很大概率FLASH已经损坏。
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q10: M5Stack BASIC一直正常使用，突然无法开机了，即使连接了USB<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>将BASIC底座去掉，尝试开机可以启动，很大可能是底座与M-BUS接触不良导致的
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q11: BeetleC连接手机遥控有时会无法响应<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>大部分是由于电池电量过低引起的，如果电池电量不足会导致信号质量严重衰减。
        </span>
      </div>
    </div>
</div>


<div class="faq-item">
    <h5 class="faq-title">Q12: 使用HAT-Thermal时，屏幕显示带有图像波纹干扰<p class="faq-button"></p></h5>
    <div class="faq-answer">
      <div>
        <span>
        旧的100Nf电容器不能给MLx90640提供足够的去耦能力，可以通过加一个10Uf（106）电容器来解决。
        <br>
        解决方案：在图示位置并联电容（10uF 10V 0603）。
        </span>
        <img class="faq-img" src="assets/img/faq/hat_thermal/01.webp">
        <img class="faq-img" src="assets/img/faq/hat_thermal/02.webp">
      </div>
    </div>
</div>

</div>


<script>

$(".faq-item").on('click', function() {
                $(this).toggleClass('open');
            });
</script>