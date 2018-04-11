# QuickBlox JavaScript SDK

[![travis-ci](https://api.travis-ci.org/QuickBlox/quickblox-javascript-sdk.svg?branch=gh-pages)](https://travis-ci.org/QuickBlox/quickblox-javascript-sdk)
[![Code Climate](https://codeclimate.com/github/QuickBlox/quickblox-javascript-sdk/badges/gpa.svg)](https://codeclimate.com/github/QuickBlox/quickblox-javascript-sdk)
[![npm](https://img.shields.io/npm/v/quickblox.svg)](https://www.npmjs.com/package/quickblox)
[![npm](https://img.shields.io/npm/dm/quickblox.svg)](https://www.npmjs.com/package/quickblox)

HiDa! is a FREE video and audio conferencing app that offers complete END-TO-END security and encryption in your calls. HiDa! works in any level of internet connection and uses very less of your data. HiDa! offers a great speed and quality in the video and audio calls.
The app offers video/audio conference for upto 12 people at once for free!

The HiDa! for Web makes it easier, yet the best quality for users.

HiDa! is a free webRTC based video and audio calling app that allows interaction from any device! It works on multiple platforms(iPhone, Android Phones, Windows and other web-based systems)

It is available currently only on the app store and web. The iOS version will soon be available on the App Store.

The WEB version of HiDa! currently only works for certain browsers with WebRTC compatibility.


## WHY USE HiDa!:
• NO FEES: There are no subscription fees to use HiDa!. HiDa! uses any type of Internet connection (4G/3G/2G/EDGE or Wi-Fi) to let you video and audio conference your business partners and, so you don't have to pay for every call.

• FREE CALLS: Video/Audio conference your business partners together at once through group calls for free with HiDa!, even if they're in another country. HiDa! calls use your phone's Internet connection rather than your cellular plan.

• NO INTERNATIONAL CHARGES: There's no extra charge to video/audio conference through HiDa! internationally. Conference with your business partners around the world and avoid international call charges.

• SAY NO TO USERNAMES AND PINS: Why remember yet another username or PIN? In HiDa!, just enter your username and a chat group name to in which your business partners can also join!

• LOGGING IN AND OUT: With HiDa!, you can log in into a chat group where your business partners are present, attend the call and then logout and again log in into another chat group. So, no confusions about multiple chat groups at once.

•	A GREAT FEATURE - THE SCREEN SHARE : HiDa! isn't meant to be some boring conferencing app. It's awesome Screen Share feature allows users to share the activities on their screen. So you can share a PPT live through this app or conduct virtual board meetings from anywhere or conduct virtual classrooms! So HiDa! is a multi-purpose conferencing app.

<a href='https://play.google.com/store/apps/details?id=com.cs.bugdroid.hida&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>


## Bower and RequireJS

If you use the bower package manager for your project, you can install the JS SDK through bower:

```
bower install quickblox --save
```

When you use **RequireJS**, you are able to use QuickBlox as an AMD compliant module. The SDK supports the [UMD (Universal Module Definition)](https://github.com/umdjs/umd) pattern for JavaScript modules, so it is possible to use the SDK everywhere (as a global variable in the browser via an AMD module loader like RequireJS or as a CommonJS module in a Node.js environment).

## Node.js and NPM integration

Also you can use QuickBlox JavaScript SDK with server-side applications on NodeJS through the native node package. Just install the package in your application project like this:

```
npm install quickblox --save
```

And you're ready to go:

```javascript
var QB = require('quickblox');

// OR to create many QB instances
var QuickBlox = require('quickblox').QuickBlox;
var QB1 = new QuickBlox();
var QB2 = new QuickBlox();
```

## Download ZIP archive

[QuickBlox JavaScript SDK, zip archive](https://github.com/QuickBlox/quickblox-javascript-sdk/archive/gh-pages.zip)

# Browsers support

| IE   | Firefox | Chrome | Safari | Opera | Node.js |
|:----:|:-------:|:------:|:------:|:-----:|:-------:|
| 10+  |  30+    | 30+    |  7.1+  |  23+  |    4+   |

# Documentation

You can look at it here https://quickblox.com/developers/Javascript

# Questions and feedback

Please raise questions, requests for help etc. via https://stackoverflow.com/questions/tagged/quickblox

Feedback and suggestions for improvement always welcome :)

# How to contribute
See more information at [contributing.md](https://github.com/QuickBlox/quickblox-javascript-sdk/blob/gh-pages/.github/CONTRIBUTING.md)

# License
Apache 2.0
