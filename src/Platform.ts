
import {PlatformType} from './PlatformType';
import {OS} from './OS';


/**
 * Platform representation
 */
export class Platform {

    /**
     * Type of platform
     */
    public type: PlatformType;

    /**
     * Operating system of platform
     */
    public os: OS;

    /**
     * If platform type is Browser
     */
    public isBrowser(): boolean {
        return this.type === PlatformType.BROWSER
            || this.type === PlatformType.ELECTRON
            || this.type === PlatformType.NWJS;
    }

    /**
     * If platform type is NodeJS
     */
    public isNodeJS(): boolean {
        return this.type === PlatformType.NODEJS
            || this.type === PlatformType.ELECTRON
            || this.type === PlatformType.NWJS;
    }

    /**
     * If platform is Electron
     */
    public isElectron(): boolean {
        return this.type === PlatformType.ELECTRON;
    }

    /**
     * If platform is NWJS
     */
    public isNWJS(): boolean {
        return this.type === PlatformType.NWJS;
    }

    /**
     * If platform is Rhino
     */
    public isRhino(): boolean {
        return this.type === PlatformType.RHINO;
    }

}
