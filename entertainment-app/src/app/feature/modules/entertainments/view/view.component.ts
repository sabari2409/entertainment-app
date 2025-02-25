import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestApiService } from "src/app/core/rest-api.service";
import { SeasonDetails, ShowDetailsResponse } from "../entertainment.model";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { MatTableDataSource } from "@angular/material/table";


@Component({
    selector: 'ent-view-details',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewDetailsComponent implements OnInit {

    seasonDetails: string[] = [];
    dataSource!: MatTableDataSource<any>;
    tableCols: string[] = ["episodeId", "episodeNo", "episodeName", "episodeScore"];

    constructor(
        private activatedRoute: ActivatedRoute,
        private restApi: RestApiService
    ) {

    }

    /**
     * ngOnInit
     */
    ngOnInit(): void {
        this.activatedRoute.params.subscribe((res: Partial<{ showId: string, showName: string }>) => {
            console.log("router params -->", res);
            this.getShowDetails(res);
        });
    }

    /**
     * This method is used to get the show details
     * getShowDetails
     * @param res 
     */
    getShowDetails(res: Partial<{ showId: string, showName: string }>) {
        let showDetails$ = this.restApi.httpGet("shows?id=" + res.showId);
        showDetails$.subscribe((res: any) => {
            console.log("show Details ==>", res);
            let seasonDetails = res.map((r: any) => r.seasonName);
            seasonDetails = [...new Set(seasonDetails)];
            this.seasonDetails = seasonDetails;
            this.dataSource = new MatTableDataSource(res);
        });
    }


    /**
     * tabClick
     * @param tabName 
     */
    tabClick(tabName: MatTabChangeEvent) {

    }
}