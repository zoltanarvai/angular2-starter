import { Injectable } from '@angular/core';
import { Issue } from './issues.model';

@Injectable()
export class IssueService {
    getIssues(pageIndex: number, pageSize: number): Promise<Array<Issue>>  {
        return Promise.resolve(this.getMockIssues(pageIndex, pageSize));
    }

    getMockIssues(pageIndex: number, pageSize: number) {
        var issues = new Array<Issue>();

        for(var i = 0; i < 100; i++){
            issues.push({
                TaskId: 'Task ' + i,
                Headline: "This is headline number " + i,
                State: i % 2 == 0 ? "Tracing" : "Passed",
                Product: 'Zeus',
                Priority: "3 - Normal"
            });
        }

        var issuesOnPage = issues.filter((v,i,o) => {
            return i >= pageIndex * pageSize && i < (pageIndex + 1) * pageSize
        });

        return issuesOnPage;
    }
}