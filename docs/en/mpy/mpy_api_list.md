<div class="uiflow_banner">
    <div>
      <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/home_page/mpy_homepage.webp">
    </div>
    <div style="margin-top:30px">
      <h1 class="jumbotron-heading">UIFlow MicroPython API</h1>
      <p class="lead text-muted">API List</p>
    </div>
</div>


<div id='arduino_home_page' v-cloak>
  <el-card class="box-card" v-for="(item,index) in list" :key="index" style="margin-bottom:20px" :id="item.id">
    <div slot="header" class="clearfix">
      <span>{{item.title}}</span>
      <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div v-for="(href,name) in item.item" :key="name" class="box-card-item">
      <a :href='href'><el-tag>{{name}}</el-tag></a>
    </div>
  </el-card>
</div>


<script>

const quickstart = {
  'title':"Quick Start",
  'item':{
    'BASIC / M5GO / FIRE / FACES':'#/en/quick_start/m5core/m5stack_core_get_started_MicroPython',
    'Core2':'#/en/quick_start/core2/m5stack_core2_get_started_MicroPython',
    'M5StickC':'#/en/quick_start/m5stickc/m5stickc_quick_start_with_uiflow',
    'M5StickC PLUS':'#/en/quick_start/m5stickc_plus/m5stickc_plus_quick_start_with_uiflow',
    'M5Stick':'#/en/quick_start/m5stick/m5stick_quick_start_with_uiflow',
    'ATOM Echo':'#/en/quick_start/atom/atom_echo_quick_start',
    'ATOM Lite / Matrix':'#/en/quick_start/atom/atom_quick_start_uiflow'
  },
  "id":"quickstart"
};

const m5stack_lvgl = {
  'title':"M5Stack LVGL",
  'item':{
    'Screen':'#/en/mpy/m5stack_lvgl?id=m5screen',
    'Tabview':'#/en/mpy/m5stack_lvgl?id=m5tabview',
    'Textarea':'#/en/mpy/m5stack_lvgl?id=m5textarea',
    'Msgbox':'#/en/mpy/m5stack_lvgl?id=m5msgbox',
    'Led':'#/en/mpy/m5stack_lvgl?id=m5led',
    'Switch':'#/en/mpy/m5stack_lvgl?id=m5switch',
    'Slider':'#/en/mpy/m5stack_lvgl?id=m5slider',
    'List':'#/en/mpy/m5stack_lvgl?id=m5list',
    'Line':'#/en/mpy/m5stack_lvgl?id=m5line',
    'Label':'#/en/mpy/m5stack_lvgl?id=m5label',
    'Img':'#/en/mpy/m5stack_lvgl?id=m5img',
    'Dropdown':'#/en/mpy/m5stack_lvgl?id=m5dropdown',
    'Cpicker':'#/en/mpy/m5stack_lvgl?id=m5cpicker',
    'Checkbox':'#/en/mpy/m5stack_lvgl?id=m5checkbox',
    'Btn':'#/en/mpy/m5stack_lvgl?id=m5btn',
    'Arc':'#/en/mpy/m5stack_lvgl?id=m5arc',
    'Bar':'#/en/mpy/m5stack_lvgl?id=m5bar',
    'Imgbtn':'#/en/mpy/m5stack_lvgl?id=m5imgbtn',
    'Obj':'#/en/mpy/m5stack_lvgl?id=m5obj'
  },
  "id":"m5stack_lvgl_api"
};

const iotcloud = {
  'title':"IoT-Cloud",
  'item':{
    'Tencent':'#/en/mpy/iotcloud?id=tencent',
    'Azure IoT':'#/en/mpy/iotcloud?id=azure',
    'Blynk':'#/en/mpy/iotcloud?id=blynk'
  },
  "id":"iotcloud"
};

const unit = {
  'title':"Unit I2C Class",
  'item':{
    'Ultrasonic':'#/en/mpy/unit?id=ultrasonic',
    'Heart':'#/en/mpy/unit?id=heart',
    'ENV/ENV II':'#/en/mpy/unit?id=envenv-ii',
    'ADC':'#/en/mpy/unit?id=adc',
    'ACCEL':'#/en/mpy/unit?id=accel',
    'DAC':'#/en/mpy/unit?id=dac',
    'NCIR':'#/en/mpy/unit?id=ncir',
    'Joystick':'#/en/mpy/unit?id=joystick',
    'ToF':'#/en/mpy/unit?id=tof',
    'COLOR':'#/en/mpy/unit?id=color',
    'EXT.IO':'#/en/mpy/unit?id=extio',
    'RFID':'#/en/mpy/unit?id=rfid',
    'EXT.IO':'#/en/mpy/unit?id=extio',
    'CardKB':'#/en/mpy/unit?id=cardkb',
    'Tracker':'#/en/mpy/unit?id=track',
    'Makey':'#/en/mpy/unit?id=makey'
  },
  "id":"unit_api"
};

const advanced = {
  'title':"Advanced",
  'item':{
    'WiFi':'#/en/mpy/advanced?id=wificfg',
    'MQTT':'#/en/mpy/advanced?id=m5mqtt',
    'ESP-NOW':'#/en/mpy/advanced?id=esp-now',
    'HTTP':'#/en/mpy/advanced?id=http',
    'NTP':'#/en/mpy/advanced?id=ntp',
    'EEPROM':'#/en/mpy/advanced?id=eeprom',
    'UART':'#/en/mpy/advanced?id=uart'
  },
  "id":"advanced_api"
};

var arduino_home_page = new Vue({
    el:'#arduino_home_page',
    data() {
      return {
        list: {
            quickstart: quickstart,
            m5stack_lvgl: m5stack_lvgl,
            iotcloud: iotcloud,
            unit: unit,
            advanced: advanced
          }
      };
    }
})
</script>