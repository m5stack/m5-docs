<div class="product_page">
<div id="search_note" style="display:none;position:fixed;top:30%">
  <h3>not obtained the content, please enter the first letter of the product and search again.</h3>
</div>
</div>

<script>
    const core_list = [
      //Core
      {a:"/#/en/core/basic", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_basic_01.webp", p:"BASIC", sku:"K001"},
      {a:"/#/en/core/gray", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_gray_01.webp", p:"GRAY", sku:"K002"},
      {a:"/#/en/core/fire", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_fire_01.webp", p:"FIRE", sku:"K007"},
      {a:"/#/en/core/m5go_lite", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_m5go_lite_01.webp", p:"M5GO Lite", sku:"K022"},
      {a:"/#/en/core/m5go", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_m5go_01.webp", p:"M5GO Kit", sku:"K006"},
      {a:"/#/en/core/face_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/kit_faces_01.webp", p:"FACES Kit", sku:"K005"},
      //Stick
      {a:"/#/en/core/m5stick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stick_01.webp", p:"M5Stick", sku:"K016"},
      {a:"/#/en/core/m5stickc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/core_m5stickc_01.webp", p:"M5StickC", sku:"K016-C"},
      {a:"/#/en/core/m5stickv", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/m5stickv_01.webp", p:"M5StickV", sku:"K027"},
      {a:"/#/en/core/m5stickt", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/m5stickt_01.webp", p:"M5StickT", sku:"K016-T"},
    ];
    const atom_list = [
      //ATOM
      {a:"/#/en/core/atom_lite", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_lite_01.webp", p:"ATOM Lite", sku:"C008"},
      {a:"/#/en/core/atom_matrix", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/core/atom_matrix_01.webp", p:"ATOM Matrix", sku:"C008-B"},
       //ATOM BASE
      {a:"/#/en/atom/atomic", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/atomic_01.webp", p:"ATOMIC", sku:"A077"},
      {a:"/#/en/atom/tail485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/tail485_01.webp", p:"Tail485", sku:"T002"},
      {a:"/#/en/atom/tailbat", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/atom_base/tailbat_01.webp", p:"TailBat", sku:"T001"},
    ]

    const module_list = [
      //Communication Modules
      {a:"/#/en/module/lora", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lora_01.webp", p:"LoRa (433MHz)", sku:"M005"},
      {a:"/#/en/module/lorawan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lorawan_01.webp", p:"LoRaWAN", sku:"M018"},
      {a:"/#/en/module/gps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_gps_01.webp", p:"GPS", sku:"M003"},
      {a:"/#/en/module/sim800", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_sim800_01.webp", p:"SIM800L", sku:"M004"},
      {a:"/#/en/module/commu", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_commu_01.webp", p:"COMMU", sku:"M011"},
      {a:"/#/en/module/lte", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/lte_01.webp", p:"LTE", sku:"M027"},
      {a:"/#/en/module/gsm", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/gsm_01.webp", p:"GSM", sku:"M026"},
      {a:"/#/en/module/nb-iot", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/nb_iot_01.webp", p:"NB-IoT", sku:"M028"},
      {a:"/#/en/module/lora868", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/lora868_01.webp", p:"LoRa868", sku:"M029"},
      {a:"/#/en/module/nb-iot_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/nb_iot_plus.webp", p:"NB-IoT Plus", sku:"M030"},
      //Expansion Modules
      {a:"/#/en/module/battery", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_battery_01.webp", p:"BATTERY", sku:"M002"},
      {a:"/#/en/module/proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_proto_01.webp", p:"PROTO", sku:"M001"},
      {a:"/#/en/module/plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_plus_01.webp", p:"PLUS", sku:"M019"},
      {a:"/#/en/module/usb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_usb_01.webp", p:"USB", sku:"M020"},
      {a:"/#/en/module/bus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_bus_01.webp", p:"BUS", sku:"M024"},
      {a:"/#/en/module/goplus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_goplus_p1.webp", p:"GoPlus", sku:"M025"},
      //Drive Modules
      {a:"/#/en/module/stepmotor", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_stepmotor_01.webp", p:"STEPMOTOR", sku:"M012"},
      {a:"/#/en/module/servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/servo_01.webp", p:"SERVO", sku:"M014"},
      {a:"/#/en/module/lego_plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_lego_plus_01.webp", p:"LEGO+", sku:"M021"},
      {a:"/#/en/module/fan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_FAN.webp", p:"FAN", sku:"M013"},
      //FACES Series
      {a:"/#/en/module/encoder", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_encoder_01.webp", p:"ENCODER", sku:"A006"},
      {a:"/#/en/module/joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_joystick_01.webp", p:"JOYSTICK", sku:"A007"},
      {a:"/#/en/module/faces_finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faces_finger_01.webp", p:"FINGER", sku:"A066"},
      {a:"/#/en/module/faces_rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faces_rfid_01.webp", p:"RFID", sku:"A067"},
      {a:"/#/en/module/faces", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/face_01.webp", p:"FACES BOTTOM", sku:"A009"},
      {a:"/#/en/module/facesII", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/faceii_01.webp", p:"FACES II BOTTOM", sku:"A075"},
    ];

    const base_list = [
      //Base
      {a:"/#/en/base/lan_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_lan_01.webp", p:"LAN", sku:"K012"},
      {a:"/#/en/base/node_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_node_01.webp", p:"NODE", sku:"M017"},
      {a:"/#/en/base/btc_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/btc_01.webp", p:"BTC", sku:"A011"},
      {a:"/#/en/base/plc_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/plc_m12_01.webp", p:"PLC-M12", sku:"K011-B"},
      {a:"/#/en/base/core_bottom", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_core_bottom_01.webp", p:"Core BOTTOM", sku:"C001-C"},
      {a:"#/en/base/m5go_bottom", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_base.webp", p:"M5GO BOTTOM", sku:"A014"},
//      {a:"/#/en/base/m5go_rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_rfid_01.webp", p:"M5GO RFID", sku:"A014-B"},
      {a:"/#/en/base/m5go_charger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_m5go_base_01.webp", p:"M5GO CHARGER", sku:"A016"},
      {a:"/#/en/base/base15", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_base15_01.webp", p:"BASE15", sku:"K025"},
      {a:"/#/en/base/base26", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_base26_01.webp", p:"BASE26", sku:"K026"},
      {a:"/#/en/accessory/battery_base", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/battery_base_01.webp", p:"M5CameraBattery", sku:"A068"},
      {a:"/#/en/base/basex", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_basex_01.webp", p:"BaseX", sku:"K037"},
    ];

    const unit_list = [
      //Camera class
      {a:"/#/en/unit/esp32cam", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_esp32cam_01.webp", p:"ESP32CAM", sku:"U007"},
      {a:"/#/en/unit/m5camera", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_01.webp", p:"M5Camera", sku:"U017"},
      {a:"#/en/unit/m5camera_f", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_f_01.webp", p:"M5CameraF", sku:"U037"},
      {a:"/#/en/unit/m5camera_x", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5camera_x_01.webp", p:"M5CameraX", sku:"U038"},
      {a:"/#/en/unit/unitv", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit-v-01.webp", p:"UNIT-V", sku:"U078"},
      //Sensor class
      {a:"/#/en/unit/earth", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_earth_01.webp", p:"EARTH", sku:"U019"},
      {a:"/#/en/unit/env", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_env_01.webp", p:"ENV", sku:"U001"},
      {a:"/#/en/unit/light", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_light_01.webp", p:"LIGHT", sku:"U021"},
      {a:"/#/en/unit/pir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pir_01.webp", p:"PIR", sku:"U004"},
      {a:"/#/en/unit/ncir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_ncir_01.webp", p:"NCIR", sku:"U028"},
      {a:"/#/en/unit/thermal", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_thermal_01.webp", p:"THERMAL", sku:"U016"},
      {a:"/#/en/unit/color", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_color_01.webp", p:"COLOR", sku:"U009"},
      {a:"/#/en/unit/tof", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_tof_01.webp", p:"TOF", sku:"U010"},
      {a:"/#/en/unit/heart", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_heart_01.webp", p:"HEART", sku:"U029"},
      {a:"/#/en/unit/adc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_adc_01.webp", p:"ADC", sku:"U013"},
      {a:"/#/en/unit/makey", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_makey_01.webp", p:"MAKEY", sku:"U026"},
      {a:"/#/en/unit/finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_finger_01.webp", p:"FINGER", sku:"U008"},
      {a:"/#/en/unit/weight", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_weight_01.webp", p:"WEIGHT", sku:"U030"},
      {a:"/#/en/unit/accel", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_accel_01.webp", p:"ACCEL", sku:"U056"},
      {a:"/#/en/unit/op90", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_op90_01.webp", p:"OP.90", sku:"U057"},
      {a:"/#/en/unit/op180", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_op180_01.webp", p:"OP.180", sku:"U058"},
      {a:"/#/en/unit/envII", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/envII_01.webp", p:"ENV II", sku:"U001-B"},
      //I / 0  class
      {a:"/#/en/unit/extio", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_extio_01.webp", p:"EXT.IO", sku:"U011"},
      {a:"/#/en/unit/dac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_dac_01.webp", p:"DAC", sku:"U012"},
      {a:"/#/en/unit/relay", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_relay_01.webp", p:"RELAY", sku:"U023"},
      {a:"/#/en/unit/hub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_hub_01.webp", p:"HUB", sku:"U006"},
      {a:"/#/en/unit/pahub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pahub_p1.webp", p:"PaHUB", sku:"U040"},
      {a:"/#/en/unit/pbhub", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_pbhub_p1.webp", p:"PbHUB", sku:"U041"},
      {a:"/#/en/unit/396port", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_396port_01.webp", p:"3.96Port", sku:"U020"},
      {a:"/#/en/unit/m5-bit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_m5bit_01.webp", p:"M5:bit", sku:"A051"},
      {a:"/#/en/unit/proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_proto_01.webp", p:"PROTO", sku:"U022"},
      {a:"/#/en/unit/mini-proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/mini_proto_01.webp", p:"MINI-PROTO", sku:"U064"},
      {a:"/#/en/unit/unit_fan", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_fan_01.webp", p:"FAN", sku:"U063"},
      {a:"/#/en/unit/vibrator", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_vibrator_motor_01.webp", p:"Vibrator-Motor", sku:"U059"},
      {a:"/#/en/unit/angle", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_angle_01.webp", p:"ANGLE", sku:"U005"},
      {a:"/#/en/unit/button", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_button_01.webp", p:"BUTTON", sku:"U027"},
      {a:"/#/en/unit/dual_button", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_dual_button_01.webp", p:"Dual-BUTTON", sku:"U025"},
      {a:"/#/en/unit/joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_joystick_01.webp", p:"JOYSTICK", sku:"U024"},
      {a:"/#/en/unit/cardkb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_cardkb_01.webp", p:"CardKB", sku:"U035"},
      //Communication class
      {a:"/#/en/unit/ir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_ir_01.webp", p:"IR", sku:"U002"},
      {a:"/#/en/unit/gps", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_gps_01.webp", p:"GPS", sku:"U032"},
      {a:"/#/en/unit/rs485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rs485_01.webp", p:"RS485", sku:"U034"},
      {a:"/#/en/unit/rfid", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rfid_01.webp", p:"RFID", sku:"U031"},
      {a:"/#/en/unit/laser-rx", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/laser_rx_01.webp", p:"LASER-RX", sku:"U065"},
      {a:"/#/en/unit/laser-tx", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/laser_tx_01.webp", p:"LASER-TX", sku:"U066"},
      //LED class
      {a:"/#/en/unit/neopixel", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/M5GO_Unit_neopixel.webp", p:"RGB LED", sku:"A035"},
      {a:"/#/en/unit/hex", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_hex_01.webp", p:"HEX", sku:"A045"},
      {a:"/#/en/unit/rgb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_rgb_01.webp", p:"RGB", sku:"U003"}
    ];


   const hat_list = [
      //C-HAT class
      {a:"/#/en/hat/hat-spk", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_spk_01.webp", p:"SPK", sku:"U055"},
      {a:"/#/en/hat/hat-env", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_env_01.webp", p:"ENV", sku:"U053"},
      {a:"/#/en/hat/hat-pir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_pir_01.webp", p:"PIR", sku:"U054"},
      {a:"/#/en/hat/hat-proto", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_proto_01.webp", p:"PROTO", sku:"U060"},
      {a:"/#/en/hat/hat-ncir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_ncir_01.webp", p:"NCIR", sku:"U061"},
      {a:"/#/en/hat/hat-thermal", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_thermal_01.webp", p:"Thermal", sku:"U062"},
      {a:"/#/en/hat/hat-rs485", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/rs485_hat_01.webp", p:"RS485", sku:"U067"},
      {a:"/#/en/hat/hat-adc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/adc_hat_01.webp", p:"ADC", sku:"U069"},
      {a:"/#/en/hat/hat-dac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/dac_hat_01.webp", p:"DAC", sku:"U068"},
      {a:"/#/en/hat/hat-beetlec", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/beetlec_hat_01.webp", p:"BeetleC", sku:"U030"},
      {a:"/#/en/hat/hat-proto-plus", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/hat_proto_plus_01.webp", p:"PROTO PLUS", sku:"U060-B"},
      {a:"/#/en/hat/hat-yun", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/yun_hat_01.webp", p:"YUN", sku:"U070"},
      {a:"/#/en/hat/hat-neoflash", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/neoflash_hat_01.webp", p:"Neoflash", sku:"U071"},
      {a:"/#/en/hat/hat-tof", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/tof_hat_01.webp", p:"ToF", sku:"U072"},
      {a:"/#/en/hat/hat-joystick", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/joystick_hat_01.webp", p:"Joystick", sku:"U073"},
      {a:"/#/en/hat/hat-finger", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/finger_hat_01.webp", p:"FINGER", sku:"U074"},
      {a:"/#/en/hat/hat-servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/servo_hat_01.webp", p:"SERVO", sku:"U075"},
      {a:"/#/en/hat/hat-puppyc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/puppyc_01.webp", p:"PuppyC", sku:"K035"},
      {a:"/#/en/hat/hat-8servos", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/8servos_01.webp", p:"8Servos", sku:"U076"},
      {a:"/#/en/hat/hat-bugc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/bugc_hat_01.webp", p:"BugC", sku:"K033"},
      {a:"/#/en/hat/hat-cardkb", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/cardkb_hat_01.webp", p:"CardKB", sku:"U077"},
      {a:"/#/en/hat/hat-roverc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/roverc_hat_01.webp", p:"RoverC", sku:"K036"},
      {a:"/#/en/hat/hat-joyc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/JoyC_01.webp", p:"JoyC", sku:"U079"},
      {a:"/#/en/hat/hat-18650", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/18650C_01.webp", p:"18650C", sku:"U080"},
      {a:"/#/en/hat/hat-powerc", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/hat/PowerC_01.webp", p:"PowerC", sku:"U081"}
   ];


    const application_list = [
      //Application
      {a:"/#/en/app/bala", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_bala_01.webp", p:"BALA", sku:"K014"},
      {a:"/#/en/app/lidarbot", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_lidarbot_01.webp", p:"LidarBOT", sku:"K017"},
      {a:"/#/en/app/piano", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_piano_01.webp", p:"PIANO", sku:"A047"},
      {a:"/#/en/app/flir", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_flir_01.webp", p:"FLIR", sku:"K021"},
      {a:"/#/en/app/demo-board", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_DemoBoard_01.webp", p:"Demo Board", sku:"K024"},
      {a:"/#/en/unit/neoflash", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_neoflash_01.webp", p:"NeoFlash", sku:"A042"},
      {a:"/#/en/unit/catear", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_catear_01.webp", p:"CatEar", sku:"A043"},
      {a:"/#/en/unit/butterfly", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/butterfly_01.webp", p:"BUTTERFLY", sku:"A041-B"},
      {a:"/#/en/1515/6060-push", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/6060_push_01.webp", p:"6060-PUSH", sku:"K028"},
      {a:"/#/en/app/m5scale_diy_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/m5scale_diy_kit_01.webp", p:"M5SCALE DIY Kit", sku:"K029"},
      {a:"/#/en/app/ac_socket", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/ac_socket_01.webp", p:"AC Socket", sku:"K031"},
      {a:"/#/en/base/pm2.5", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_pm25_01.webp", p:"PM2.5", sku:"K023"},
      {a:"/#/en/base/iiot_dual_switch_kit_with_core", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/iiot_dual_switch%20kit_with_core_01.webp", p:"IIoT Dual-Switch", sku:"A072"},
      {a:"/#/en/app/balac", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/balac_01.webp", p:"BalaC", sku:"K038"}
    ];



   const accessory_list = [
      //Accessory
      {a:"/#/en/accessory/converter/grove_t", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/grove_t_01.webp", p:"Grove-T", sku:"U039"},
      {a:"/#/en/accessory/cable/grove_cable", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/grove_cable_01.webp", p:"Grove Cable", sku:"A034"},
      {a:"/#/en/accessory/converter/grove2grove", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_g2g_01.webp", p:"GROVE2GROVE", sku:"A040"},
      {a:"/#en/accessory/cable/lego_cable", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/lego_cable.webp", p:"LEGO Cable", sku:"A030"},
      {a:"/#/en/accessory/screw", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/screw_p1.webp", p:"SCREW", sku:"A050"},
      {a:"/#/en/accessory/bus_socket", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_bus_socket_01.webp", p:"BUS-Socket", sku:"A001"},
      {a:"/#/en/accessory/frame", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/frame_01.webp", p:"Frame", sku:"A013"},
      {a:"/#/en/unit/trace", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/unit/unit_trace_01.webp", p:"TRACE", sku:"A048"},
      {a:"/#/en/module/proto_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/module/module_proto_02.webp", p:"PROTO-KIT", sku:"K008"},
      {a:"/#/en/tool/usb_downloader", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/tool/usb_downloader_01.webp", p:"USB Downloader", sku:"A012"},
      {a:"/#/en/tool/usb_isp", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/tool/tool_usb_isp_01.webp", p:"USB-ISP", sku:"A049"},
      {a:"/#/en/accessory/glass_panel_repair_kit", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/glass_panel_repair_kit_01.webp", p:"Glass Panel Repair", sku:"A070"},
      {a:"/#/en/accessory/485t", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/485t_01.webp", p:"485T", sku:"A071"},
      {a:"/#/en/accessory/watch", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/watch_01.webp", p:"Watch", sku:"K009-F"},
      {a:"/#/en/accessory/sg90_servo", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/servo_01.webp", p:"SG90 servo", sku:"A076"},
    ];

   const aluminium_list = [
      //Aluminium
      {a:"/#/en/1515/corner", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_corner_01.webp", p:"CORNER", sku:"A036"},
      {a:"/#/en/1515/nut", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/accessory/acs_nut_01.webp", p:"NUT", sku:"A037"},
      {a:"/#/en/1515/connectors", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/ap_30_01.webp", p:"Connector", sku:"A052"},
      {a:"/#/en/1515/ap", img:"https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/1515/ap_ap_01.webp", p:"AluminiumProfile", sku:"A061"}
    ];

    
    const product_class = [core_list,atom_list,module_list,base_list,unit_list,hat_list,application_list,accessory_list,aluminium_list];
    const product_class_name = ["core","atom","module","base","unit","hat","application","accessory","aluminium"];

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
      // "ATOMIC":"ATOM-BASE",
      "ESP32CAM":"Camera class",
      "EARTH":"Sensor class",
      "EXT.IO":"I / 0  class",
      "IR":"Communication class",
      "RGB LED":"LED class",
      "SPK":"C-HAT class",
      "BALA":"Application",
      "Grove-T":"Accessory",
      "CORNER":"Aluminium"
   };


    for (var class_num=0; class_num<product_class.length; class_num++ ){
      for (var i=0; i<product_class[class_num].length; i++ ) {
        if(title_list.hasOwnProperty(product_class[class_num][i].p)){
           $("#"+product_class_name[class_num]).append("<p><strong>"+title_list[product_class[class_num][i].p]+"</strong></p>");
        }
        $("#"+product_class_name[class_num]).append("<div class='item'><a target='view_window'><img><p class='item-title'></p></a></div> ");
        $("#"+product_class_name[class_num]+" .item:last-child a").attr("href", product_class[class_num][i].a);
        $("#"+product_class_name[class_num]+" .item:last-child img").attr("src", product_class[class_num][i].img);
        $("#"+product_class_name[class_num]+" .item:last-child p").text(product_class[class_num][i].p);
      }
    } 


    $(document).ready(function(){
        var mask_btn = `<a href="#" style="color:white;text-decoration:none" target='view_window'><button type="button" class="btn-sm btn-primary mask-btn1">QuickStart</button></a><button type="button" class="btn-sm btn-primary mask-btn2">Document</button>`
        var mask_item = `<div class="mask"><p class="mask_sku">SKU:XXXX</p></div>`
        var search_logo = `<svg style="position: absolute; width:100%;text-align:center;margin-top: 50px;"xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" viewBox="0 0 24 24" focusable="false"><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>`
        $("div.item a").append(mask_item);
        $("#core div.item a .mask:lt(9)").append(mask_btn);
        $("#core div.item a .mask").eq(9).append(search_logo);
        $("#atom div.item a .mask:lt(2)").append(mask_btn);
        $("#atom div.item a .mask:gt(1)").append(search_logo);
        $("#unit div.item a .mask:lt(5)").append(mask_btn);
        $("#unit div.item a .mask:gt(4)").append(search_logo);
        $("#module div.item a .mask").append(search_logo);
        $("#base div.item a .mask").append(search_logo);
        $(".product_page>div:gt(5) div.item a .mask").append(search_logo);
        $("#core .mask a").attr("href", "#en/quick_start/m5core/m5stack_core_quick_start");
        $("#core .mask a").eq(6).attr("href", "#en/quick_start/m5stick/m5stick_quick_start");
        $("#core .mask a").eq(7).attr("href", "#en/quick_start/m5stickc/m5stickc_quick_start");
        $("#core .mask a").eq(8).attr("href", "#en/quick_start/m5stickv/m5stickv_quick_start");
        $("#atom .mask:lt(2) a").attr("href", "#en/quick_start/atom/atom_quick_start");
        $("#unit .mask a").attr("href", "#en/quick_start/m5camera/m5camera_quick_start");
        $("#unit .mask a").eq(4).attr("href", "#en/quick_start/unitv/unitv_quick_start");
        $(".product_page strong").parent('p').css("margin-bottom","0px");
        for (var class_num=0; class_num<product_class.length; class_num++ ){
          for (var i=0; i<product_class[class_num].length; i++ ) {
            $("#"+product_class_name[class_num]+" .item p.mask_sku").eq(i).text(product_class[class_num][i].sku);
          }
        }
        anchor_search();
        scrollFunc();
     });
  
</script>
