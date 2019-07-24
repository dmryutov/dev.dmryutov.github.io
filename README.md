# Dmitry Ryutov personal page

[![Build Status](https://travis-ci.org/dmryutov/dev.dmryutov.github.io.svg?branch=master)](https://travis-ci.org/dmryutov/dev.dmryutov.github.io)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Development version of personal page hosted on GitHub Pages.

[Production repo](https://github.com/dmryutov/dmryutov.github.io)


## Frontend

- Vue.js
- Bootstrap
- SASS
- Babel
- Webpack



## Frontend Setup

Clone the repository:

```bash
git clone https://github.com/dmryutov/dmryutov.github.io.git
cd dmryutov.gihub.io
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm run serve
```

To see live application open [http://localhost:8000](http://localhost:8000) in your browser window



## Docker

For production:

```bash
docker-compose up -d --build
```