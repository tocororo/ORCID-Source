import { BreakpointObserver } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlatformInfo } from './platform-info.type';
export declare class PlatformInfoService {
    private _breakpointObserver;
    private _platform;
    platformSubject: BehaviorSubject<PlatformInfo>;
    platform: PlatformInfo;
    constructor(_breakpointObserver: BreakpointObserver, _platform: Platform);
    get(): Observable<PlatformInfo>;
}
