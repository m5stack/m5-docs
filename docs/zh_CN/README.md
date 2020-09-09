<div class="product_page"></div>

<script>
    const core_list = [
      //Core
      {a:"/#/zh_CN/core/core2", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core2_01.webp", p:"Core2", sku:"K010", qs:"#en/quick_start/core2/m5stack_core2_quick_start"  ,kw:"ESP32 AXP192 MPU6886 BM8563 MICPHONE", category:"M5Core/Kit"},
      {a:"/#/zh_CN/core/basic", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core_basic_01.webp", p:"BASIC", sku:"K001", qs:"#en/quick_start/m5core/m5stack_core_quick_start" ,kw:"ESP32 IP5306"},
      {a:"/#/zh_CN/core/gray", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core_gray_01.webp", p:"GRAY", sku:"K002", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150"},
      {a:"/#/zh_CN/core/fire", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core_fire_01.webp", p:"FIRE", sku:"K007", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 LEGO MICPHONE"},
      {a:"/#/zh_CN/core/m5go_lite", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/kit_m5go_lite_01.webp", p:"M5GO Lite", sku:"K022", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 LEGO"},
      {a:"/#/zh_CN/core/m5go", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/kit_m5go_01.webp", p:"M5GO Kit", sku:"K006", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 LEGO MICPHONE"}
    ];
    const face_list = [
      //FACES Series
      {a:"/#/zh_CN/core/face_kit", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/kit_faces_01.webp", p:"FACES Kit", sku:"K005", qs:"#en/quick_start/m5core/m5stack_core_quick_start"  ,kw:"ESP32 IP5306 MPU6886 BMM150 MICPHONE", category:"FACES kit"},
      {a:"/#/zh_CN/module/encoder", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_encoder_01.webp", p:"ENCODER", sku:"A006" ,kw:"FACES"},
      {a:"/#/zh_CN/module/joystick", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_joystick_01.webp", p:"JOYSTICK", sku:"A007" ,kw:"FACES"},
      {a:"/#/zh_CN/module/faces_finger", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/faces_finger_01.webp", p:"FINGER", sku:"A066" ,kw:"FACES FPC1020A"},
      {a:"/#/zh_CN/module/faces_rfid", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/faces_rfid_01.webp", p:"RFID", sku:"A067" ,kw:"FACES RC552"},
      {a:"/#/zh_CN/module/faces", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/face_01.webp", p:"FACES BOTTOM", sku:"A009" ,kw:"FACES BAT BOTTOM"},
      {a:"/#/zh_CN/module/facesII", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/faceii_01.webp", p:"FACES II BOTTOM", sku:"A075" ,kw:"FACES LED BAT BOTTOM"},
      {a:"/#/zh_CN/module/faces_keyboard", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/face_keyboard.webp", p:"QWERTY", sku:"A003" ,kw:"FACES KEYBOARD QWERTY"},
      {a:"/#/zh_CN/module/faces_calculator", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/face_cal.webp", p:"CALCULATOR", sku:"A005" ,kw:"FACES CALCULATOR"},
      {a:"/#/zh_CN/module/faces_gameboy", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/face_gamepad.webp", p:"GAMEPAD", sku:"A004" ,kw:"FACES GAMEPAD"},
    ];

    const stick_list = [
      //Stick
      {a:"/#/zh_CN/core/m5stickc_plus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core_m5stickc_plus_01.webp", p:"M5StickC PLUS", sku:"K016-P", qs:"#en/quick_start/m5stickc_plus/m5stickc_plus_quick_start" ,kw:"ESP32 AXP192 MPU6886", category:"M5Stick"},
      {a:"/#/zh_CN/core/m5stickc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core_m5stickc_01.webp", p:"M5StickC", sku:"K016-C", qs:"#en/quick_start/m5stickc/m5stickc_quick_start" ,kw:"ESP32 AXP192 MPU6886"},
      {a:"/#/zh_CN/core/m5stickt", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/m5stickt_01.webp", p:"M5StickT", sku:"K016-T" ,kw:"ESP32 FLIR3.0 AXP192"},
      {a:"/#/zh_CN/core/m5stick", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/core_m5stick_01.webp", p:"M5Stick", sku:"K016", qs:"#en/quick_start/m5stick/m5stick_quick_start" ,kw:"ESP32 OLED IP5306 MPU9250"}
    ];


    const atom_list = [
      //ATOM
      {a:"/#/zh_CN/core/atom_lite", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/atom_lite_01.webp", p:"ATOM Lite", sku:"C008" ,qs:"#en/quick_start/atom/atom_quick_start", kw:"ESP32 LED", category:"ATOM"},
      {a:"/#/zh_CN/core/atom_matrix", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/atom_matrix_01.webp", p:"ATOM Matrix", sku:"C008-B", qs:"#en/quick_start/atom/atom_quick_start" ,kw:"ESP32 LED MPU6886"},
      {a:"/#/zh_CN/atom/atomecho", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/atom_echo.webp", p:"ATOM ECHO", sku:"C008-C",qs:"#en/quick_start/atom/atom_echo_quick_start" ,kw:"ESP32 Speaker I2S"}
    ]

    const atom_base_list = [
       //ATOM BASE
      {a:"/#/zh_CN/atom/atomic", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atomic_01.webp", p:"ATOMIC", sku:"A077" ,kw:"PROTOTYPE", category:"ATOM-BASE"},
      {a:"/#/zh_CN/atom/tail485", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/tail485_01.webp", p:"Tail485", sku:"T002" ,kw:"RS485"},
      {a:"/#/zh_CN/atom/tailbat", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/tailbat_01.webp", p:"TailBat", sku:"T001" ,kw:"BATTERY POWER SUPPLY LIPO"},
      {a:"/#/zh_CN/atom/atomhub", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atom_hub_proto.webp", p:"ATOM HUB PROTO", sku:"K039" ,kw:"ATOM HUB PROTO BASE"},
      {a:"/#/zh_CN/atom/atomic_qr", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atomic_qr_01.webp", p:"ATOM QR-CODE Kit", sku:"K041" ,kw:"ATOM QR CODE SCAN"},
      {a:"/#/zh_CN/atom/atomicgps", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atomicgps_01.webp", p:"ATOM GPS Kit", sku:"K043" ,kw:"ATOM GPS TF"},
      {a:"/#/zh_CN/atom/atomictf", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atomictf_01.webp", p:"ATOM TF-CARD Kit", sku:"K044" ,kw:"ATOM TF"},
      {a:"/#/zh_CN/atom/atomic232", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atom232.webp", p:"ATOM RS-232 Kit", sku:"K046" ,kw:"ATOM RS232"},
      {a:"/#/zh_CN/atom/atomic485", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atom485.webp", p:"ATOM RS-485 Kit", sku:"K045" ,kw:"ATOM RS485"},
      {a:"/#/zh_CN/atom/atomhub_switch", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atomswitch.webp", p:"ATOM SWITCH Kit", sku:"K042" ,kw:"ATOM SWITCH RS485"},
      {a:"/#/zh_CN/atom/atomfly", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atomfly.webp", p:"ATOM FLY Kit", sku:"K040" ,kw:"ATOM FLY"},
      {a:"/#/zh_CN/atom/atom_mate", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atom_mate.webp", p:"ATOM MATE", sku:"A086" ,kw:"ATOM MATE HAT MOUNT PIN"},
      {a:"/#/zh_CN/atom/atomic_step_motor", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/atom_base/atom_stepmotor.webp", p:"ATOM STEPMOTOR Kit", sku:"K047" ,kw:"ATOM STEP MOTOR"}
    ]

    const module_list = [
      //Communication Modules
      {a:"/#/zh_CN/module/comx_gsm", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/comx_gsm.webp", p:"COM.GSM", sku:"M031-D" ,kw:"SIM800C", category:"Communication Modules"},
      {a:"/#/zh_CN/module/comx_lorawan", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/comx_lorawan.webp", p:"COM.LoRaWAN", sku:"M031-C" ,kw:"LoRaWAN"},
      {a:"/#/zh_CN/module/comx_lte", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/comx_lte.webp", p:"COM.LTE(4G)", sku:"M031-A" ,kw:"LTE COMX"},
      {a:"/#/zh_CN/module/comx_lte-data", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/comx_lte-data.webp", p:"COM.LTE-DATA", sku:"M031-E" ,kw:"LTE-DATA COMX"},
      {a:"/#/zh_CN/module/comx_nb-iot", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/comx_nb-iot.webp", p:"COM.NB-IoT", sku:"M031-B" ,kw:"NB-IoT COMX"},
      {a:"/#/zh_CN/module/lora", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_lora_01.webp", p:"LoRa (433MHz)", sku:"M005" ,kw:"SX1278"},
      {a:"/#/zh_CN/module/lora868", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/lora868_01.webp", p:"LoRa868", sku:"M029" ,kw:"SX1276"},
      {a:"/#/zh_CN/module/lorawan", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_lorawan_01.webp", p:"LoRaWAN", sku:"M018" ,kw:"RHF76-052"},
      {a:"/#/zh_CN/module/gps", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_gps_01.webp", p:"GPS", sku:"M003" ,kw:"NEO-M8N"},
      {a:"/#/zh_CN/module/sim800", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_sim800_01.webp", p:"SIM800L", sku:"M004" ,kw:"GSM 2G"},
      {a:"/#/zh_CN/module/commu", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_commu_01.webp", p:"COMMU", sku:"M011" ,kw:"RS485 CAN I2C"},
      {a:"/#/zh_CN/module/lte", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/lte_01.webp", p:"LTE", sku:"M027" ,kw:"4G"},
      {a:"/#/zh_CN/module/gsm", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/gsm_01.webp", p:"GSM", sku:"M026" ,kw:"2G"},
      {a:"/#/zh_CN/module/nb-iot", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/nb_iot_01.webp", p:"NB-IoT", sku:"M028" ,kw:"M5311LV"},
      {a:"/#/zh_CN/module/nb-iot_plus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/nb_iot_plus.webp", p:"NB-IoT Plus", sku:"M030" ,kw:"M5311GB"},
      //Expansion Modules
      {a:"/#/zh_CN/module/battery", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_battery_01.webp", p:"BATTERY", sku:"M002" ,kw:"POWER SUPPLY LIPO", category:"Expansion Modules"},
      {a:"/#/zh_CN/module/proto", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_proto_01.webp", p:"PROTO", sku:"M001" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/module/plus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_plus_01.webp", p:"PLUS", sku:"M019" ,kw:"ENCODER"},
      {a:"/#/zh_CN/module/usb", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_usb_01.webp", p:"USB", sku:"M020" ,kw:"MAX3421E"},
      {a:"/#/zh_CN/module/bus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_bus_01.webp", p:"BUS", sku:"M024" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/module/goplus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_goplus_p1.webp", p:"GoPlus", sku:"M025" ,kw:"SERVO DC MOTOR IR"},
      {a:"/#/zh_CN/module/proto13.2", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/proto_13.2.webp", p:"PROTO 13.2", sku:"M032" ,kw:"PROTO 13.2"},
      {a:"/#/zh_CN/module/proto13.2_mesu", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/proto_13.2_mesu.webp", p:"PROTO-MEAS 13.2", sku:"M033" ,kw:"PROTO 13.2 MEAS"},
      //Drive Modules
      {a:"/#/zh_CN/module/stepmotor", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_stepmotor_01.webp", p:"STEPMOTOR", sku:"M012" ,kw:"GRBL DRV8825", category:"Drive Modules"},
      {a:"/#/zh_CN/module/servo", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/servo_01.webp", p:"SERVO", sku:"M014" ,kw:"SERVO"},
      {a:"/#/zh_CN/module/lego_plus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_lego_plus_01.webp", p:"DC MOTOR", sku:"M021" ,kw:"DC ENCODER MOTOR"},
      {a:"/#/zh_CN/module/fan", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_FAN.webp", p:"FAN", sku:"M013" ,kw:"DC MOTOR"}
    ];

    const base_list = [
      //Base
      {a:"/#/zh_CN/base/lan_base", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_lan_01.webp", p:"LAN", sku:"K012" ,kw:"W5500 INTERNET RS485", category:"Base"},
      {a:"/#/zh_CN/base/node_base", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_node_01.webp", p:"NODE", sku:"M017" ,kw:"AUDIO IR DHT12 MICPHONE WM8978"},
      {a:"/#/zh_CN/base/btc_base", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_btc_01.webp", p:"BTC", sku:"A011-B" ,kw:"DHT12"},
      {a:"/#/zh_CN/base/plc_base", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/plc_m12_01.webp", p:"PLC-M12", sku:"K011-B" ,kw:"RS485"},
      {a:"/#/zh_CN/base/core_bottom", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_core_bottom_01.webp", p:"Core BOTTOM", sku:"C001-C" ,kw:"BATTERY PIN"},
      {a:"#/en/base/m5go_bottom", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_m5go_base.webp", p:"M5GO BOTTOM", sku:"A014" ,kw:"BATTERY LEGO"},
      // {a:"/#/zh_CN/base/m5go_rfid", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_m5go_rfid_01.webp", p:"M5GO RFID", sku:"A014-B" ,kw:"BATTERY RC552"},
      {a:"/#/zh_CN/base/m5go_charger", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_m5go_base_01.webp", p:"M5GO CHARGER", sku:"A016" ,kw:"LEGO CHARGE"},
      {a:"/#/zh_CN/base/base15", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_base15_01.webp", p:"BASE15", sku:"K025" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/base/base26", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_base26_01.webp", p:"BASE26", sku:"K026" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/base/basex", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_basex_01.webp", p:"BaseX", sku:"K037" ,kw:"LEGO EV3 MOTOR"},
      {a:"/#/zh_CN/base/w5500PoE", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/w5500PoE_01.webp", p:"PoE", sku:"K012-C" ,kw:"W5500 INTERNET RS485 PoE"},
    ];

    const unit_list = [
      //Camera class
      {a:"/#/zh_CN/unit/esp32cam", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_esp32cam_01.webp", p:"ESP32CAM", sku:"U007", qs:"#en/quick_start/m5camera/m5camera_quick_start" ,kw:"ESP32 CAMERA", category:"Camera class"},
      {a:"/#/zh_CN/unit/m5camera", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_m5camera_01.webp", p:"M5Camera", sku:"U017", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"#/en/unit/m5camera_f", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_m5camera_f_01.webp", p:"M5CameraF", sku:"U037", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"/#/zh_CN/unit/m5camera_x", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_m5camera_x_01.webp", p:"M5CameraX", sku:"U038", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"/#/zh_CN/unit/unitv", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit-v-01.webp", p:"UNIT-V", sku:"U078", qs:"#en/quick_start/unitv/unitv_quick_start"  ,kw:"K210 CAMERA"},
      {a:"/#/zh_CN/core/m5stickv", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/core/m5stickv_01.webp", p:"M5StickV", sku:"K027" , qs:"#en/quick_start/m5stickv/m5stickv_quick_start", kw:"K210 CAMERA AXP192 MPU6886"},
      {a:"/#/zh_CN/unit/m5camera_f_new", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_m5camera_f_new_01.webp", p:"M5CameraF New", sku:"U037", qs:"#en/quick_start/m5camera/m5camera_quick_start"  ,kw:"ESP32 CAMERA"},
      {a:"/#/zh_CN/accessory/battery_base", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/battery_base_01.webp", p:"M5CameraBattery", sku:"A068" ,kw:"BATTERY"},
      //Sensor class
      {a:"/#/zh_CN/unit/earth", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_earth_01.webp", p:"EARTH", sku:"U019" ,kw:"SENSOR", category:"Sensor class"},
      {a:"/#/zh_CN/unit/env", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_env_01.webp", p:"ENV", sku:"U001" ,kw:"DHT12 BMP280"},
      {a:"/#/zh_CN/unit/light", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_light_01.webp", p:"LIGHT", sku:"U021" ,kw:"SENSOR"},
      {a:"/#/zh_CN/unit/pir", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_pir_01.webp", p:"PIR", sku:"U004" ,kw:"SENSOR"},
      {a:"/#/zh_CN/unit/ncir", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_ncir_01.webp", p:"NCIR", sku:"U028" ,kw:"MLX90614"},
      {a:"/#/zh_CN/unit/thermal", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_thermal_01.webp", p:"THERMAL", sku:"U016" ,kw:"MLX90640"},
      {a:"/#/zh_CN/unit/color", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_color_01.webp", p:"COLOR", sku:"U009" ,kw:"TCS3472 SENSOR"},
      {a:"/#/zh_CN/unit/tof", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_tof_01.webp", p:"TOF", sku:"U010" ,kw:"VL53L0X SENSOR"},
      {a:"/#/zh_CN/unit/heart", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_heart_01.webp", p:"HEART", sku:"U029" ,kw:"MAX30100 SENSOR"},
      {a:"/#/zh_CN/unit/adc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_adc_01.webp", p:"ADC", sku:"U013" ,kw:"ADS1100"},
      {a:"/#/zh_CN/unit/makey", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_makey_01.webp", p:"MAKEY", sku:"U026" ,kw:"MUSIC"},
      {a:"/#/zh_CN/unit/finger", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_finger_01.webp", p:"FINGER", sku:"U008" ,kw:"FPC1020A"},
      {a:"/#/zh_CN/unit/weight", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_weight_01.webp", p:"WEIGHT", sku:"U030" ,kw:"HX711 SENSOR"},
      {a:"/#/zh_CN/unit/accel", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_accel_01.webp", p:"ACCEL", sku:"U056" ,kw:"ADXL345 SENSOR"},
      {a:"/#/zh_CN/unit/op90", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_op90_01.webp", p:"OP.90", sku:"U057" ,kw:"SENSOR"},
      {a:"/#/zh_CN/unit/op180", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_op180_01.webp", p:"OP.180", sku:"U058" ,kw:"SENSOR"},
      {a:"/#/zh_CN/unit/envII", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/envII_01.webp", p:"ENV II", sku:"U001-B" ,kw:"SHT30 BMP280"},
      {a:"/#/zh_CN/unit/hall", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/hall_unit.webp", p:"HALL", sku:"U084" ,kw:"HALL A3144E"},
      //I / 0  class
      {a:"/#/zh_CN/unit/extio", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_extio_01.webp", p:"EXT.IO", sku:"U011" ,kw:"PCA9554PW", category:"I / 0  class"},
      {a:"/#/zh_CN/unit/dac", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_dac_01.webp", p:"DAC", sku:"U012" ,kw:"MCP4725"},
      {a:"/#/zh_CN/unit/relay", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_relay_01.webp", p:"RELAY", sku:"U023" ,kw:"SWITCH"},
      {a:"/#/zh_CN/unit/hub", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_hub_01.webp", p:"HUB", sku:"U006" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/unit/pahub", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_pahub_p1.webp", p:"PaHUB", sku:"U040" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/unit/pbhub", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_pbhub_p1.webp", p:"PbHUB", sku:"U041" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/unit/396port", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_396port_01.webp", p:"3.96Port", sku:"U020" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/unit/m5-bit", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_m5bit_01.webp", p:"M5:bit", sku:"A051" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/unit/proto", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_proto_01.webp", p:"PROTO", sku:"U022" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/unit/mini-proto", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/mini_proto_01.webp", p:"MINI-PROTO", sku:"U064" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/unit/unit_fan", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_fan_01.webp", p:"FAN", sku:"U063" ,kw:"DC MOTOR"},
      {a:"/#/zh_CN/unit/vibrator", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_vibrator_motor_01.webp", p:"Vibrator-Motor", sku:"U059" ,kw:"DC MOTOR"},
      {a:"/#/zh_CN/unit/angle", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_angle_01.webp", p:"ANGLE", sku:"U005" ,kw:"SENSOR"},
      {a:"/#/zh_CN/unit/button", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_button_01.webp", p:"BUTTON", sku:"U027" ,kw:"BTN CONTROLER"},
      {a:"/#/zh_CN/unit/dual_button", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_dual_button_01.webp", p:"Dual-BUTTON", sku:"U025" ,kw:"CONTROLER"},
      {a:"/#/zh_CN/unit/joystick", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_joystick_01.webp", p:"JOYSTICK", sku:"U024" ,kw:"CONTROLER"},
      {a:"/#/zh_CN/unit/cardkb", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_cardkb_01.webp", p:"CardKB", sku:"U035" ,kw:"CONTROLER KEYBOARD"},
      //Communication class
      {a:"/#/zh_CN/unit/ir", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_ir_01.webp", p:"IR", sku:"U002" ,kw:"IR", category:"Communication class"},
      {a:"/#/zh_CN/unit/gps", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_gps_01.webp", p:"GPS", sku:"U032" ,kw:"AT6558"},
      {a:"/#/zh_CN/unit/rs485", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_rs485_01.webp", p:"RS485", sku:"U034" ,kw:"SP485EEN"},
      {a:"/#/zh_CN/unit/rfid", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_rfid_01.webp", p:"RFID", sku:"U031" ,kw:"RC522"},
      {a:"/#/zh_CN/unit/laser-rx", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/laser_rx_01.webp", p:"LASER-RX", sku:"U065" ,kw:"LASER"},
      {a:"/#/zh_CN/unit/laser-tx", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/laser_tx_01.webp", p:"LASER-TX", sku:"U066" ,kw:"LASER"},
      {a:"/#/zh_CN/unit/can", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/can.webp", p:"CAN", sku:"U085" ,kw:"CAN"},
      {a:"/#/zh_CN/unit/iso485", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/iso485.webp", p:"Isolated RS485 Unit", sku:"U094" ,kw:"Isolated RS485"},
      //LED class
      {a:"/#/zh_CN/unit/neopixel", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/M5GO_Unit_neopixel.webp", p:"RGB LED", sku:"A035" ,kw:"RGB LED NEOPIXEL", category:"LED class"},
      {a:"/#/zh_CN/unit/hex", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_hex_01.webp", p:"HEX", sku:"A045" ,kw:"RGB LED NEOPIXEL"},
      {a:"/#/zh_CN/unit/rgb", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_rgb_01.webp", p:"RGB", sku:"U003" ,kw:"RGB LED NEOPIXEL"}
    ];

    const mini_unit_list = [
      {a:"/#/zh_CN/unit/tvoc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/tvoc.webp", p:"TVOC/eCO2", sku:"U088" ,kw:"TVOC eCO2", category:"MINI-UNIT"},
      {a:"/#/zh_CN/unit/pdm", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/pdm_mini_unit.webp", p:"PDM", sku:"U089" ,kw:"PDM MIC"},
      {a:"/#/zh_CN/unit/bps", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/bps.webp", p:"Barometric Pressure Unit", sku:"U090" ,kw:"Barometric Pressure bps"},
      {a:"/#/zh_CN/unit/imu", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/imu.webp", p:"6-Axis IMU Unit", sku:"U095" ,kw:"MPU6886 IMU"},
    ];

   const hat_list = [
      //C-HAT class
      {a:"/#/zh_CN/hat/hat-spk", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/spk_hat_01.webp", p:"SPK", sku:"U055" ,kw:"MUSIC SPEAKER", category:"C-HAT class"},
      {a:"/#/zh_CN/hat/hat-env", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/env_hat_01.webp", p:"ENV", sku:"U053" ,kw:"DHT12 BMP280 BMM150"},
      {a:"/#/zh_CN/hat/hat-pir", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/pir_hat_01.webp", p:"PIR", sku:"U054" ,kw:"SENSOR"},
      {a:"/#/zh_CN/hat/hat-proto", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/hat_proto_01.webp", p:"PROTO", sku:"U060" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/hat/hat-ncir", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/hat_ncir_01.webp", p:"NCIR", sku:"U061" ,kw:"MLX90614"},
      {a:"/#/zh_CN/hat/hat-thermal", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/hat_thermal_01.webp", p:"Thermal", sku:"U062" ,kw:"MLX90640"},
      {a:"/#/zh_CN/hat/hat-rs485", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/rs485_hat_01.webp", p:"RS485", sku:"U067" ,kw:"AOZ1282CI"},
      {a:"/#/zh_CN/hat/hat-adc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/adc_hat_01.webp", p:"ADC", sku:"U069" ,kw:"ADS1100"},
      {a:"/#/zh_CN/hat/hat-dac", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/dac_hat_01.webp", p:"DAC", sku:"U068" ,kw:"MCP4725"},
      {a:"/#/zh_CN/hat/hat-beetlec", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/beetlec_hat_01.webp", p:"BeetleC", sku:"U030" ,kw:"ROBOT"},
      {a:"/#/zh_CN/hat/hat-proto-plus", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/hat_proto_plus_01.webp", p:"PROTO PLUS", sku:"U060-B" ,kw:"PROTOTYPE"},
      {a:"/#/zh_CN/hat/hat-yun", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/yun_hat_01.webp", p:"YUN", sku:"U070" ,kw:"SHT20 BMP280 LED NEOPIXEL"},
      {a:"/#/zh_CN/hat/hat-neoflash", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/neoflash_hat_01.webp", p:"Neoflash", sku:"U071" ,kw:"LED NEOPIXEL"},
      {a:"/#/zh_CN/hat/hat-tof", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/tof_hat_01.webp", p:"ToF", sku:"U072" ,kw:"VL53L0X"},
      {a:"/#/zh_CN/hat/hat-joystick", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/joystick_hat_01.webp", p:"Joystick", sku:"U073" ,kw:"CONTROLER"},
      {a:"/#/zh_CN/hat/hat-finger", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/finger_hat_01.webp", p:"FINGER", sku:"U074" ,kw:"FPC1020SC"},
      {a:"/#/zh_CN/hat/hat-servo", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/servo_hat_01.webp", p:"SERVO", sku:"U075" ,kw:"180 SERVO"},
      {a:"/#/zh_CN/hat/hat-puppyc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/puppyc_01.webp", p:"PuppyC", sku:"K035" ,kw:"SERVO ROBOT"},
      {a:"/#/zh_CN/hat/hat-8servos", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/8servos_01.webp", p:"8Servos", sku:"U076" ,kw:"180 360 SERVO"},
      {a:"/#/zh_CN/hat/hat-bugc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/bugc_hat_01.webp", p:"BugC", sku:"K033" ,kw:"ROBOT"},
      {a:"/#/zh_CN/hat/hat-cardkb", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/cardkb_hat_01.webp", p:"CardKB", sku:"U077" ,kw:"CONTROLER KEYBOARD"},
      {a:"/#/zh_CN/hat/hat-roverc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/roverc_hat_01.webp", p:"RoverC", sku:"K036" ,kw:"ROBOT"},
      {a:"/#/zh_CN/hat/hat-joyc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/JoyC_01.webp", p:"JoyC", sku:"U079" ,kw:"CONTROLER"},
      {a:"/#/zh_CN/hat/hat-18650", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/18650C_01.webp", p:"18650C", sku:"U080" ,kw:"BATTERY"},
      {a:"/#/zh_CN/hat/hat-powerc", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/PowerC_01.webp", p:"PowerC", sku:"U081" ,kw:"CHARGE BATTERY"},
      {a:"/#/zh_CN/hat/hat_roverc_pro", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/hat/roverc_pro.webp", p:"RoverC PRO", sku:"K036-B" ,kw:"ROVERC ROBOT"}
   ];


    const application_list = [
      //Application
      {a:"/#/zh_CN/app/bala", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/app_bala_01.webp", p:"BALA", sku:"K014" ,kw:"ROBOT", category:"Application"},
      {a:"/#/zh_CN/app/lidarbot", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/app_lidarbot_01.webp", p:"LidarBOT", sku:"K017" ,kw:"ROBOT"},
      {a:"/#/zh_CN/app/piano", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/app_piano_01.webp", p:"PIANO", sku:"A047" ,kw:"MUSIC"},
      {a:"/#/zh_CN/app/flir", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/app_flir_01.webp", p:"FLIR", sku:"K021" ,kw:"FLIR3.0"},
      {a:"/#/zh_CN/app/demo-board", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/app_DemoBoard_01.webp", p:"Demo Board", sku:"K024" ,kw:"SEOVO MOTOR NEOPIXEL LED SENSOR"},
      {a:"/#/zh_CN/unit/neoflash", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_neoflash_01.webp", p:"NeoFlash", sku:"A042" ,kw:"NEOPIXEL LED PIR"},
      {a:"/#/zh_CN/unit/catear", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_catear_01.webp", p:"CatEar", sku:"A043" ,kw:"NEOPIXEL LED"},
      {a:"/#/zh_CN/unit/butterfly", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/butterfly_01.webp", p:"BUTTERFLY", sku:"A041-B" ,kw:"NEOPIXEL LED SEOVO"},
      {a:"/#/zh_CN/1515/6060-push", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/1515/6060_push_01.webp", p:"6060-PUSH", sku:"K028" ,kw:"RS485 STEPMOTOR"},
      {a:"/#/zh_CN/app/m5scale_diy_kit", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/m5scale_diy_kit_01.webp", p:"M5SCALE DIY Kit", sku:"K029" ,kw:"WEIGHT HX711"},
      {a:"/#/zh_CN/app/ac_socket", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/ac_socket_01.webp", p:"AC Socket", sku:"K031" ,kw:"RS485 SWITCH"},
      {a:"/#/zh_CN/base/pm2.5", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/base_pm25_01.webp", p:"PM2.5", sku:"K023" ,kw:"SHT20 PMSA003"},
      {a:"/#/zh_CN/base/iiot_dual_switch_kit_with_core", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/base/iiot_dual_switch%20kit_with_core_01.webp", p:"IIoT Dual-Switch", sku:"A072" ,kw:"RELAY"},
      {a:"/#/zh_CN/app/balac", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/app/balac_01.webp", p:"BalaC", sku:"K038" ,kw:"ROBOT"}
    ];


   const accessory_list = [
      //Accessory
      {a:"/#/zh_CN/accessory/converter/grove_t", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/grove_t_01.webp", p:"Grove-T", sku:"U039" ,kw:"CONNECTOR", category:"Accessory"},
      {a:"/#/zh_CN/accessory/cable/grove_cable", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/grove_cable_01.webp", p:"Grove Cable", sku:"A034" ,kw:"CABLE"},
      {a:"/#/zh_CN/accessory/converter/grove2grove", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/acs_g2g_01.webp", p:"GROVE2GROVE", sku:"A040" ,kw:"CONNECTOR"},
      {a:"/#en/accessory/cable/lego_cable", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/lego_cable.webp", p:"LEGO Cable", sku:"A030" ,kw:"CABLE"},
      {a:"/#/zh_CN/accessory/screw", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/screw_p1.webp", p:"SCREW", sku:"A050" ,kw:"TOOL"},
      {a:"/#/zh_CN/accessory/bus_socket", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/acs_bus_socket_01.webp", p:"BUS-Socket", sku:"A001" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/accessory/frame", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/frame_01.webp", p:"Frame", sku:"A013" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/unit/trace", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/unit/unit_trace_01.webp", p:"TRACE", sku:"A048" ,kw:"SENSOR"},
      {a:"/#/zh_CN/module/proto_kit", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/module/module_proto_02.webp", p:"PROTO-KIT", sku:"K008" ,kw:"DHT12 PROTOTYPE"},
      {a:"/#/zh_CN/tool/usb_downloader", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/tool/usb_downloader_01.webp", p:"USB Downloader", sku:"A012" ,kw:"USB TTL"},
      {a:"/#/zh_CN/tool/usb_isp", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/tool/tool_usb_isp_01.webp", p:"USB ISP", sku:"A049" ,kw:"DOWNLOADER"},
      {a:"/#/zh_CN/accessory/glass_panel_repair_kit", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/glass_panel_repair_kit_01.webp", p:"Glass Panel Repair", sku:"A070" ,kw:"SCREEN PANEL"},
      {a:"/#/zh_CN/accessory/485t", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/485t_01.webp", p:"485T", sku:"A071" ,kw:"RS485"},
      {a:"/#/zh_CN/accessory/watch", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/watch_01.webp", p:"Watch", sku:"K009-F" ,kw:"ACCESSORY"},
      {a:"/#/zh_CN/accessory/sg90_servo", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/servo_01.webp", p:"SG90 servo", sku:"A076" ,kw:"180 SERVO"},
      {a:"/#/zh_CN/accessory/servo_kit", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/servo_kit_01.webp", p:"Servo Kit 180°/360°", sku:"A076-B&C" ,kw:"180 360 SERVO Kit"},
    ];

   const aluminium_list = [
      //Aluminium
      {a:"/#/zh_CN/1515/corner", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/acs_corner_01.webp", p:"CORNER", sku:"A036" ,kw:"CONNECTOR", category:"Aluminium"},
      {a:"/#/zh_CN/1515/nut", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/accessory/acs_nut_01.webp", p:"NUT", sku:"A037" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/1515/connectors", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/1515/ap_30_01.webp", p:"Connector", sku:"A052" ,kw:"CONNECTOR"},
      {a:"/#/zh_CN/1515/ap", img:"http://static-cdn.m5stack.com/image/m5-docs_homepage/1515/ap_ap_01.webp", p:"Aluminium Extrusions", sku:"A061" ,kw:"Aluminium"}
    ];

    const product_class = [core_list, module_list, base_list, atom_list, atom_base_list, stick_list, hat_list, face_list, unit_list, mini_unit_list, application_list,accessory_list,aluminium_list];
    const product_class_name = ["core","module","base","atom","atom-base", "stick", "hat", "face","unit","mini-unit","application","accessory","aluminium"];

    for (var i=0; i<product_class_name.length; i++){
      $(".product_page").append("<div></div>");
      $(".product_page div:last-child").attr("id",product_class_name[i]);
    }

  const mask_btn = `<a href="#" class="quickstart_btn"><button type="button" class="mask-btn1">QuickStart</button></a>`

    for (var class_num=0; class_num<product_class.length; class_num++ ){
      for (var i=0; i<product_class[class_num].length; i++ ) {
        if(product_class[class_num][i].category != undefined){
           $("#"+product_class_name[class_num]).append(`<p><strong>${product_class[class_num][i].category}</strong></p>`);
        }
        var html = 
        `<div class='item'>
          <a href="${product_class[class_num][i].a}">
            <img src="${product_class[class_num][i].img}">
            <p class='item-title' data-kw="${product_class[class_num][i].kw}">${product_class[class_num][i].p}</p>
            <div class="mask"><p class="mask_sku">${product_class[class_num][i].sku}</p></div>
          </a>
        </div> `
        $("#"+product_class_name[class_num]).append(html);
        if(typeof(product_class[class_num][i].qs) != "undefined"){
          $("#"+product_class_name[class_num]+" .item:last-child").append(mask_btn);
          $("#"+product_class_name[class_num]+" .item:last-child .quickstart_btn").attr("href", product_class[class_num][i].qs);
        }
        // if(product_class[class_num][i].status == "eol"){
        //   $("#"+product_class_name[class_num]+" .item:last-child a").append('<div style="product_eol">EOL</div>');
        // }
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
