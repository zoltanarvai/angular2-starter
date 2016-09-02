import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pager',
    template: `
    <nav>
        <ul class="pager">
            <li (click)="previousPage()"><a>Previous</a></li>
            <li (click)="nextPage()"><a>Next</a></li>
        </ul>
    </nav>
    `
})
export class PagerComponent { 
    pageIndex = 0;
    @Output() paging = new EventEmitter<number>();

    nextPage(){
        this.pageIndex++;
        this.paging.emit(this.pageIndex);
    }

    previousPage(){
        console.log("click")
        this.pageIndex--;
        this.paging.emit(this.pageIndex);
    }
}