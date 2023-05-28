import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '@app/_services';
import { Pagination } from '@app/_models';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
  account = this.accountService.accountValue;
  tasks?: any[];
  pagination: Pagination = {
    current_page: 0,
    last_page: 0,
    total: 0,
    data: [],
    first_page_url: '',
    from: 0,
    last_page_url: '',
    next_page_url: '',
    path: '',
    per_page: '',
    prev_page_url: '',
    to: ''
  };

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.loadTasks()
  }

  loadTasks(page: number = 1) {
    this.accountService.getAllTasks(page)
      .pipe(first())
      .subscribe(tasks => {
        this.pagination = tasks;
        this.tasks = tasks?.data;
      });
  }

  nextPage(forward: number = 1) {
    const { current_page, last_page } = this.pagination ?? {};

    if (current_page && last_page && current_page + forward >= 1 && current_page + forward <= last_page) {
      this.loadTasks(current_page + forward);
    }
  }
}





