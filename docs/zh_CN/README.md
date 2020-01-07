<div class="pc-navigation">
  <div class="btn-group-vertical" style="width: 200px;">
    <div class="btn-group">
        <button id="core-btn" type="button" class="btn btn-primary" onclick="select(this)">Core</button>
    </div>
        <div class="btn-group">
        <button id="module-btn" type="button" class="btn btn-light"  onclick="select(this)">Module</button>
    </div>
    <div class="btn-group">
        <button id="base-btn" type="button" class="btn btn-light"  onclick="select(this)">Base</button>
    </div>
    <div class="btn-group">
        <button id="unit-btn" type="button" class="btn btn-light"  onclick="select(this)">Unit</button>
    </div>
    <div class="btn-group">
        <button id="application-btn" type="button" class="btn btn-light"  onclick="select(this)">Application</button>
    </div>
        <div class="btn-group">
        <button id="accessory-btn" type="button" class="btn btn-light"  onclick="select(this)">Accessory</button>
    </div>
    <div class="btn-group">
        <button id="aluminium-btn" type="button" class="btn btn-light"  onclick="select(this)">Aluminium</button>
    </div>
</div>
<hr>
  <div class="btn-group-vertical" style="width: 200px;">
    <a class="btn btn btn-primary" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/I2C_Address.pdf" role="button" style="color:white;text-decoration:none" target="view_window">I2C地址表格</a>
    <a class="btn btn btn-primary" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/Product_compared.pdf" role="button" style="color:white;text-decoration:none" target="view_window">产品参数表格</a>
  </div>
</div>

</div>


  <div class="navbar-toggler mb-navigation dropdown-toggle" data-toggle="collapse" data-target="#thetarget">Core</div>
  <div class="collapse navbar-collapse" id="thetarget">
  <nav class="navbar-expand-sm bg-light navbar-dark nav-content">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="dropdown-item"  onclick="select(this)">Core</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item"  onclick="select(this)">Module</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item"  onclick="select(this)">Base</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item"  onclick="select(this)">Unit</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item"  onclick="select(this)">Application</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item"  onclick="select(this)">Accessory</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item"  onclick="select(this)">Aluminium</a>
      </li>
    </ul>
    <hr>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="dropdown-item" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/I2C_Address.pdf" target="view_window">I2C地址表格</a>
      </li>
      <li class="nav-item">
        <a class="dropdown-item" href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/Product_compared.pdf" target="view_window">产品参数表格</a>
      </li>
    </ul>
  </nav>    
</div>


<div class="product_page">
<div id="search_note" style="display:none;position:fixed;top:30%">
  <h3>没有搜索到相关信息，请输入产品首字母，重新进行搜索.</h3>
</div>
</div>

