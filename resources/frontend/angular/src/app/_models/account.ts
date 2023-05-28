import { Role } from './role';

export class Account {
  id?: string;
  title?: string;
  name?: string;
  email?: string;
  role?: Role;
  access_token?: string;
}

export class Task {
  id?: number;
  title?: string;
  description?: string;
  assigned_by_id?: number;
  assigned_to_id?: number;
}

export class Statistics {
  id?: number;
  user_id?: string;
  user?: Account;
  task_count?: number;
}

export class Pagination {
  current_page!: number;
  data!: [];
  first_page_url!: string;
  from!: number;
  last_page!: number;
  last_page_url!: string;
  links?: {
    url?: string;
  };
  next_page_url!: string;
  path!: string;
  per_page!: string;
  prev_page_url!: string;
  to!: string;
  total!: number;
}
