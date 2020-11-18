import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable()
export class AdditionService {
    public id: number;
    constructor(private history: HistoryService) {
        this.id = Math.round(Math.random() * 100000);
        console.log(`Addition Service Created with id: ${this.id}`);
    }

    add(op1: number, op2: number): number {
        this.history.log(`add: ${op1}, ${op2}`);

        return op1 + op2;
    }
}