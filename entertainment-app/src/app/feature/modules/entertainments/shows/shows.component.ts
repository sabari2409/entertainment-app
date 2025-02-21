import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/core/rest-api.service";
import { Shows } from "../entertainment.model";


@Component({
    selector: 'ent-shows',
    templateUrl: './shows.component.html',
    styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

    showLists: any = [];

    constructor(
        private restApi: RestApiService
    ) {

    }

    ngOnInit(): void {
        let getShows$ = this.restApi.httpGet('getAllShows');
        getShows$.subscribe((res) => {
            console.log(res);
            this.showLists = res;
        });
    }

}