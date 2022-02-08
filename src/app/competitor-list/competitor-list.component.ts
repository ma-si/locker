import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

import {CompetitorListService} from "./competitor-list.service";
import {CompetitorListRow} from "./interfaces/competitor-list-row.interface";
import {LIST} from "./data/data";

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss']
})
export class CompetitorListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'name', 'totalScore', 'roundTotalScores', 'totalStrokes'];
  dataSource = new MatTableDataSource(LIST);

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
      private competitorListService: CompetitorListService,
  ) {}

  ngOnInit(): void {
    this.competitorListService.getAll().subscribe( (competitors: CompetitorListRow[]) => {
      this.dataSource = new MatTableDataSource(competitors);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
