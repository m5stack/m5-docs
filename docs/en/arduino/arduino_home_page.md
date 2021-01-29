<div class="container uiflow_banner">
    <div>
      <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/home_page/arduino_home_page.webp">
    </div>
    <div style="margin-top:30px">
      <h1 class="jumbotron-heading">Arduino IDE</h1>
      <p class="lead text-muted">A familiar development platform for electronic enthusiasts</p>
      <p>
        <a href="https://www.arduino.cn/forum-152-1.html" target="view_window" class="btn btn-primary my-2" style="color:white;text-decoration:none">Arduino forum</a>
        <a class="btn btn-secondary my-2" style="color:white;text-decoration:none" onclick= page_move("tutorial")>Tutorial</a>
      </p>
    </div>
</div>


<div id='arduino_home_page' v-cloak>
  <el-card class="box-card" v-for="(item,index) in list" :key="index" style="margin-bottom:20px" :id="item.id">
    <div slot="header" class="clearfix">
      <span>{{item.title}}</span>
      <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div v-for="(href,name) in item.item" :key="name" style="margin: 0px 10px 10px 0px ;display:inline-block;">
      <a :href='href'><el-tag>{{name}}</el-tag></a>
    </div>
  </el-card>
</div>


<script>

const quickstart = {
  'title':"Quick Start/Development environment setup tutorial",
  'item':{
    'BASIC / M5GO / FIRE / FACES':'#/en/arduino/arduino_development',
    'M5StickC':'#/en/arduino/arduino_development',
    'M5StickC PLUS':'#/en/arduino/arduino_development',
    'M5Stick':'#/en/arduino/arduino_development',
    'ATOM Lite / Matrix':'#/en/arduino/arduino_development',
    'M5Core2':'#/en/arduino/arduino_core2_development',
  },
  "id":"quickstart"
};

const m5core_api = {
  'title':"M5Core API",
  'item':{
    'System':'#/en/api/system',
    'Speaker':'#/en/api/speaker',
    'LCD':'#/en/api/lcd',
    'Button':'#/en/api/button',
    'IMU Sensor(MPU9250)':'#/en/api/mpu9250',
    'Button':'#/en/api/button',
    'TF Card':'#/en/api/tf',
    'Power':'#/en/api/power',
    'I/O':'#/en/api/gpio',
    'I2C':'#/en/api/commutil',
    'WIFI':'#/en/api/wifi',
    'Timer':'#/en/api/ticker',
  },
  "id":"m5core_api"
};

const m5core2_api = {
  'title':"M5Core2 API",
  'item':{
    'AXP192':'#/en/api/axp192_core2',
    'TFT-SCREEN':'#/en/api/lcd',
    'TOUCH':'#/en/api/touch',
    'RTC':'#/en/api/core2/rtc_api'
  },
  "id":"m5core2_api"
};

const m5stickc_api = {
  'title':"M5StickC API",
  'item':{
    'System':'#/en/api/system_m5stickc',
    'AXP192':'#/en/api/axp192_m5stickc',
    'TFT-SCREEN':'#/en/api/lcd_m5stickc',
    'IMU':'#/en/api/imu',
    'RTC':'#/en/api/rtc',
    'PWM':'#/en/api/pwm',
  },
  "id":"m5stickc_api"
};

const coreink_api = {
  'title':"CoreInk API",
  'item':{
    'System & Button & RTC & Speaker':'#/en/api/coreink/system_api',
    'E-Ink':'#/en/api/coreink/eink_api'
  },
  "id":"coreink_api"
};

const m5paper_api = {
  'title':"M5Paper API",
  'item':{
    'System & Button & SHT30 & POWER & RTC':'#/en/api/m5paper/system_api',
    'EPD Canvas':'#/en/api/m5paper/epd_canvas',
    'TOUCH':'#/en/api/m5paper/touch'
  },
  "id":"m5paper_api"
};

const tough_api = {
  'title':"M5Tough API",
  'item':{
    'TOUCH':'#/en/api/tough/touch'
  },
  "id":"tough_api"
};

var arduino_home_page = new Vue({
    el:'#arduino_home_page',
    data() {
      return {
        list: {
            quickstart: quickstart,
            m5core_api: m5core_api,
            m5stickc_api: m5stickc_api,
            m5core2_api: m5core2_api,
            coreink_api: coreink_api,
            m5paper_api: m5paper_api,
            tough_api: tough_api
          }
      };
    }
})
</script>