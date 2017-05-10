
import {platform, release, arch} from 'os';
import {OS} from '../OS';
import {OSType} from '../OSType';


/*
 * TODO: Implement alias, distribution and distributionVersion on OS
 */

let os: OS = new OS();

switch(platform()) {
    case 'linux':
        os.type = OSType.LINUX;
        break;
    case 'win32':
        os.type = OSType.WINDOWS;
        break;
    case 'darwin':
        os.type = OSType.OSX;
        break;
    case 'freebsd':
        os.type = OSType.FREEBSD;
        break;
    case 'sunos':
        os.type = OSType.SUNOS;
        break;
}

os.version = release();
os.architecture = arch();

export = os;
