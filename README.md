# spaceship

[![Join the chat at https://gitter.im/gdg-x/spaceship](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gdg-x/spaceship?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Material Ionic Hybrid GDG App

This is a pre-alpha app built with the Ionic v2.0 beta. It is still under heavy development.

## Table of Contents
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)

## Getting Started

* Clone this repository.
* Run `npm install` on project root.
* Install the ionic-cli if not already (`npm install -g ionic@beta`)
* Run `ionic serve` in project root.

## File Structure of App

```
ionic-conference-app/
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins go
|
├── resources/                         * Images for splash screens and icons
|
├── www/                               * Folder that is copied over to platforms www directory
│   ├── app/                           * Contains our application code
│   │   ├── about/                     * About page
│   │   │    ├── about.html            * Page template
│   │   │    └── about.js              * Page code
│   │   │
│   │   │── components/                * Example components
│   │   │       ├── date-format.js     * Import moment.js and format date
│   │   │       ├── schedule-list.js   * List component
│   │   │       └── schedule-list.html * List template
│   │   │
│   │   ├── app.html                   * Application template
│   │   ├── app.js                     * Main Application configuration
│   │   └── app.scss                   * Sass imports
│   │   
│   ├── build/                        * Contains compiled content
│   │     ├── css                     * Compiled CSS
│   │     ├── fonts                   * Copied Fonts
│   │     └── js                      * ES5 compiled JavaScript
│   │
│   ├── img/                          * App images
│   │
│   └── index.html                    * Main entry point
|
├── .gitignore                        * Example git ignore file
├── package.json                      * Our javascript dependencies
├── README.md                         * This file
├── tsconfig.json                     * Configures the TypeScript compiler
├── config.xml                        * Cordova configuration file
├── ionic.config.js                   * Ionic configuration file
└── webpack.config.js                 * Webpack configuration file
```

###Contributors
See [list of contributors](https://github.com/gdg-x/spaceship/graphs/contributors)

Maintainer: [Splaktar](https://github.com/splaktar), [Jmarti326](https://github.com/jmarti326).

######The GDG App, GDG[x] are not endorsed and/or supported by Google, the corporation.

License
--------

    © 2015-2016 GDG[x]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
