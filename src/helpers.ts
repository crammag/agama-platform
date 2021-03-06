
import {PlatformType} from './PlatformType';
import {Platform} from './Platform';


/**
 * Current platform
 *
 * TODO: Implement NWJS and Rhino
 */
export const platform: Platform = new Platform();


if(typeof process === 'object' && process.versions['electron']) {
    platform.type = PlatformType.ELECTRON;
} else if(typeof navigator === 'object' && navigator.product.toUpperCase() === 'REACTNATIVE') {
    platform.type = PlatformType.REACNATIVE;

// } else if(typeof module === 'object' && module.exports) {
} else if(typeof process === 'object' && typeof process.versions === 'object' && process.versions.node) {
    platform.type = PlatformType.NODEJS;

} else if(typeof window === 'object') {
    platform.type = PlatformType.BROWSER;
}

platform.os = platform.isNodeJS() ? require('./platforms/nodejs') : require('./platforms/browser');


/**
 * If current platform is Browser
 */
export const IS_BROWSER: boolean = platform.isBrowser();

/**
 * If current platform is NodeJS
 */
export const IS_NODEJS: boolean = platform.isNodeJS();

/**
 * If current platform is Electron
 */
export const IS_ELECTRON: boolean = platform.isElectron();

/**
 * If current platform is React Native
 */
export const IS_REACTNATIVE: boolean = platform.isReactNative();

/**
 * If current platform is NWJS
 */
export const IS_NWJS: boolean = platform.isNWJS();

/**
 * If current platform is Rhino
 */
export const IS_RHINO: boolean = platform.isRhino();

/**
 * If current operating system is Linux
 */
export const IS_LINUX: boolean = platform.os.isLinux();

/**
 * If current operating system is Windows
 */
export const IS_WINDOWS: boolean = platform.os.isWindows();

/**
 * If current operating system is OSX
 */
export const IS_OSX: boolean = platform.os.isOSX();

/**
 * If current operating system is FreeBSD
 */
export const IS_FREEBSD: boolean = platform.os.isFreeBSD();

/**
 * If current operating system is SunOS
 */
export const IS_SUNOS: boolean = platform.os.isSunOS();
