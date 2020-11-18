import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    history: string[] = [];

    constructor() {
        console.log('History Service Created');
    }

    log(item: string) {
        this.history.push(item);
        console.log(this.history);
    }
}