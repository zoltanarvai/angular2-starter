import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from './issues.model';
import { IssueService } from './issues.service';

@Component({
    selector: 'issues',
    templateUrl: './issues.template.html',
    providers: [ IssueService ]
})
export class IssuesComponent { 
    issues: Array<any>;
    columns: Array<any>;
    pageSize = 20;
    pageIndex = 0;
    detailsTemplateUrl = '../issues/issues.row-details.template.html'

    constructor(private issueService: IssueService) { 
        this.columns = [ 
            { field: "TaskId" },
            { field: "Headline" },
            { field: "State" },
            { field: "Product" }
        ];

        this.issues = this.issueService.getMockIssues(this.pageIndex, this.pageSize);
    }
}