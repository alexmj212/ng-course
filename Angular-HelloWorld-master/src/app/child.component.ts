import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <h2>Child Header: {{title}}</h2>
        <br><button (click)="changeTitle()">Ask Chef a question</button>
        <br>   
    `
})
export class ChildComponent {

    @Input() title: string;
    @Output() titleChanged = new EventEmitter<string>();

    changeTitle() {
        this.titleChanged.emit(this.title);
    }
}