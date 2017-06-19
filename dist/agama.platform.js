(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["platform"] = factory();
	else
		root["agama"] = root["agama"] || {}, root["agama"]["platform"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type of platform
 */
var PlatformType;
(function (PlatformType) {
    PlatformType[PlatformType["BROWSER"] = 0] = "BROWSER";
    PlatformType[PlatformType["NODEJS"] = 1] = "NODEJS";
    PlatformType[PlatformType["ELECTRON"] = 2] = "ELECTRON";
    PlatformType[PlatformType["NWJS"] = 3] = "NWJS";
    PlatformType[PlatformType["RHINO"] = 4] = "RHINO";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlatformType_1 = __webpack_require__(0);
/**
 * Platform representation
 */
var Platform = (function () {
    function Platform() {
    }
    /**
     * If platform type is Browser
     */
    Platform.prototype.isBrowser = function () {
        return this.type === PlatformType_1.PlatformType.BROWSER
            || this.type === PlatformType_1.PlatformType.ELECTRON
            || this.type === PlatformType_1.PlatformType.NWJS;
    };
    /**
     * If platform type is NodeJS
     */
    Platform.prototype.isNodeJS = function () {
        return this.type === PlatformType_1.PlatformType.NODEJS
            || this.type === PlatformType_1.PlatformType.ELECTRON
            || this.type === PlatformType_1.PlatformType.NWJS;
    };
    /**
     * If platform is Electron
     */
    Platform.prototype.isElectron = function () {
        return this.type === PlatformType_1.PlatformType.ELECTRON;
    };
    /**
     * If platform is NWJS
     */
    Platform.prototype.isNWJS = function () {
        return this.type === PlatformType_1.PlatformType.NWJS;
    };
    /**
     * If platform is Rhino
     */
    Platform.prototype.isRhino = function () {
        return this.type === PlatformType_1.PlatformType.RHINO;
    };
    return Platform;
}());
exports.Platform = Platform;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type of operating system
 */
var OSType;
(function (OSType) {
    OSType[OSType["LINUX"] = 0] = "LINUX";
    OSType[OSType["WINDOWS"] = 1] = "WINDOWS";
    OSType[OSType["OSX"] = 2] = "OSX";
    OSType[OSType["FREEBSD"] = 3] = "FREEBSD";
    OSType[OSType["SUNOS"] = 4] = "SUNOS";
})(OSType = exports.OSType || (exports.OSType = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OSType_1 = __webpack_require__(2);
/**
 * Operating system representation
 */
var OS = (function () {
    function OS() {
    }
    /**
     * If operating system is Linux
     */
    OS.prototype.isLinux = function () {
        return this.type === OSType_1.OSType.LINUX;
    };
    /**
     * If operating system is windows
     */
    OS.prototype.isWindows = function () {
        return this.type === OSType_1.OSType.WINDOWS;
    };
    /**
     * If operating system is OSX
     */
    OS.prototype.isOSX = function () {
        return this.type === OSType_1.OSType.OSX;
    };
    /**
     * If operating system is FreeBSD
     */
    OS.prototype.isFreeBSD = function () {
        return this.type === OSType_1.OSType.FREEBSD;
    };
    /**
     * If operating system is SunOS
     */
    OS.prototype.isSunOS = function () {
        return this.type === OSType_1.OSType.SUNOS;
    };
    return OS;
}());
exports.OS = OS;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(5));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlatformType_1 = __webpack_require__(0);
var Platform_1 = __webpack_require__(1);
/**
 * Current platform
 *
 * TODO: Implement NWJS and Rhino
 */
exports.platform = new Platform_1.Platform();
if (typeof process === 'object' && process.versions['electron']) {
    exports.platform.type = PlatformType_1.PlatformType.ELECTRON;
    // } else if(typeof module === 'object' && module.exports) {
}
else if (typeof process === 'object' && typeof process.versions === 'object' && process.versions.node) {
    exports.platform.type = PlatformType_1.PlatformType.NODEJS;
}
else if (typeof window === 'object') {
    exports.platform.type = PlatformType_1.PlatformType.BROWSER;
}
exports.platform.os = exports.platform.isNodeJS() ? __webpack_require__(6) : __webpack_require__(7);
/**
 * If current platform is Browser
 */
exports.IS_BROWSER = exports.platform.isBrowser();
/**
 * If current platform is NodeJS
 */
exports.IS_NODEJS = exports.platform.isNodeJS();
/**
 * If current platform is Electron
 */
exports.IS_ELECTRON = exports.platform.isElectron();
/**
 * If current platform is NWJS
 */
exports.IS_NWJS = exports.platform.isNWJS();
/**
 * If current platform is Rhino
 */
exports.IS_RHINO = exports.platform.isRhino();
/**
 * If current operating system is Linux
 */
exports.IS_LINUX = exports.platform.os.isLinux();
/**
 * If current operating system is Windows
 */
exports.IS_WINDOWS = exports.platform.os.isWindows();
/**
 * If current operating system is OSX
 */
exports.IS_OSX = exports.platform.os.isOSX();
/**
 * If current operating system is FreeBSD
 */
exports.IS_FREEBSD = exports.platform.os.isFreeBSD();
/**
 * If current operating system is SunOS
 */
exports.IS_SUNOS = exports.platform.os.isSunOS();


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var OS_1 = __webpack_require__(3);
/*
 * TODO: Implement os from UserAgent
 */
var os = new OS_1.OS();
module.exports = os;


/***/ })
/******/ ]);
});
//# sourceMappingURL=agama.platform.js.map