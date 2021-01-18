<div class="container uiflow_banner">
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
    <div v-for="(href,name) in item.item" :key="name" style="margin: 0px 10px 10px 0px ;display:inline-block;">
      <a :href='href'><el-tag>{{name}}</el-tag></a>
    </div>
  </el-card>
</div>


<script>

const quickstart = {
  'title':"快速上手/固件烧录",
  'item':{
    'BASIC / M5GO / FIRE / FACES':'#/zh_CN/arduino/arduino_development',
    'M5StickC':'#/zh_CN/arduino/arduino_development',
    'M5Stick':'#/zh_CN/arduino/arduino_development',
    'ATOM Lite / Matrix':'#/zh_CN/arduino/arduino_development',
    'M5Core2':'#/zh_CN/arduino/arduino_core2_development'
  },
  "id":"quickstart"
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

var arduino_home_page = new Vue({
    el:'#arduino_home_page',
    data() {
      return {
        list: {
            quickstart: quickstart,
            unit: unit
          }
      };
    }
})
</script>