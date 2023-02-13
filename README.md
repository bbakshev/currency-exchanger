# Currency Exchanger

#### By: **Brishna Bakshev**

## Description

A simple JavaScript program that uses Exchnage Rate API to convert base currency to a desired currency. The user will have options to choose from a base currency and the desired currency for an exchange rate. 

![final screen](/src/assets/images/ui.png)

## Technologies Used

* HTML
* CSS
* JavaScript
* API

## Setup/Installation Requirements

#### You will need:
* A code editor, such as [VS Code](https://code.visualstudio.com/)
* [Git](https://github.com/) installed
* [Node.js](https://nodejs.org/en/)

#### You will an API key from [**Exchange Rate API**](https://www.exchangerate-api.com/)
* Navigate to Exchange Rate API.
* Enter your email address and click ```Get Free Key```.
* Finish registering and you shoud now have access to your API Key.
* Keep your key private!

#### Open Terminal
```sh
  $ cd Desktop
  $ git clone https://github.com/bbakshev/currency-exchanger.git
  $ cd currency-exchanger
  $ touch .env
  $ echo "API_KEY={YOUR API KEY HERE}" > .env
```
**Important note:** Replace {YOUR API KEY HERE}, including curly brackets, with the free API Key from Exchange Rate API. If you haven't signed up for the key, follow instructions above.

#### Building the project using webpack with
```sh
npm run build
npm run start
```
## Known Bugs

USA currency code is appearing twice when making a selection From currency 

## License

[MIT](https://github.com/noh24/currency-converter/blob/main/license.txt)

Copyright (c) 2023 Brishna Bakshev