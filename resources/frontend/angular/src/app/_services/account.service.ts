import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Account, Pagination, Statistics, Task } from '@app/_models';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class AccountService {
  private accountKey: string;
  private accountSubject: BehaviorSubject<Account | null>;
  public account: Observable<Account | null>;
  private taskSubject: BehaviorSubject<Task | null>;
  public task: Observable<Task | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.accountKey = 'angular-laravel-todo-account'
    this.accountSubject = new BehaviorSubject<Account | null>(JSON.parse(localStorage.getItem(this.accountKey)!) || []);
    this.account = this.accountSubject.asObservable();
    this.taskSubject = new BehaviorSubject<Task | null>(null);
    this.task = this.taskSubject.asObservable();
  }

  public get taskValue() {
    return this.taskSubject.value;
  }

  public get accountValue() {
    return this.accountSubject.value;
  }

  login(email: string, password: string, guard: string = 'admin') {
    return this.http.post<any>(`${baseUrl}/login`, { email, password, guard }, { withCredentials: true })
      .pipe(map(account => {
        localStorage.setItem(this.accountKey, JSON.stringify(account))
        this.accountSubject.next(account);
        this.startRefreshTokenTimer();
        return account;
      }));
  }

  logout() {
    this.http.post<any>(`${baseUrl}/logout/admin`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  refreshToken() {
    return this.http.post<any>(`${baseUrl}/refresh-token/admin`, {}, { withCredentials: true })
      .pipe(map((account) => {
        localStorage.setItem(this.accountKey, JSON.stringify(account))
        this.accountSubject.next(account);
        this.startRefreshTokenTimer();
        return account;
      }));
  }

  register(account: Account) {
    return this.http.post(`${baseUrl}/register`, account);
  }

  verifyEmail(token: string) {
    return this.http.post(`${baseUrl}/verify-email`, { token });
  }

  forgotPassword(email: string) {
    return this.http.post(`${baseUrl}/forgot-password`, { email });
  }

  validateResetToken(token: string) {
    return this.http.post(`${baseUrl}/validate-reset-token`, { token });
  }

  resetPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
  }

  getAllTasks(page = 1) {
    return this.http.get<Pagination>(`${baseUrl}/tasks?page=${page}`);
  }

  getAllAdmins(search: string = '', per_page = 10) {
    return this.http.get<Pagination>(`${baseUrl}/admins?search=${search}&per_page=${per_page}`);
  }

  getAllUsers(search: string = '', per_page = 10) {
    return this.http.get<Pagination>(`${baseUrl}/users?search=${search}&per_page=${per_page}`);
  }

  getStatistics() {
    return this.http.get<Statistics[]>(`${baseUrl}/statistics`);
  }

  getById(id: string) {
    return this.http.get<Account>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  createTask(params: any) {
    return this.http.post(`${baseUrl}/tasks`, params);
  }

  // helper methods

  private refreshTokenTimeout?: any;

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtBase64 = this.accountValue!.access_token!.split('.')[1];
    const jwtToken = JSON.parse(atob(jwtBase64));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
