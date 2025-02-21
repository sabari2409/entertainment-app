import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    baseurl = this.getEnvrionment().baseUrl;

    constructor(
        private http: HttpClient
    ) {

    }

    getEnvrionment() {
        return environment;
    }


    /**
     * httpGet
     * @param endPoint 
     * @param options 
     * @returns 
     */
    httpGet(endPoint: string, options?: any) {
        endPoint = this.baseurl + endPoint;
        return this.http.get(endPoint);
    }
}