import { Input, Component, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
    selector: 'syncfusion-grid',
    template: `<div #sfGrid></div>`,
})
export class SyncFusionGridComponent implements AfterViewInit, OnChanges {
    @ViewChild('sfGrid') el:ElementRef;
    @Input() dataSource: Array<any>;
    @Input() columns: Array<any>;
    @Input() detailsTemplateUrl: string;
    sfGrid: any;

    ngAfterViewInit(){
        this.sfGrid = $$(this.el.nativeElement);
        debugger;
        this.sfGrid.ejGrid({
                dataSource: this.dataSource,
                columns: this.columns,
                detailsTemplate: this.detailsTemplateUrl
            });
    }

    ngOnChanges(){
        if(this.dataSource && this.sfGrid){

        }
    }
}