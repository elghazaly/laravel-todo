import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { MustMatch } from '@app/_helpers';

@Component({ templateUrl: 'create.component.html' })
export class CreateComponent implements OnInit {
  form!: FormGroup;
  submitting = false;
  submitted = false;
  deleting = false;
  admins!: any[];
  users!: any[];

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
    this.accountService.createTask(this.form.value)
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
