# M5Bala
M5Stack balance car

### Quick Start

```bash
git clone https://github.com/m5stack/M5Bala.git
cd M5Bala
pio run
```

### Installing and compiling the software

This project used Arduino framework develop, you must install the necessary tools and prepare the IDE environment.
- Download (and unzip) this repository
- Download and Install Visual Studio Code https://code.visualstudio.com/
- Install the [PlatformIO Extension](https://platformio.org/get-started/ide?install=vscode)
- Install M5Stack [USB Driver](https://github.com/m5stack/M5Stack#installing-the-usb-driver)
- Install ESP32 Platform on PlatformIO
- Open the M5Bala Project folder on PlatformIO
- Build your project with *ctrl+alt+b* hotkey or using **Build** button on the PlatformIO Toolbar
![image](./docs/img/platformio-ide-vscode-build-project.png)

### Dependent library
- M5Stack - [https://github.com/m5stack/M5Stack](https://github.com/m5stack/M5Stack)
- MPU6050_tockn - [https://github.com/tockn/MPU6050_tockn](https://github.com/tockn/MPU6050_tockn)
- NeoPixelBus - [https://github.com/Makuna/NeoPixelBus](https://github.com/Makuna/NeoPixelBus)

### MicroPython
- [Examples](./mpy)
