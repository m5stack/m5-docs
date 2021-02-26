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
  'title':"Quick Start/Development environment setup tutorial",
  'item':{
    'BASIC / M5GO / FIRE / FACES':'#/en/arduino/arduino_development',
    'M5StickC':'#/en/arduino/arduino_development',
    'M5Stick':'#/en/arduino/arduino_development',
    'ATOM Lite / Matrix':'#/en/arduino/arduino_development',
    'M5Core2':'#/en/arduino/arduino_core2_development'
  },
  "id":"quickstart"
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