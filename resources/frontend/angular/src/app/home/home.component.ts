import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '@app/_services';
import { Pagination, Statistics } from '@app/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  account = this.accountService.accountValue;
  statistics?: Statistics[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.loadStatistics()
  }

  loadStatistics() {
    this.accountService.getStatistics()
      .pipe(first())
      .subscribe((data: Statistics[] | undefined) => {
        this.statistics = data;
      });
  }
}





