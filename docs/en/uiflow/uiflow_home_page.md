<div class="uiflow_banner">
    <div>
      <img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/home_page/uiflow_home_page.webp">
    </div>
    <div style="margin-top:30px">
      <h1 class="jumbotron-heading">UIFlow</h1>
      <p class="lead text-muted">A Web IoT programming platform using Blockly+Python.</p>
      <p>
        <a href="http://flow.m5stack.com/" target="view_window" class="btn btn-primary my-2" style="color:white;text-decoration:none"><el-button type="primary">Go to UIFlow</el-button></a>
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

const iotcloud = {
  'title':"IoT-Cloud",
  'item':{
    'Tencent':'#/en/uiflow/iotcloud/tencent',
    'Azure IoT':'#/en/uiflow/iotcloud/azure',
    'Blynk':'#/en/uiflow/iotcloud/blynk'
  },
  "id":"iotcloud"
};

const hardware = {
  'title':"Hardware",
  'item':{
    'RGB Bar':'#/en/uiflow/hardware?id=rgb',
    'Speaker':'#/en/uiflow/hardware?id=speaker',
    'IMU':'#/en/uiflow/hardware?id=imu',
    'POWER':'#/en/uiflow/hardware?id=power-m5stack'
  },
  "id":"blockly"
};


const uielements = {
  'title':"UI simulator",
  'item':{
    'UI Elements':'#/en/uiflow/ui_simulator?id=ui-elements',
    'Unicode':'#/en/uiflow/ui_simulator?id=unicode',
    'Emoji':'#/en/uiflow/ui_simulator?id=emoji',
    'Graphic':'#/en/uiflow/ui_simulator?id=graphic',
    'Image':'#/en/uiflow/ui_simulator?id=displaying-images',
    'Screen':'#/en/uiflow/ui_simulator?id=screen'
  }
};


const datastructure = {
  'title':"Data structure",
  'item':{
    'variables':'#/en/uiflow/data_structure?id=variables',
    'Basic operation':'#/en/uiflow/data_structure?id=operation',
    'Random':'#/en/uiflow/data_structure?id=random',
    'Array':'#/en/uiflow/data_structure?id=array',
    'Map':'#/en/uiflow/data_structure?id=map',
    'JSON':'#/en/uiflow/data_structure?id=json',
    'text':'#/en/uiflow/data_structure?id=text'
  }
};

const logic = {
  'title':"Logic",
  'item':{
    'if':'#/en/uiflow/logic?id=if',
    'Logic':'#/en/uiflow/logic?id=logic',
    'Logic Operator':'#/en/uiflow/logic?id=logic-operation',
    'Repeat':'#/en/uiflow/logic?id=repeat',
    'Iteration':'#/en/uiflow/logic?id=iteration',
    'Functions':'#/en/uiflow/logic?id=functions'
  }
};

const advanced = {
  'title':"Advanced",
  'item':{
    'Remote':'#/en/uiflow/advanced?id=remote',
    'ESP-NOW':'#/en/uiflow/advanced?id=esp-now',
    'MQTT':'#/en/uiflow/advanced?id=mqtt-communication',
    'WiFi':'#/en/uiflow/advanced?id=wifi',
    'P2P':'#/en/uiflow/advanced?id=p2p',
    'Easy IO':'#/en/uiflow/advanced?id=easy-io',
    'PIN':'#/en/uiflow/advanced?id=pin',
    'PWM':'#/en/uiflow/advanced?id=pwm',
    'ADC':'#/en/uiflow/advanced?id=adc',
    'DAC':'#/en/uiflow/advanced?id=dac',
    'UART':'#/en/uiflow/advanced?id=uart',
    'I2C':'#/en/uiflow/advanced?id=i2c',
    'Execute':'#/en/uiflow/advanced?id=execute',
    'SDCard':'#/en/uiflow/advanced?id=sdcard',
    'Http':'#/en/uiflow/advanced?id=http',
    'Modbus':'#/en/uiflow/advanced?id=modbus-master',
    'BLE UART':'#/en/uiflow/advanced?id=ble-uartsupport-m5stack-fire-only',
    'Blynk':'#/en/uiflow/advanced?id=blynksupport-m5stack-fire-only',
    'Echo STT':'#/en/uiflow/advanced?id=echo-stt',
    'Pin Servo':'#/en/uiflow/advanced?id=pin-servo',
    'NTP':'#/en/uiflow/advanced?id=ntp'
  }
};

