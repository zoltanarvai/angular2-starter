import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from './issues.model';
import { IssueService } from './issues.service';


@Component({
    selector: 'issues2',
    templateUrl: './issues2.template.html',
    providers: [ IssueService ]
})
export class Issues2Component { 
    issues: Array<Issue>
    columns: Array<any>;
    pageSize = 10;
    pageIndex = 0;
    maxPage = 10;

    constructor(private issueService: IssueService) { 
        this.columns = [ 
            { field: "TaskId" },
            { field: "Headline" },
            { field: "State" },
            { field: "Product" }
        ];
    }

    ngOnInit(){
        this.loadPage(0);
    }

    onPaging(newIndex: number) {
        debugger;
        if(newIndex > this.pageIndex) this.nextPage();
        if(newIndex < this.pageIndex) this.previousPage();
    }

    nextPage(){
        this.pageIndex++;
        this.loadPage(this.pageIndex);
    }

    previousPage(){
        if(this.pageIndex > 0){
            this.pageIndex--;
            this.loadPage(this.pageIndex);
        }
    }

    loadPage(pageIndex: number) {
        this.issueService.getIssues(pageIndex, this.pageSize)
            .then(issues => this.issues = issues);
    }
}