import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";
import {Topic} from "../types/topic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient: HttpClient) {
  }

  get topics() {
    const URL = environment.BACKEND_SERVICE.ENDPOINT.TOPIC.ROOT;
    console.log("topics() |", URL);

    return this.httpClient.get<Topic[]>(URL)
      .pipe(tap(r => {
        console.log(r)
      }));
  }
}
