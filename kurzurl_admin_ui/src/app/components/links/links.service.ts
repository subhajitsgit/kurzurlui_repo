import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { UserLink } from "./link.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserLinksService{
    private endpoint = 'user-links';
    private apibaseUrl =  'http://localhost:5057/api/UsereLinks'

    constructor( private http: HttpClient){}

    getUserlinks(): Observable<UserLink[]>{
        return this.http.get<UserLink[]>(
            `${this.apibaseUrl}/${this.endpoint}`
        );
    }

    createLink(body: {
        userId: number;
        mainUrl: string;
        title: string;
    }): Observable<any> {
        return this.http.post<any>(`http://localhost:5057/api/UsereLinks/create-link`, body);
    }
}