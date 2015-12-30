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
