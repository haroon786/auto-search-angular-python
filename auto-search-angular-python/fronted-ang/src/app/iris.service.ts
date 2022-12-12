import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { forkJoin, Observable, of, pipe } from 'rxjs';
import {Iris,ProbabilityPrediction,SVCParameters,SVCResult} from "./types";
import { map } from 'rxjs/operators';

const SERVER_URL: string = 'http://127.0.0.1:8081/api/';

@Injectable({
  providedIn: 'root',
})
export class IrisService {

    constructor(private http: HttpClient) {
    }

    public trainModel(svcParameters: SVCParameters): Observable<SVCResult> {
        return this.http.post(`${SERVER_URL}train`, svcParameters).pipe(
          map((e: any) => {

            return e;
          })
        )
    }

    public predictIris(iris: Iris): Observable<ProbabilityPrediction[]> {
        return this.http.post(`${SERVER_URL}predict`, iris).pipe(
          map((e: any) => {

            return e;
          })
        )
    }
}
