<div class="product_page">
<div id="search_note" style="display:none;position:fixed;top:30%">
  <h3>No relevant information was found, please enter product keywords and search again.</h3>
</div>
</div>

<script>
    const core_list = [
      //Core
      {a:"/#/en/core/basic", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_basic_01.webp", p:"BASIC", sku:"K001", qs:"#en/quick_start/m5core/m5stack_core_quick_start" ,kw:"ESP32 IP5306"},
      {a:"/#/en/core/gray", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_gray_01.webp", p:"GRAY", sku:"K002", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150"},
      {a:"/#/en/core/fire", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_fire_01.webp", p:"FIRE", sku:"K007", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 LEGO MICPHONE"},
      {a:"/#/en/core/m5go_lite", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_m5go_lite_01.webp", p:"M5GO Lite", sku:"K022", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 LEGO"},
      {a:"/#/en/core/m5go", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_m5go_01.webp", p:"M5GO Kit", sku:"K006", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 LEGO MICPHONE"},
      {a:"/#/en/core/face_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_faces_01.webp", p:"FACES Kit", sku:"K005", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 MICPHONE"},
      //Stick
      {a:"/#/en/core/m5stick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stick_01.webp", p:"M5Stick", sku:"K016", qs:"#en/quick_start/m5stick/m5stick_quick_start" ,kw:"ESP32 OLED IP5306 MPU9250"},
      {a:"/#/en/core/m5stickc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stickc_01.webp", p:"M5StickC", sku:"K016-C", qs:"#en/quick_start/m5stickc/m5stickc_quick_start" ,kw:"ESP32 AXP192 MPU6886"},
      {a:"/#/en/core/m5stickv", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/m5stickv_01.webp", p:"M5StickV", sku:"K027" , qs:"#en/quick_start/m5stickv/m5stickv_quick_start", kw:"K210 CAMERA AXP192 MPU6886"},
      {a:"/#/en/core/m5stickt", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/m5stickt_01.webp", p:"M5StickT", sku:"K016-T" ,kw:"ESP32 FLIR3.0 AXP192"},
      {a:"/#/en/core/m5stickc_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stickc_plus_01.webp", p:"M5StickC PLUS", sku:"K016-P", qs:"#en/quick_start/m5stickc_plus/m5stickc_plus_quick_start" ,kw:"ESP32 AXP192 MPU6886"},
    ];
    const atom_list = [
      //ATOM
      {a:"/#/en/core/atom_lite", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_lite_01.webp", p:"ATOM Lite", sku:"C008" ,qs:"#en/quick_start/atom/atom_quick_start", kw:"ESP32 LED"},
      {a:"/#/en/core/atom_matrix", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_matrix_01.webp", p:"ATOM Matrix", sku:"C008-B", qs:"#en/quick_start/atom/atom_quick_start" ,kw:"ESP32 LED MPU6886"},
      {a:"/#/en/atom/atomecho", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_echo.webp", p:"ATOM ECHO", sku:"C008-C",qs:"#en/quick_start/atom/atom_echo_quick_start" ,kw:"ESP32 Speaker I2S"},
       //ATOM BASE
      {a:"/#/en/atom/atomic", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomic_01.webp", p:"ATOMIC", sku:"A077" ,kw:"PROTOTYPE"},
      {a:"/#/en/atom/tail485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/tail485_01.webp", p:"Tail485", sku:"T002" ,kw:"RS485"},
      {a:"/#/en/atom/tailbat", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/tailbat_01.webp", p:"TailBat", sku:"T001" ,kw:"BATTERY POWER SUPPLY LIPO"},
      {a:"/#/en/atom/atomhub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atom_hub_proto.webp", p:"ATOM HUB PROTO", sku:"K039" ,kw:"ATOM HUB PROTO BASE"},
      {a:"/#/en/atom/atomic_qr", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomic_qr_01.webp", p:"ATOM QR-CODE Kit", sku:"K041" ,kw:"ATOM QR CODE SCAN"},
      {a:"/#/en/atom/atomicgps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomicgps_01.webp", p:"ATOM GPS Kit", sku:"K043" ,kw:"ATOM GPS TF"},
      {a:"/#/en/atom/atomictf", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomictf_01.webp", p:"ATOM TF-CARD Kit", sku:"K044" ,kw:"ATOM TF"},
      {a:"/#/en/atom/atomic232", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atom232.webp", p:"ATOM RS-232 Kit", sku:"K046" ,kw:"ATOM RS232"},
      {a:"/#/en/atom/atomic485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atom485.webp", p:"ATOM RS-485 Kit", sku:"K045" ,kw:"ATOM RS485"},
      {a:"/#/en/atom/atomhub_switch", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomswitch.webp", p:"ATOM SWITCH Kit", sku:"K042" ,kw:"ATOM SWITCH RS485"},
      {a:"/#/en/atom/atomfly", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomfly.webp", p:"ATOM FLY Kit", sku:"K040" ,kw:"ATOM FLY"},
      {a:"/#/en/atom/atom_mate", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atom_mate.webp", p:"ATOM MATE", sku:"A086" ,kw:"ATOM MATE HAT MOUNT PIN"},
      {a:"/#/en/atom/atomic_step_motor", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atom_stepmotor.webp", p:"ATOM STEPMOTOR Kit", sku:"K047" ,kw:"ATOM STEP MOTOR"},
    ]

    const module_list = [
      //Communication Modules
      {a:"/#/en/module/lora", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lora_01.webp", p:"LoRa (433MHz)", sku:"M005" ,kw:"SX1278"},
      {a:"/#/en/module/lora868", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/lora868_01.webp", p:"LoRa868", sku:"M029" ,kw:"SX1276"},
      {a:"/#/en/module/lorawan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lorawan_01.webp", p:"LoRaWAN", sku:"M018" ,kw:"RHF76-052"},
      {a:"/#/en/module/gps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_gps_01.webp", p:"GPS", sku:"M003" ,kw:"NEO-M8N"},
      {a:"/#/en/module/sim800", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_sim800_01.webp", p:"SIM800L", sku:"M004" ,kw:"GSM 2G"},
      {a:"/#/en/module/commu", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_commu_01.webp", p:"COMMU", sku:"M011" ,kw:"RS485 CAN I2C"},
      {a:"/#/en/module/lte", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/lte_01.webp", p:"LTE", sku:"M027" ,kw:"4G"},
      {a:"/#/en/module/gsm", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/gsm_01.webp", p:"GSM", sku:"M026" ,kw:"2G"},
      {a:"/#/en/module/nb-iot", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/nb_iot_01.webp", p:"NB-IoT", sku:"M028" ,kw:"M5311LV"},
      {a:"/#/en/module/nb-iot_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/nb_iot_plus.webp", p:"NB-IoT Plus", sku:"M030" ,kw:"M5311GB"},
      {a:"/#/en/module/comx_gsm", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/comx_gsm.webp", p:"COM.GSM", sku:"M031-D" ,kw:"SIM800C"},
      {a:"/#/en/module/comx_lorawan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/comx_lorawan.webp", p:"COM.LoRaWAN", sku:"M031-C" ,kw:"LoRaWAN"},
      //Expansion Modules
      {a:"/#/en/module/battery", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_battery_01.webp", p:"BATTERY", sku:"M002" ,kw:"POWER SUPPLY LIPO"},
      {a:"/#/en/module/proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_proto_01.webp", p:"PROTO", sku:"M001" ,kw:"PROTOTYPE"},
      {a:"/#/en/module/plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_plus_01.webp", p:"PLUS", sku:"M019" ,kw:"ENCODER"},
      {a:"/#/en/module/usb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_usb_01.webp", p:"USB", sku:"M020" ,kw:"MAX3421E"},
      {a:"/#/en/module/bus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_bus_01.webp", p:"BUS", sku:"M024" ,kw:"PROTOTYPE"},
      {a:"/#/en/module/goplus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_goplus_p1.webp", p:"GoPlus", sku:"M025" ,kw:"SERVO DC MOTOR IR"},
      {a:"/#/en/module/proto13.2", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/proto_13.2.webp", p:"PROTO 13.2", sku:"M032" ,kw:"PROTO 13.2"},
      //Drive Modules
      {a:"/#/en/module/stepmotor", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_stepmotor_01.webp", p:"STEPMOTOR", sku:"M012" ,kw:"GRBL DRV8825"},
      {a:"/#/en/module/servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/servo_01.webp", p:"SERVO", sku:"M014" ,kw:"SERVO"},
      {a:"/#/en/module/lego_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lego_plus_01.webp", p:"DC MOTOR", sku:"M021" ,kw:"DC ENCODER MOTOR"},
      {a:"/#/en/module/fan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_FAN.webp", p:"FAN", sku:"M013" ,kw:"DC MOTOR"},
      //FACES Series
      {a:"/#/en/module/encoder", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_encoder_01.webp", p:"ENCODER", sku:"A006" ,kw:"FACES"},
      {a:"/#/en/module/joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_joystick_01.webp", p:"JOYSTICK", sku:"A007" ,kw:"FACES"},
      {a:"/#/en/module/faces_finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faces_finger_01.webp", p:"FINGER", sku:"A066" ,kw:"FACES FPC1020A"},
      {a:"/#/en/module/faces_rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faces_rfid_01.webp", p:"RFID", sku:"A067" ,kw:"FACES RC552"},
      {a:"/#/en/module/faces", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/face_01.webp", p:"FACES BOTTOM", sku:"A009" ,kw:"FACES BAT BOTTOM"},
      {a:"/#/en/module/facesII", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faceii_01.webp", p:"FACES II BOTTOM", sku:"A075" ,kw:"FACES LED BAT BOTTOM"},
      {a:"/#/en/module/faces_keyboard", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/face_keyboard.webp", p:"QWERTY", sku:"A003" ,kw:"FACES KEYBOARD QWERTY"},
      {a:"/#/en/module/faces_calculator", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/face_cal.webp", p:"CALCULATOR", sku:"A005" ,kw:"FACES CALCULATOR"},
      {a:"/#/en/module/faces_gameboy", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/face_gamepad.webp", p:"GAMEPAD", sku:"A004" ,kw:"FACES GAMEPAD"},
    ];

    const base_list = [
      //Base
      {a:"/#/en/base/lan_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_lan_01.webp", p:"LAN", sku:"K012" ,kw:"W5500 INTERNET RS485"},
      {a:"/#/en/base/node_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_node_01.webp", p:"NODE", sku:"M017" ,kw:"AUDIO IR DHT12 MICPHONE WM8978"},
      {a:"/#/en/base/btc_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_btc_01.webp", p:"BTC", sku:"A011" ,kw:"DHT12"},
      {a:"/#/en/base/plc_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/plc_m12_01.webp", p:"PLC-M12", sku:"K011-B" ,kw:"RS485"},
      {a:"/#/en/base/core_bottom", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_core_bottom_01.webp", p:"Core BOTTOM", sku:"C001-C" ,kw:"BATTERY PIN"},
      {a:"#/en/base/m5go_bottom", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_base.webp", p:"M5GO BOTTOM", sku:"A014" ,kw:"BATTERY LEGO"},
      // {a:"/#/en/base/m5go_rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_rfid_01.webp", p:"M5GO RFID", sku:"A014-B" ,kw:"BATTERY RC552"},
      {a:"/#/en/base/m5go_charger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_base_01.webp", p:"M5GO CHARGER", sku:"A016" ,kw:"LEGO CHARGE"},
      {a:"/#/en/base/base15", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_base15_01.webp", p:"BASE15", sku:"K025" ,kw:"PROTOTYPE"},
      {a:"/#/en/base/base26", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_base26_01.webp", p:"BASE26", sku:"K026" ,kw:"PROTOTYPE"},
      {a:"/#/en/accessory/battery_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/battery_base_01.webp", p:"M5CameraBattery", sku:"A068" ,kw:"BATTERY"},
      {a:"/#/en/base/basex", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_basex_01.webp", p:"BaseX", sku:"K037" ,kw:"LEGO EV3 MOTOR"},
      {a:"/#/en/base/w5500PoE", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/w5500PoE_01.webp", p:"PoE", sku:"K012-C" ,kw:"W5500 INTERNET RS485 PoE"},
    ];

    const unit_list = [
      //Camera class
      {a:"/#/en/unit/esp32cam", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_esp32cam_01.webp", p:"ESP32CAM", sku:"U007", qs:"#en/quick_start/m5camera/m5camera_quick_start" ,kw:"ESP32 CAMERA"},
      {a:"/#/en/unit/m5camera", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_01.webp", p:"M5Camera", sku:"U017", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"#/en/unit/m5camera_f", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_f_01.webp", p:"M5CameraF", sku:"U037", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"/#/en/unit/m5camera_x", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_x_01.webp", p:"M5CameraX", sku:"U038", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"/#/en/unit/unitv", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit-v-01.webp", p:"UNIT-V", sku:"U078", qs:"#en/quick_start/unitv/unitv_quick_start"  ,kw:"K210 CAMERA"},
      {a:"/#/en/unit/m5camera_f_new", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_f_new_01.webp", p:"M5CameraF New", sku:"U037", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      //Sensor class
      {a:"/#/en/unit/earth", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_earth_01.webp", p:"EARTH", sku:"U019" ,kw:"SENSOR"},
      {a:"/#/en/unit/env", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_env_01.webp", p:"ENV", sku:"U001" ,kw:"DHT12 BMP280"},
      {a:"/#/en/unit/light", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_light_01.webp", p:"LIGHT", sku:"U021" ,kw:"SENSOR"},
      {a:"/#/en/unit/pir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pir_01.webp", p:"PIR", sku:"U004" ,kw:"SENSOR"},
      {a:"/#/en/unit/ncir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_ncir_01.webp", p:"NCIR", sku:"U028" ,kw:"MLX90614"},
      {a:"/#/en/unit/thermal", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_thermal_01.webp", p:"THERMAL", sku:"U016" ,kw:"MLX90640"},
      {a:"/#/en/unit/color", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_color_01.webp", p:"COLOR", sku:"U009" ,kw:"TCS3472 SENSOR"},
      {a:"/#/en/unit/tof", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_tof_01.webp", p:"TOF", sku:"U010" ,kw:"VL53L0X SENSOR"},
      {a:"/#/en/unit/heart", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_heart_01.webp", p:"HEART", sku:"U029" ,kw:"MAX30100 SENSOR"},
      {a:"/#/en/unit/adc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_adc_01.webp", p:"ADC", sku:"U013" ,kw:"ADS1100"},
      {a:"/#/en/unit/makey", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_makey_01.webp", p:"MAKEY", sku:"U026" ,kw:"MUSIC"},
      {a:"/#/en/unit/finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_finger_01.webp", p:"FINGER", sku:"U008" ,kw:"FPC1020A"},
      {a:"/#/en/unit/weight", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_weight_01.webp", p:"WEIGHT", sku:"U030" ,kw:"HX711 SENSOR"},
      {a:"/#/en/unit/accel", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_accel_01.webp", p:"ACCEL", sku:"U056" ,kw:"ADXL345 SENSOR"},
      {a:"/#/en/unit/op90", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_op90_01.webp", p:"OP.90", sku:"U057" ,kw:"SENSOR"},
      {a:"/#/en/unit/op180", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_op180_01.webp", p:"OP.180", sku:"U058" ,kw:"SENSOR"},
      {a:"/#/en/unit/envII", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/envII_01.webp", p:"ENV II", sku:"U001-B" ,kw:"SHT30 BMP280"},
      {a:"/#/en/unit/hall", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/hall_unit.webp", p:"HALL", sku:"U084" ,kw:"HALL A3144E"},
      //I / 0  class
      {a:"/#/en/unit/extio", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_extio_01.webp", p:"EXT.IO", sku:"U011" ,kw:"PCA9554PW"},
      {a:"/#/en/unit/dac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_dac_01.webp", p:"DAC", sku:"U012" ,kw:"MCP4725"},
      {a:"/#/en/unit/relay", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_relay_01.webp", p:"RELAY", sku:"U023" ,kw:"SWITCH"},
      {a:"/#/en/unit/hub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_hub_01.webp", p:"HUB", sku:"U006" ,kw:"CONNECTOR"},
      {a:"/#/en/unit/pahub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pahub_p1.webp", p:"PaHUB", sku:"U040" ,kw:"CONNECTOR"},
      {a:"/#/en/unit/pbhub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pbhub_p1.webp", p:"PbHUB", sku:"U041" ,kw:"CONNECTOR"},
      {a:"/#/en/unit/396port", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_396port_01.webp", p:"3.96Port", sku:"U020" ,kw:"CONNECTOR"},
      {a:"/#/en/unit/m5-bit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5bit_01.webp", p:"M5:bit", sku:"A051" ,kw:"CONNECTOR"},
      {a:"/#/en/unit/proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_proto_01.webp", p:"PROTO", sku:"U022" ,kw:"PROTOTYPE"},
      {a:"/#/en/unit/mini-proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/mini_proto_01.webp", p:"MINI-PROTO", sku:"U064" ,kw:"PROTOTYPE"},
      {a:"/#/en/unit/unit_fan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_fan_01.webp", p:"FAN", sku:"U063" ,kw:"DC MOTOR"},
      {a:"/#/en/unit/vibrator", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_vibrator_motor_01.webp", p:"Vibrator-Motor", sku:"U059" ,kw:"DC MOTOR"},
      {a:"/#/en/unit/angle", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_angle_01.webp", p:"ANGLE", sku:"U005" ,kw:"SENSOR"},
      {a:"/#/en/unit/button", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_button_01.webp", p:"BUTTON", sku:"U027" ,kw:"BTN CONTROLER"},
      {a:"/#/en/unit/dual_button", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_dual_button_01.webp", p:"Dual-BUTTON", sku:"U025" ,kw:"CONTROLER"},
      {a:"/#/en/unit/joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_joystick_01.webp", p:"JOYSTICK", sku:"U024" ,kw:"CONTROLER"},
      {a:"/#/en/unit/cardkb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_cardkb_01.webp", p:"CardKB", sku:"U035" ,kw:"CONTROLER KEYBOARD"},
      //Communication class
      {a:"/#/en/unit/ir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_ir_01.webp", p:"IR", sku:"U002" ,kw:"IR"},
      {a:"/#/en/unit/gps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_gps_01.webp", p:"GPS", sku:"U032" ,kw:"AT6558"},
      {a:"/#/en/unit/rs485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rs485_01.webp", p:"RS485", sku:"U034" ,kw:"SP485EEN"},
      {a:"/#/en/unit/rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rfid_01.webp", p:"RFID", sku:"U031" ,kw:"RC522"},
      {a:"/#/en/unit/laser-rx", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/laser_rx_01.webp", p:"LASER-RX", sku:"U065" ,kw:"LASER"},
      {a:"/#/en/unit/laser-tx", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/laser_tx_01.webp", p:"LASER-TX", sku:"U066" ,kw:"LASER"},
      //LED class
      {a:"/#/en/unit/neopixel", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/M5GO_Unit_neopixel.webp", p:"RGB LED", sku:"A035" ,kw:"RGB LED NEOPIXEL"},
      {a:"/#/en/unit/hex", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_hex_01.webp", p:"HEX", sku:"A045" ,kw:"RGB LED NEOPIXEL"},
      {a:"/#/en/unit/rgb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rgb_01.webp", p:"RGB", sku:"U003" ,kw:"RGB LED NEOPIXEL"}
    ];

    const mini_unit_list = [
      {a:"/#/en/unit/tvoc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/tvoc.webp", p:"TVOC/eCO2", sku:"U088" ,kw:"TVOC eCO2"},
      {a:"/#/en/unit/pdm", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/pdm_mini_unit.webp", p:"PDM", sku:"U089" ,kw:"PDM MIC"}
    ];

   const hat_list = [
      //C-HAT class
      {a:"/#/en/hat/hat-spk", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/spk_hat_01.webp", p:"SPK", sku:"U055" ,kw:"MUSIC SPEAKER"},
      {a:"/#/en/hat/hat-env", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/env_hat_01.webp", p:"ENV", sku:"U053" ,kw:"DHT12 BMP280 BMM150"},
      {a:"/#/en/hat/hat-pir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/pir_hat_01.webp", p:"PIR", sku:"U054" ,kw:"SENSOR"},
      {a:"/#/en/hat/hat-proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_proto_01.webp", p:"PROTO", sku:"U060" ,kw:"PROTOTYPE"},
      {a:"/#/en/hat/hat-ncir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_ncir_01.webp", p:"NCIR", sku:"U061" ,kw:"MLX90614"},
      {a:"/#/en/hat/hat-thermal", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_thermal_01.webp", p:"Thermal", sku:"U062" ,kw:"MLX90640"},
      {a:"/#/en/hat/hat-rs485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/rs485_hat_01.webp", p:"RS485", sku:"U067" ,kw:"AOZ1282CI"},
      {a:"/#/en/hat/hat-adc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/adc_hat_01.webp", p:"ADC", sku:"U069" ,kw:"ADS1100"},
      {a:"/#/en/hat/hat-dac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/dac_hat_01.webp", p:"DAC", sku:"U068" ,kw:"MCP4725"},
      {a:"/#/en/hat/hat-beetlec", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/beetlec_hat_01.webp", p:"BeetleC", sku:"U030" ,kw:"ROBOT"},
      {a:"/#/en/hat/hat-proto-plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_proto_plus_01.webp", p:"PROTO PLUS", sku:"U060-B" ,kw:"PROTOTYPE"},
      {a:"/#/en/hat/hat-yun", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/yun_hat_01.webp", p:"YUN", sku:"U070" ,kw:"SHT20 BMP280 LED NEOPIXEL"},
      {a:"/#/en/hat/hat-neoflash", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/neoflash_hat_01.webp", p:"Neoflash", sku:"U071" ,kw:"LED NEOPIXEL"},
      {a:"/#/en/hat/hat-tof", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/tof_hat_01.webp", p:"ToF", sku:"U072" ,kw:"VL53L0X"},
      {a:"/#/en/hat/hat-joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/joystick_hat_01.webp", p:"Joystick", sku:"U073" ,kw:"CONTROLER"},
      {a:"/#/en/hat/hat-finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/finger_hat_01.webp", p:"FINGER", sku:"U074" ,kw:"FPC1020SC"},
      {a:"/#/en/hat/hat-servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/servo_hat_01.webp", p:"SERVO", sku:"U075" ,kw:"180 SERVO"},
      {a:"/#/en/hat/hat-puppyc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/puppyc_01.webp", p:"PuppyC", sku:"K035" ,kw:"SERVO ROBOT"},
      {a:"/#/en/hat/hat-8servos", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/8servos_01.webp", p:"8Servos", sku:"U076" ,kw:"180 360 SERVO"},
      {a:"/#/en/hat/hat-bugc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/bugc_hat_01.webp", p:"BugC", sku:"K033" ,kw:"ROBOT"},
      {a:"/#/en/hat/hat-cardkb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/cardkb_hat_01.webp", p:"CardKB", sku:"U077" ,kw:"CONTROLER KEYBOARD"},
      {a:"/#/en/hat/hat-roverc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/roverc_hat_01.webp", p:"RoverC", sku:"K036" ,kw:"ROBOT"},
      {a:"/#/en/hat/hat-joyc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/JoyC_01.webp", p:"JoyC", sku:"U079" ,kw:"CONTROLER"},
      {a:"/#/en/hat/hat-18650", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/18650C_01.webp", p:"18650C", sku:"U080" ,kw:"BATTERY"},
      {a:"/#/en/hat/hat-powerc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/PowerC_01.webp", p:"PowerC", sku:"U081" ,kw:"CHARGE BATTERY"}
   ];


    const application_list = [
      //Application
      {a:"/#/en/app/bala", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_bala_01.webp", p:"BALA", sku:"K014" ,kw:"ROBOT"},
      {a:"/#/en/app/lidarbot", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_lidarbot_01.webp", p:"LidarBOT", sku:"K017" ,kw:"ROBOT"},
      {a:"/#/en/app/piano", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_piano_01.webp", p:"PIANO", sku:"A047" ,kw:"MUSIC"},
      {a:"/#/en/app/flir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_flir_01.webp", p:"FLIR", sku:"K021" ,kw:"FLIR3.0"},
      {a:"/#/en/app/demo-board", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_DemoBoard_01.webp", p:"Demo Board", sku:"K024" ,kw:"SEOVO MOTOR NEOPIXEL LED SENSOR"},
      {a:"/#/en/unit/neoflash", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_neoflash_01.webp", p:"NeoFlash", sku:"A042" ,kw:"NEOPIXEL LED PIR"},
      {a:"/#/en/unit/catear", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_catear_01.webp", p:"CatEar", sku:"A043" ,kw:"NEOPIXEL LED"},
      {a:"/#/en/unit/butterfly", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/butterfly_01.webp", p:"BUTTERFLY", sku:"A041-B" ,kw:"NEOPIXEL LED SEOVO"},
      {a:"/#/en/1515/6060-push", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/6060_push_01.webp", p:"6060-PUSH", sku:"K028" ,kw:"RS485 STEPMOTOR"},
      {a:"/#/en/app/m5scale_diy_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/m5scale_diy_kit_01.webp", p:"M5SCALE DIY Kit", sku:"K029" ,kw:"WEIGHT HX711"},
      {a:"/#/en/app/ac_socket", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/ac_socket_01.webp", p:"AC Socket", sku:"K031" ,kw:"RS485 SWITCH"},
      {a:"/#/en/base/pm2.5", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_pm25_01.webp", p:"PM2.5", sku:"K023" ,kw:"SHT20 PMSA003"},
      {a:"/#/en/base/iiot_dual_switch_kit_with_core", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/iiot_dual_switch%20kit_with_core_01.webp", p:"IIoT Dual-Switch", sku:"A072" ,kw:"RELAY"},
      {a:"/#/en/app/balac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/balac_01.webp", p:"BalaC", sku:"K038" ,kw:"ROBOT"}
    ];


   const accessory_list = [
      //Accessory
      {a:"/#/en/accessory/converter/grove_t", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/grove_t_01.webp", p:"Grove-T", sku:"U039" ,kw:"CONNECTOR"},
      {a:"/#/en/accessory/cable/grove_cable", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/grove_cable_01.webp", p:"Grove Cable", sku:"A034" ,kw:"CABLE"},
      {a:"/#/en/accessory/converter/grove2grove", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_g2g_01.webp", p:"GROVE2GROVE", sku:"A040" ,kw:"CONNECTOR"},
      {a:"/#en/accessory/cable/lego_cable", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/lego_cable.webp", p:"LEGO Cable", sku:"A030" ,kw:"CABLE"},
      {a:"/#/en/accessory/screw", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/screw_p1.webp", p:"SCREW", sku:"A050" ,kw:"TOOL"},
      {a:"/#/en/accessory/bus_socket", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_bus_socket_01.webp", p:"BUS-Socket", sku:"A001" ,kw:"CONNECTOR"},
      {a:"/#/en/accessory/frame", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/frame_01.webp", p:"Frame", sku:"A013" ,kw:"CONNECTOR"},
      {a:"/#/en/unit/trace", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_trace_01.webp", p:"TRACE", sku:"A048" ,kw:"SENSOR"},
      {a:"/#/en/module/proto_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_proto_02.webp", p:"PROTO-KIT", sku:"K008" ,kw:"DHT12 PROTOTYPE"},
      {a:"/#/en/tool/usb_downloader", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/tool/usb_downloader_01.webp", p:"USB Downloader", sku:"A012" ,kw:"USB TTL"},
      {a:"/#/en/tool/usb_isp", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/tool/tool_usb_isp_01.webp", p:"USB ISP", sku:"A049" ,kw:"DOWNLOADER"},
      {a:"/#/en/accessory/glass_panel_repair_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/glass_panel_repair_kit_01.webp", p:"Glass Panel Repair", sku:"A070" ,kw:"SCREEN PANEL"},
      {a:"/#/en/accessory/485t", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/485t_01.webp", p:"485T", sku:"A071" ,kw:"RS485"},
      {a:"/#/en/accessory/watch", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/watch_01.webp", p:"Watch", sku:"K009-F" ,kw:"ACCESSORY"},
      {a:"/#/en/accessory/sg90_servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/servo_01.webp", p:"SG90 servo", sku:"A076" ,kw:"180 SERVO"},
      {a:"/#/en/accessory/servo_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/servo_kit_01.webp", p:"Servo Kit 180°/360°", sku:"A076-B&C" ,kw:"180 360 SERVO Kit"},
    ];

   const aluminium_list = [
      //Aluminium
      {a:"/#/en/1515/corner", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_corner_01.webp", p:"CORNER", sku:"A036" ,kw:"CONNECTOR"},
      {a:"/#/en/1515/nut", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_nut_01.webp", p:"NUT", sku:"A037" ,kw:"CONNECTOR"},
      {a:"/#/en/1515/connectors", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/ap_30_01.webp", p:"Connector", sku:"A052" ,kw:"CONNECTOR"},
      {a:"/#/en/1515/ap", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/ap_ap_01.webp", p:"Aluminium Extrusions", sku:"A061" ,kw:"Aluminium"}
    ];

    
    const product_class = [core_list,atom_list,module_list,base_list,unit_list,mini_unit_list,hat_list,application_list,accessory_list,aluminium_list];
    const product_class_name = ["core","atom","module","base","unit","mini-unit","hat","application","accessory","aluminium"];

    for (var i=0; i<product_class_name.length; i++){
      $(".product_page").append("<div></div>");
      $(".product_page div:last-child").attr("id",product_class_name[i]);
    }

   const title_list = {
      "BASIC":"M5Core/Kit",
      "M5Stick":"M5Stick",
      "ATOM Lite":"ATOM",
      "LoRa (433MHz)":"Communication Modules",
      "BATTERY":"Expansion Modules",
      "STEPMOTOR":"Drive Modules",
      "ENCODER":"FACES Series",
      "LAN":"Base",
      "ESP32CAM":"Camera class",
      "EARTH":"Sensor class",
      "EXT.IO":"I / 0  class",
      "IR":"Communication class",
      "RGB LED":"LED class",
      "SPK":"C-HAT class",
      "BALA":"Application",
      "Grove-T":"Accessory",
      "CORNER":"Aluminium",
      "TVOC/eCO2":"MINI-UNIT"
   };

  const mask_btn = `<a href="#" class="quickstart_btn" target='view_window'><button type="button" class="mask-btn1">QuickStart</button></a>`

    for (var class_num=0; class_num<product_class.length; class_num++ ){
      for (var i=0; i<product_class[class_num].length; i++ ) {
        if(title_list.hasOwnProperty(product_class[class_num][i].p)){
           $("#"+product_class_name[class_num]).append(`<p><strong>${title_list[product_class[class_num][i].p]}</strong></p>`);
        }
        $("#"+product_class_name[class_num]).append("<div class='item'><a target='view_window'><img><p class='item-title'></p></a></div> ");
        $("#"+product_class_name[class_num]+" .item:last-child a").attr("href", product_class[class_num][i].a);
        $("#"+product_class_name[class_num]+" .item:last-child img").attr("src", product_class[class_num][i].img);
        $("#"+product_class_name[class_num]+" .item:last-child p").text(product_class[class_num][i].p);
        $("#"+product_class_name[class_num]+" .item:last-child p").attr("data-kw", product_class[class_num][i].kw);
        $("#"+product_class_name[class_num]+" .item:last-child a").append(`<div class="mask"><p class="mask_sku">${product_class[class_num][i].sku}</p></div>`);
        if(typeof(product_class[class_num][i].qs) != "undefined"){
          $("#"+product_class_name[class_num]+" .item:last-child").append(mask_btn);
          $("#"+product_class_name[class_num]+" .item:last-child .quickstart_btn").attr("href", product_class[class_num][i].qs);
        }else{
        }
      }
    }

    $(document).ready(function(){
        $(function () {
          var x = -30;
          var y = 40;
          var newtitle = '';
          $('.item').mouseover(function (e) {
              newtitle = $(this).find(".item-title")[0].dataset.kw;
              $('body').append('<div id="tag_title" >' + newtitle + '</div>');
              $('#tag_title').css({
                  'left': (e.pageX - x + 'px'),
                  'top': (e.pageY - y + 'px')
              }).show();
          }).mouseout(function () {
              $('#tag_title').remove();
          }).mousemove(function (e) {
              $('#tag_title').css({
                  'left': (e.pageX - x + 'px'),
                  'top': (e.pageY - y + 'px')
              }).show();
          }).click(function (e) {
              $('#tag_title').remove();
          })
      });
        anchor_search();
        scrollFunc();
     });
  
</script>
