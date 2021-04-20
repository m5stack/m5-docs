<div class="uiflow_banner">
    <div>
      <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/home_page/uiflow_home_page.webp">
    </div>
    <div style="margin-top:30px">
      <h1 class="jumbotron-heading">UIFlow</h1>
      <p class="lead text-muted">基于Blockly+Python的网页端编程平台</p>
      <p>
        <a href="http://flow.m5stack.com/" target="view_window" class="btn btn-primary my-2" style="color:white;text-decoration:none"><el-button type="primary">打开UIFlow</el-button></a>
      </p>
    </div>
</div>


<div id='uiflow_home_page'>
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

const iotcloud = {
  'title':"物联网平台/IoT-Cloud",
  'item':{
    '腾讯云':'#/zh_CN/uiflow/iotcloud/tencent',
    'Azure IoT':'#/zh_CN/uiflow/iotcloud/azure',
    'Blynk':'#/zh_CN/uiflow/iotcloud/blynk'
  },
  "id":"iotcloud"
};

const hardware = {
  'title':"硬件控制",
  'item':{
    'Watch Dog Timer':'#/zh_CN/uiflow/hardware?id=watch-dog-timer',
    'RGB Bar':'#/zh_CN/uiflow/hardware?id=rgb',
    'Speaker':'#/zh_CN/uiflow/hardware?id=speaker',
    'IMU':'#/zh_CN/uiflow/hardware?id=imu',
    'POWER':'#/zh_CN/uiflow/hardware?id=power-m5stack'
  },
  "id":"blockly"
};


const uielements = {
  'title':"UI绘图",
  'item':{
    'UI Elements':'#/zh_CN/uiflow/ui_simulator?id=ui-elements',
    'Unicode':'#/zh_CN/uiflow/ui_simulator?id=unicode',
    'Emoji':'#/zh_CN/uiflow/ui_simulator?id=emoji',
    'Graphic':'#/zh_CN/uiflow/ui_simulator?id=graphic',
    'Image':'#/zh_CN/uiflow/ui_simulator?id=displaying-images',
    'Screen':'#/zh_CN/uiflow/ui_simulator?id=screen'
  }
};


const datastructure = {
  'title':"数据类型",
  'item':{
    'variables':'#/zh_CN/uiflow/data_structure?id=variables',
    'Basic operation':'#/zh_CN/uiflow/data_structure?id=operation',
    'Random':'#/zh_CN/uiflow/data_structure?id=random',
    'Array':'#/zh_CN/uiflow/data_structure?id=array',
    'Map':'#/zh_CN/uiflow/data_structure?id=map',
    'JSON':'#/zh_CN/uiflow/data_structure?id=json',
    'text':'#/zh_CN/uiflow/data_structure?id=text'
  }
};

const logic = {
  'title':"逻辑判断",
  'item':{
    'if':'#/zh_CN/uiflow/logic?id=if',
    'Logic':'#/zh_CN/uiflow/logic?id=logic',
    'Logic Operator':'#/zh_CN/uiflow/logic?id=logic-operation',
    'Repeat':'#/zh_CN/uiflow/logic?id=repeat',
    'Iteration':'#/zh_CN/uiflow/logic?id=iteration',
    'Functions':'#/zh_CN/uiflow/logic?id=functions'
  }
};

const advanced = {
  'title':"高级功能",
  'item':{
    'Remote':'#/zh_CN/uiflow/advanced?id=remote',
    'ESP-NOW':'#/zh_CN/uiflow/advanced?id=esp-now',
    'MQTT':'#/zh_CN/uiflow/advanced?id=mqtt-communication',
    'WiFi':'#/zh_CN/uiflow/advanced?id=wifi',
    'P2P':'#/zh_CN/uiflow/advanced?id=p2p',
    'Easy IO':'#/zh_CN/uiflow/advanced?id=easy-io',
    'PIN':'#/zh_CN/uiflow/advanced?id=pin',
    'PWM':'#/zh_CN/uiflow/advanced?id=pwm',
    'ADC':'#/zh_CN/uiflow/advanced?id=adc',
    'DAC':'#/zh_CN/uiflow/advanced?id=dac',
    'UART':'#/zh_CN/uiflow/advanced?id=uart',
    'I2C':'#/zh_CN/uiflow/advanced?id=i2c',
    'Execute':'#/zh_CN/uiflow/advanced?id=execute',
    'SDCard':'#/zh_CN/uiflow/advanced?id=sdcard',
    'Http':'#/zh_CN/uiflow/advanced?id=http',
    'Modbus':'#/zh_CN/uiflow/advanced?id=modbus-master',
    'BLE UART':'#/zh_CN/uiflow/advanced?id=ble-uartsupport-m5stack-fire-only',
    'Blynk':'#/zh_CN/uiflow/advanced?id=blynksupport-m5stack-fire-only',
    'Echo STT':'#/zh_CN/uiflow/advanced?id=echo-stt',
    'Pin Servo':'#/zh_CN/uiflow/advanced?id=pin-servo',
    'NTP':'#/zh_CN/uiflow/advanced?id=ntp'
  }
};

