import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Options {
    selectedComponent: number;
    selectedIndex: number;
}

const initReport: Options = {
    selectedComponent: 0,
    selectedIndex: -1
};

@Injectable()
export class DataReportService {

    private optionReport$ = new BehaviorSubject<Options>(initReport);

    constructor() { }

    get selectedOption$(): Observable<Options> {
        return this.optionReport$.asObservable();
    }

    setOptions(option: Options): void {
        this.optionReport$.next(option);
    }
}