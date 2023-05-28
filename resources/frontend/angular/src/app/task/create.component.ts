import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, switchMap } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Pagination } from '@app/_models';

@Component({ templateUrl: 'create.component.html' })
export class CreateComponent implements OnInit {
  form!: FormGroup;
  submitting = false;
  submitted = false;
  deleting = false;
  admins!: any[];
  users!: any[];
  public model: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.accountService.getAllUsers().subscribe((users: { data: any[]; }) => this.users = users.data)
    this.accountService.getAllAdmins().subscribe((admins: { data: any[]; }) => this.admins = admins.data)
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      assigned_by_id: ["", Validators.required],
      assigned_to_id: ["", Validators.required],
      description: ["", Validators.max(1500)],
    }, {

    });
  }

  search_user = (text$: Observable<string>): Observable<any[]> => {
    const searchSubject = new Subject<string>();

    // Trigger search on each input change
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        searchSubject.next(searchTerm);
        return searchSubject;
      })
    ).subscribe();

    return searchSubject.pipe(
      switchMap(searchTerm =>
        this.accountService.getAllUsers(searchTerm).pipe(map((pagination: Pagination) => pagination.data))
      )
    );
  }

  search_admin = (text$: Observable<string>): Observable<any[]> => {
    const searchSubject = new Subject<string>();

    // Trigger search on each input change
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        searchSubject.next(searchTerm);
        return searchSubject;
      })
    ).subscribe();

    return searchSubject.pipe(
      switchMap(searchTerm =>
        this.accountService.getAllAdmins(searchTerm).pipe(map((pagination: Pagination) => pagination.data))
      )
    );
  }

  resultFormatter(item: any) {
    return item.name
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // this.submitting = true;
    console.log(this.form.value)
    this.accountService.createTask({
      ...this.form.value,
      assigned_by_id: this.form.value.assigned_by_id?.id,
      assigned_to_id: this.form.value.assigned_to_id?.id,
    })
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Task Created successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error: string) => {
          this.alertService.error(error);
          this.submitting = false;
        }
      });
  }
}