const unit = {
  'title':"Units",
  'item':{
    'ENV':'#/zh_CN/uiflow/Units?id=env',
    'PIR':'#/zh_CN/uiflow/Units?id=pir',
    'RGB LED':'#/zh_CN/uiflow/Units?id=rgb-led',
    'Joystick':'#/zh_CN/uiflow/Units?id=joystick',
    'MAKEY':'#/zh_CN/uiflow/Units?id=makey',
    'SERVO':'#/zh_CN/uiflow/Units?id=servo',
    'WEIGHT':'#/zh_CN/uiflow/Units?id=weight',
    'TRACE':'#/zh_CN/uiflow/Units?id=trace',
    'BUTTON':'#/zh_CN/uiflow/Units?id=button',
    'Dual-BUTTON':'#/zh_CN/uiflow/Units?id=dual-button',
    'RGB':'#/zh_CN/uiflow/Units?id=rgb',
    'RELAY':'#/zh_CN/uiflow/Units?id=relay',
    'ADC':'#/zh_CN/uiflow/Units?id=adc',
    'DAC':'#/zh_CN/uiflow/Units?id=dac',
    'NCIR':'#/zh_CN/uiflow/Units?id=ncir',
    'IR':'#/zh_CN/uiflow/Units?id=ir',
    'EXT.IO':'#/zh_CN/uiflow/Units?id=extio',
    'ANGLE':'#/zh_CN/uiflow/Units?id=angle',
    'LIGHT':'#/zh_CN/uiflow/Units?id=light',
    'EARTH':'#/zh_CN/uiflow/Units?id=earth',
    'ToF':'#/zh_CN/uiflow/Units?id=tof',
    'COLOR':'#/zh_CN/uiflow/Units?id=color',
    'RFID':'#/zh_CN/uiflow/Units?id=rfid',
    'FINGER':'#/zh_CN/uiflow/Units?id=finger',
    'CardKB':'#/zh_CN/uiflow/Units?id=cardkb',
    'Pb.HUB':'#/zh_CN/uiflow/Units?id=pbhub',
    'Pa.HUB':'#/zh_CN/uiflow/Units?id=pahub',
    'THERMAL':'#/zh_CN/uiflow/Units?id=thermal',
    'GPS':'#/zh_CN/uiflow/Units?id=gps'
  }
};

const modules = {
  'title':"Modules",
  'item':{
    'LoRaWAN':'#/zh_CN/uiflow/Modules?id=lorawan',
    'LidarBOT':'#/zh_CN/uiflow/Modules?id=lidarbot',
    'STEPMOTOR':'#/zh_CN/uiflow/Modules?id=stepmotor',
    'SERVO':'#/zh_CN/uiflow/Modules?id=servo',
    'Bala Motor':'#/zh_CN/uiflow/Modules?id=bala-motor',
    'Bala':'#/zh_CN/uiflow/Modules?id=bala',
    'LEGO+':'#/zh_CN/uiflow/Modules?id=lego',
    'PM2.5':'#/zh_CN/uiflow/Modules?id=pm25',
    'BaseX':'#/zh_CN/uiflow/Modules?id=basex',
    'PLUS':'#/zh_CN/uiflow/Modules?id=plus',
    'GoPlus':'#/zh_CN/uiflow/Modules?id=goplus',
    'GPS':'#/zh_CN/uiflow/Modules?id=gps'
  }
};

const faces = {
  'title':"FACES",
  'item':{
    'Calculator':'#/zh_CN/uiflow/FACES?id=calculator',
    'Encoder':'#/zh_CN/uiflow/FACES?id=encoder',
    'FINGER':'#/zh_CN/uiflow/FACES?id=finger',
    'GameBoy':'#/zh_CN/uiflow/FACES?id=gameboy',
    'Joystick':'#/zh_CN/uiflow/FACES?id=joystick',
    'KeyBoard':'#/zh_CN/uiflow/FACES?id=keyboard',
    'RFID':'#/zh_CN/uiflow/FACES?id=rfid'
  }
};

const custom = {
  'title':"自定义Block",
  'item':{
    'Create block':'#/zh_CN/uiflow/blockly_custom?id=create-block',
    'Code-Parameter':'#/zh_CN/uiflow/blockly_custom?id=code-parameter',
    'Save and Changes':'#/zh_CN/uiflow/blockly_custom?id=save-and-changes',
    'Using program block':'#/zh_CN/uiflow/blockly_custom?id=using-program-block'
  }
};

var uiflow_home_page = new Vue({
    el:'#uiflow_home_page',
    data() {
      return {
        list: {
            quickstart: quickstart,
            iotcloud: iotcloud,
            hardware: hardware,
            uielements: uielements,
            datastructure: datastructure,
            logic: logic,
            advanced: advanced,
            unit: unit,
            modules:modules,
            faces:faces,
            custom:custom
          }
      };
    }
})

</script>