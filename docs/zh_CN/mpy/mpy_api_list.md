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
  'title':"快速上手",
  'item':{
    'BASIC / M5GO / FIRE / FACES':'#/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython',
    'Core2':'#/zh_CN/quick_start/core2/m5stack_core2_get_started_MicroPython',
    'M5StickC':'#/zh_CN/quick_start/m5stickc/m5stickc_quick_start_with_uiflow',
    'M5StickC PLUS':'#/zh_CN/quick_start/m5stickc_plus/m5stickc_plus_quick_start_with_uiflow',
    'M5Stick':'#/zh_CN/quick_start/m5stick/m5stick_quick_start_with_uiflow',
    'ATOM Echo':'#/zh_CN/quick_start/atom/atom_echo_quick_start',
    'ATOM Lite / Matrix':'#/zh_CN/quick_start/atom/atom_quick_start_uiflow'
  },
  "id":"quickstart"
};

const m5stack_lvgl = {
  'title':"M5Stack LVGL",
  'item':{
    'Screen':'#/zh_CN/mpy/m5stack_lvgl?id=m5screen',
    'Tabview':'#/zh_CN/mpy/m5stack_lvgl?id=m5tabview',
    'Textarea':'#/zh_CN/mpy/m5stack_lvgl?id=m5textarea',
    'Msgbox':'#/zh_CN/mpy/m5stack_lvgl?id=m5msgbox',
    'Led':'#/zh_CN/mpy/m5stack_lvgl?id=m5led',
    'Switch':'#/zh_CN/mpy/m5stack_lvgl?id=m5switch',
    'Slider':'#/zh_CN/mpy/m5stack_lvgl?id=m5slider',
    'List':'#/zh_CN/mpy/m5stack_lvgl?id=m5list',
    'Line':'#/zh_CN/mpy/m5stack_lvgl?id=m5line',
    'Label':'#/zh_CN/mpy/m5stack_lvgl?id=m5label',
    'Img':'#/zh_CN/mpy/m5stack_lvgl?id=m5img',
    'Dropdown':'#/zh_CN/mpy/m5stack_lvgl?id=m5dropdown',
    'Cpicker':'#/zh_CN/mpy/m5stack_lvgl?id=m5cpicker',
    'Checkbox':'#/zh_CN/mpy/m5stack_lvgl?id=m5checkbox',
    'Btn':'#/zh_CN/mpy/m5stack_lvgl?id=m5btn',
    'Arc':'#/zh_CN/mpy/m5stack_lvgl?id=m5arc',
    'Bar':'#/zh_CN/mpy/m5stack_lvgl?id=m5bar',
    'Imgbtn':'#/zh_CN/mpy/m5stack_lvgl?id=m5imgbtn',
    'Obj':'#/zh_CN/mpy/m5stack_lvgl?id=m5obj'
  },
  "id":"m5stack_lvgl_api"
};

const unit = {
  'title':"Unit I2C Class",
  'item':{
    'Ultrasonic':'#/zh_CN/mpy/unit?id=ultrasonic',
    'Heart':'#/zh_CN/mpy/unit?id=heart',
    'ENV/ENV II':'#/zh_CN/mpy/unit?id=envenv-ii',
    'ADC':'#/zh_CN/mpy/unit?id=adc',
    'ACCEL':'#/zh_CN/mpy/unit?id=accel',
    'DAC':'#/zh_CN/mpy/unit?id=dac',
    'NCIR':'#/zh_CN/mpy/unit?id=ncir',
    'Joystick':'#/zh_CN/mpy/unit?id=joystick',
    'ToF':'#/zh_CN/mpy/unit?id=tof',
    'COLOR':'#/zh_CN/mpy/unit?id=color',
    'EXT.IO':'#/zh_CN/mpy/unit?id=extio',
    'RFID':'#/zh_CN/mpy/unit?id=rfid',
    'EXT.IO':'#/zh_CN/mpy/unit?id=extio',
    'CardKB':'#/zh_CN/mpy/unit?id=cardkb',
    'Tracker':'#/zh_CN/mpy/unit?id=track',
    'Makey':'#/zh_CN/mpy/unit?id=makey'
  },
  "id":"unit_api"
};

const advanced = {
  'title':"Advanced",
  'item':{
    'WiFi':'#/zh_CN/mpy/advanced?id=wificfg',
    'MQTT':'#/zh_CN/mpy/advanced?id=m5mqtt',
    'ESP-NOW':'#/zh_CN/mpy/advanced?id=esp-now',
    'HTTP':'#/zh_CN/mpy/advanced?id=http',
    'NTP':'#/zh_CN/mpy/advanced?id=ntp',
    'EEPROM':'#/zh_CN/mpy/advanced?id=eeprom',
    'UART':'#/zh_CN/mpy/advanced?id=uart'
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
            unit: unit,
            advanced: advanced
          }
      };
    }
})
</script>