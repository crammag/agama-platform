
import {OSType} from './OSType';


/**
 * Operating system representation
 */
export class OS {

    /**
     * Type of operating system
     */
    public type: OSType;

    /**
     * Version of operating system
     */
    public version: string;

    /**
     * Architecture of operating system
     */
    public architecture: string;

    /**
     * Alias of distribution or operating system
     */
    public alias: string;

    /**
     * Distribution name of Linux operating system
     */
    public distribution: string;

    /**
     * Distribution name of Linux operating system
     */
    public distributionVersion: string;

    /**
     * If operating system is Linux
     */
    public isLinux(): boolean {
        return this.type === OSType.LINUX;
    }

    /**
     * If operating system is windows
     */
    public isWindows(): boolean {
        return this.type === OSType.WINDOWS;
    }

    /**
     * If operating system is OSX
     */
    public isOSX(): boolean {
        return this.type === OSType.OSX;
    }

    /**
     * If operating system is FreeBSD
     */
    public isFreeBSD(): boolean {
        return this.type === OSType.FREEBSD;
    }

    /**
     * If operating system is SunOS
     */
    public isSunOS(): boolean {
        return this.type === OSType.SUNOS;
    }

}
