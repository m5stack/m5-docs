# Core M5StickV {docsify-ignore-all}


<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_07.jpg" width="30%" height="30%">


***

:memo:**[概要](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](en/quick_start/m5stickv/m5stickv_quick_start)&nbsp;&nbsp;&nbsp;:electric_plug:**[スケッチ](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入](https://m5stack.com/collections/m5-core/products/stickv)**&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 概要

**M5Stick-V RISC-V AI カメラ**

### 基本概要
M5Stackは最近、Kendryte K210搭載の新しいAIOT（AI + IOT）カメラを発売しました。デュアルコア64ビットRISC-V CPUと最先端のニューラルネットワークプロセッサを搭載したエッジコンピューティング向けシステムオンチップ（SoC）です。
<br><br>
M5stick-V AIカメラはマシンビジョン機能との統合が可能で、高エネルギー効率、低コストを併せ持つAIビジョンを実現可能です。MicroPython環境がM5stick-Vにおけるプログラミングを容易にするという条件で、Sipeedと協力しました。 
<br><br>
このモジュールには、OmniPixel®3-HSテクノロジーを使用したOmniVision OV7740センサーが付属しており、クラス最高の光感度を提供できるため、マシンビジョンに最適です。OV7740センサーに加え、M5stick-VはI2S D級DAC内蔵スピーカー、MEMSマイク、IPSスクリーン、6軸IMU、200mAh Li-poバッテリーなど、より多くのハードウェアを備えています。 
<br><br>
ビジョン以外にも、M5stick-Vには内蔵のAPU - オーディオプロセッサも搭載されています。指向性サポートとデュアル512点FFTを備えたM5stick-Vは、マシンヒアリングから音声認識まで、一連の作業も可能です。 
<br><br><br>
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_03.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp;
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_06.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp;
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_05.jpg" width="30%" height="30%"><br>

### Features:
- デュアルコア64-bit RISC-V RV64IMAFDC (RV64GC) CPU / 400Mhz(ノーマル)
- 独立した2つの倍精度 FPU
- 8MiB 64bit オンチップ SRAM 
- ニューラルネットワークプロセッサ(KPU) / 0.8Tops
- フィールドプログラマブル I/O アレイ (FPIOA)
- 2ch ハードウェア 512点 16bit FFT 
- SPI, I2C, UART, I2S, RTC, PWM, タイマーサポート
- AES, SHA256 アクセラレータ 
- DMAコントローラ (DMAC)
- Micropython サポート
- ファームウェア暗号化対応
- ケース材質: PC + ABS
- オンボートハードウェアリソース:
    - フラッシュ:  16M.
    - TFT:  ST7789. 135*240 IPS 1.14  SPI
    - カメラ :OV7740
    - PCM: MAX98357
    - パワーマネジメントIC: AXP192
    - ボタン:  正面および側面
    - バッテリー:  200mAh. 
    - ライト:  RGBW .
    - 外部ストレージ:  TF card/Micro SD
    - マイク:  MSM261S4030HOR.
    - ジャイロ:  MPU6886/SH200Q. 
    - インタフェイス:  CONNEXT.


**注意:**

現在のM5StickVには2つのバージョンのIMUセンサーがあります（MPU6886とSH200Q）。IMUセンサーを識別するために、Pythonコードを使ってI2Cアドレスをスキャンすることができます。MPU6886（0x68）/ SH200Q（0x6c）

### パッケージ内容物
- M5Stick-V 
- USB ケーブル


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_0630.exe"><button type="button" class="btn btn-primary">EasyLoaderをダウンロード</button></a>

>1.EasyLoader は簡単に素早くプログラムを書き込めます。各プログラムにあわせたEasyLoaderがあります。(**現在Windows OSのみ対応しています。**)

>2.ソフトをダウンロードしたら、ダブルクリックしてインストーラを起動します。そして、データケーブルを使ってM5デバイスとパソコンをつなぎ、通信ポート設定を選び **"書き込み"** を押して書き込みを開始します。


### 機能説明
#### 1.1   KENDRYTE K210 
Kendryte K210は、マシンビジョンとマシンヒアリングを統合したシステムオンチップ（SoC）です。TSMCの超低消費電力 28nmプロセスをデュアルコア64ビットプロセッサと組み合わせて使用​​することで、電力効率、安定性、および信頼性を向上できます。SoCは、「ゼロスレッショルド」の開発と最短時間でユーザーの製品に展開できるように努力し、製品に人工知能を与えます。<br><br>
- マシンビジョン
- マシンヒアリング
- 低消費電力のビジョン処理速度と精度の向上
- KPU高性能畳込みニューラルネットワーク（CNN）ハードウェアアクセラレータ
- TSMC アドバンスト 28nmプロセス、温度範囲-40°C〜125°C
- ファームウェア暗号化のサポート
- 設計の柔軟性を最大化する独自のプログラマブルI/Oアレイ
- 同じ処理能力を持つ他のシステムと比較して低電圧、低消費電力
- 3.3V / 1.8Vデュアル電圧I/Oサポートにより、レベルシフタが不要

##### 1.1.1 CPU
このチップは、高性能、低消費電力のRISC-V ISAベースのデュアルコア64ビットCPUを搭載しています。:
- コア数：デュアルコアプロセッサ
- ビット幅：64ビットCPU 400MHz
- 周波数：400MHz
- ISAの拡張機能：IMAFDC
- FPU：倍精度
- プラットフォーム割り込み：PLIC
- ローカル割り込み：CLINT
- Iキャッシュ：32KiB×2
- Dキャッシュ：32KiB×2
- オンチップSRAM：8MiB


#### 1.2    OV7740
- 出力フォーマットのサポート：RAW RGBとYUV
- 画像サイズのサポート：VGA、QVGA、CIFおよび少し小さいサイズ
- ソラリゼーションキャンセルのサポート
- 内部および外部フレーム同期のサポート
- 標準SCCBシリアルインタフェース
- デジタルビデオポート（DVP）パラレル出力インタフェース
- 内蔵ワンタイムプログラマブル（OTP）メモリ
- 位相ロックループ（PLL）を内蔵
- コア用の内蔵1.5 Vレギュレータ
- 洗練されたエッジレート制御により、フィルタレスのクラスD出力が可能
- 電源電圧変動除去比 77dB(1kHzのとき)
- 低RF：GSM無線からTDMAノイズを除去
- クリック＆ポップを除去する回路

##### 1.2.1 仕様
- アレイ: 656 x 488 
- 電源供給: – コア: 1.5VDC ± 5% – アナログ: 3.3V ± 5% – I/O: 1.7 ~ 3.47V 
- 温度範囲: – 動作温度: -30° C ~ 70°C – 画像安定範囲: 0° C ~ 50° C 
- 出力形式: – 8-/10-bit raw RGB – 8-bit YUV
- レンズサイズ: 1/5"
- 入力クロック: 6 ~ 27 MHz
- 最大イメージ転送レート: VGA (640x480): 60 fps – QVGA (320 x 240): 120 fp
- 感度:  6800 mV/(Lux-sec)
- 最大露光時間: 502 x tROW 
- ピクセルサイズ: 4.2  μm x 4.2 μm
- 画像領域: 2755.2  μm x 2049.6 μm
- パッケージ/ダイ寸法: – CSP3: 4185  μm  x 4345  μm – COB: 4200 μm x 4360 μm


#### 1.3    MAX98357
- 電源動作 (2.5V to 5.5V).
- 出力電力 3.2W (4Ω、5Vの時)
- 暗電流 2.4mA
- 電源効率 92% (RL = 8Ω, POUT = 1W)
- 出力ノイズ 22.8µVRMS (AV = 15dB)
- 全高調波歪＋ノイズ(THD+N) 0.013%  (1kHzのとき)
- MCLK不要
- サンプルレート  8kHz ~ 96kHz
- 右、左、(1/2右 + 1/2左) 出力のサポート
- 洗練されたエッジ制御により フィルタレスでクラスDアンプ出力が可能
- 電源電圧変動除去比 77dB ( 1kHzのとき )
- 低RF：GSM無線からTDMAノイズを除去
- クリック＆ポップを除去する回路

#### 1.4    AXP192
- 動作電圧: 2.9V - 6.3V(AMR：-0.3V~15V)
- 自由に設定可能な電源選択システム
- 電源アダプタやUSBを判別し電源・電圧を制限
- 内部ダイオード抵抗 100mΩ以下

#### 1.5    MPU6886

##### 1.5.1 ジャイロの機能
MPU-6886の3軸MEMSジャイロスコープは、幅広い機能を備えています。:
- 250 dps、±500 dps、±1000 dps、および±2000 dpsのユーザー設定可能なフルスケール範囲および16ビット内蔵のデジタル出力X、Y、およびZ軸角速度センサー（ジャイロスコープ） ADC 
- デジタル設定可能なローパスフィルタ
- 省エネ動作可能なジャイロ
- 感度は工場で校正済み
- レンズサイズ: 1/5"
- セルフテスト搭載

##### 1.5.2 A加速度計の機能
MPU-6886の3軸MEMS加速度計には、さまざまな機能が含まれています。:
- フルスケール範囲が±2g、±4g、±8gおよび±16gのプログラム可能なフルスケール範囲、および内蔵16ビットADCを備えたデジタル出力X、Y、およびZ軸加速度計
- ユーザがプログラム可能な割り込み 
- アプリケーションプロセッサの低電力動作のためのウェイクオンモーション割り込み
- セルフテスト搭載

## M5Stick-V ができること
- 顔認識/顔検出
- 物体検出/分類
- リアルタイムで対象のサイズ、座標を取得
- リアルタイムで対象の種類を取得
- 形状認識
- ビデオ/オーディオ録音/表示
- ゲームシミュレータ


## リンク

-  **Web ページ** - [sipeed](https://maixpy.sipeed.com/en/)
-  **クイックスタートガイド** - [M5StickV Guide](https://docs.m5stack.com/#/ja/quick_start/m5stickv/m5stickv_quick_start)

-  **データシート**

    - [MPU6886](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/MPU-6886-000193%2Bv1.1_GHIC.PDF.pdf)
    - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)

## スケッチ
<img src="assets\img\product_pics\core\minicore\m5stickv/m5stickv_04.jpg" width="30%" height="30%">