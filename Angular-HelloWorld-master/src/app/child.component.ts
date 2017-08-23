import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <h2>Child Header: {{title}}</h2>
        <br><button (click)="changeTitle()">Ask Chef a question</button>
        <span *ngIf="emitted">Event emitted to parent!</span>
        <br><h2>What kind of monster?</h2>
            <input 
                type="text" 
                [(ngModel)]="monster">
        <br><i>{{ monster }}</i>
        <br>   
    `
})
export class ChildComponent {

    monster = "40ft tall monster from the Paleozoic era";
    emitted = false;

    @Input() title: string;
    @Output() titleChanged = new EventEmitter<string>();

    changeTitle() {
        this.titleChanged.emit(this.title);
        this.emitted = true;
    }

    changeMonster(value: string) {
        this.monster = value;
    }
}