<script>
    var core_list = [
      //Core
      {a:"/#/zh_CN/core/basic", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_basic_01.png", p:"BASIC"},
      {a:"/#/zh_CN/core/gray", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_gray_01.webp", p:"GRAY"},
      {a:"/#/zh_CN/core/fire", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_fire_01.png", p:"FIRE"},
      {a:"/#/zh_CN/core/m5go_lite", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_m5go_lite_01.png", p:"M5GO Lite"},
      {a:"/#/zh_CN/core/m5go", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_m5go_01.png", p:"M5GO Kit"},
      {a:"/#/zh_CN/core/face_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_faces_01.webp", p:"FACES Kit"},
      //Stick
      {a:"/#/zh_CN/core/m5stick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stick_01.png", p:"M5Stick"},
      {a:"/#/zh_CN/core/m5stickc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stickc_01.webp", p:"M5StickC"},
      {a:"/#/zh_CN/core/m5stickv", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/m5stickv_01.jpg", p:"M5StickV"},
      {a:"/#/zh_CN/core/m5stickt", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/m5stickt_01.jpg", p:"M5StickT"},
      //ATOM
      {a:"/#/en/core/atom_lite", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_lite_01.webp", p:"ATOM Lite"},
      {a:"/#/en/core/atom_matrix", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_matrix_01.webp", p:"ATOM Matrix"},

    ];

    var module_list = [
      //Communication Modules
      {a:"/#/zh_CN/module/lora", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lora_01.jpg", p:"LoRa (433MHz)"},
      {a:"/#/zh_CN/module/lorawan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lorawan_01.png", p:"LoRaWAN"},
      {a:"/#/zh_CN/module/gps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_gps_01.png", p:"GPS"},
      {a:"/#/zh_CN/module/sim800", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_sim800_01.png", p:"SIM800L"},
      {a:"/#/zh_CN/module/commu", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_commu_01.png", p:"COMMU"},
      {a:"/#/zh_CN/module/lte", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/lte_01.jpg", p:"LTE"},
      {a:"/#/zh_CN/module/gsm", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/gsm_01.jpg", p:"GSM"},
      {a:"/#/zh_CN/module/nb-iot", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/nb_iot_01.jpg", p:"NB-IoT"},
      {a:"/#/zh_CN/module/lora868", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/lora868_01.jpg", p:"LoRa868"},
      {a:"/#/zh_CN/module/nb-iot_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/nb_iot_plus.webp", p:"NB-IoT Plus"},

      //Expansion Modules
      {a:"/#/zh_CN/module/battery", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_battery_01.png", p:"BATTERY"},
      {a:"/#/zh_CN/module/proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_proto_01.png", p:"PROTO"},
      {a:"/#/zh_CN/module/plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_plus_01.png", p:"PLUS"},
      {a:"/#/zh_CN/module/usb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_usb_01.png", p:"USB"},
      {a:"/#/zh_CN/module/bus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_bus_01.png", p:"BUS"},
      {a:"/#/zh_CN/module/goplus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_goplus_p1.png", p:"GoPlus"},
      //Drive Modules
      {a:"/#/zh_CN/module/stepmotor", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_stepmotor_01.png", p:"STEPMOTOR"},
      {a:"/#/zh_CN/module/servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/servo_01.jpg", p:"SERVO"},
      {a:"/#/zh_CN/module/lego_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lego_plus_01.png", p:"LEGO+"},
      {a:"/#/zh_CN/module/fan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_FAN.png", p:"FAN"},
      //FACES Series
      {a:"/#/zh_CN/module/encoder", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_encoder_01.png", p:"ENCODER"},
      {a:"/#/zh_CN/module/joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_joystick_01.png", p:"JOYSTICK"},
      {a:"/#/zh_CN/module/faces_finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faces_finger_01.jpg", p:"FINGER"},
      {a:"/#/zh_CN/module/faces_rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faces_rfid_01.jpg", p:"RFID"},
      {a:"/#/zh_CN/module/faces", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/face_01.jpg", p:"FACES"},
      {a:"/#/zh_CN/module/facesII", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faceii_01.jpg", p:"FACES II"},
    ];

    var base_list = [
      //Base
      {a:"/#/zh_CN/base/lan_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_lan_01.png", p:"LAN"},
      {a:"/#/zh_CN/base/node_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_node_01.png", p:"NODE"},
      {a:"/#/zh_CN/base/btc_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_btc_01.png", p:"BTC"},
      {a:"/#/zh_CN/base/plc_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/plc_m12_01.jpg", p:"PLC"},
      {a:"/#/zh_CN/base/core_bottom", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_core_bottom_01.png", p:"Core BOTTOM"},
      {a:"#/zh_CN/base/m5go_bottom", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_bottom_01.png", p:"M5GO BOTTOM"},
      {a:"/#/zh_CN/base/m5go_rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_rfid_01.png", p:"M5GO RFID"},
      {a:"/#/zh_CN/base/m5go_charger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_base_01.png", p:"M5GO CHARGER"},
      {a:"/#/zh_CN/base/base15", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_base15_01.jpg", p:"BASE15"},
      {a:"/#/zh_CN/base/base26", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_base26_01.jpg", p:"BASE26"},
      {a:"/#/zh_CN/accessory/battery_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/battery_base_01.jpg", p:"M5Camera Battery"},
      {a:"/#/zh_CN/base/baseX", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_basex_01.webp", p:"BaseX"},
    ];

    var unit_list = [
      //Camera class
      {a:"/#/zh_CN/unit/esp32cam", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_esp32cam_01.png", p:"ESP32CAM"},
      {a:"/#/zh_CN/unit/m5camera", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_01.png", p:"M5Camera"},
      {a:"#/zh_CN/unit/m5camera_f", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_f_01.png", p:"M5CameraF"},
      {a:"/#/zh_CN/unit/m5camera_x", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_x_01.png", p:"M5CameraX"},
      {a:"/#/zh_CN/unit/unitv", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit-v-01.webp", p:"UNIT-V"},
      //Sensor class
      {a:"/#/zh_CN/unit/earth", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_earth_01.png", p:"EARTH"},
      {a:"/#/zh_CN/unit/env", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_env_01.png", p:"ENV"},
      {a:"/#/zh_CN/unit/light", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_light_01.png", p:"LIGHT"},
      {a:"/#/zh_CN/unit/pir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pir_01.png", p:"PIR"},
      {a:"/#/zh_CN/unit/ncir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_ncir_01.png", p:"NCIR"},
      {a:"/#/zh_CN/unit/thermal", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_thermal_01.png", p:"THERMAL"},
      {a:"/#/zh_CN/unit/color", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_color_01.png", p:"COLOR"},
      {a:"/#/zh_CN/unit/tof", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_tof_01.png", p:"TOF"},
      {a:"/#/zh_CN/unit/heart", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_heart_01.png", p:"HEART"},
      {a:"/#/zh_CN/unit/adc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_adc_01.png", p:"ADC"},
      {a:"/#/zh_CN/unit/makey", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_makey_01.png", p:"MAKEY"},
      {a:"/#/zh_CN/unit/finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_finger_01.png", p:"FINGER"},
      {a:"/#/zh_CN/unit/weight", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_weight_01.png", p:"WEIGHT"},
      {a:"/#/zh_CN/unit/accel", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_accel_01.jpg", p:"ACCEL"},
      {a:"/#/zh_CN/unit/op90", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_op90_01.jpg", p:"OP.90"},
      {a:"/#/zh_CN/unit/op180", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_op180_01.jpg", p:"OP.180"},
      //I / 0  class
      {a:"/#/zh_CN/unit/extio", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_extio_01.png", p:"EXT.IO"},
      {a:"/#/zh_CN/unit/dac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_dac_01.png", p:"DAC"},
      {a:"/#/zh_CN/unit/relay", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_relay_01.png", p:"RELAY"},
      {a:"/#/zh_CN/unit/hub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_hub_01.png", p:"HUB"},
      {a:"/#/zh_CN/unit/pahub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pahub_p1.png", p:"PaHUB"},
      {a:"/#/zh_CN/unit/pbhub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pbhub_p1.png", p:"PbHUB"},
      {a:"/#/zh_CN/unit/396port", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_396port_01.png", p:"3.96Port"},
      {a:"/#/zh_CN/unit/m5-bit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5bit_01.jpg", p:"M5:bit"},
      {a:"/#/zh_CN/unit/proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_proto_01.png", p:"PROTO"},
      {a:"/#/zh_CN/unit/mini-proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/mini_proto_01.jpg", p:"MINI-PROTO"},
      {a:"/#/zh_CN/unit/unit_fan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_fan_01.jpg", p:"FAN"},
      {a:"/#/zh_CN/unit/vibrator", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_vibrator_motor_01.jpg", p:"Vibrator-Motor"},
      {a:"/#/zh_CN/unit/angle", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_angle_01.png", p:"ANGLE"},
      {a:"/#/zh_CN/unit/button", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_button_01.png", p:"BUTTON"},
      {a:"/#/zh_CN/unit/dual_button", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_dual_button_01.png", p:"Dual-BUTTON"},
      {a:"/#/zh_CN/unit/joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_joystick_01.png", p:"JOYSTICK"},
      {a:"/#/zh_CN/unit/cardkb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_cardkb_01.png", p:"CardKB"},
      //Communication class
      {a:"/#/zh_CN/unit/ir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_ir_01.png", p:"IR"},
      {a:"/#/zh_CN/unit/gps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_gps_01.png", p:"GPS"},
      {a:"/#/zh_CN/unit/rs485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rs485_01.png", p:"RS485"},
      {a:"/#/zh_CN/unit/rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rfid_01.png", p:"RFID"},
      {a:"/#/zh_CN/unit/laser-rx", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/laser_rx_01.jpg", p:"LASER-RX"},
      {a:"/#/zh_CN/unit/laser-tx", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/laser_tx_01.jpg", p:"LASER-TX"},
      //LED class
      {a:"/#/zh_CN/unit/neopixel", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/M5GO_Unit_neopixel.jpg", p:"RGB LED"},
      {a:"/#/zh_CN/unit/hex", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_hex_01.jpg", p:"HEX"},
      {a:"/#/zh_CN/unit/rgb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rgb_01.png", p:"RGB"},
      //C-HAT class
      {a:"/#/zh_CN/hat/hat-spk", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_spk_01.jpg", p:"SPK"},
      {a:"/#/zh_CN/hat/hat-env", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_env_01.jpg", p:"ENV"},
      {a:"/#/zh_CN/hat/hat-pir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_pir_01.jpg", p:"PIR"},
      {a:"/#/zh_CN/hat/hat-proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_proto_01.jpg", p:"PROTO"},
      {a:"/#/zh_CN/hat/hat-ncir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_ncir_01.jpg", p:"NCIR"},
      {a:"/#/zh_CN/hat/hat-thermal", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_thermal_01.jpg", p:"Thermal"},
      {a:"/#/zh_CN/hat/hat-rs485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/rs485_hat_01.jpg", p:"RS485"},
      {a:"/#/zh_CN/hat/hat-adc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/adc_hat_01.jpg", p:"ADC"},
      {a:"/#/zh_CN/hat/hat-dac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/dac_hat_01.jpg", p:"DAC"},
      {a:"/#/zh_CN/hat/hat-beetlec", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/beetlec_hat_01.jpg", p:"BeetleC"},
      {a:"/#/zh_CN/hat/hat-proto-plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_proto_plus_01.jpg", p:"PROTO PLUS"},
      {a:"/#/zh_CN/hat/hat-yun", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/yun_hat_01.jpg", p:"YUN"},
      {a:"/#/zh_CN/hat/hat-neoflash", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/neoflash_hat_01.jpg", p:"Neoflash"},
      {a:"/#/zh_CN/hat/hat-tof", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/tof_hat_01.jpg", p:"ToF"},
      {a:"/#/zh_CN/hat/hat-joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/joystick_hat_01.jpg", p:"Joystick"},
      {a:"/#/zh_CN/hat/hat-finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/finger_hat_01.jpg", p:"FINGER"},
      {a:"/#/zh_CN/hat/hat-servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/servo_hat_01.jpg", p:"SERVO"},
      {a:"/#/zh_CN/hat/hat-puppyc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/puppyc_01.webp", p:"PuppyC"},
      {a:"/#/zh_CN/hat/hat-8servos", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/8servos_01.jpg", p:"8Servos"},
      {a:"/#/zh_CN/hat/hat-bugc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/bugc_hat_01.jpg", p:"BugC"},
      {a:"/#/zh_CN/hat/hat-cardkb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/cardkb_hat_01.jpg", p:"CardKB"},
      {a:"/#/zh_CN/hat/hat-roverc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/roverc_hat_01.jpg", p:"RoverC"},
      {a:"/#/zh_CN/hat/hat-joyc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/JoyC_01.jpg", p:"JoyC"},
      {a:"/#/zh_CN/hat/hat-18650", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/18650C_01.webp", p:"18650C"},
      {a:"/#/zh_CN/hat/hat-powerc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/PowerC_01.webp", p:"PowerC"},
    ];


    var application_list = [
      //Application
      {a:"/#/zh_CN/app/bala", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_bala_01.png", p:"BALA"},
      {a:"/#/zh_CN/app/lidarbot", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_lidarbot_01.png", p:"LidarBOT"},
      {a:"/#/zh_CN/app/piano", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_piano_01.png", p:"PIANO"},
      {a:"/#/zh_CN/app/flir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_flir_01.png", p:"FLIR"},
      {a:"/#/zh_CN/app/demo-board", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_DemoBoard_01.jpg", p:"Demo Board"},
      {a:"/#/zh_CN/unit/neoflash", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_neoflash_01.png", p:"NeoFlash"},
      {a:"/#/zh_CN/unit/catear", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_catear_01.png", p:"CatEar"},
      {a:"/#/zh_CN/unit/butterfly", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/butterfly_01.jpg", p:"BUTTERFLY"},
      {a:"/#/zh_CN/1515/6060-push", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/6060_push_01.jpg", p:"6060-PUSH"},
      {a:"/#/zh_CN/app/m5scale_diy_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/m5scale_diy_kit_01.jpg", p:"M5SCALE DIY Kit"},
      {a:"/#/zh_CN/app/ac_socket", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/ac_socket_01.jpg", p:"AC Socket"},
      {a:"/#/zh_CN/base/pm2.5", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_pm25_01.jpg", p:"PM2.5"},
      {a:"/#/zh_CN/base/iiot_dual_switch_kit_with_core", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/iiot_dual_switch%20kit_with_core_01.jpg", p:"IIoT Dual-Switch Kit"}
    ];

   var accessory_list = [
      //Accessory
      {a:"/#/zh_CN/accessory/converter/grove_t", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/grove_t_01.png", p:"Grove-T"},
      {a:"/#/zh_CN/accessory/cable/grove_cable", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/grove_cable_01.png", p:"Grove Cable"},
      {a:"/#/zh_CN/accessory/converter/grove2grove", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_g2g_01.jpg", p:"GROVE2GROVE"},
      {a:"/#/zh_CN/accessory/screw", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/screw_p1.png", p:"SCREW"},
      {a:"/#/zh_CN/accessory/bus_socket", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_bus_socket_01.jpg", p:"BUS-Socket"},
      {a:"/#/zh_CN/accessory/frame", img:"assets/img/product_pics/accessory/frame_01.jpg", p:"Frame"},
      {a:"/#/zh_CN/unit/trace", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_trace_01.png", p:"TRACE"},
      {a:"/#/zh_CN/module/proto_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_proto_02.jpg", p:"PROTO-KIT"},
      {a:"/#/zh_CN/tool/usb_downloader", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/tool/usb_downloader_01.png", p:"USB Downloader"},
      {a:"/#/zh_CN/tool/usb_isp", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/tool/tool_usb_isp_01.png", p:"USB-ISP"},
      {a:"/#/zh_CN/accessory/glass_panel_repair", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/glass_panel_repair_kit_01.jpg", p:"Glass Panel Repair Kit"},
      {a:"/#/zh_CN/accessory/485t", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/485t_01.jpg", p:"485T"},
      {a:"/#/zh_CN/accessory/watch", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/watch_01.jpg", p:"Watch"},
      {a:"/#/zh_CN/accessory/sg90_servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/servo_01.webp", p:"SG90 servo"},
    ];

   var aluminium_list = [
      //Aluminium
      {a:"/#/zh_CN/1515/corner", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_corner_01.jpg", p:"CORNER"},
      {a:"/#/zh_CN/1515/nut", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_nut_01.jpg", p:"NUT"},
      {a:"/#/zh_CN/1515/connectors", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/ap_30_01.jpg", p:"Connector"},
      {a:"/#/zh_CN/1515/ap", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/ap_ap_01.jpg", p:"Aluminium-Profile"}
    ];

    
    // var product = [core,module,unit,base,application,accessory,aluminium];
    var product_class = [core_list,module_list,base_list,unit_list,application_list,accessory_list,aluminium_list];
    var product_class_name = ["core","module","base","unit","application","accessory","aluminium"];

    for (var i=0; i<product_class_name.length; i++){
      $(".product_page").append("<div></div>");
      $(".product_page div:last-child").attr("id",product_class_name[i]);
    }

    // console.log(product_class[0][0].a);
    // console.log(product_class[0].length);
    for (var class_num=0; class_num<product_class.length; class_num++ ){
      for (var i=0; i<product_class[class_num].length; i++ ) {
        if(product_class[class_num][i].p == "BASIC"){
           $("#"+product_class_name[class_num]).append("<p><strong>M5Core/Kit</strong></p>");
        }
        if(product_class[class_num][i].p == "M5Stick"){
           $("#"+product_class_name[class_num]).append("<p><strong>M5Stick</strong></p>");
        }
        if(product_class[class_num][i].p == "ATOM Lite"){
           $("#"+product_class_name[class_num]).append("<p><strong>ATOM</strong></p>");
        }
        if(product_class[class_num][i].p == "LoRa (433MHz)"){
           $("#"+product_class_name[class_num]).append("<p><strong>Communication Modules</strong></p>");
        }
        if(product_class[class_num][i].p == "BATTERY"){
           $("#"+product_class_name[class_num]).append("<p><strong>Expansion Modules</strong></p>");
        }
        if(product_class[class_num][i].p == "STEPMOTOR"){
           $("#"+product_class_name[class_num]).append("<p><strong>Drive Modules</strong></p>");
        }
        if(product_class[class_num][i].p == "ENCODER"){
           $("#"+product_class_name[class_num]).append("<p><strong>FACES Series</strong></p>");
        }
        if(product_class[class_num][i].p == "LAN"){
           $("#"+product_class_name[class_num]).append("<p><strong>Base</strong></p>");
        }
        if(product_class[class_num][i].p == "ESP32CAM"){
           $("#"+product_class_name[class_num]).append("<p><strong>Camera class</strong></p>");
        }
        if(product_class[class_num][i].p == "EARTH"){
           $("#"+product_class_name[class_num]).append("<p><strong>Sensor class</strong></p>");
        }
        if(product_class[class_num][i].p == "EXT.IO"){
           $("#"+product_class_name[class_num]).append("<p><strong>I / 0  class</strong></p>");
        }
        if(product_class[class_num][i].p == "IR"){
           $("#"+product_class_name[class_num]).append("<p><strong>Communication class</strong></p>");
        }
        if(product_class[class_num][i].p == "RGB LED"){
           $("#"+product_class_name[class_num]).append("<p><strong>LED class</strong></p>");
        }
        if(product_class[class_num][i].p == "SPK"){
           $("#"+product_class_name[class_num]).append("<p><strong>C-HAT class</strong></p>");
        }
        if(product_class[class_num][i].p == "BALA"){
           $("#"+product_class_name[class_num]).append("<p><strong>Application</strong></p>");
        }
        if(product_class[class_num][i].p == "Grove-T"){
           $("#"+product_class_name[class_num]).append("<p><strong>Accessory</strong></p>");
        }
        if(product_class[class_num][i].p == "CORNER"){
           $("#"+product_class_name[class_num]).append("<p><strong>Aluminium</strong></p>");
        }
        $("#"+product_class_name[class_num]).append("<div class='item'><a><img><p class='item-title'></p></a></div> ");
        $("#"+product_class_name[class_num]+" .item:last-child a").attr("href", product_class[class_num][i].a);
        $("#"+product_class_name[class_num]+" .item:last-child img").attr("src", product_class[class_num][i].img);
        $("#"+product_class_name[class_num]+" .item:last-child p").text(product_class[class_num][i].p);
      }
    } 
 


    $(document).ready(function(){
        var mask_html = `<div class="mask"><a href="#" style="color:white;text-decoration:none" ><button type="button" class="btn-sm btn-primary mask-btn1">快速上手 »</button></a><button type="button" class="btn-sm btn-primary mask-btn2">产品文档 »</button></div>`
        $("#core div.item a").append(mask_html);
        $("#unit div.item a:lt(5)").append(mask_html);
        $("#core .mask a").attr("href", "#zh_CN/quick_start/m5core/m5stack_core_quick_start");
        $("#core .mask a").eq(6).attr("href", "#zh_CN/quick_start/m5stick/m5stick_quick_start");
        $("#core .mask a").eq(7).attr("href", "#zh_CN/quick_start/m5stickc/m5stickc_quick_start");
        $("#core .mask a").eq(8).attr("href", "#zh_CN/quick_start/m5stickv/m5stickv_quick_start");
        $("#unit .mask a").attr("href", "#zh_CN/quick_start/m5camera/m5camera_quick_start");
        $("#unit .mask a").eq(4).attr("href", "#zh_CN/quick_start/unitv/unitv_quick_start");
        $(".product_page strong").parent('p').css("margin-bottom","0px");
     });
    

  var scrollFunc = function (e) {  
  e = e || window.event;  
  // if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件 
      var test = window.location.href;
      if(((test.slice(-4) == "/en/")||(test.slice(-7)== "/zh_CN/"))||((test.indexOf(/en/) == -1) && (test.indexOf(/zh_CN/) == -1))){
        $(".btn-group-vertical button").addClass("btn-light");
        if(($("#core").offset().top + $("#core").height() - $(window).scrollTop()) > 100){
            $(".mb-navigation").text('  Core');
            $("#core-btn").removeClass("btn-light");
            $("#core-btn").addClass("btn-primary");
        }else if(($("#module").offset().top + $("#module").height() - $(window).scrollTop()) > 100){
            $(".mb-navigation").text('  Module');
            $("#module-btn").removeClass("btn-light");
            $("#module-btn").addClass("btn-primary"); 
        }else if(($("#base").offset().top + $("#base").height() - $(window).scrollTop()) > 100){
            $(".mb-navigation").text('  Base');          
            $("#base-btn").removeClass("btn-light");
            $("#base-btn").addClass("btn-primary");  
        }else if(($("#unit").offset().top + $("#unit").height() - $(window).scrollTop())> 100){
            $(".mb-navigation").text('  Unit');
            $("#unit-btn").removeClass("btn-light");
            $("#unit-btn").addClass("btn-primary");  
        }else if(($("#application").offset().top + $("#application").height() - $(window).scrollTop())> 100){
            $(".mb-navigation").text('  Application');          
            $("#application-btn").removeClass("btn-light");
            $("#application-btn").addClass("btn-primary");  
        }else if(($("#accessory").offset().top + $("#accessory").height() - $(window).scrollTop()) > 800){
            $(".mb-navigation").text('  Accessory');          
            $("#accessory-btn").removeClass("btn-light");
            $("#accessory-btn").addClass("btn-primary");  
        }else if(($("#aluminium").offset().top + $("#aluminium").height() - $(window).scrollTop()) > 100){
            $(".mb-navigation").text('  Aluminium');           
            $("#aluminium-btn").removeClass("btn-light");
            $("#aluminium-btn").addClass("btn-primary");  
        }
      // }
  }  
} 

scrollFunc();

/*IE、Opera注册事件*/
if(document.attachEvent){
  document.attachEvent('onmousewheel',scrollFunc);

}
//Firefox使用addEventListener添加滚轮事件  
if (document.addEventListener) {//firefox  
  document.addEventListener('DOMMouseScroll', scrollFunc, false);  
}  
//Safari与Chrome属于同一类型
// window.onmousewheel = document.onmousewheel = scrollFunc;
// window.onscroll = document.onscroll = scrollFunc;
window.onscroll = scrollFunc;
</script>