const unit = {
  'title':"Units",
  'item':{
    'ENV':'#/en/uiflow/Units?id=env',
    'PIR':'#/en/uiflow/Units?id=pir',
    'RGB LED':'#/en/uiflow/Units?id=rgb-led',
    'Joystick':'#/en/uiflow/Units?id=joystick',
    'MAKEY':'#/en/uiflow/Units?id=makey',
    'SERVO':'#/en/uiflow/Units?id=servo',
    'WEIGHT':'#/en/uiflow/Units?id=weight',
    'TRACE':'#/en/uiflow/Units?id=trace',
    'BUTTON':'#/en/uiflow/Units?id=button',
    'Dual-BUTTON':'#/en/uiflow/Units?id=dual-button',
    'RGB':'#/en/uiflow/Units?id=rgb',
    'RELAY':'#/en/uiflow/Units?id=relay',
    'ADC':'#/en/uiflow/Units?id=adc',
    'DAC':'#/en/uiflow/Units?id=dac',
    'NCIR':'#/en/uiflow/Units?id=ncir',
    'IR':'#/en/uiflow/Units?id=ir',
    'EXT.IO':'#/en/uiflow/Units?id=extio',
    'ANGLE':'#/en/uiflow/Units?id=angle',
    'LIGHT':'#/en/uiflow/Units?id=light',
    'EARTH':'#/en/uiflow/Units?id=earth',
    'ToF':'#/en/uiflow/Units?id=tof',
    'COLOR':'#/en/uiflow/Units?id=color',
    'RFID':'#/en/uiflow/Units?id=rfid',
    'FINGER':'#/en/uiflow/Units?id=finger',
    'CardKB':'#/en/uiflow/Units?id=cardkb',
    'Pb.HUB':'#/en/uiflow/Units?id=pbhub',
    'Pa.HUB':'#/en/uiflow/Units?id=pahub',
    'THERMAL':'#/en/uiflow/Units?id=thermal',
    'GPS':'#/en/uiflow/Units?id=gps'
  }
};

const modules = {
  'title':"Modules",
  'item':{
    'LoRaWAN':'#/en/uiflow/Modules?id=lorawan',
    'LidarBOT':'#/en/uiflow/Modules?id=lidarbot',
    'STEPMOTOR':'#/en/uiflow/Modules?id=stepmotor',
    'SERVO':'#/en/uiflow/Modules?id=servo',
    'Bala Motor':'#/en/uiflow/Modules?id=bala-motor',
    'Bala':'#/en/uiflow/Modules?id=bala',
    'LEGO+':'#/en/uiflow/Modules?id=lego',
    'PM2.5':'#/en/uiflow/Modules?id=pm25',
    'BaseX':'#/en/uiflow/Modules?id=basex',
    'PLUS':'#/en/uiflow/Modules?id=plus',
    'GoPlus':'#/en/uiflow/Modules?id=goplus',
    'GPS':'#/en/uiflow/Modules?id=gps'
  }
};

const faces = {
  'title':"FACES",
  'item':{
    'Calculator':'#/en/uiflow/FACES?id=calculator',
    'Encoder':'#/en/uiflow/FACES?id=encoder',
    'FINGER':'#/en/uiflow/FACES?id=finger',
    'GameBoy':'#/en/uiflow/FACES?id=gameboy',
    'Joystick':'#/en/uiflow/FACES?id=joystick',
    'KeyBoard':'#/en/uiflow/FACES?id=keyboard',
    'RFID':'#/en/uiflow/FACES?id=rfid'
  }
};

const custom = {
  'title':"Block Custom",
  'item':{
    'Create block':'#/en/uiflow/blockly_custom?id=create-block',
    'Code-Parameter':'#/en/uiflow/blockly_custom?id=code-parameter',
    'Save and Changes':'#/en/uiflow/blockly_custom?id=save-and-changes',
    'Using program block':'#/en/uiflow/blockly_custom?id=using-program-block'
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