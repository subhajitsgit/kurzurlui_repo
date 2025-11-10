import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetQRListResponseDto } from "@dto/qr/get-qr-list-response.dto";
import { SaveQRRequestDto } from "@dto/qr/save-qr-request.dto";
import { concatMap, map, mergeMap, Observable } from "rxjs";

interface GenerateQRResponse {
    qrBase64: string;
}

@Injectable()
export class QrCodesService {
    private _apiBaseUrl = 'http://localhost:5057/api/qr';

    constructor(private http: HttpClient) {}

    public generateQR(url: string): Observable<any> {
        const params = new HttpParams().set('url', url);
        return this.http.get<GenerateQRResponse>(
            `${this._apiBaseUrl}/generate`,
            { params }
        )
        .pipe(
            map(response => response.qrBase64)
        );
    }

    public getQRList(): Observable<GetQRListResponseDto[]> {
        return this.http.get<GetQRListResponseDto[]>(
            `${this._apiBaseUrl}/get`
        ).pipe(
            map(qrList => qrList.map(qrItem => {
                qrItem.qrImage = `data:image/png;base64,${qrItem.qrImage}`
                return qrItem
            }))
        );
    }

    public saveQR(saveQRRequest: SaveQRRequestDto): Observable<any> {
        return this.http.post(
            `${this._apiBaseUrl}/save`,
            saveQRRequest
        );
    }
}