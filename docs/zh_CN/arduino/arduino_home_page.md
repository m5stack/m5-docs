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
  'title':"快速上手",
  'item':{
    'BASIC / M5GO / FIRE / FACES':'#/zh_CN/arduino/arduino_development',
    'M5StickC':'#/zh_CN/arduino/arduino_development',
    'M5Stick':'#/zh_CN/arduino/arduino_development',
    'ATOM Lite / Matrix':'#/zh_CN/arduino/arduino_development',
    'M5Core2':'#/zh_CN/arduino/arduino_core2_development'
  },
  "id":"quickstart"
};

const m5core_api = {
  'title':"M5Core API",
  'item':{
    'System':'#/zh_CN/api/system',
    'Speaker':'#/zh_CN/api/speaker',
    'LCD':'#/zh_CN/api/lcd',
    'Button':'#/zh_CN/api/button',
    'IMU Sensor(MPU9250)':'#/zh_CN/api/mpu9250',
    'Button':'#/zh_CN/api/button',
    'TF Card':'#/zh_CN/api/tf',
    'Power':'#/zh_CN/api/power',
    'I/O':'#/zh_CN/api/gpio',
    'I2C':'#/zh_CN/api/commutil',
    'WIFI':'#/zh_CN/api/wifi',
    'Timer':'#/zh_CN/api/ticker',
  },
  "id":"m5core_api"
};

const m5core2_api = {
  'title':"M5Core2 API",
  'item':{
    'AXP192':'#/zh_CN/api/axp192_core2',
    'TFT-SCREEN':'#/zh_CN/api/lcd',
    'TOUCH':'#/zh_CN/api/touch',
  },
  "id":"m5core2_api"
};

const m5stickc_api = {
  'title':"M5StickC API",
  'item':{
    'System':'#/zh_CN/api/system_m5stickc',
    'AXP192':'#/zh_CN/api/axp192_m5stickc',
    'TFT-SCREEN':'#/zh_CN/api/lcd_m5stickc',
    'IMU':'#/zh_CN/api/imu',
    'RTC':'#/zh_CN/api/rtc',
    'PWM':'#/zh_CN/api/pwm',
  },
  "id":"m5stickc_api"
};

const coreink_api = {
  'title':"CoreInk API",
  'item':{
    'System & Button & RTC & Speaker':'#/zh_CN/api/coreink/system_api',
    'E-Ink':'#/zh_CN/api/coreink/eink_api'
  },
  "id":"coreink_api"
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
            coreink_api: coreink_api
          }
      };
    }
})
</script>