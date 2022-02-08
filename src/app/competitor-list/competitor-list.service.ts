import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

import { LIST } from './data/data';
import data from './data/challenge.json';
import {CompetitorListRow} from "./interfaces/competitor-list-row.interface";

@Injectable({
  providedIn: 'root'
})
export class CompetitorListService {

    constructor() {}

    getAll(): Observable<CompetitorListRow[]> {
        // return of(LIST);
        let list: CompetitorListRow[] = data.events[0].competitions[0].competitors.map((competitor: any) => {
            let filteredData: CompetitorListRow = {
                position: competitor.status.position.displayName,
                name: competitor.athlete.displayName,
                totalScore: competitor.score.value,
                roundTotalScores: competitor.linescores.map((scores: any) => scores.value),
                totalStrokes: 0,
            };

            return filteredData;
        });

        return of(list);
    }
}
