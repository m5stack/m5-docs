# TF card

## begin()

**Syntax:**

`boolean begin(uint8_t cspin);`

**Description:**

This function initialize TF card.

| Argument | Description | Type |
| --- | --- | -- |
| cspin | chip select line (defaults SS line of SPI bus) | uint8_t |

**Example:**

```arduino
#include <M5Stack.h>

void setup() {
  SD.begin();
}
```

## open()

**Syntax:**

`File open(const char *filename, uint8_t mode = FILE_READ);`

**Description:**

This function open the file.

| Argument | Description | Type |
| --- | --- | -- |
| filepath | path to file | const char * |
| mode | read / write / rw (optional) | uint8_t |

**Example:**

```arduino
/*
display contents of hello.txt in TF card to M5 screen.
*/
#include <M5Stack.h>

void setup() {
  M5.begin();
  if (!SD.begin()) {
    M5.Lcd.println("Card failed, or not present");
    while (1);
  }
  Serial.println("TF card initialized.");
  File f = SD.open("/hello.txt", FILE_READ);
  if (f) {
    M5.Lcd.print(f.read());
    f.close();
  } else {
    M5.Lcd.println("open error hello.txt");
  }
}

void loop() {
}
```
